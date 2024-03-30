import { Card } from "Components";
import { useDentistApi } from 'Components/utils'
import { Outlet } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [ dentists ] = useDentistApi()

  return (
    <div className='card-grid'>
      {/* Aqui deberias renderizar las cards */}
      {dentists?.map((dentist) => (
        <Card key={dentist.id} dentist={dentist}/>
      ))}

      {/* Este Outlet es para renderizar el Detail/:id */}
      <Outlet />
    </div>
  )
}

export default Home