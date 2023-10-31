import useQuiosco from "../hooks/useQuiosco"
import ResumenProducto from "./ResumenProducto";

export default function Resumen() {
    const {pedido} = useQuiosco();

    return (
      <aside className="w-72 h-screen overflow-y-scroll p-5">
        <h1 className="text-4xl font-black">Mis pedidos</h1>
        <p className="text-lg my-5">Aqui podras ver el resumen y el total de tus pedido</p>

        <div className="py-10">
          {pedido.length === 0 ? (
          <p className="text-center text-2xl ">
            No hay elementos en tu pedido aun</p>

        ) : (
            pedido.map(producto =>{
              <ResumenProducto 
                  key={producto.id}
                  producto={producto}
              />
            })
        )}
        </div>
        <p className="text-xl mt-10">Total: {''}</p>
        <form className="w-full" action="">
          <div className="mt-5">
            <input type="submit" className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 rounded-xl 
            uppercase font-bold text-white text-center w-full cursor-pointer"
            value="Confirmar Pedido" />
          </div>
        </form>

      </aside>
    )
}
