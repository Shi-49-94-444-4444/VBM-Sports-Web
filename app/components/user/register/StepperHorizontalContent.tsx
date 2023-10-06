"use client"

import { LocationStep, SkillStep, StylePlayStep, SuggestPlayerStep } from "./steps";
import { StepperControl, StepperHorizontal } from "../../providers";
import { useForm } from 'react-hook-form';
import { GlobalContext } from '@/contexts';
import { useContext, useEffect, useState } from "react";
import { postPlayLevelService, postPlayWayService, postPlaygroundService } from "@/services/step";
import { toast } from "react-toastify";
import { FormStep } from "@/types";
import { useRouter } from "next/router";

const StepperHorizontalContent = ({ }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const router = useRouter()

    const steps = [
        "Chọn khu vực của bạn",
        "Kỹ năng",
        "Lối chơi",
        "Gợi ý người chơi",
    ];

    const { setIsLoading, user, setUser } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm<FormStep>()

    const onSubmitLocation = async () => {
        if (setIsLoading) setIsLoading(true);

        const userData = JSON.parse(localStorage.getItem('user')!)

        if (JSON.stringify(userData.playingArea) === JSON.stringify(user?.playingArea)) {
            return
        }

        const res = await postPlaygroundService({ userID: user?.id!, grounds: user?.playingArea! })

        console.log("Playing Area: ", res)

        if (res.message) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            if (setUser) setUser({ playingArea: user?.playingArea })
            localStorage.setItem("user", JSON.stringify(user))

            console.log("After: ", user)

            if (setIsLoading) setIsLoading(false)
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
            if (setIsLoading) setIsLoading(false)
        }
    };

    const onSubmitSkill = async () => {
        if (setIsLoading) setIsLoading(true);

        const userData = JSON.parse(localStorage.getItem('user')!)

        if (JSON.stringify(userData.playingLevel) === JSON.stringify(user?.playingLevel)) {
            return
        }

        const res = await postPlayLevelService({ userID: user?.id!, levels: user?.playingLevel! })

        console.log("Playing Level: ", res)

        if (res.message) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            if (setUser) setUser({ playingLevel: user?.playingLevel })
            localStorage.setItem("user", JSON.stringify(user))

            console.log("After: ", user)

            if (setIsLoading) setIsLoading(false)
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
            if (setIsLoading) setIsLoading(false)
        }
    };

    const onSubmitStylePlay = async () => {
        if (setIsLoading) setIsLoading(true);

        const userData = JSON.parse(localStorage.getItem('user')!)

        if (JSON.stringify(userData.playingWay) === JSON.stringify(user?.playingWay)) {
            return
        }

        const res = await postPlayWayService({ userID: user?.id!, ways: user?.playingWay! })

        console.log("Playing Way: ", res)

        if (res.message) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            if (setUser) setUser({ playingWay: user?.playingWay })
            localStorage.setItem("user", JSON.stringify(user))

            console.log("After: ", user)

            if (setIsLoading) setIsLoading(false)
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
            if (setIsLoading) setIsLoading(false)
        }
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
                return () => { };
            case 2:
                return onSubmitLocation;
            case 3:
                return onSubmitSkill;
            case 4:
                return onSubmitStylePlay;
            default:
                return onSubmitSuggestPlayer;
        }
    };

    return (
        <form className="p-4 rounded-lg bg-white border-2 border-[#E7EBEE] w-full h-full" onSubmit={handleSubmit(getOnSubmitHandler())}>
            <div className="mt-5 ">
                <StepperHorizontal steps={steps} currentStep={currentStep} />

                <div className="my-5 p-4 max-h-full">
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
