
import React, { useState, useEffect } from 'react';
// Hey Create data for 10 songs 

const songData = [
    {
        name: "Dil Bechara", author: "A.R. Rahman", duration: "4:02", genere: "Bollywood", album: "Dil Bechara"
    },
    {
        name: "Tum Hi Ho", author: "Arijit Singh", duration: "4:22", genere: "Bollywood", album: "Aashiqui 2"
    },
    {
        name: "Do Pal" , author: "Lata Mangeshkar, Sonu Nigam", duration: "4:06", genere: "Bollywood", album: "Veer-Zaara"
    },
    {
        name: "Tum Se Hi", author: "Mohit Chauhan", duration: "5:07", genere: "Bollywood", album: "Jab We Met"
    },
    {
        name: "Tum Mile", author: "Neeraj Shridhar", duration: "5:41", genere: "Bollywood", album: "Tum Mile"
    },
    {
        name: "One Love", author: "Blue", duration: "4:01", genere: "Pop", album: "One Love"
    }
]

const LiveSearch = () => {

    let [search, setSearch] = useState("");
    let [filteredSongs, setFilteredSongs] = useState("");
    

     useEffect(()=>{
        search &&
        setFilteredSongs(songData.filter((song)=> song.name.includes(search)==true))
     },[search])


    return(
        <div>
            <h1>Live Search</h1>
            <input type="text" placeholder="Search Song" 
                onChange={(event) => setSearch(event.target.value)}
            />
            <input type="text" placeholder="Author" />

            {/* <button onClick={findSongs}>Search</button> */}


            {
                filteredSongs &&(
                filteredSongs.map((song) => (
                    <p>{song.name}</p>
                ))
                )
            }
        </div>
    )
}

export default LiveSearch;