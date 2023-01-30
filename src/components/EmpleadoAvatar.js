import React from 'react';
import '../styles.css'


const EmpleadoAvatar = (props) => {
   
    return (
        <div>
            <img src={`/avatares/${props.foto}`} alt='empleado' height={90} width={90}></img>
        </div>
    );
};

export default EmpleadoAvatar;