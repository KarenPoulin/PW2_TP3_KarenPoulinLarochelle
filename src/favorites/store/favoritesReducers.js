const reducers = {
    addFavorite: (state, action) => {
        state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
        state.favorites = state.favorites.filter(
            (favorite) => favorite.id !== action.payload.is
        );
    }
}

export default reducers;