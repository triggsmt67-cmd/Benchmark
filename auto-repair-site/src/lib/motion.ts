export const motionTokens = {
    duration: {
        fast: 0.3,
        base: 0.5,
        slow: 0.7,
    },
    ease: {
        out: "easeOut",
    },
    distance: {
        sm: 12,
        md: 16,
    },
    stagger: {
        sm: 0.08,
        md: 0.12,
    },
    viewport: {
        once: true,
        amount: "some" as const,
    },
} as const;
