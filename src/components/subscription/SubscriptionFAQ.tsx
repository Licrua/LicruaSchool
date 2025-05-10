function SubscriptionFAQ() {
  return (
    <section className="py-16 bg-base-200">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        <details className="collapse collapse-arrow bg-base-100">
          <summary className="collapse-title font-medium">
            Can I cancel anytime?
          </summary>
          <div className="collapse-content">
            <p>
              Yes! You can cancel or change your plan anytime in your settings.
            </p>
          </div>
        </details>
        <details className="collapse collapse-arrow bg-base-100">
          <summary className="collapse-title font-medium">
            Do you offer refunds?
          </summary>
          <div className="collapse-content">
            <p>We offer a 7-day money-back guarantee for new subscriptions.</p>
          </div>
        </details>
      </div>
    </section>
  );
}

export default SubscriptionFAQ;
