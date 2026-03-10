"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { motionTokens } from "@/lib/motion";

interface StaggerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
    instant?: boolean;
}

export function Stagger({
    children,
    className = "",
    staggerDelay = motionTokens.stagger.md,
    instant = false,
}: StaggerProps) {
    const shouldReduceMotion = useReducedMotion();

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
            animate={instant ? "visible" : undefined}
            whileInView={!instant ? "visible" : undefined}
            viewport={!instant ? motionTokens.viewport : undefined}
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
