import React from "react";
import { useState } from "react";

const PlaylistSelect = () => {

    const[playlistsz, setPlaylists] = useState({}) //info stored in database
    //playlists saved as a dict
        //keys: playlist name
        //values: playlists songs and info

    const handleAddPlaylist = (e) => {
        
    }

    const playlists = {
        'p1': 'songs',
        'p2': 'songs2',
        'p3': 'songs3',
    }

    return(
        <div className="bg-gray-200 text-center my-8">
            <h1 className="text-xl font-bold mb-4">Playlists</h1>
            <div className="mb-4 max-h-60 overflow-y-scroll">
                {
                    Object.keys(playlists).length == 0 ? (
                        <p className="mb-8">No Playlists Yet! Add some!</p>

                    ) : Object.entries(playlists).map((playlist, index) => (
                        <li className="bg-gray-400 p-6 rounded-3xl list-none my-6 mx-auto w-3/4" key={index}>
                            <h4 className="font-bold">{playlist[0]}</h4>
                        </li>
                    ))
                }
            </div>
            <div>
                <button onClick={handleAddPlaylist} className="py-3 px-6 rounded-3xl bg-gray-400">Add Playlist</button>
            </div>
        </div>
    )
}

export default PlaylistSelect