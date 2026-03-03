"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { motionTokens } from "@/lib/motion";

interface StaggerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function Stagger({
    children,
    className = "",
    staggerDelay = motionTokens.stagger.md
}: StaggerProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: motionTokens.viewport.once, amount: motionTokens.viewport.amount }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = "" }: StaggerItemProps) {
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
