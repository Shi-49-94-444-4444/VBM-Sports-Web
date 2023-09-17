import React, { useState, useEffect, useRef } from "react";

interface Step {
    description: string;
    completed: boolean;
    highlighted: boolean;
    selected: boolean;
}

interface StepperHorizontalProps {
    steps: string[];
    currentStep: number;
}

const StepperHorizontal: React.FC<StepperHorizontalProps> = ({
    steps,
    currentStep,
}) => {
    const [newStep, setNewStep] = useState<Step[]>([]);
    const stepsRef = useRef<Step[]>([]);

    const updateStep = (stepNumber: number, steps: Step[]): Step[] => {
        const newSteps = [...steps];
        console.log(newSteps);
        let count = 0;
        while (count < newSteps.length) {
            //current step
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: false,
                };
                count++;
            }

            //step completed
            else if (count < stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: true,
                };
                count++;
            }
            //step pending
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false,
                };
                count++;
            }
        }

        return newSteps;
    };

    useEffect(() => {
        const stepsState: Step[] = steps.map((step, index) => ({
            description: step,
            completed: false,
            highlighted: index === 0 ? true : false,
            selected: index === 0 ? true : false,
        }));

        stepsRef.current = stepsState;
        const current = updateStep(currentStep - 1, stepsRef.current);
        setNewStep(current);
    }, [steps, currentStep]);

    const stepsDisplay = newStep.map((step, index) => {
        return (
            <div
                key={index}
                className={
                    index !== newStep.length - 1
                        ? "flex items-center gap-4"
                        : "flex items-center gap-4"
                }
            >
                <div className="
                        relative 
                        flex 
                        flex-row
                        items-center 
                        gap-2
                    "
                >
                    <div
                        className={`
                            flex-shrink-0
                            rounded-full 
                            transition 
                            duration-500 
                            ease-in-out 
                            border-2
                            border-gray-300 
                            bg-gray-400
                            text-white
                            h-12 
                            w-12 
                            flex 
                            items-center 
                            justify-center 
                            text-2xl
                            py-3  
                            ${step.selected
                                ? "!bg-navbar-cus text-white font-bold border border-navbar-cus "
                                : ""
                            }
                            ${step.completed
                                ? "!bg-green-600"
                                : ""
                            }
                        `}
                    >
                        {step.completed ? (
                            <span className="text-white font-bold text-2xl">&#10003;</span>
                        ) : (
                            index + 1
                        )}
                    </div>
                    <div
                        className={`
                            text-center 
                            text-base 
                            font-semibold 
                            w-auto
                            ${step.highlighted
                                ? "text-gray-900"
                                : "text-gray-400"
                            }`}
                    >
                        {step.description}
                    </div>
                </div>
                {index !== newStep.length - 1 && (
                    <div className={`
                            w-10
                            border-t-2
                            transition
                            duration-500
                            ease-in-out
                            ${step.completed
                                ? "border-green-600"
                                : "border-gray-300"
                            }
                        `}
                    />
                )}
            </div>
        );
    });

    return (
        <div className="p-4 flex justify-between items-center">
            {stepsDisplay}
        </div>
    );
};

export default StepperHorizontal;