import React, {Fragment, useState} from 'react'

function form() {
    const [item, setItem] = useState({
        nombre: '',
        descripcion: '', 
        cantidad: 1
    })
    const enviarDatos = (event) =>{
        event.preventDefault()
        console.log('enviando datos...' + item.nombre + ' ' + item.descripcion + '' + item.cantidad)
    }

  return (
    <Fragment>
          <form className="row" onSubmit={enviarDatos}>
              <div className="mt-10 font-size-12"> 
                  Nombre
              </div>
              <input type="text" className="form-control" placeholder="Agregue un nombre" />
                  <div className="mt-10 font-size-12"> 
                      Descripcion del Producto
                  </div>
                  <textarea className="form-control" placeholder="Agregue una Descripción" />
                  <div className="mt-10 font-size-12"> 
                      Precio
                  </div>
                  <input type="text" className="form-control" placeholder="Agregue un precio" />
                          <div className="row">
                              <div className="col">
                                  <button className="btn btn-block btn-success" type="button">Agregar</button>
                              </div>
                              <div className="offset-1 col">
                                  <button className="btn btn-block btn-warning" type="button">Cancelar</button>
                              </div>
                          </div>
            </form>
    </Fragment>
  )
}

export default form
