import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return (
        <form className="form-login" onSubmit={handleSubmit(customSubmit)}>
           <Container>
            <div className="form-login__item mb-4">
                <label>Username</label>
                <input
                    {...register('username',{ required: true, pattern: /^[A-Za-z]+$/i})}
                     aria-invalid={errors.username ? "true" : "false"}
                />
                {errors.username && <p>Field required</p>}  
            </div>
            <div className="form-login__item mb-4">
                <label>Password</label>
                <input
                    type="password"
                    {...register('password',{ required: true, minLength: 8})}
                     aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password && <p> Field required</p>}
                {errors.password && <p> Password should be at least 8 characters</p>}
            </div>
            <input type="submit" value="Login" />
            </Container>
        </form>
    )
}

export default Login