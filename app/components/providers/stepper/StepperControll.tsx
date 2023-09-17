import { useRouter } from "next/router";

export default function StepperControl({
    handleClick, currentStep, steps
}: {
    handleClick: (action: string) => void, currentStep: number, steps: string[]
}): JSX.Element {
    const router = useRouter()

    const handleComplete = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
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
                        text-navbar-cus 
                        transition 
                        duration-200 
                        ease-in-out 
                        hover:bg-slate-700 
                        hover:text-white
                    `}
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
                        bg-navbar-cus 
                        py-3 
                        px-10 
                        font-semibold 
                        text-white 
                        transition 
                        duration-200 
                        ease-in-out 
                        hover:bg-orange-500 
                        hover:text-white"
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
                        bg-navbar-cus 
                        py-3 
                        px-10 
                        font-semibold 
                        text-white 
                        transition 
                        duration-200 
                        ease-in-out 
                        hover:bg-orange-500 
                        hover:text-white"
                >
                    Hoàn Thành
                </button>
            )}
        </div>
    );
}
