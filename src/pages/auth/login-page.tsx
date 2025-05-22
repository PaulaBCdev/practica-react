import { useState, type ChangeEvent } from "react";
import FormField from "../../components/form-field";

function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      <h1>Log in</h1>
      <form>
        <FormField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <FormField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {/* //TODO: Button component */}
      </form>
    </div>
  );
}

export default LoginPage;

// 1. formulario donde recoger los datos del usuario
// 2. la pagina se rerenderiza con cada cambio del formulario
// 3. el boton submit no se activa hasta que esten escritos email y contraseña
// 4. cuando esten las credenciales Y sean correctas, se mandan a la api y redirige a home o la pagina que pidiese antes
// 5. si las credenciales son incorrectas, se muestra mensaje de error
