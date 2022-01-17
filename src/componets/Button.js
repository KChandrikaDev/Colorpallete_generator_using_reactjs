import React from 'react'

function Button({onClick}) {
    return (
        <div className="container my-3 mt-5 ">
        <div className="col-md-12 text-center">
            <button className='btn btn-primary'onClick={onClick}>  Generate Pallets</button>
        </div>
    </div>
        
    )
}

export default Button
