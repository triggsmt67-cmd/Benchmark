import * as React from "react";

interface CornerNotchProps extends React.HTMLAttributes<SVGSVGElement> {
    position?: "top-left" | "top-right";
}

export function CornerNotch({
    position = "top-left",
    className = "",
    ...props
}: CornerNotchProps) {
    const positionClasses = position === "top-left" ? "top-0 left-0" : "top-0 right-0 scale-x-[-1]";

    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute ${positionClasses} pointer-events-none text-navy-900/10 ${className}`}
            aria-hidden="true"
            {...props}
        >
            <path d="M0 0H16V1H1V16H0V0Z" fill="currentColor" />
        </svg>
    );
}
