import { motion } from "motion/react"


export const songPlaySvg = (                <motion.svg
    height="800px"
    width="800px"
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 294.843 294.843"
    xmlSpace="preserve"
    initial={{scale: 1}}
    whileHover={{scale: 1.1}}
  >
    <g>
      <path
        d="M278.527,79.946c-10.324-20.023-25.38-37.704-43.538-51.132c-2.665-1.97-6.421-1.407-8.392,1.257s-1.407,6.421,1.257,8.392
c16.687,12.34,30.521,28.586,40.008,46.983c9.94,19.277,14.98,40.128,14.98,61.976c0,74.671-60.75,135.421-135.421,135.421
S12,222.093,12,147.421S72.75,12,147.421,12c3.313,0,6-2.687,6-6s-2.687-6-6-6C66.133,0,0,66.133,0,147.421
s66.133,147.421,147.421,147.421s147.421-66.133,147.421-147.421C294.842,123.977,289.201,100.645,278.527,79.946z"
      />
      <path
        d="M109.699,78.969c-1.876,1.067-3.035,3.059-3.035,5.216v131.674c0,3.314,2.687,6,6,6s6-2.686,6-6V94.74l88.833,52.883
l-65.324,42.087c-2.785,1.795-3.589,5.508-1.794,8.293c1.796,2.786,5.508,3.59,8.294,1.794l73.465-47.333
c1.746-1.125,2.786-3.073,2.749-5.15c-0.037-2.077-1.145-3.987-2.93-5.05L115.733,79.029
C113.877,77.926,111.575,77.902,109.699,78.969z"
      />
    </g>
  </motion.svg>)


export const playerSongSvg = (<svg
  id="player-song-svg"  height="800px" width="800px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 60 60" xmlSpace="preserve">
<g>
 <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
   c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
   C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
 <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
</g>
</svg>)


export const previousSongSvg = (<svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 60 60" xmlSpace="preserve">
<g>
 <path d="M45.467,14.116c-0.326-0.174-0.723-0.15-1.031,0.058l-22,15C22.164,29.36,22,29.669,22,30s0.164,0.64,0.437,0.826l22,15
   C44.606,45.941,44.803,46,45,46c0.16,0,0.321-0.038,0.467-0.116C45.795,45.711,46,45.371,46,45V15
   C46,14.629,45.795,14.289,45.467,14.116z M44,43.107L24.775,30L44,16.893V43.107z"/>
 <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
 <path d="M13,46h7V14h-7V46z M15,16h3v28h-3V16z"/>
</g>
</svg>)

export const pauseSongSvg = (<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
  width="800px" height="800px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
<g>
 <line fill="none" strokeWidth="7" strokeMiterlimit="10" x1="25" y1="23" x2="25" y2="41"/>
 <line fill="none" strokeWidth="7" strokeMiterlimit="10" x1="38" y1="23" x2="38" y2="41"/>
 <path fill="none"  strokeWidth="2" strokeMiterlimit="10" d="M53.92,10.081
   c12.107,12.105,12.107,31.732,0,43.838c-12.106,12.108-31.734,12.108-43.839,0c-12.107-12.105-12.107-31.732,0-43.838
   C22.186-2.027,41.813-2.027,53.92,10.081z"/>
</g>
</svg>)

export const nextSongSvg = (<svg height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 60 60" xmlSpace="preserve">
<g transform="rotate(180 30 30)">
 <path d="M45.467,14.116c-0.326-0.174-0.723-0.15-1.031,0.058l-22,15C22.164,29.36,22,29.669,22,30s0.164,0.64,0.437,0.826l22,15
   C44.606,45.941,44.803,46,45,46c0.16,0,0.321-0.038,0.467-0.116C45.795,45.711,46,45.371,46,45V15
   C46,14.629,45.795,14.289,45.467,14.116z M44,43.107L24.775,30L44,16.893V43.107z"/>
 <path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
 <path d="M13,46h7V14h-7V46z M15,16h3v28h-3V16z"/>
</g>
</svg>)

export const shuffleSongSvg = (<svg width="800px" height="800px" viewBox="0 0 72 72" id="emoji" xmlns="http://www.w3.org/2000/svg">
  <g id="color"/>
  <g id="hair"/>
  <g id="skin"/>
  <g id="skin-shadow"/>
  <g id="line">
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M40.3774,40.4583l6.9093,6.9332c1.6139,1.6195,4.0955,2.5668,6.7244,2.5668h12.7749"/>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M5,21.9583h12.7749c2.6288,0,5.1104,0.9473,6.7244,2.5668l7.0229,7.0473"/>
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="4" d="M5,49.9583h12.7749c2.6288,0,5.1104-0.9473,6.7244-2.5668l22.7874-22.8664c1.6139-1.6195,4.0955-2.5668,6.7244-2.5668h12.7749"/>
    <line x1="66.7859" x2="58.6005" y1="21.9583" y2="13.7444" fill="none"  strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10" stroke-width="5"/>
    <line x1="58.6005" x2="66.7859" y1="30.1722" y2="21.9583" fill="none"  strokeLinecap="round" strokelinejoin="round" strokeMiterlimit="10" strokeWidth="5"/>
    <line x1="66.7859" x2="58.6005" y1="49.9583" y2="41.7444" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5"/>
    <line x1="58.6005" x2="66.7859" y1="58.1722" y2="49.9583" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="5"/>
  </g>
</svg>)