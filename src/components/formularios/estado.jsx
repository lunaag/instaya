import { Link } from "react-router-dom"

const EstadoOrdenes = () => {
    return (
        <>
            <Link to='/solicitar'>Crear Orden</Link>
            <table className="Estado Envio">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Ciudad Entrega</th>
                        <th scope="col">Direccion Entrega</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            <Link to='/estado/1'>1</Link>
                        </th>
                        <td>19/11/2022</td>
                        <td>Santa Marta</td>
                        <td>Calle 1 # 2-5</td>
                        <td>
                            <Link to='/estado/1/edit'>Edit</Link>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Link to='/estado/2'>2</Link>
                        </th>
                        <td>19/11/2022</td>
                        <td>Cali</td>
                        <td>Calle 54 # 118-37</td>
                        <td><Link to='/estado/2/edit'>Edit</Link></td>
                    </tr>
                    <tr>
                        <th scope="row">
                            <Link to='/estado/3'>3</Link>
                        </th>
                        <td>  </td>
                        <td>  </td>
                        <td>  </td>
                        <td><Link to='/estado/3/edit'>Edit</Link></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default EstadoOrdenes