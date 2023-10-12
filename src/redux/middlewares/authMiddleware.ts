// // import { Action, Store } from "@reduxjs/toolkit";
// import { createStore, Store } from "redux";
// import { NextAction } from "next/server/next";
// type Action = {
//   type: string;
//   payload?: any;
// };
// const authMiddleware = (store: Store, next: (action: NextAction) => void, action: Action) => {

//   const user = store.getState().user;

//   if (action.requiresRole && !user.roles.includes(action.requiresRole)) {
//     return;
//   }

//   console.log(user.roles);

//   return next(action);

// }

// export default authMiddleware;
