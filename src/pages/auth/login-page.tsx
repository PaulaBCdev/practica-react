import { useState, type ChangeEvent, type FormEvent } from "react";
import FormField from "../../components/ui/form-field";
import { login } from "./service";
import { AxiosError } from "axios";
import { useAuth } from "./context";

function LoginPage() {
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const { email, password } = credentials;
  const isDisabled = !email || !password;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [event.target.name]: event.target.value,
    }));
  }

  function handleCheck(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      await login(credentials, isChecked);
      onLogin();
    } catch (error) {
      if (error instanceof AxiosError) {
        setError({
          message: error.response?.data?.message ?? error.message ?? "",
        });
      }
    }
  }

  return (
    <div className="login-page">
      <h1 className="login-page-title">Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className="login-btn" disabled={isDisabled}>
          Login
        </button>
        <input
          type="checkbox"
          name="rememberMe"
          id="rememberMe"
          checked={isChecked}
          onChange={handleCheck}
        />
      </form>
      {error && (
        <div
          className="login-error"
          role="alert"
          onClick={() => {
            setError(null);
          }}
        >
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
