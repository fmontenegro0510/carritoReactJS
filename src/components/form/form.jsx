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
              <div class="mt-10 font-size-12"> 
                  Nombre
              </div>
              <input type="text" class="form-control" placeholder="Agregue un nombre" />
                  <div class="mt-10 font-size-12"> 
                      Descripcion del Producto
                  </div>
                  <textarea class="form-control" placeholder="Agregue una Descripción" />
                  <div class="mt-10 font-size-12"> 
                      Precio
                  </div>
                  <input type="text" class="form-control" placeholder="Agregue un precio" />
                          <div class="row">
                              <div class="col">
                                  <button class="btn btn-block btn-success" type="button">Agregar</button>
                              </div>
                              <div class="offset-1 col">
                                  <button class="btn btn-block btn-warning" type="button">Cancelar</button>
                              </div>
                          </div>
            </form>
    </Fragment>
  )
}

export default form
