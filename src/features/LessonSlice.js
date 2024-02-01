// lessonSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { serializeLesson } from '../serializers/lessonSerializer'; // Проверьте путь к файлу сериализатора

export const fetchLessonData = createAsyncThunk(
    'lesson/fetchLessonData',
    async (lessonId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/lessons/${lessonId}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    loading: false,
    lessonData: {},
    error: null,
};

const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLessonData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchLessonData.fulfilled, (state, action) => {
                state.loading = false;
                state.lessonData = action.payload;
                state.error = null;
            })
            .addCase(fetchLessonData.rejected, (state, action) => {
                state.loading = false;
                state.lessonData = {};
                state.error = action.payload.error;
            });
    },
});

export const {  } = lessonSlice.actions;
export default lessonSlice.reducer;
