import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function GitHub(){
    const data = useLoaderData();
    // const [data , setdata] = useState([])
    //  useEffect(() => {
    //     fetch('https://api.github.com/users/ShubhamKashyap1001')
    //     .then(Response => Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)
    //     })
    //  },[])
    return (
        <>
            <div className=" flex justify-center text-3xl">GitHub Followers : {data.followers}<br/>
                GitHub Username : {data.login}
                
            </div>
            <img src={data.avatar_url} alt="Git Picture" className="w-60 flex justify-baseline"></img>
        </>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = fetch('https://api.github.com/users/ShubhamKashyap1001')
    return (await response).json()
}