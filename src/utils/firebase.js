import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "balcarce-al-galope.firebaseapp.com",
  projectId: "balcarce-al-galope",
  storageBucket: "balcarce-al-galope.appspot.com",
  messagingSenderId: "1038494185323",
  appId: "1:1038494185323:web:05fc2f5015fe6c66d27e2e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore() //Referencia a mi base de datos

/*
    CRUD PRODUCTOS
    CREATE
    READ
    UPDATE
    DELETE
*/

export const cargarBDD = async () => {
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) => {
    await addDoc(collection(db, "productos"), { //collection si existe productos, lo consulta sino lo crea y lo consulta
      categoria: prod.idCategoria,
      raza: prod.raza,
      edad: prod.edad,
      precio: prod.precio,
      stock: prod.stock,
      img: prod.img
    })
  })

}

export const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(prod => {
    return { ...prod.data(), id: prod.id }
  })
  return items
}

export const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const item = { ...producto.data(), id: producto.id }
  return item
}

export const updateProducto = async (id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
  await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async(cliente, productos, precioTotal, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenesCompra"),{
    datosCliente: cliente,
    productos: productos,
    precioTotal: precioTotal,
    fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) =>{
  const oC = await getDoc(doc(db, "ordenesCompra", id))
  const ordenCompra = { ...oC.data(), id: oC.id }
  return ordenCompra
}