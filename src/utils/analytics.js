export function trackEvent(eventName, payload = {}) {
  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventPayload);
  } else {
    window.dataLayer = [eventPayload];
  }
}

export function initErrorMonitoring() {
  const reportError = (message, source = 'window') => {
    console.error('[monitoring]', source, message);
  };

  window.addEventListener('error', (event) => {
    reportError(event.message, 'runtime');
  });

  window.addEventListener('unhandledrejection', (event) => {
    reportError(event.reason, 'promise');
  });
}
