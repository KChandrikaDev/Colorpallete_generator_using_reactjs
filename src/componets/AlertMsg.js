import React from 'react'

function AlertMsg({clr}) {
    return (
        <div className=' flex justify-center px-8 py-3 text-base text-center rounded-full text-white bg-black md:py-4 md:text-sm m-auto  transition duration-1000 ease-in-out'
        style={{ position: 'relative', marginTop: '-116px', width:"600px",borderRadius:"4%"}} 
        >
            <span >Colors:{clr} copied successfully</span>
        </div>
    )
}

export default AlertMsg
