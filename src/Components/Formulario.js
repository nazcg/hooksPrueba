import React,{Fragment, useState} from 'react';

const Formulario =() =>{

    const[datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        telefono:''
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })

    }

    const enviarDatos = (event) =>{
        event.preventDefault();
        console.log(datos.nombre +' ' + datos.apellido + ' ' + datos.telefono)
        event.target.reset();
    }
    return(
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese Nombre" 
                    className="form-control"
                    type= "text"
                    name="nombre"
                    onChange={handleInputChange}>

                    </input>
                </div>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese Apellido" 
                    className="form-control"
                    type= "text"
                    name="apellido"
                    onChange={handleInputChange}>

                    </input>
                </div>
                <div className="col-md-3">
                    <input 
                    placeholder="Ingrese su Nro de Telefono" 
                    className="form-control"
                    type= "number"
                    name="telefono"
                    onChange={handleInputChange}>

                    </input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h4> 
                {datos.nombre} {datos.apellido} {datos.telefono}
            </h4>
        </Fragment>
        
    );

}

export default Formulario;