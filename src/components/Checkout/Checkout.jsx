import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { useCarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import { createOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";


export const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    let navigate = useNavigate()
    const datosForm = useRef()
    const consultarForm = (e) => {
        e.preventDefault()
        console.log(datosForm.current)
        const data = new FormData(datosForm.current) // FormData <= de HTML a obk
        const cliente = Object.fromEntries(data) // Object.fromEntries <= trasforma obj en obj simple

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant //Se descuenta el stock en la base de datos 
                updateProducto(prodBDD.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast.success(`Muchas gracias por realizar su compra. Su id es ${ordenCompra.id}, su monto es de ${new Intl.NumberFormat('de-DE').format(totalPrice())}`)

            e.target.reset()
            emptyCart()
            navigate("/")
        })
    }
    const [email, setEmail] = useState("");
    const [emailConfirmation, setEmailConfirmation] = useState("");
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEmailConfirmationChange = (event) => {
        setEmailConfirmation(event.target.value);
    };

    const isFormValid = () => {
        return email === emailConfirmation && email !== "";
    };

    return (

        <>
            {carrito.length === 0
                ?
                <>
                    <h2>Debe tener productos en el carrito para finalizar la compra.</h2>
                    <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
                </>
                :
                <div className="container contForm">
                    <form onSubmit={consultarForm} ref={datosForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                            <input type="text" className="form-control" name="nombre" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={email}
                                onChange={handleEmailChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Repetir Email</label>
                            <input type="email" className="form-control" name="email" value={emailConfirmation}
                                onChange={handleEmailConfirmationChange}
                                required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label">Documento</label>
                            <input type="number" className="form-control" name="dni" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="celular" className="form-label">Numero telefonico</label>
                            <input type="number" className="form-control" name="celular" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <input type="text" className="form-control" name="direccion" required/>
                        </div>
                        <button type="submit" className="" disabled={!isFormValid()}>Finalizar compra</button>
                    </form>
                </div>
            }

        </>


    );
}

