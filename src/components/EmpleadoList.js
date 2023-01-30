import React from 'react';
import {ListGroup} from 'react-bootstrap';
import EmpleadoRow from './EmpleadoRow';

const EmpleadoList = (props) => {
    return (
        <ListGroup>
         {props.arregloEmpleados.map((item, posicion) => <EmpleadoRow key={posicion} dato={item}/>)}
        </ListGroup>
    );
};

export default EmpleadoList;