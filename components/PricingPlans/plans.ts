const plans = [
  {
    title: "Starter Plan",
    badge: "Basic",
    price: 19.99,
    features: [
      [true, "Access to basic tutorials"],
      [true, "10GB storage"],
      [false, "Priority email support"],
      [false, "Monthly webinars"],
      [false, "Advanced analytics"],

    ] as [boolean, string][],
    featured: false,
    href: "/pricing/basic"
  },
  {
    title: "Pro Plan",
    badge: "Popular",
    price: 29.99,
    features: [
      [true, "Access to all tutorials"],
      [true, "Priority email support"],
      [true, "50GB storage"],
      [true, "Advanced analytics"],
      [true, "Monthly webinars"]
    ] as [boolean, string][]
    ,
    featured: true,
    href: "/pricing/pro"

  },
  {
    title: "Enterprise Plan",
    badge: "Premium",
    price: 49.99,
    features: [
      [true, "Access to all tutorials"],
      [true, "Dedicated account manager"],
      [true, "Unlimited storage"],
      [true, "Advanced analytics"],
      [true, "Monthly webinars"],
      [true, "Custom solutions"]
    ] as [boolean, string][],
    featured: false,
    href: "/pricing/custom"

  }
]
export default plans;
