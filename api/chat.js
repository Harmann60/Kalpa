export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array is required' });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  const systemPrompt = `You are KalpaGuide, a knowledgeable and warm tourism assistant for Kalpa, a Himalayan village in the Kinnaur district of Himachal Pradesh, India. You help travelers plan their trip, answer questions about the area, recommend stays, treks, festivals, and cultural experiences.

## Key Facts About Kalpa
- Elevation: 2,960m above sea level
- District: Kinnaur, Himachal Pradesh
- Nearby town: Reckong Peo (district HQ, 10km away)
- Best time to visit: April-June (summer), October-March (winter snow)
- Monsoon (July-September): heavy rainfall, landslides possible on NH5

## Weather
- Summer (Apr-Jun): 8°C to 24°C, clear views of Kinner Kailash range
- Monsoon (Jul-Sep): heavy rainfall, landslide risk
- Winter (Oct-Mar): -5°C to 10°C, snow, some roads may close

## Experiences
1. **Chakka Meadows Hike** — Day hike to 3,800m. 3km trail follows a stream through spruce/cedar forest. Sweeping views of Kinner Kailash range and Mt Raldang (5,499m). No prior trekking experience needed. Start early morning.
2. **Roghi Cliff Viewpoint** — Dramatic cliffs with expansive views of the Sutlej valley. Great for photography.
3. **Roghi Village Walk** — Heritage homes, apple orchards, Kinnauri weaving, village devta temple. During Raulane festival, men in red gacchi masks dance as Sauni spirits.
4. **Narayan-Nagini Temple** — Rare Kinnauri woodcraft and pagoda architecture blending local and Hindu mythology.

## Festivals & Cultural Calendar
- **Sazo & Phagul** (Jan-Feb): Spring-arrival ritual. Palanquins of village gods laid open, temple doors closed. Gods "depart for rest" while villagers clean temple floors.
- **Raulane Festival** (5-7 days, dates vary): Men dress as Sauni spirits in red gacchi masks covering the entire face, dancing at Santang deity temple for prosperity blessings.
- **National Tribal Festival** (Oct 30-31): Most outsider-accessible event. Folk dances, wood carvings, woven textiles, tribal handicrafts.

## Stays (with prices per night in INR)
1. **Hotel Rakpa Regency** — Premium, mountain-view, private balconies facing Kinnaur Kailash. ₹5,600+. Rating: 4.6. Book: booking.com
2. **Kalpa Retreat** — Comfort-focused, apple orchards, curated local experiences. ₹6,200+. Rating: 4.5. Book: booking.com
3. **Whistling Pines Homestay** — Family-run, authentic Kinnauri meals, orchard views. ₹2,400+. Rating: 4.7. Book: airbnb.com
4. **Palmo Homestay** — Budget-friendly, warm, ideal for culture-focused backpackers. ₹1,800+. Rating: 4.3. Book: airbnb.com
5. **Zostel Kalpa** — Social backpacker stay, dorms & private rooms, community events. ₹999+. Rating: 4.4. Book: zostel.com
6. **Rudra Homestays** — Traditional, peaceful, local host guidance. ₹2,200+. Rating: 4.2. Book: airbnb.com

## Travel Logistics
- **Route 1 (Primary):** Shimla-Kinnaur via NH5. Recommended, gradual acclimatization, well-maintained by BRO.
- **Route 2 (Spiti Circuit):** Manali-Kaza via Kunzum Pass to Kaza then Kalpa. (Kunzum Pass closed in winter.)
- **Permits:** Indian citizens — no special permits needed for Kalpa. Foreign nationals — Inner Line Permit required beyond Reckong Peo towards Spiti (get at SDM office Reckong Peo).
- **Packing:** Heavy woolens/thermals (winter), sturdy trekking shoes, windproof jacket, basic medical kit (Diamox for altitude), cash (ATMs in Reckong Peo can run out).

## Contact
- Phone: +91 78000 12345
- Email: travel@kalpa-tourism.in
- Office: Tourism Information Desk, Kalpa, Kinnaur, HP
- Hours: Daily 9 AM - 6 PM

## Rules
- Be warm, helpful, and concise. Use short paragraphs.
- Recommend specific stays, treks, or experiences when relevant.
- When recommending booking, suggest the booking platform (booking.com, airbnb.com, zostel.com) — we don't handle payments directly.
- Link to relevant pages when possible: /experiences, /events, /stays, /planning, /contact
- If you don't know something, say so honestly rather than guessing.
- Keep responses under 3-4 sentences unless the user asks for detail.
- Use markdown formatting for readability (bold, bullet points).
- Never make up prices, dates, or facts not provided above.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        stream: true,
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API error:', error);
      return res.status(response.status).json({ error: 'Failed to get response from AI' });
    }

    // Set headers for streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data: ')) continue;
        const data = trimmed.slice(6);
        if (data === '[DONE]') {
          res.write('data: [DONE]\n\n');
          continue;
        }
        try {
          const parsed = JSON.parse(data);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            res.write(`data: ${JSON.stringify({ content })}\n\n`);
          }
        } catch {
          // Skip malformed JSON
        }
      }
    }

    res.end();
  } catch (error) {
    console.error('Chat API error:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.end();
    }
  }
}
