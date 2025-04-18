import "../../files.css/player.css"
import { songs } from "../list/list"
import { NameContext } from "../contexts"
import { useContext, useEffect, useState } from "react"
import {motion, AnimatePresence} from "motion/react"
import { playerSongSvg,previousSongSvg, pauseSongSvg, nextSongSvg, shuffleSongSvg } from "../theSvg"


function Player() {
   const {name} = useContext(NameContext)
   const [theImage, setTheImage] = useState(null)

   useEffect(() => {
    let currentSong = songs.find((song) => song.title === name)
    setTheImage(currentSong?.imgLink)
   }, [name])

    return (
        <>
          <div id="player">
            <AnimatePresence mode="wait">
              <motion.img
              key={theImage}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.4}}
                alt={`an image of ${name}`} src={theImage} />              
            </AnimatePresence>
            <div id="button-div">
              {previousSongSvg}
              {playerSongSvg} 
              {pauseSongSvg}                       
              {nextSongSvg} 
              {shuffleSongSvg}           
            </div>
          </div>
        </>
    )
}

export default Player