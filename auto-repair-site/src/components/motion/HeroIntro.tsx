"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { motionTokens } from "@/lib/motion";

interface HeroIntroProps {
    children: ReactNode;
    className?: string;
}

export function HeroIntro({ children, className = "" }: HeroIntroProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: motionTokens.stagger.md,
                delayChildren: 0.1,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
}

export function HeroIntroItem({ children, className = "" }: { children: ReactNode; className?: string }) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const itemVariants = {
        hidden: { opacity: 0, y: motionTokens.distance.sm },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: motionTokens.duration.base,
                ease: motionTokens.ease.out
            }
        },
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
