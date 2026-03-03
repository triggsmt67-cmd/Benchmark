"use client";

import { motion, useReducedMotion } from "framer-motion";
import { motionTokens } from "@/lib/motion";

interface LineDrawProps {
    className?: string;
    width?: string;
    delay?: number;
}

export function LineDraw({
    className = "",
    width = "w-20",
    delay = 0.1
}: LineDrawProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return (
            <div className={`relative flex items-end h-[4px] ${className}`}>
                <div className={`h-[2px] bg-copper ${width} mb-[1px]`} />
                <div className="h-[4px] w-[2px] bg-copper/60 ml-[2px]" />
            </div>
        );
    }

    return (
        <div className={`relative flex items-end h-[4px] ${className}`}>
            <motion.div
                className={`h-[2px] bg-copper ${width} origin-left mb-[1px]`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: motionTokens.viewport.once, amount: motionTokens.viewport.amount }}
                transition={{
                    duration: motionTokens.duration.base,
                    ease: motionTokens.ease.out,
                    delay: delay
                }}
            />
            <motion.div
                className="h-[4px] w-[2px] bg-copper/60 ml-[2px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: motionTokens.viewport.once }}
                transition={{
                    duration: motionTokens.duration.fast,
                    delay: delay + motionTokens.duration.base
                }}
            />
        </div>
    );
}
