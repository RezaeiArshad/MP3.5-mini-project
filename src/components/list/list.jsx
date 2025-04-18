import { StrictMode, useContext } from "react"
import "../../files.css/list.css"
import { NameContext } from "../contexts"
import {motion} from "motion/react"
import { songPlaySvg } from "../theSvg"


export const songs = [
    {
        index: 1,
        title: "2U Justin Bieber",
        link: "https://uupload.ir/view/david_guetta_feat._justin_bieber_-_2u_-_mp3_128_7dwr.mp3/",
        imgLink: "https://s6.uupload.ir/files/msg-10011895964-43_8awk.jpg",
        duration: "3:14",
    },
    {
        index: 2,
        title: "Force Alan Walker",
        link: "https://uupload.ir/view/01._alan_walker_-_force_(original_mix)_874m.mp3/",
        imgLink: "https://s6.uupload.ir/files/msg-10011895964-44_sl31.jpg",
        duration: "4:00",
    },
    {
        index: 3,
        title: "Forever Labrinth",
        link: "https://uupload.ir/view/04_forever_cl62.mp3/",
        imgLink: "https://s6.uupload.ir/files/msg-10011895964-45_cevm.jpg",
        duration: "3:22",
    },
    {
        index: 4,
        title: "Believe Martin Garrix",
        link: "https://uupload.ir/view/05._hold_on_amp_believe_(ft._the_federal_empire)_m11y.mp3/",
        imgLink: "https://s6.uupload.ir/files/msg-10011895964-46_0ti5.jpg",
        duration: "3:52",
    },
    {
        index: 5,
        title: "In The Name Of Love",
        link: "https://uupload.ir/view/02.martin_garrix_amp_bebe_rexha_-_in_the_name_of_love_qbk5.mp3/",
        imgLink: "https://s6.uupload.ir/files/msg-10011895964-47_s82r.jpg",
        duration: "3:15",
    },
    {
        index: 6,
        title: "Like I Do",
        link: "https://uupload.ir/view/david_20guetta_20ft._20martin_20garrix_20_20brooks_20-_20li_wl0.mp3/",
        imgLink: "https://s6.uupload.ir/files/album_1737984210942_gd5g.png",
        duration: "3:22",
    },
    {
        index: 7, 
        title: "Lose Controle Meduza",
        link: "https://uupload.ir/view/meduza_becky_hill_goodboys_lose_control_urtn.mp3/",
        imgLink: "https://s6.uupload.ir/files/msg-10011895964-48_vzc.jpg",
        duration: "2:48",
    },
    {
        index: 8,
        title: "Silence Marshmello",
        link: "https://uupload.ir/view/silence_-_marshmello_ft_khalid_08k0.mp3/",
        imgLink: "https://s6.uupload.ir/files/msg-10011895964-49_ubsq.jpg",
        duration: "3:00",
    }
]

function List() {
    const {setName} = useContext(NameContext)

    return (
      <>
        <div id="song-container" className="col-10 offset-1">
          {songs.map((song) => (
            <div className="song" key={song.index}>
              <img loading="lazy" src={song.imgLink} alt={`An album image of ${song.title}`} />
              <h3>{song.title}</h3>
              <p>{song.duration}</p>
              <motion.div
                className="song-play-button"
                onClick={() => setName(song.title)}
                initial={{opacity: 0}}
                whileHover={{opacity: 1}}
                animate={{duration: 0.5}}
              >
              {songPlaySvg}
              </motion.div>
            </div>
          ))}
        </div>
      </>
    );
}

export default List