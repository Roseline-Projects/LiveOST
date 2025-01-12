import React from "react";
import { useState } from "react";

const PlaylistInterface = () => {

    let playlistName = 'p1'
    const playlist = {
        'p1': [
            {
                name: 'song1',
                attr: ['morning', 'day' , 'calm'],
                link: 'https://www.youtube.com/watch?v=jfKfPfyJRdk'
            },
            {
                name: 'song2',
                attr: ['afternoon', 'day' , 'calm'],
                link: 'https://www.youtube.com/watch?v=jfKfPfyJRdk'
            },
            {
                name: 'song3',
                attr: ['night', 'day' , 'calm'],
                link: 'https://www.youtube.com/watch?v=jfKfPfyJRdk'
            },
        ],
    }

    return(
        <div className="my-20 flex flex-col">
            <h1 className="text-xl font-bold mb-8 w-fit mx-auto">{playlistName}</h1>
            <button className="bg-gray-200 px-10 py-2 w-fit mx-auto rounded-2xl">Add Song</button>
            <div className="my-6 max-h-96 overflow-y-scroll">
                {
                    playlist && Object.entries(playlist[playlistName]).map((song, index) => (
                        <li className="list-none bg-gray-400 my-4 w-3/4 mx-auto rounded-3xl p-6" key={index}>
                            <h4>{song[1].name}</h4>
                            <p><a href={song[1].link}>Link</a></p>
                            <ul className="flex items-center justify-center">
                                {song[1].attr.map((att, index) => (<li className="px-4" key={index}>{att}</li>))}
                            </ul>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}

export default PlaylistInterface