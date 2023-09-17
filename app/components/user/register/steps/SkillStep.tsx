import { useState } from 'react';

const SkillStep = () => {
    const skills = [
        'Lần đầu',
        'Mới chơi',
        'Có tài năng',
        'Chuyên gia',
        'Tuyển thủ',
    ];

    const [selectedSkills, setSelectedSkills] = useState<boolean[]>(skills.map(() => false));

    const handleSkillClick = (index: number) => {
        const updatedSkills = [...selectedSkills];

        if (updatedSkills[index]) {
            for (let i = index + 1; i < updatedSkills.length; i++) {
                updatedSkills[i] = false;
            }
        } else {
            for (let i = 0; i <= index; i++) {
                updatedSkills[i] = true;
            }
        }

        setSelectedSkills(updatedSkills);
    };

    return (
        <div className="relative w-full grid grid-cols-5 gap-5 h-80">
            {skills.map((skill, index) => (
                <div className="col-span-1 w-full" key={index}>
                    <div className="flex flex-col w-full gap-2">
                        <div className="relative">
                            <button
                                className={`w-full h-20 ${selectedSkills[index]
                                        ? 'bg-navbar-cus'
                                        : 'bg-[#F5F5F5]'
                                    }`}
                                onClick={() => handleSkillClick(index)}
                            />
                        </div>
                        <div className="text-xl font-semibold text-gray-600 text-center">
                            {skill}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillStep;
