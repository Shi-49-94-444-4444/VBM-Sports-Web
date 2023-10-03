"usse client"

import {
    AdminLogout,
    AdminOverview,
    ClientOnly,
    NavAdmin,
    PostManagement,
    ReportManagement,
    RuleList,
    UserManagement,
    UserReportManagement
} from "@/app/components"
import { adminOptions } from "@/utils";
import { useState } from "react";

const Admin = () => {
    const [selectedOption, setSelectedOption] = useState<number>(1);

    const displayAdmin = () => {
        switch (selectedOption) {
            case 1:
                return <UserManagement />;
            case 2:
                return <PostManagement />;
            case 3:
                return <ReportManagement />;
            case 4:
                return <RuleList />;
            case 5:
                return <UserReportManagement />;
            default:
                return null;
        }
    };

    return (
        <ClientOnly>
            <div className="relative bg-[#F7F7F7]">
                <NavAdmin />
                <div className="relative grid grid-cols-5 gap-5 pt-10">
                    <div className="col-span-1 min-h-screen max-h-full flex flex-col gap-5">
                        <AdminOverview
                            options={adminOptions}
                            selectedOption={selectedOption}
                            onOptionSelect={setSelectedOption}
                        />
                        <AdminLogout />
                    </div>
                    <div className="col-span-4 min-h-screen max-h-full flex flex-col gap-5 border border-black border-opacity-10 bg-white rounded-xl">
                        {displayAdmin()}
                    </div>
                </div>
            </div>
        </ClientOnly>
    )
}

export default Admin