import useQuiosco from "../hooks/useQuiosco"

export default function Resumen() {
    const {pedido} = useQuiosco

    return (
      <aside className="w-72 h-screen overflow-y-scroll p-5">
        <h1 className="text-4xl font-black">Mis pedidos</h1>
        <p className="text-lg my-5">Aqui podras ver el resumen y el total de tus pedido</p>

        <div className="py-10">
          {pedido.length === 0 ? (
          <p className="text-center text-2xl ">No hay elementos en tu pedido aun</p>

        ) : (
            <p> SI hay algo </p>
        )}
        </div>

      </aside>
    )
}
