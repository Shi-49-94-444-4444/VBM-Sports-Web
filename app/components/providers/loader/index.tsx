"use client";

import { PulseLoader } from "react-spinners";

interface LoadingProps {
    text?: string;
    color?: string;
    loading: boolean;
    size?: number;
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

export function LoadingFullScreen({ color, loading, size }: LoadingProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <PulseLoader
                color={color || "#204D94"}
                loading={loading}
                size={size || 60}
                data-testid="loader"
            />
        </div>
    );
}