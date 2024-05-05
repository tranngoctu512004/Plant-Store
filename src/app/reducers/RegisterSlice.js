import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const registerAccount = createAsyncThunk('user/register', async data => {
    const response = await fetch(
        'http://172.20.10.4:3000/register',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        },
    );
    if (!response.ok) {
        throw new Error('Failed');
    }
    return await response.json();
});

export const registerSlice = createSlice({
    name: 'register',
    initialState: {
        registerData: {},
        registerStatus: 'idle',
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(registerAccount.pending, (state, action) => {
                state.registerStatus = 'loading';
            })
            .addCase(registerAccount.fulfilled, (state, action) => {
                state.registerStatus = 'succeeded';
                state.registerData = action.payload;
            })
            .addCase(registerAccount.rejected, (state, action) => {
                state.registerStatus = 'failed';
                console.log(action.error.message);
            });
    },
});

export default registerSlice.reducer;
