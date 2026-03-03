"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
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

    const yOffset = direction === "up" ? motionTokens.distance.sm : direction === "down" ? -motionTokens.distance.sm : 0;
    const xOffset = direction === "left" ? motionTokens.distance.sm : direction === "right" ? -motionTokens.distance.sm : 0;

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: motionTokens.viewport.once, amount: motionTokens.viewport.amount }}
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
