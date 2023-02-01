export const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
            <button className='btn btn-dark'>🛒</button>
            <p>{cantidadCarrito}</p>
        </>
    );
}