import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
export const Checkout = () => {
    let navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e) =>{
        e.preventDefault()
        console.log(datosForm.current)
        const data = new FormData(datosForm.current) // FormData <= de HTML a obk
        console.log(data)
        const cliente = Object.fromEntries(data) // Object.fromEntries <= trasforma obj en obj simple
        console.log(cliente)
        e.target.reset()
        toast.success('Muchas gracias por realizar su compra')
        navigate("/")
    }
    
    return (
        <div className="container contForm">
            <form onSubmit={consultarForm} ref={datosForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">Documento</label>
                    <input type="number" className="form-control" name="dni"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion"/>
                </div>
                <button type="submit" className="">Finalizar compra</button>
            </form>
        </div>
    );
}

