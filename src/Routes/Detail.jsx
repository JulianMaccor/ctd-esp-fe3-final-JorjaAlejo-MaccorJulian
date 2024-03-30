import { LikeButton } from "Components"
import { getDentistById } from "Components/api/dentist"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import "./Detail.css"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const useDialogTransition = () => {
  const timeoutAnimation = 200
  const ref = useRef(null)
  useLayoutEffect(() => {
    if(ref){
      ref.current.style.filter = "opacity(0)"
      ref.current.style.transition = `filter ease-in-out ${timeoutAnimation}ms`
    }
  }, [ref])
  
  return {ref,
    afterTransition: (callback) => {
      ref.current.style.filter = "opacity(0)"
      setTimeout(() => {callback()}, timeoutAnimation)
    },
    startTransition: () => {
      ref.current.style.filter = "opacity(1)"
    }
  }
}


const Detail = ( ) => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const navigate = useNavigate()
  const { id } = useParams()
  const [dentist, setDentist] = useState({})
  const {ref, afterTransition, startTransition} = useDialogTransition()

  useEffect(() => {
    getDentistById(id).then(res => {
      setDentist(res.data)
      startTransition()
    })
  }, [])

  const handleWrapperClick = (e) => {
    e.stopPropagation();
    afterTransition(() => {
      navigate(-1)
    })
  }

  return (
    <div onClick={handleWrapperClick} className='detail-dialog-wrapper'>
      <dialog ref={ref}>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        <section className="dialog-header">
        <p className="id" >{dentist.id}</p>
        <h2 className="label name">{dentist.name}</h2>
        <h5 className="username caption">{dentist.username}</h5>

        </section>
        <section className="dialog-body">
          <p className="card-title">Email:</p>
          <p className="card-label">{dentist.email}</p>
          <p className="card-title">Phone:</p>
          <p className="card-label">{dentist.phone}</p>
          <p className="card-title">Website:</p>
          <a href={dentist.website} target="_blank" className="card-label">{dentist.website}</a>
        </section>
        <section className="dialog-sidebar">
          <button className="exit" onClick={handleWrapperClick}>X</button>
          <img src="/images/doctor.jpg"></img>
          <LikeButton data={dentist}/>
        </section>
      </dialog>
    </div>
  )
}

export default Detail