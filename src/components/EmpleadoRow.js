import React from 'react';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = (props) => {
    return (
        <>
            <div className='size centrar d-flex align-items-center ps-3'>
                <EmpleadoAvatar className='ms-5' foto={props.dato.pic}></EmpleadoAvatar>
                <div>
                    <p className='h4 fw-bold ms-3'>{props.dato.fullName}</p>
                    <div className='d-flex'>
                        <p className='h6 ms-3'>{props.dato.title}</p>
                        <p className='rectangulo text-center text-light h6 ms-3'>{props.dato.department}</p>
                    </div>

                </div>
            </div>

        </>


    );
};

export default EmpleadoRow;