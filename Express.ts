const express = require('express');
const cors = require('cors');
const app = express();

// Sử dụng middleware CORS để cho phép từ nguồn localhost
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Cho phép gửi cookie nếu cần thiết
}));

// ... Các tuyến đường và cài đặt khác của ứng dụng của bạn ...

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running');
});
