import { NextApiRequest, NextApiResponse } from 'next';
import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Joi from "joi";

const SECRET_KEY = process.env.JWT_SECRET;

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).required(),
    password: Joi.string().min(6).required(),
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
            const { name, email, phone, password } = req.body;

            const { error } = schema.validate({ name, email, phone, password });

            if (error) {
                console.log(error);
                return res.json({
                    success: false,
                    message: error.details[0].message,
                });
            }

            const hashedPassword = await hash(password, 10);

            const token = sign({ email, name }, SECRET_KEY!, { expiresIn: '1h' });

            res.status(201).json({ message: 'Đăng ký thành công!' });
        } catch (error) {
            res.status(500).json({ error: 'Đã xảy ra lỗi khi đăng ký.' });
        }
    } else {
        res.status(405).json({ error: 'Phương thức không được hỗ trợ.' });
    }
};

export default handler;
