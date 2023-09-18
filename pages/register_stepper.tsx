import { ClientOnly, Container, StepperHorizontalContent, StepperVertical, StepperVerticalContent } from "@/app/components"
import { useState } from "react";

const RegisterStepper = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps = [
        "Chọn khu vực của bạn",
        "Kỹ năng",
        "Lối chơi",
        "Gợi ý người chơi",
    ];

    return (
        <ClientOnly>
            <div className="relative bg-[#F8FAFC] h-screen">
                <Container>
                    <div className="flex justify-center items-center py-10">
                        <div className="grid grid-cols-4 gap-5 w-full">
                            <StepperVerticalContent steps={steps} currentStep={currentStep} />
                            <StepperHorizontalContent steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
                        </div>
                    </div>
                </Container>
            </div>
        </ClientOnly>
    )
}

export default RegisterStepper