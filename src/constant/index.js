export const NavItems = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Features",
    link: "#features",
  },
  {
    title: "Pricing",
    link: "#pricing",
  },
  {
    title: "Dropdown",
    drpdnItems: [
      {
        title: "Dropdown 1",
      },
      {
        title: "Deep Dropdown",
        drpdnItems1: [
          {
            title: "Dropdown 1",
          },
          {
            title: "Dropdown 2",
          },
          {
            title: "Dropdown 3",
          },
          {
            title: "Dropdown 4",
          },
          {
            title: "Dropdown 5",
          },
        ],
      },
      {
        title: "Dropdown 2",
      },
      {
        title: "Dropdown 3",
      },
      {
        title: "Dropdown 4",
      },
    ],
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

export const srvCards = [
  {
    title: "Health Monitoring",
    disc: "Track vital signs and wellness data in real-time to support healthier lifestyle decisions and early diagnosis.",
  },
  {
    title: "Wireless Connectivity",
    disc: "Seamlessly connect devices and systems through reliable wireless solutions that keep you always connected.",
  },
  {
    title: "Smart Dashboard",
    disc: "Visualize and manage your workflows with interactive dashboards tailored to improve productivity and insight.",
  },
  {
    title: "Network Architecture",
    disc: "Design and implement efficient, scalable network structures to support secure and high-performance operations.",
  },
  {
    title: "Event Scheduling",
    disc: "Plan and manage your events effortlessly with our intuitive scheduling tools and calendar integration.",
  },
  {
    title: "Real-Time Communication",
    disc: "Enhance collaboration through fast and secure messaging solutions for teams and customers alike.",
  },
];

export const fchrCards = [
  {
    title: "Blazing Fast Speed",
  },
  {
    title: "Modern UI Design",
  },
  {
    title: "Responsive Layouts",
  },
  {
    title: "Top-Notch Security",
  },
  {
    title: "Easy Customization",
  },
  {
    title: "24/7 Support",
  },
];

export const priceItems = [
  {
    title: "Free Plan",
    price: 0,
    features: [
      "Basic support",
      "Access to core features",
      "Standard customization",
      "Team collaboration tools",
      "Priority updates",
    ],
    availableFeatures: [true, true, true, false, false],
    buttonText: "Get Started",
    highlighted: false,
    color: "#20c997",
  },
  {
    title: "Starter Plan",
    price: 19,
    features: [
      "Basic support",
      "Access to core features",
      "Standard customization",
      "Team collaboration tools",
      "Priority updates",
    ],
    availableFeatures: [true, true, true, true, false],
    buttonText: "Buy Now",
    highlighted: true,
    label: "Featured",
    color: "#0dcaf0",
  },
  {
    title: "Business Plan",
    price: 29,
    features: [
      "Basic support",
      "Access to core features",
      "Standard customization",
      "Team collaboration tools",
      "Priority updates",
    ],
    availableFeatures: [true, true, true, true, true],
    buttonText: "Buy Now",
    highlighted: false,
    color: "#fd7e14",
  },
  {
    title: "Ultimate Plan",
    price: 49,
    features: [
      "Basic support",
      "Access to core features",
      "Standard customization",
      "Team collaboration tools",
      "Priority updates",
    ],
    availableFeatures: [true, true, true, true, true],
    buttonText: "Buy Now",
    highlighted: false,
    color: "#0d6efd",
  },
];

export const accordionItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, PayPal, and Apple Pay.",
  },
  {
    question: "Can I update my account information?",
    answer:
      "Yes, you can update your name, email, and password from your account settings.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, you can download our app on both iOS and Android devices.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are delivered within 3–5 business days, depending on your location.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes, refunds are issued within 5–7 business days after we receive your return.",
  },
];
