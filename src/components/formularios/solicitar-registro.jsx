import { useForm } from "react-hook-form";

const Solicitar = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const customSubmit = (data) => { console.log('login data', data) }

    return (
        <form className="form-solicitar" onSubmit={handleSubmit(customSubmit)}>
            <div className="form-solicitar__item">
                <label>Hora</label>
                <input
                    type="number"
                    {...register("hora", { required: true })}
                    aria-invalid={errors.date ? "true" : "false"}
                />
                {errors.time && <p>Field required</p>}
            </div>
            <div className="form-solicitar__item">
                <label>Date</label>
                <input
                    type="date"
                    {...register("date", { min: 7, max: 20 } )}
                    aria-invalid={errors.date ? "true" : "false"}
                />
                {errors.date && <p>Field required</p>}
            </div>
            <div className="form-solicitar__item">
                <label>Direccion Recogida</label>
                <input
                    {...register("direccionRecogida", { required: true, maxLength: 50 })}
                    aria-invalid={errors.direccionRecogida ? "true" : "false"}
                />
                {errors.direccionRecogida && <p>Field required. Max length 50</p>}
            </div>
            <div className="form-solicitar__item">
                <label>Ciudad Recogida</label>
                <input
                    {...register("ciudadRecogida", { required: true, pattern: /^[A-Za-z]+$/i } )}
                    aria-invalid={errors.ciudadRecogida ? "true" : "false"}
                />
                {errors.ciudadRecogida && <p>Field required. Max length 50</p>}
            </div>
            
            <div className="form-solicitar__item">
                <label>Cédula/Nit destinatario</label>
                <input
                    type="number"
                    {...register("cedula/Nitdestinatario", { min: 7, max: 20 })}
                    aria-invalid={errors.cedula/Nitdestinatario ? "true" : "false"}
                />
                {errors.cedula/Nitdestinatario && <p>Min 7. Max 20</p>}
            </div>
            <div className="form-solicitar__item">
                <label>Dirección Entrega</label>
                <input
                    type="text/number"
                    {...register("direccionEntrega", { min: 7, max: 20 , pattern: /^[A-Za-z],[1-300]+$/i})}
                    aria-invalid={errors.direccionEntrega ? "true" : "false"}
                />
                {errors.direccionEntrega && <p>Min 7. Max 20</p>}
            </div>

            <div className="form-solicitar__item">
                <label>Ciudad Entrega</label>
                <input
                    {...register("ciudadEntrega", { required: true, pattern: /^[A-Za-z]+$/i })}
                    aria-invalid={errors.ciudadEntrega ? "true" : "false"}
                />
                {errors.ciudadEntrega && <p>Field required. ABC required</p>}
            </div>
            <input type="submit" value="Actualizar Orden" />
        </form>
    )
}

export default Solicitar