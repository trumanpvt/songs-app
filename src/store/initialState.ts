import {SongInterface} from "../interfaces";

const initialState: {songsArray?: SongInterface[]} = {
    songsArray: [
        {
            id: 1,
            // band: 'Tool',
            // name: 'Fear Inoculum',
        },
        {
            id: 3,
            band: 'Tool',
            name: 'Pneuma',
        },
        {
            id: 9,
            band: 'Tool',
            name: 'Invincible',
        },
        {
            id: 2,
            band: 'Tool',
            name: 'Descending',
        },
        {
            id: 4,
            band: 'Tool',
            name: '7mpest',
        },
    ],
};

export default initialState;
