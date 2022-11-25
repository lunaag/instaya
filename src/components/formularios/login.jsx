import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom"

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return (
        <form className="form-login" onSubmit={handleSubmit(customSubmit)}>
           <Container>
          
           <div className="form_item col-md-4 offset-md-4">
           <label htmlFor="username" className="col-form-label">Usuario</label>
              <div>
                <input
                    {...register('username',{ required: true, pattern: /^[A-Za-z]+$/i})}
                     aria-invalid={errors.username ? "true" : "false"}
                />
                {errors.username && <p>Field required</p>}  
              </div>
            </div>

            <div className=" form_item col-md-4 offset-md-4">
          <label htmlFor="password" className="form-label">Contraseña</label>
              <div>
                <input
                    type="password"
                    {...register('password',{ required: true, minLength: 8})}
                     aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <p> Field required. Password should be at least 8 characters</p>}
              </div>
            </div>

            <input type="submit" className="btn btn-primary btn-sm mb-4"/>
            </Container>
        </form>
    )
}

export default Login