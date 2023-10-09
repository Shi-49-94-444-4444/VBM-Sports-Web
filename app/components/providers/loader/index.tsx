"use client";

import { PulseLoader, RingLoader } from "react-spinners";

interface LoadingProps {
    text?: string;
    color?: string;
    loading: boolean;
    size?: number;
    height?: string
}

export function Loading({ text, color, loading, size }: LoadingProps) {
    return (
        <span className="flex gap-1 items-center justify-center">
            {text}
            <PulseLoader
                color={color || "#204D94"}
                loading={loading}
                size={size || 10}
                data-testid="loader"
            />
        </span>
    );
}

export function LoadingFullScreen({ color, loading, size, height }: LoadingProps) {
    return (
        <div className={`relative flex ${height || "h-96"}  items-center justify-center`}>
            <RingLoader
                color={color || "#204D94"}
                loading={loading}
                size={size || 100}
                data-testid="loader"
            />
        </div>
    );
}