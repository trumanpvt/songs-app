import {TOGGLE_SONG_IS_FAV} from "../consts";

function reducer(state: any, action: { type: any; id: any; }) {
    switch(action.type) {
        case TOGGLE_SONG_IS_FAV:

            const songIndex = state.songsArray.findIndex((item: { id: any; }) => item.id === action.id);

            const newSongsArray = [...state.songsArray];

            newSongsArray[songIndex] = {
                ...newSongsArray[songIndex],
                is_fav: !newSongsArray[songIndex]['is_fav'],
            }

            return { songsArray: newSongsArray };

        default: return state;
    }
}

export default reducer;
export type RootState = ReturnType<typeof reducer>
