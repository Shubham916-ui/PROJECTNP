export const categories = [
    {
        id: 1,
        name: 'Agriculture',
        description: 'Mulch films, grow bags, and nursery bags for modern farming',
        icon: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="12" fill="url(#cat1)" />
                <path
                    d="M30 15V35M30 15C30 15 25 20 25 25C25 30 30 35 30 35M30 15C30 15 35 20 35 25C35 30 30 35 30 35M25 40H35M30 35V40"
                    stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="cat1" x1="0" y1="0" x2="60" y2="60">
                        <stop offset="0%" style={{ stopColor: '#10b981' }} />
                        <stop offset="100%" style={{ stopColor: '#059669' }} />
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        id: 2,
        name: 'Packaging',
        description: 'Shrink films, polythene bags, and clear LD pouches',
        icon: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="12" fill="url(#cat2)" />
                <path
                    d="M18 22L30 15L42 22M18 22V38L30 45M18 22L30 29M42 22V38L30 45M42 22L30 29M30 29V45"
                    stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="cat2" x1="0" y1="0" x2="60" y2="60">
                        <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                        <stop offset="100%" style={{ stopColor: '#2563eb' }} />
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        id: 3,
        name: 'Sanitation',
        description: 'Durable garbage bags for hygienic waste management',
        icon: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="12" fill="url(#cat3)" />
                <path d="M25 20H35L38 42H22L25 20Z" stroke="white" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 42H38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                <defs>
                    <linearGradient id="cat3" x1="0" y1="0" x2="60" y2="60">
                        <stop offset="0%" style={{ stopColor: '#14b8a6' }} />
                        <stop offset="100%" style={{ stopColor: '#0d9488' }} />
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        id: 4,
        name: 'Industrial',
        description: 'Black HDPE pipes for water supply and irrigation',
        icon: (
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <rect width="60" height="60" rx="12" fill="url(#cat4)" />
                <path d="M15 25H45M15 35H45M20 20V40M30 20V40M40 20V40" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <defs>
                    <linearGradient id="cat4" x1="0" y1="0" x2="60" y2="60">
                        <stop offset="0%" style={{ stopColor: '#6366f1' }} />
                        <stop offset="100%" style={{ stopColor: '#4f46e5' }} />
                    </linearGradient>
                </defs>
            </svg>
        )
    }
];
