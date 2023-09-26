// middleware/authMiddleware.ts
import { NextApiRequest, NextApiResponse } from 'next';

export const requireAuth = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // Kiểm tra quyền truy cập ở đây và xử lý logic kiểm tra
    // Nếu không có quyền, bạn có thể trả về lỗi hoặc chuyển hướng đến trang khác.
    // Ví dụ: Nếu có req.user.role, bạn có thể kiểm tra req.user.role === 'admin'.
    await handler(req, res);
  };
};
