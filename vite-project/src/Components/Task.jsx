import { useContext, useEffect, useState } from "react"
import { ToggleTheme } from "../App"


function Task(){

    const [state , setState] = useState(0)
    const [display , setDisplay] = useState(false)
    const [init, setInit] = useState(false)


    useEffect(()=>{
        setInit(true)
        if (init){
            alert("Content is been clicked")
        }
    } , [display])

    let handleClick = ()=>{
        setDisplay(!display)
    }
    
    const theme = useContext(ToggleTheme)
    const lightDarkMode = {
        backgroundColor : theme?"gray" : "black",
        color : theme?"black" : "gray",
        padding:"30px",
        width : "500px",
        margin : "20px"
    }

    return (
        <div style={lightDarkMode}>
            <div>
                {display && "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptatum cum in exercitationem pariatur vero nam expedita ut incidunt eligendi."} 
            </div>
            <button onClick={handleClick} style={{margin:"20px 0px"}}>Content</button>
            <div>
                {state}
            </div>
            <button onClick={()=>{setState(prev => prev + 1)}}>Like</button>
        </div>
    )
}

export default Task