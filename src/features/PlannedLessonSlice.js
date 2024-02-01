

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { serializePlannedLesson } from '../serializers/serializePlannedLesson';

export const fetchPlannedLessonData = createAsyncThunk(
    'plannedLesson/fetchPlannedLessonData',
    async (plannedLessonId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/plannedLessons/${plannedLessonId}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    loading: false,
    plannedLessonData: {},
    error: null,
};

const plannedLessonSlice = createSlice({
    name: 'plannedLesson',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlannedLessonData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPlannedLessonData.fulfilled, (state, action) => {
                state.loading = false;
                state.plannedLessonData = action.payload;
                state.error = null;
            })
            .addCase(fetchPlannedLessonData.rejected, (state, action) => {
                state.loading = false;
                state.plannedLessonData = {};
                state.error = action.payload.error;
            });
    },
});

export const {  } = plannedLessonSlice.actions;
export default plannedLessonSlice.reducer;
