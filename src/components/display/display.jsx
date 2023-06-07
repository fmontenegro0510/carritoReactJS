// import "./display.css"

const display = ({valor}) => {
  return (
    <div>
        <div className="row image_header">
            <div className="col">
              <img className="image_header" src={"/img/chango.png"} alt={"/img/chango.png"}  />
              <h1 className="content-title">
                Resumen del carrito
              </h1>            
            </div>
            <div className="col-3">
              <h4>
                Total $  {valor}
              </h4>
            </div>
        </div>
    </div>
  )
}
export default display