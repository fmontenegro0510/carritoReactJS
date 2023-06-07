import React from 'react'
import Display from "./components/display/Display";
import Form from "./components/form/Form";
import Item from "./components/item/Item";
import './App.css'

function App() {
 // const [count, setCount] = useState(0)

 const eliminarItem = (id: number) => { 
  console.log(id)
   
 }


const item = {
  nombre: "Juan",
  descripcion: "Descripcion",
  cantidad: 12,
  id:12
}

  return (
    <>
      {/* <Display />      
      <Item />
      <Form /> */}
    {/* <Display valor="12" />*/}
    <Display valor={12} />
    <Form  /> 
    <Item item={item} eliminarItem={eliminarItem}/>

    </>
  )
}

export default App
