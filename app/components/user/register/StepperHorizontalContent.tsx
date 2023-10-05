import { LocationStep, SkillStep, StylePlayStep, SuggestPlayerStep } from "./steps";
import { StepperControl, StepperHorizontal } from "../../providers";
import { PlayGround } from '@/types';
import { useForm } from 'react-hook-form';
import { GlobalContext } from '@/contexts';
import { useContext } from "react";
import { postPlaygroundService } from "@/services/step";

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
    const { setIsLoading, user, setUser } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()

    const onSubmitLocation = async () => {
        if (setIsLoading) setIsLoading(true);

        console.log("Submit Location Data");
    };

    const onSubmitSkill = async () => {
        if (setIsLoading) setIsLoading(true);

        console.log("Submit Skill Data");
    };

    const onSubmitStylePlay = async () => {
        if (setIsLoading) setIsLoading(true);

        console.log("Submit StylePlay Data");
    };

    const onSubmitSuggestPlayer = async () => {
        if (setIsLoading) setIsLoading(true);

        console.log("Submit SuggestPlayer Data");
    };

    const handleClick = (direction: string) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    };

    const getOnSubmitHandler = () => {
        switch (currentStep) {
            case 1:
                return onSubmitLocation;
            case 2:
                return onSubmitSkill;
            case 3:
                return onSubmitStylePlay;
            case 4:
                return onSubmitSuggestPlayer;
            default:
                return () => { };
        }
    };

    return (
        <form className="col-span-4 p-4 rounded-lg bg-white border-2 border-[#E7EBEE] w-full" onSubmit={handleSubmit(getOnSubmitHandler())}>
            <div className="mt-5 ">
                <StepperHorizontal steps={steps} currentStep={currentStep} />

                <div className="my-5 p-4 ">
                    {currentStep === 1 && <LocationStep />}
                    {currentStep === 2 && <SkillStep />}
                    {currentStep === 3 && <StylePlayStep />}
                    {currentStep === 4 && <SuggestPlayerStep />}
                </div>
            </div>

            {/* navigation button */}
            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
        </form>
    )
}

export default StepperHorizontalContent
