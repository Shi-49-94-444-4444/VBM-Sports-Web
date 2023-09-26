import React, { useState } from "react";
import { Container, SettingBan, SettingNotify, SettingOverview, SettingProfile, SettingSecurity } from "@/app/components";
import Layout from "@/app/layout";
import { options } from "@/utils";

const Setting = () => {
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const displaySetting = () => {
        switch (selectedOption) {
            case 1:
                return <SettingProfile />;
            case 2:
                return <SettingSecurity />;
            case 3:
                return <SettingBan />;
            case 4:
                return <SettingNotify />;
            default:
                return null;
        }
    };

    return (
        <Layout>
            <Container>
                <div className="relative py-5">
                    <div className="grid grid-cols-8 h-full min-h-screen gap-5">
                        <div className="col-span-2 border-2 h-full border-[#E7EBEE] rounded-xl md:block hidden">
                            <SettingOverview
                                options={options}
                                selectedOption={selectedOption}
                                onOptionSelect={setSelectedOption}
                            />
                        </div>
                        <div className="md:col-span-6 col-span-8 border-2 h-full border-[#E7EBEE] rounded-xl">
                            {displaySetting()}
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Setting;
