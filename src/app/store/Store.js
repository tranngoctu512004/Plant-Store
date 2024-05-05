import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './../reducers/RegisterSlice';

export const store = configureStore({
    reducer: {
        register: registerReducer
    },
});
