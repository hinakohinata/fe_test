
// import  bookSlice  from './slices/bookSlice'
// import authorReducer from './author-reducer/authorSlide'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
// import authMiddleware from './middlewares/authMiddleware';
import accountSlice from './slices/accountSlice';
import accountStudentSlice from './slices/accountStudentSlice';
export const store = configureStore({
  reducer: {
    user:userSlice,
    accountState:accountSlice,
    accountStudentState:accountStudentSlice
  },
  // middleware: [authMiddleware] 
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;