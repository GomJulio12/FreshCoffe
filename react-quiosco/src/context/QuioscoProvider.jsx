import { createContext, useEffect, useState } from "react"
import { categorias as categoriaDB } from "../data/categorias"

import axios from  'axios' 


const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [ categorias, setCategorias ] = useState(categoriaDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])

    // CONEXION CON LARAVEL 
    const obtenerCategorias = async () => {
        try {
        const {data} = await axios('http://127.0.0.1:8000/api/categorias')
        console.log(data.data)
        } catch (error) {
        console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])


    const handleClickCategoria = id =>{
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    const handleClickModal = ( ) => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
        setPedido([...pedido, producto])
    }

    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido
            }}

        >{children}</QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext