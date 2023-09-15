
import { FormatUI, Input } from "@/app/components";
import { AiFillMail } from "react-icons/ai";

const login = () => {
    const bodyContent = (
        <>
            <Input
                icon = {<AiFillMail size={25}/>}
                label="Email"
                name="mail"
                placeholder="Nhập địa chỉ email"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
        </>
    )

    return (
        <FormatUI
            src="/images/background_3.png"
            title="Quên Mật Khẩu"
            body={bodyContent}
            titleButton="Đặt ngay"
        />
    );
};

export default login;
