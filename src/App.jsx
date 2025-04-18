import { TimeContext, TimeContextProvider } from './components/contexts'
import { SrcContext, SrcContextProvider } from './components/contexts'
import { NameContext, NameContextProvider } from './components/contexts'

import './files.css/App.css'
import List from './components/list/list'
import Player from './components/player/player'



function DashBoard() {
  return (
    <>
      <Player />
      <List />
      <audio id='audio'></audio>
    </>
  )
}

function App() {

  return (
    <> 
      <NameContextProvider>
        <SrcContextProvider>
          <TimeContextProvider>
            <DashBoard />
          </TimeContextProvider>        
        </SrcContextProvider>      
      </NameContextProvider>
    </>
  )
}

export default App
