import CabecalhoListagem from "../componentes/CabecalhoListagem";
import { Table } from "react-bootstrap";


export default function Autores(){
    return(
        <>
            <CabecalhoListagem titulo="Cadastro de autores" 
            descricao="Gerencie a lista de autores dos livros neste local"/>


            <Table striped="columns">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>

        </>
    )
}