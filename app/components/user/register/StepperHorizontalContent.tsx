import { useState } from "react";
import { LocationStep, SkillStep, StylePlayStep, SuggestPlayerStep } from "./steps";
import { StepperControl, StepperHorizontal } from "../../providers";

interface StepperData {
    steps: string[];
    currentStep: number;
    setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepperHorizontalContent: React.FC<StepperData> = ({
    steps,
    currentStep,
    setCurrentStep
}) => {
    const displayStep = (step: number) => {
        switch (step) {
            case 1:
                return <LocationStep />;
            case 2:
                return <SkillStep />;
            case 3:
                return <StylePlayStep />;
            case 4:
                return <SuggestPlayerStep />;
            default:
        }
    };

    const handleClick = (direction: string) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    return (
        <div className="col-span-3 p-4 rounded-lg bg-white border-2 border-[#E7EBEE] w-full">
            <div className="mt-5 ">
                <StepperHorizontal steps={steps} currentStep={currentStep} />

                <div className="my-5 p-4 ">
                    {displayStep(currentStep)}
                </div>
            </div>

            {/* navigation button */}
            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
        </div>
    )
}

export default StepperHorizontalContent