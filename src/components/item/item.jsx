import React from 'react'
import "./item.css"

const Item = ({item, eliminarItem})=> {

    const {nombre, descripcion, cantidad, id} = item

    const handleEliminar = () =>{
        const respuesta = confirm("Desea Eliminar?")
        if(respuesta){
            eliminarItem(id)
        }
    }


  return (
      <>
          {/* <!-- Card --> */}
          <div className="col-3">
              <div className="w-400 mw-full"> 
                  <div className="card">
                      <h2 className="card-title title_card">
                         {id} {nombre}
                      </h2>
                      <p className="text-muted card_description">
                          {descripcion}
                      </p>
                      <div className="text-right card_button"> 
                          <div className="row">
                              <button className="btn btn-danger" type="button">-</button>
                              <a href="#" className="btn">{cantidad}</a>
                              <button className="btn btn-success" type="button">+</button>
                              <button className="btn btn-warning" type="button" onClick={handleEliminar}>Eliminar</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/*end Card*/ }
    </>
  )
}

export default Item
