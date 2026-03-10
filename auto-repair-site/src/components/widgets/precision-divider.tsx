import * as React from "react";
import { LineDraw } from "@/components/motion/LineDraw";

interface PrecisionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
    instant?: boolean;
}

export function PrecisionDivider({
    className = "",
    width = "w-20",
    instant = false,
}: PrecisionDividerProps) {
    return (
        <LineDraw className={className} width={width} instant={instant} />
    );
}
