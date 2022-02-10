import React from 'react';
import './index.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers";
import Song from "./song";
import {SongInterface} from "../../interfaces";

function Songs() {

    const songsArray: any = useSelector((state: RootState) => state.songsArray);

    return (
        <div className="songs">
            <div className="songs-header">
                <div className="songs-header__id">ID</div>
                <div className="songs-header__title">Песня</div>
            </div>
            <div className="songs-list">
                {songsArray.map((item: SongInterface, index: number) => <Song key={index} {...item} index={index}/>)}
            </div>
        </div>
    );
}

export default Songs;
