import Categoria from "./Categoria"
import { categorias } from "../data/Categorias"

export default function Sidebar() {
  return (
    <aside className="md:w-72">
         <div className="p-4">
            <img src="img/logo.svg" alt="Imagen Logo" className="w-40" />

        </div>

        <div className="mt-10">
            {categorias.map( categoria =>(
                <Categoria 
                    key={categoria.id}
                    categoria={categoria} 
                />
            ))}
        </div>

        <div className="my-5 px-4">
          <button type="button" className="text-center bg-red-500 hover:bg-red-700 w-full p-3 font-bold text-white truncate rounded-2xl">Cancelar Orden</button>

        </div>
    </aside>
  )
}
