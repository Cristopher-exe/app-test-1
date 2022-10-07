import {useEffect} from 'react';
import axios from "axios";

export const reqRespApi = axios.create({
  baseURL: 'https://reqres.in/api'
})

export const Usuarios = () => {
  
  useEffect(() => {
    
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    
    reqRespApi.get<ReqRespUsuarioListado>('/users')
    .then(resp=> {
      //console.log(resp.data.data);
      setUsuarios(resp.data.data);
    })
    .catch(err => console.log(err))
    }, [])

    const renderItem = (usuario: Usuario) => {
      return (
          <tr key={usuario.id.toString()}>
              <td>
                  Avatar
              </td>
              <td>
                  { usuario.first_name } { usuario.last_name }
              </td>
              <td>
                  { usuario.email }
              </td>
          </tr>
      )
  }  

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
    {
        Usuarios.map(FicArgUsuario => renderItem(FicArgUsuario))
    }
</tbody>
      </table>
    </>
  );
};
