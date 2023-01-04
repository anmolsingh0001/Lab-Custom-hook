import useStorage from "../hooks/useStorage"

const Home=()=>{
    let [userInput,updateInput]=useStorage("")



    return(
        <div className="Home">
            <input type="text" onChange={(e)=>updateInput(e.target.value)} value={userInput?userInput:""} placeholder="Type something" />
        </div>
    )
}

export default Home