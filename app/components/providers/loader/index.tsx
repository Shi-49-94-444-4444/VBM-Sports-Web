"use client";

import { PulseLoader, RingLoader, FadeLoader } from "react-spinners";

interface LoadingProps {
    color?: string;
    loading: boolean;
    size?: number;
    height?: string
}

export function Loading({ color, loading, size }: LoadingProps) {
    return (
        <span
            className="flex gap-1 items-center justify-center h-[1.75rem]"
        >
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

export function LoadingAction({ color, loading, size }: LoadingProps) {
    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${loading ? 'bg-black bg-opacity-50 z-[99999]' : ''}`}>
            <FadeLoader
                color={color || "#204D94"}
                loading={loading}
                height={size || 15}
                width={size || 5}
                data-testid="loader"
            />
        </div>
    );
}
