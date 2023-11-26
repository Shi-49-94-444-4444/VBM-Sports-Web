import emailjs from 'emailjs-com';

export const sendOTP = async (email: string, otp: string) => {
    try {
        const serviceId = process.env.EMAILJS_SERVICE_ID!
        const templateId = process.env.EMAILJS_TEMPLATE_ID!
        const userId = process.env.EMAILJS_PUBLIC_KEY
        const gmail = process.env.GMAIL_ADDRESS

        const formData = {
            from_name: gmail,
            to: email,
            otp: otp,
        }

        const response = await emailjs.send(serviceId, templateId, formData, userId);

        if (response.status === 200) {
            return { success: true };
        } else {
            return { success: false, error: 'Gửi thất bại' };
        }
    } catch (error) {
        //console.error('Error sending email:', error);
        return { success: false, error: 'Gửi thất bại' };
    }
};
