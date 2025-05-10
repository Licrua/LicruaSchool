function SubscriptionBenefits() {
  const benefits = [
    {
      emoji: '🚀',
      title: 'Boost Productivity',
      description: 'Advanced tools and automation help you work faster.',
    },
    {
      emoji: '📈',
      title: 'Access Insights',
      description: 'Detailed analytics and reports for smarter decisions.',
    },
    {
      emoji: '🛡️',
      title: 'Priority Support',
      description: 'Our support team is always available — skip the queue.',
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {benefits.map(({ emoji, title, description }) => (
          <div key={title}>
            <div className="text-4xl text-primary mb-2">{emoji}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-base-content/70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SubscriptionBenefits;
