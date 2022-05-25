import React from "react";
import { styleSpinner } from "./styleSpinner";

const Spinner = () => {
    return (
        <>
            {    
            <div className='d-flex justify-content-center'>
                <div className='spinner-grow' role='status' style={styleSpinner}></div>
            </div>
            }
        </>    
    )
}

export default Spinner;