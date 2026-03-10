"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
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
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHasMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // SSR, pre-hydration, or reduced motion: render fully visible immediately
    if (!hasMounted || shouldReduceMotion) {
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
            viewport={{ once: true, amount: 0.05, margin: "0px 0px 100px 0px" }}
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
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setHasMounted(true), 50);
        return () => clearTimeout(timer);
    }, []);

    // SSR, pre-hydration, or reduced motion: render fully visible immediately
    if (!hasMounted || shouldReduceMotion) {
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
