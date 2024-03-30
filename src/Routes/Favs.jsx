import { Card } from "Components";
import { useUser } from "Components/utils";
import { Outlet } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [ user ] = useUser()
  return (
    <>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {user.likes.map(dentist => <Card key={dentist.id} dentist={dentist}></Card> )}
        
      </div>

      {/* Este Outlet es para renderizar el Detail/:id */}
      <Outlet />
    </>
  );
};

export default Favs;
