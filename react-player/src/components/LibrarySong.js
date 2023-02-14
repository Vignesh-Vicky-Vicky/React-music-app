import React from "react";

const LibrarySong = ({setsongs, isPlaying, audioRef, songs, song, setCurrentSong }) => {

    const songselectHandler = async () => {
        await setCurrentSong(song);
        // Add active state
        const newSongs = songs.map((state) => {
            if (state.id === song.id) {
                return({
                    ...state, active: true,
                })
            } else {
                return ({
                    ...state, active: false,
                })
            }
        })
        setsongs(newSongs);
        if(isPlaying) audioRef.current.play();
    }

    return (
        <div className={`library-song ${song.active ? "selected" : ""}`} onClick={songselectHandler}>
            <img src={song.cover} alt={song.name} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;
