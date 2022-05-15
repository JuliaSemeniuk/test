import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";
import { fetchCount } from "./quizAPI";

export interface BackendAnswer {
  id: string;
  audio: string;
  songTitle: string;
  description: string;
  image: string;
  name: string;
}

export interface AnswerItem extends BackendAnswer {
  isAnswered: boolean;
  isActive: boolean;
}

export interface BackendQuiz {
  data: BackendAnswer[];
  genre: string;
  id: string;
}

export interface QuizItem extends BackendQuiz {
  questionAudioUrl: string;
  isFinished: boolean;
  isCorrectAnswerSelected: boolean;
  correctAnswerId: string;
  data: AnswerItem[];
}
export interface QuizState {
  userName: string;
  quiz: QuizItem[];
  count: number;
}

const initialState: QuizState = {
  userName: "",
  quiz: [],
  count: 0,
};

export const incrementAsync = createAsyncThunk(
  "quiz/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setInitialData: (state, action) => {
      state.quiz = action.payload;
    },
    makeOptionSelected: (state, action) => {
      state.quiz.forEach((quiz) => {
        quiz.data.forEach((song) => {
          if (song.id === action.payload) {
            song.isAnswered = true;
          }
        });
      });
    },
  },
});

export const { setInitialData, makeOptionSelected } = quizSlice.actions;

export default quizSlice.reducer;
