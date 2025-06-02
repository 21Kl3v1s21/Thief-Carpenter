export const tiers = [
  {
    name: 'Silver',
    price: '$199',
    color: '#c0c0c0',
    textColor: 'text-gray-200',
    borderColor: 'border-gray-400',
    hoverColor: '#c0c0c0',
    spotlightColor: [156, 163, 175],
    description: 'Basic custom carpentry package with up to 10 hours of service. Ideal for small enhancements and simple projects.',
    features: [
      'Basic Custom Carpentry',
      'Up to 10 hours of work',
      'Email support',
    ],
    image: '/images/silver-tier.jpg',
  },
  {
    name: 'Gold',
    price: '$399',
    color: '#facc15',
    textColor: 'text-yellow-300',
    borderColor: 'border-yellow-500',
    hoverColor: '#facc15',
    spotlightColor: [234, 179, 8],
    description: 'Our most popular tier for mid-size renovations. Includes scheduling priority and extended services.',
    features: [
      'Premium Carpentry Projects',
      'Priority scheduling',
      'Phone & email support',
    ],
    image: '/images/gold-tier.jpg',
  },
  {
  name: 'Diamond',
  price: 'Custom',
  color: '#a2d2ff', // Lighter, icier blue
  textColor: 'text-blue-200',
  borderColor: 'border-blue-300',
  hoverColor: '#a2d2ff', // Match with new base color
  spotlightColor: [162, 210, 255], // RGB for #a2d2ff
  description:
    'Full custom solutions tailored to your space. On-site consultation, high-end materials, and ongoing support.',
  features: [
    'High-End Custom Builds',
    'On-site Consultation',
    'Full-service & ongoing support',
  ],
  image: '/images/diamond-tier.jpg',
}
]
