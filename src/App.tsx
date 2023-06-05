import { useState } from 'react'
import Display from './components/display/Display';
import Item from "./components/item/Item";
import Form from "./components/form/form";
import './App.css'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
      <Display />      
      <Item />
      <Form />


    </>
  )
}

export default App
