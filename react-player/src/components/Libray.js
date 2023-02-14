import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({libraryStatus, setsongs, isPlaying, audioRef, songs, setCurrentSong }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            songs={songs}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setsongs={setsongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
