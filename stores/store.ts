import { configureStore } from '@reduxjs/toolkit';
import favoriteFoodReducer from './favoriteFoodSlice';

const store = configureStore({
    reducer: {
        favoriteFood: favoriteFoodReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
