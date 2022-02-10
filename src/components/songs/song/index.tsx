import React from 'react';

import {SongInterface} from "../../../interfaces";

import {useDispatch} from "react-redux";
import {switchSongIsFav} from "../../../store/actions";

import eyeIcon from '../../../assets/images/eye-icon.svg'

import './index.scss';

function Song({id, band, name, index = 0, is_fav = false}: SongInterface) {

    const dispatch = useDispatch();

    const songColor = index % 2 ? 'grey' : 'white';

    return (
        <div className={`song song_${songColor}`} onClick={() => dispatch(switchSongIsFav(id))}>
            <div className="song-main">
                <div className="song-main__id">
                    {id}
                </div>
                <div className="song-main__title">
                    {`${band} - ${name}`}
                </div>
            </div>
            {is_fav ?
                <img className="song__icon" src={eyeIcon} title={'В списке отслеживаемых'} alt={''}/>
                : null
            }
        </div>
    );
}

export default Song;
