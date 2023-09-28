// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET;

// Thay đổi thành logic xác thực của bạn
const fakeUser = {
  id: '1',
  email: 'user@example.com',
  hashedPassword: '$2a$10$9I57Tr1LsDDKjW.NkDTrZeP8R4KVtst4rLSR4dqqjhvwCfU8TWUGK', // bcrypt hash of 'password'
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { email, password } = req.body;

      // Tìm người dùng theo email (thay đổi thành logic xác thực của bạn)
      if (email !== fakeUser.email) {
        return res.status(401).json({ message: 'Đăng nhập thất bại' });
      }

      // Kiểm tra mật khẩu (sử dụng bcrypt)
      const isValidPassword = bcrypt.compareSync(password, fakeUser.hashedPassword);

      if (!isValidPassword) {
        return res.status(401).json({ message: 'Đăng nhập thất bại' });
      }

      // Tạo JWT token và trả về cho người dùng
      const token = jwt.sign({ id: fakeUser.id, email: fakeUser.email }, SECRET_KEY!);

      res.status(200).json({ message: 'Đăng nhập thành công', user: fakeUser, token });
    } catch (error) {
      res.status(500).json({ message: 'Đã xảy ra lỗi' });
    }
  } else {
    res.status(405).end();
  }
};

export default handler