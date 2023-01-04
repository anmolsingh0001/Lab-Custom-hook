const { useState, useEffect } = require("react")

let useStorage=()=>{

    let [data,setData]=useState(null)

    useEffect(()=>{
        setData(localStorage.getItem("memory"))
    },[])

    // useEffect(() => {
    //     localStorage.setItem("content", data);
    //     sessionStorage.setItem("content", data);
    // }, [data]);

    if(data!==null){
        localStorage.setItem("memory", data);
        sessionStorage.setItem("memory", data);
    }
    return [data,setData]
}

export default useStorage