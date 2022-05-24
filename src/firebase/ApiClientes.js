import {
    getFirestore,
    collection,
    getDocs,
    query,
    doc,
    deleteDoc,
    updateDoc,
    where,
    collectionRef
} from 'firebase/firestore';
import firebaseApp from './credenciales';

const db = getFirestore(firebaseApp);

//consultar datos de un cliente en la base de datos

export const consultarCliente = async () => {
    const result = await getDocs(query(collection(db, `clientes`)))
    return result;
}

//Eliminar datos de los clientes

export const eliminarDatosCliente = async (id) => {
    await deleteDoc(doc(db, `clientes`, id))
}
//Actualizar datos de los clientes

export const actualizarDatosCliente = async (id, estado) => {
    await updateDoc(doc(db, `clientes`, id), {
        estado
    })
}

//Filtrar datos de los clientes

export async function filtrarDatos(stringBusqueda) {
    const collectionRef = collection(db, 'clientes');
    const queryId = query(collectionRef, where('id', '==', stringBusqueda));
    const queryDNI = query(collectionRef, where('dni', '==', stringBusqueda));
    const arraySnapshots = await Promise.all([
        getDocs(queryId),
        getDocs(queryDNI)
    ]);
    console.log(arraySnapshots);

}




