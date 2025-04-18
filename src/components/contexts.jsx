import { createContext, useState } from "react";

export const SrcContext = createContext({
    src: "",
    setCurrentTime: () => {}
})

export const SrcContextProvider = ({ children }) => {
    const [src, setCurrentTime] = useState("");
    return (<>
     <SrcContext.Provider value={{src, setCurrentTime}}>
        {children}
     </SrcContext.Provider>
    </>)
} 

export const TimeContext = createContext({
    time: 0,
    setTime: () => {}
})

export const TimeContextProvider = ({children}) => {
    const [time, setTime] = useState(0)
    return (
        <TimeContext.Provider value={{time, setTime}}>
            {children}
        </TimeContext.Provider>
    )
}

export const NameContext = createContext({
    name: "",
    setName: () => {}
})

export const NameContextProvider = ({children}) => {
    const [name, setName] = useState("")
    return (
        <NameContext.Provider value={{name, setName}}>
            {children}
        </NameContext.Provider>
    )
}