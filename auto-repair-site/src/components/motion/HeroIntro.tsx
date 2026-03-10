"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionTokens } from "@/lib/motion";

interface HeroIntroProps {
    children: ReactNode;
    className?: string;
    instant?: boolean;
}

export function HeroIntro({ children, className = "", instant = true }: HeroIntroProps) {

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
            animate={instant ? "visible" : undefined}
            whileInView={!instant ? "visible" : undefined}
            viewport={!instant ? motionTokens.viewport : undefined}
        >
            {children}
        </motion.div>
    );
}

export function HeroIntroItem({ children, className = "" }: { children: ReactNode; className?: string }) {

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
