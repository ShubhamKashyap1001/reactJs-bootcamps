import React from 'react';

function Card({username,btnText="Watch Again"}){
    console.log(username)
    
    return(
        <>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp "
                    alt="Movie"
                    class="w-[296.58px] h-75 rounded-t-2xl" />
                </figure>
                <div className="card-body bg-black" >
                    <h2 className="card-title">Click {username}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">{btnText}</button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Card