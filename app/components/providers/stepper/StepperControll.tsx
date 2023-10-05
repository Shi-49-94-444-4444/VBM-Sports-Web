"use client"

import { useRouter } from "next/router";

export default function StepperControl({
    handleClick, currentStep, steps
}: {
    handleClick: (action: string) => void, currentStep: number, steps: string[]
}): JSX.Element {
    const router = useRouter()

    const handleComplete = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push("/");
    };

    return (
        <div className="container mt-4 mb-8 flex justify-end gap-5">
            {currentStep > 1 && (
                <button
                    onClick={() => handleClick("back")}
                    className={`
                        cursor-pointer 
                        rounded-lg 
                        border-2 
                        border-slate-300 
                        bg-white 
                        py-3 
                        px-10 
                        font-semibold 
                        text-primary-blue-cus 
                        transition-all 
                        duration-500 
                        ease-in-out 
                        hover:bg-slate-700 
                        hover:text-white
                    `}
                    type="button"
                >
                    Quay Lại
                </button>
            )}

            {currentStep < steps.length ? (
                <button
                    onClick={() => handleClick("next")}
                    className="
                        cursor-pointer 
                        rounded-lg
                        border-2 
                        bg-primary-blue-cus 
                        py-3 
                        px-10 
                        font-semibold 
                        text-white 
                        transition-all 
                        duration-500 
                        ease-in-out 
                        hover:bg-orange-500 
                        hover:text-white
                    "
                    type="submit"
                >
                    Tiếp tục
                </button>
            ) : (
                <button
                    onClick={handleComplete}
                    className="
                        cursor-pointer 
                        rounded-lg
                        border-2 
                        bg-primary-blue-cus 
                        py-3 
                        px-10 
                        font-semibold 
                        text-white 
                        transition-all 
                        duration-500 
                        ease-in-out 
                        hover:bg-orange-500 
                        hover:text-white
                    "
                    type="submit"
                >
                    Hoàn Thành
                </button>
            )}
        </div>
    );
}
