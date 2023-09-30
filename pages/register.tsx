import { FormatUI, RegisterFooter, RegisterForm } from "@/app/components";

const Register = () => {
    return (
        <FormatUI
            src="/images/background_4.png"
            title="Đăng ký"
            body={<RegisterForm />}
            footer={<RegisterFooter />}
        />
    );
};

export default Register;