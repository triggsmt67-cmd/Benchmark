"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionTokens } from "@/lib/motion";

interface RevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    instant?: boolean;
}

export function Reveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    instant = false,
}: RevealProps) {


    const yOffset = direction === "up" ? motionTokens.distance.sm : direction === "down" ? -motionTokens.distance.sm : 0;
    const xOffset = direction === "left" ? motionTokens.distance.sm : direction === "right" ? -motionTokens.distance.sm : 0;

    const variants = {
        hidden: { opacity: 0, y: yOffset, x: xOffset },
        visible: { opacity: 1, y: 0, x: 0 }
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate={instant ? "visible" : undefined}
            whileInView={!instant ? "visible" : undefined}
            viewport={!instant ? motionTokens.viewport : undefined}
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
