import Accordion from './Accordion';
import useContentData from '../hooks/useContentData';

export default function FAQs() {
  const { data, isLoading, error } = useContentData('/data/site.json', {});
  const faqs = data?.faqs ?? [];

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container reveal">
        <h2 className="text-gradient">FAQs & Policies.</h2>
        <p className="subtitle">Essential booking and travel information before your trip.</p>
        {isLoading ? <p className="form-feedback">Loading FAQs...</p> : null}
        {error ? <p className="form-feedback form-feedback-error">{error}</p> : null}
        <div className="accordion-wrapper" style={{ marginTop: '2rem' }}>
          {faqs.map((item) => (
            <Accordion key={item.id} title={item.question}>
              <p>{item.answer}</p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
