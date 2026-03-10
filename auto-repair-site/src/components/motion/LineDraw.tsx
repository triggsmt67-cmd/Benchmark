"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
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
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHasMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // SSR, pre-hydration, or reduced motion: render fully visible immediately
    if (!hasMounted || shouldReduceMotion) {
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
                viewport={{ once: true, amount: 0.05 }}
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
                viewport={{ once: true }}
                transition={{
                    duration: motionTokens.duration.fast,
                    delay: delay + motionTokens.duration.base
                }}
            />
        </div>
    );
}
