import { createContext, useState } from "react"
import { categorias as categoriaDB } from "../data/categorias"


const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [ categorias, setCategorias ] = useState(categoriaDB);
    const [categoriaActual, setCategoriaActual] = useState(categorias[0])

    const handleClickCategoria = id =>{
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
    }

    return(
        <QuioscoContext.Provider
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}

        >{children}</QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext