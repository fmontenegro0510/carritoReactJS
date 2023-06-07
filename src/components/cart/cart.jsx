import Item from "../item/item"

const Cart = (items, eliminarItem ) =>{
    return(
    <>
        {(items && items.length) ? (
            <> 
                <h2>Listado de Productos</h2>
                <br />

                {
                    items.map( item =>(
                        <Item 
                            key={item.id}
                            item={item}
                            eliminarItem={eliminarItem}
                        />
                    )
                    )
                }            
            </>
            ):(
            <>
                <h2>No hay elementos en el chango</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Comienza agregando productos {''}
                    <span>y apareceran en este lugar</span>
                </p>
            </>
        )}

    </>
    )
}

export default Cart