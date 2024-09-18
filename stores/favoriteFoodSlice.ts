import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Food {
    id: string;
    content: string;
    date: string;
}

interface FavoriteFoodState {
    favoriteFoods: Food[];
}

const initialState: FavoriteFoodState = {
    favoriteFoods: [],
};

const favoriteFoodSlice = createSlice({
    name: 'favoriteFood',
    initialState,
    reducers: {
        addFavoriteFood: (state, action: PayloadAction<Food>) => {
            state.favoriteFoods.push(action.payload);
        },
        removeFavoriteFood: (state, action: PayloadAction<string>) => {
            state.favoriteFoods = state.favoriteFoods.filter(food => food.id !== action.payload);
        },
    },
});

export const { addFavoriteFood, removeFavoriteFood } = favoriteFoodSlice.actions;
export default favoriteFoodSlice.reducer;
