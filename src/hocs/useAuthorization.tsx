// 'use client'
// import { useAppSelector } from "@/redux/hook";
// import { useRouter } from "next/navigation"
// import { useEffect } from "react";
// // import { useSelector } from "react-redux";

// export function useAuthorization(role: any) {
//     const userRole = useAppSelector(state => state.user.userrole);
//     const router = useRouter();
//     useEffect(() => {
//       if (userRole !== role) {
//         router.push('/');
//       }
//     }, [userRole]);
//   }
  












// // // hoc/withAuthorization.tsx
// // import { useSelector } from 'react-redux';
// // import { useRouter } from 'next/router';

// // const withAuthorization = (WrappedComponent: React.ComponentType<any>, allowedRoles: string[]) => {
// //   return (props:any) => {
// //     const role = useSelector((state:any) => state.userrole);
// //     const router = useRouter();

// //     if (!allowedRoles.includes(role)) {
// //       // Không có quyền truy cập
// //       // Bạn có thể redirect người dùng về trang khác hoặc hiển thị thông báo
// //       router.push('/no-access');
// //       return null;
// //     }

// //     return <WrappedComponent {...props} />;
// //   };
// // };

// // export default withAuthorization;
