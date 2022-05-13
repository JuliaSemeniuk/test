import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import quizReducer from "../features/quiz/quizSlice";

//create a global store with Reducer func
export const store = configureStore({
  reducer: {
    quizData: quizReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
