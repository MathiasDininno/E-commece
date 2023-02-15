import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({prod}) => {

    const onAdd = (cantidad) =>{
        console.log(cantidad)
        console.log(prod)
    }

    return (
        <div className="row g-0">
            <div className="col-md-4">
                <img src={`../img/${prod.img}`} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <p className="card-text">Información: {prod.infoRaza}</p>
                    <p className="card-text">Raza: {prod.raza}</p>
                    <p className="card-text">Valor: {prod.precio}</p>
                    <p className="card-text">Stock: {prod.stock}</p>
                    <ItemCount valInicial={1} stock={prod.stock} onAdd={onAdd}/>
                    <button className="btn btn-dark">Finalizar Compra</button>
                </div>
            </div>
        </div>
    );
}
