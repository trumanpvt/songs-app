import {TOGGLE_SONG_IS_FAV} from "../consts";

export function switchSongIsFav(id: number) {
    return {
        type: TOGGLE_SONG_IS_FAV,
        id,
    };
}
