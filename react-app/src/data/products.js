export const products = [
    {
        id: 1,
        name: 'Black HDPE Pipes',
        badge: 'Popular',
        category: 'Industrial',
        image: '/photos/hdpe-pipes.png',
        description: 'Durable and corrosion-resistant pipes for water supply and irrigation systems.',
        features: [
            'Corrosion resistant',
            'Leak-proof joints',
            'UV stabilized',
            'Long service life',
            'Easy installation'
        ],
        applications: [
            'Water supply systems',
            'Irrigation networks',
            'Gas distribution',
            'Industrial applications'
        ]
    },
    {
        id: 2,
        name: 'Garbage Bags',
        badge: 'Best Seller',
        category: 'Sanitation',
        image: '/photos/garbage-bags.png',
        description: 'Strong, leak-proof bags for hygienic waste management in homes and businesses.',
        features: [
            'Tear-resistant',
            'Leak-proof design',
            'Multiple sizes available',
            'Eco-friendly options',
            'High load capacity'
        ],
        applications: [
            'Household waste',
            'Commercial waste',
            'Medical waste',
            'Industrial waste'
        ]
    },
    {
        id: 3,
        name: 'Shrink Films',
        badge: 'Versatile',
        category: 'Packaging',
        image: '/photos/shrink-films.png',
        description: 'High-quality shrink films for product packaging and bundling applications.',
        features: [
            'High clarity',
            'Excellent shrinkage',
            'Puncture resistant',
            'UV protection',
            'Food grade available'
        ],
        applications: [
            'Product packaging',
            'Bundling',
            'Pallet wrapping',
            'Food packaging'
        ]
    },
    {
        id: 4,
        name: 'Polythene Bags',
        badge: 'Customizable',
        category: 'Packaging',
        image: '/photos/polythene-bags.png',
        description: 'Versatile polythene bags in LD/HM/HD variants for various packaging needs.',
        features: [
            'Multiple density options',
            'Custom sizes',
            'Printed options available',
            'Food grade certified',
            'Cost-effective'
        ],
        applications: [
            'Retail packaging',
            'Food storage',
            'Industrial packing',
            'Agriculture'
        ]
    },
    {
        id: 5,
        name: 'LD Pouches',
        badge: 'Food Safe',
        category: 'Packaging',
        image: '/photos/ld-pouches.png',
        description: 'Clear LD pouches perfect for food packaging with excellent moisture resistance.',
        features: [
            'Crystal clear',
            'Food grade material',
            'Moisture resistant',
            'Heat sealable',
            'Hygienic packaging'
        ],
        applications: [
            'Food packaging',
            'Bakery items',
            'Snacks',
            'Frozen foods'
        ]
    },
    {
        id: 6,
        name: 'Mulch Films',
        badge: 'Eco-Friendly',
        category: 'Agriculture',
        image: '/photos/mulch-films.png',
        description: 'Agricultural films to retain moisture, control weeds, and improve crop yield.',
        features: [
            'UV stabilized',
            'Water retention',
            'Weed control',
            'Temperature regulation',
            'Extended durability'
        ],
        applications: [
            'Vegetable farming',
            'Floriculture',
            'Fruit cultivation',
            'Soil moisture retention'
        ]
    },
    {
        id: 7,
        name: 'Grow Bags',
        badge: 'Gardening',
        category: 'Agriculture',
        image: '/photos/grow-bags.png',
        description: 'Durable grow bags for plants with excellent drainage and root development.',
        features: [
            'UV resistant',
            'Drainage holes',
            'Multiple sizes',
            'Reusable',
            'Root-friendly design'
        ],
        applications: [
            'Home gardening',
            'Terrace farming',
            'Nurseries',
            'Organic farming'
        ]
    },
    {
        id: 8,
        name: 'Nursery Bags',
        badge: 'Professional',
        category: 'Agriculture',
        image: '/photos/nursery-bags.png',
        description: 'Specialized bags for seedlings and young plants in nurseries.',
        features: [
            'Eco-friendly material',
            'Multiple sizes',
            'Good drainage',
            'UV protection',
            'Cost-effective'
        ],
        applications: [
            'Plant nurseries',
            'Seedling growth',
            'Forestry',
            'Reforestation projects'
        ]
    },
    {
        id: 9,
        name: 'Disposable Cutlery',
        badge: 'Convenient',
        category: 'Consumer',
        image: '/photos/polythene-bags.png',
        description: 'Food-grade disposable plastic cutlery for events and daily use.',
        features: [
            'Food-grade plastic',
            'Durable design',
            'Lightweight',
            'Hygienic packaging',
            'Bulk available'
        ],
        applications: [
            'Events and parties',
            'Restaurants',
            'Takeaway services',
            'Catering'
        ]
    }
];

export const featuredProducts = products.filter(p =>
    ['Popular', 'Best Seller', 'Eco-Friendly'].includes(p.badge)
).slice(0, 3);
