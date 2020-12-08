import React, { Fragment, useState } from 'react';

import {useForm} from 'react-hook-form';


const Ejemplo = () => {

    const {register, errors, handleSubmit} = useForm();
    const [Entrada, setEntradas] = usesState([])

    return (
        <Fragment>
            <h1>
                Formulario 2
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name = "nombre"
                placeholder="Ingrese Nombre"
                className="form-control my-2"
                >
                </input>
                <input
                name = "apellido"
                placeholder="Ingrese apellido"
                className="form-control my-2">
                </input>
                <button className="btn btn-primary"></button>
            </form>
        </Fragment>
    );
}

export default Ejemplo;