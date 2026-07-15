# Kalpa Tourism Website (React + Vite)

A single-page tourism website for Kalpa with key travel flows:
- destination highlights and modal details
- event calendar
- stays/accommodations explorer
- travel planning form with validation and user feedback

## Stack
- React 19
- Vite 8
- ESLint 10

## Local setup
From the repository root:

```bash
npm ci
```

## Run in development
```bash
npm run dev
```

## Build for production
```bash
npm run build
```

## Lint
```bash
npm run lint
```

## Verify key flows
1. Open the app and confirm top navigation links scroll to sections.
2. In **Travel Logistics**, enter a departure city and search for Flights/Trains/HRTC.
3. Confirm validation appears for empty/short input and success feedback appears when a search opens.
4. Check responsive behavior on mobile/tablet/desktop:
   - section links remain usable
   - sub-navigation can be horizontally scrolled on small screens.
