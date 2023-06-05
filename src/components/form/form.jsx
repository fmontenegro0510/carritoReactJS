import React, {Fragment, useState} from 'react'

function form() {
    const [item, setItem] = useState({
        nombre: '',
        descripcion: '', 
        cantidad: 1
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setItem({
            ...item,
            [event.target.name] : event.target.value
        })
    }


    const enviarDatos = (event) =>{
        event.preventDefault()
        console.log('enviando datos...' + item.nombre + ' ' + item.descripcion + ' ' + item.cantidad)
    }

    const openModal = () =>{
        halfmoon.toggleModal('modal-6');    
    }

  return (
    <Fragment>
          <form className="row" onSubmit={enviarDatos}>
              <div className="mt-10 font-size-12"> 
                  Nombre
              </div>
              <input type="text" className="form-control" placeholder="Agregue un nombre"  name="nombre" onChange={handleInputChange}/> 
                  <div className="mt-10 font-size-12"> 
                      Descripcion del Producto
                  </div>
                  <textarea className="form-control" placeholder="Agregue una Descripción"   name="descripcion" onChange={handleInputChange}/>
                  <div className="mt-10 font-size-12"> 
                      Precio
                  </div>
                  <input type="text" className="form-control" placeholder="Agregue un precio"  name="cantidad" onChange={handleInputChange}/>
                          <div className="row">
                              <div className="col">
                                  <button className="btn btn-block btn-success" type="submit">Agregar</button>
                              </div>
                              <div className="offset-1 col">
                                  <button className="btn btn-block btn-warning" type="button" onClick={openModal}>Cancelar</button>
                              </div>
                          </div>
            </form>
    </Fragment>
  )
}

export default form
