import { Form } from 'Components'
import './Contact.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='contact-page'>
      <div className='contact-title'>
        <h2>Want to know more?</h2>
        <p>Send us your questions and we will contact you</p>
      </div>
      <Form/>
    </div>
  )
}

export default Contact