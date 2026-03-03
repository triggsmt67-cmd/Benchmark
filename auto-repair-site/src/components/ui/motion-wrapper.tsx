"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MotionFadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    distance?: number;
    amount?: number | "some" | "all";
}

export function MotionFadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    distance = 12,
    amount = 0.2
}: MotionFadeInProps) {
    const shouldReduceMotion = useReducedMotion();

    const yOffset = direction === "up" ? distance : direction === "down" ? -distance : 0;
    const xOffset = direction === "left" ? distance : direction === "right" ? -distance : 0;

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: yOffset, x: xOffset }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function MotionStaggerGroup({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return <div className={className}>{children}</div>;
}
