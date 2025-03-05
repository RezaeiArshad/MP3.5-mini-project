const playerAlbumImage = document.getElementById("album-image")
const playerAlbumName = document.getElementById("album-name");
const previousSongButton = document.getElementById("previous-song-button");
const playSongButton = document.getElementById("pause-song-button");
const nextSongButton = document.getElementById("next-song-button");
const shuffleSongButton = document.getElementById("shuffle-song-button");
const playlistFieldset = document.getElementById("playlist-fieldset");

const songs = [
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

const audio = new Audio();
let userData = {
    allSongs: [...songs],
    currentSong: null,
    songCurrentTime: 0,
};

const renderSongs = (arr = songs) => {
    playlistFieldset.innerHTML += arr.map(({ title, index, imgLink, duration }) => {
        return     `
    <div>
      <img src="${imgLink}" />
      <p>${title}</p>
      <p>${duration}</p>
      <button onclick="playSong(${index})">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="10 8 16 12 10 16 10 8"></polygon>
        </svg>
      </button>
    </div>
    `
    }
    ).join("");
}

const playSong = (str) => {
const selectedSongSrc = songs[str].link;
audio.src = selectedSongSrc;
console.log(selectedSongSrc)
audio.play()
}

renderSongs();