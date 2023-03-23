import { CheckIcon } from "@heroicons/react/24/outline";

const pricing = {
  tiers: [
    {
      title: "Free Version",
      price: "Free",
      frequency: "/forever",
      description: "Basic anonymous features",
      features: [
        "Unlimited anonymous messages",
        "Unlimited number of channels",
        "Channel restrictions",
        "Unlimited team size",
        "No logs, no reports",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
    {
      title: "Plus Version",
      price: "$10",
      frequency: "/month",
      description: "Individual account",
      features: [
        "Everything from Free Version",
        "Respond to thread anonymously",
      ],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      title: "Team Version",
      price: "$99",
      frequency: "/month",
      description: "Team account",
      features: [
        "Everything from Plus Version",
        "Available for all members",
        "Black list: block some users",
        "White list: allow only some users",
      ],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div id="pricing" className="">
      {/* Header and Page Header */}
      <div className="mx-auto text-center">
        {/* Page Header */}
        <div className="mx-auto max-w-2xl py-16 px-6 lg:max-w-7xl lg:py-20 lg:px-8">
          <div className="">
            <h1 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl sm:leading-none lg:text-6xl">
              Pricing plans for teams of all sizes
            </h1>
            <p className="mt-6 max-w-2xl text-md md:text-xl mx-auto   text-center text-gray-500">
              Choose an affordable plan that's packed with the best features for
              engaging your audience, creating customer loyalty, and driving
              sales.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* Pricing Section */}
        <section className="" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="sr-only text-[#6366F1]">
            Pricing
          </h2>

          {/* Tiers */}
          <div className="mx-auto max-w-2xl space-y-12 px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:px-8 ">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.title}
                className={classNames(
                  tier.mostPopular
                    ? "relative flex flex-col border border-[#6366F1] rounded-2xl p-8 shadow-sm text-white "
                    : "relative flex flex-col rounded-2xl border border-gray-800 bg-[#111827] p-8 shadow-sm"
                )}>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-300">
                    {tier.title}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-[#6366F1] py-1.5 px-4 text-sm font-semibold text-white">
                      Most popular
                    </p>
                  ) : null}
                  <p className="mt-4 flex items-baseline text-gray-300">
                    <span className="text-5xl font-bold tracking-tight">
                      {tier.price}
                    </span>
                    <span className="ml-1 text-xl font-semibold">
                      {tier.frequency}
                    </span>
                  </p>
                  <p className="mt-6 text-gray-200 font-semibold">
                    {tier.description}
                  </p>

                  {/* Feature list */}
                  <ul role="list" className="mt-6 space-y-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex">
                        <CheckIcon
                          className="h-6 w-6 flex-shrink-0 text-[#6366F1]"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={classNames(
                    tier.mostPopular
                      ? "bg-[#6366F1] text-white hover:bg-[#6366F1]"
                      : "bg-[#29303D] text-gray-300 hover:bg-[#293035]",
                    "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
                  )}>
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
