import React from "react";
import { useParams } from "react-router";

function User(){
    const {userId} = useParams()
    return(
        <>
            <div className="bg-gray-400 text-white p-2 flex justify-center text-3xl">User : {userId}</div>
        </>
    )
}

export default User