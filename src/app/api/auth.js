// import { NextMiddleware } from "next";
  
  
// export default class AuthMiddleware extends NextMiddleware {
  
//   async middleware(req, res, next) {
//     // Lấy thông tin người dùng từ token
//     const user = await req.user();

//     // Kiểm tra quyền của người dùng
//     if (!user) {
//       res.status(401).send("Unauthorized");
//       return;
//     }

//     // Kiểm tra vai trò của người dùng
//     const role = user.roles[0];

//     // Nếu người dùng không có quyền truy cập
//     if (role !== "admin") {
//       res.status(403).send("Forbidden");
//       return;
//     }

//     // Tiếp tục xử lý yêu cầu
//     next();
//   }
// }