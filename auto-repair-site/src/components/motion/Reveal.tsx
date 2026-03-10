"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { motionTokens } from "@/lib/motion";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export function Reveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: RevealProps) {
    const shouldReduceMotion = useReducedMotion();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        // Small delay ensures React has fully hydrated before enabling animations
        const timer = setTimeout(() => setHasMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // SSR, pre-hydration, or reduced motion: render fully visible immediately
    if (!hasMounted || shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const yOffset = direction === "up" ? motionTokens.distance.sm : direction === "down" ? -motionTokens.distance.sm : 0;
    const xOffset = direction === "left" ? motionTokens.distance.sm : direction === "right" ? -motionTokens.distance.sm : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 100px 0px" }}
            transition={{
                duration: motionTokens.duration.base,
                ease: motionTokens.ease.out,
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
