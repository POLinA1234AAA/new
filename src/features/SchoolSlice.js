// schoolSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { serializeSchool } from '../serializers/serializeSchool';

export const fetchSchoolData = createAsyncThunk(
    'school/fetchSchoolData',
    async (schoolId, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/api/schools/${schoolId}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    loading: false,
    schoolData: {},
    error: null,
};

const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSchoolData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchSchoolData.fulfilled, (state, action) => {
                state.loading = false;
                state.schoolData = action.payload;
                state.error = null;
            })
            .addCase(fetchSchoolData.rejected, (state, action) => {
                state.loading = false;
                state.schoolData = {};
                state.error = action.payload.error;
            });
    },
});

export const {  } = schoolSlice.actions;
export default schoolSlice.reducer;
