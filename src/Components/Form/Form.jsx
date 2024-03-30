import { useEffect, useState } from "react";
import "./Form.css";

const formInitalState = {
  name: "",
  email: "",
};

const validate = (values) => {
  let errors = {};

  values.name.length <= 5 && 
  (errors.name = "El nombre debe ser mayor a 5 caracteres");
  
  // Generate regex to validate email
  const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);



  !emailRegex.test(values.email) &&
  (errors.email = "El email ingresado es incorrecto");

  return errors;
};

const useFormValidate = () => {
  const [form, setForm] = useState(formInitalState);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const data = { ...form, [name]: value }
    console.log(data);
    const errors = validate(data);
    setErrors(errors)
    setForm(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(form);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setForm(formInitalState);
      }, 3000);
    } else {
      setIsSubmit(false);
    }
  }, [errors, isSubmit]);

  return { form, errors, success, handleChange, handleSubmit };
};

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { form, errors, success, handleChange, handleSubmit } = useFormValidate();

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} >
        <label >
          Nombre completo:
          <input onChange={handleChange} onPaste={handleChange} value={form.name} type="text" name="name" />
        </label>
        
        <label>
          Email:
          <input onChange={handleChange} onPaste={handleChange} value={form.email}  type="email" name="email" />
        </label>
        <input type="submit" disabled={Object.keys(errors).length !== 0} value="Submit" />

      </form>

      <section className="form-errors">
        {errors.name && <p>{errors.name}</p>}
        {errors.email && <p>{errors.email}</p>}
      </section>

      {success && <p className="form-success">Gracias {form.name}, te contactaremos cuando antes vía mail</p>}
      
    </div>
  );
};

export default Form;
