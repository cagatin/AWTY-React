import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/InputForm.css';

export default function InputForm() {
    return (
        <form className='d-flex flex-column justify-content-center align-items-center' id="destination-form">
            <div className='form-group p-2'>
                <label for="starting-location">Starting Location</label>
                <input type='text' id='starting-location' className='form-control' placeholder='Enter Starting Address'></input>
            </div>
            <div className='form-group p-2'>
                <label for="ending-location">Ending Destination</label>
                <input type='text' id='ending-location' className='form-control' placeholder='Enter Ending Address'></input>
            </div>
        </form>
    )
}