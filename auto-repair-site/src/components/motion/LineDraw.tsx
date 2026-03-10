"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { motionTokens } from "@/lib/motion";

interface LineDrawProps {
    className?: string;
    width?: string;
    delay?: number;
    instant?: boolean;
}

export function LineDraw({
    className = "",
    width = "w-16",
    delay = 0,
    instant = false,
}: LineDrawProps) {
    const shouldReduceMotion = useReducedMotion();

    // SSR, pre-hydration, or reduced motion: render fully visible immediately
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
                animate={instant ? { scaleX: 1 } : undefined}
                whileInView={!instant ? { scaleX: 1 } : undefined}
                viewport={!instant ? { once: true, amount: 0.05 } : undefined}
                transition={{
                    duration: motionTokens.duration.base,
                    ease: motionTokens.ease.out,
                    delay: delay
                }}
            />
            <motion.div
                className="h-[4px] w-[2px] bg-copper/60 ml-[2px]"
                initial={{ opacity: 0 }}
                animate={instant ? { opacity: 1 } : undefined}
                whileInView={!instant ? { opacity: 1 } : undefined}
                viewport={!instant ? { once: true } : undefined}
                transition={{
                    duration: motionTokens.duration.fast,
                    delay: delay + motionTokens.duration.base
                }}
            />
        </div>
    );
}
