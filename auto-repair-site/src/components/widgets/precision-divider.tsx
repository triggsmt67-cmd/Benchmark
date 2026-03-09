import * as React from "react";
import { LineDraw } from "@/components/motion/LineDraw";

interface PrecisionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string;
}

export function PrecisionDivider({
    className = "",
    width = "w-20",
}: PrecisionDividerProps) {
    return (
        <LineDraw className={className} width={width} />
    );
}
