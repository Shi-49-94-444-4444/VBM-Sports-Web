import { FormatUI, LoginFooter, LoginForm, LoginSubBody } from "@/app/components";

const Login = () => {
    return (
        <FormatUI
            src="/images/background_2.png"
            title="Đăng nhập"
            body={<LoginForm />}
            subBody={<LoginSubBody />}
            footer={<LoginFooter />}
        />
    );
};

export default Login;
