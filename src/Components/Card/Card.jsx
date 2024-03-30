import { Divider, LikeButton } from "Components";
import Info from "Icons/Info.svg";
import "./Card.css";
import { Link, useResolvedPath } from "react-router-dom";

const Card = ({ dentist }) => {
  const { pathname } = useResolvedPath()
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <div className="card-header">
          <p className="id">{dentist.id}</p>
          <Link className="circle-button info" to={[pathname, `detail/${dentist.id}`].join("")}><img src={Info}></img></Link>
          <LikeButton data={dentist} />
        </div>
        <div className="card-body">
          <img src="/images/doctor.jpg"/>
          <Divider variant="primary" height={2} />
          <h5 className="card-title-sm">{dentist.name}</h5>
          <h6 className="card-label-sm">{dentist.username}</h6>
        </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    </div>
  );
};

export default Card;
