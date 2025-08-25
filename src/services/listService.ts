import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc
} from 'firebase/firestore';

// Interfaz para definir la estructura de los ítems
export interface ShoppingItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  checked: boolean;
}

// Interfaz para definir la estructura de las listas de compras
export interface ShoppingList {
  id: string;
  userId: string;
  name: string;
  items: ShoppingItem[];
  createdAt: Date;
}

// ------------------------------------
// ➡️ CRUD de Listas de Compra
// ------------------------------------

/**
 * Crea una lista de compras por defecto para un usuario si no existe ninguna.
 * @param userId El ID del usuario autenticado.
 */
export const createDefaultShoppingList = async (userId: string) => {
  const q = query(collection(db, 'shoppingLists'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    await addDoc(collection(db, 'shoppingLists'), {
      userId: userId,
      name: 'Mi Lista de Supermercado',
      items: [],
      createdAt: new Date(),
    });
    console.log('Lista por defecto creada para el usuario:', userId);
  } else {
    console.log('El usuario ya tiene una lista.');
  }
};

/**
 * Obtiene las listas de compras de un usuario.
 * @param userId El ID del usuario para el que se quieren obtener las listas de compras.
 * @returns Una promesa que se resuelve con un array de listas de compras.
 */
export const getShoppingLists = async (userId: string): Promise<ShoppingList[]> => {
  const q = query(collection(db, 'shoppingLists'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const lists: ShoppingList[] = [];
  querySnapshot.forEach(doc => {
    lists.push({ id: doc.id, ...doc.data() } as ShoppingList);
  });
  return lists;
};

/**
 * Alterna el estado de bloqueo de una lista de compras.
 * @param listId El ID de la lista a actualizar.
 * @param isLocked El nuevo estado de bloqueo (true o false).
 */
export const toggleListLock = async (listId: string, isLocked: boolean) => {
  if (!listId) {
    throw new Error('El ID de la lista no puede ser nulo.');
  }
  const listRef = doc(db, 'shoppingLists', listId);
  await updateDoc(listRef, {
    isLocked: isLocked,
  });
  console.log('Estado de bloqueo de la lista actualizado a:', isLocked);
};

// ------------------------------------
// ➡️ CRUD de Items de la Lista
// ------------------------------------

/**
 * Obtiene los items de la lista de compras de un usuario.
 * @param listId El ID de la lista para la que se quieren obtener los items de compra.
 * @returns Una promesa que se resuelve con un array de items de compra.
 */
export const getShoppingItems = async (listId: string): Promise<ShoppingItem[]> => {
  const q = query(collection(db, `shoppingLists/${listId}/items`));
  const querySnapshot = await getDocs(q);
  const items: ShoppingItem[] = [];
  querySnapshot.forEach(doc => {
    items.push({ id: doc.id, ...doc.data() } as ShoppingItem);
  });
  return items;
};

/**
 * Añade un nuevo ítem a una lista de compras existente.
 * Firestore genera el UID automáticamente.
 * @param listId El ID de la lista a la que se va a añadir el ítem.
 * @param newItem El nuevo ítem a agregar (sin el id, ya que Firestore lo generará).
 */
export const addItemToList = async (listId: string, newItem: Omit<ShoppingItem, 'id'>) => {
  if (!listId) {
    throw new Error('El ID de la lista no puede ser nulo.');
  }
  const itemsCollectionRef = collection(db, `shoppingLists/${listId}/items`);
  const docRef = await addDoc(itemsCollectionRef, newItem);

  const itemDocRef = doc(db, `shoppingLists/${listId}/items/${docRef.id}`);
  await updateDoc(itemDocRef, { id: docRef.id, });
  return docRef.id; // Puedes retornar el ID si lo necesitas
};

/**
 * Elimina un ítem de una lista de compras.
 * @param listId El ID de la lista de la que se va a eliminar el ítem.
 * @param itemIdToRemove El ID del ítem que se va a eliminar.
 */
export const removeItemFromList = async (listId: string, itemIdToRemove: string) => {
  if (!listId || !itemIdToRemove) {
    throw new Error('El ID de la lista y el ID del ítem no pueden ser nulos.');
  }
  const itemDocRef = doc(db, `shoppingLists/${listId}/items/${itemIdToRemove}`);
  await deleteDoc(itemDocRef);
  console.log(`Ítem ${itemIdToRemove} eliminado con éxito de la lista ${listId}.`);
};

/**
 * Actualiza un campo específico de un ítem en la lista.
 * @param listId El ID de la lista a la que pertenece el ítem.
 * @param itemIdToUpdate El ID del ítem a actualizar.
 * @param field El campo a modificar ('price' o 'quantity').
 * @param value El nuevo valor para el campo.
 */
export const updateItemInList = async (
  listId: string,
  itemIdToUpdate: string,
  field: 'price' | 'quantity',
  value: number
) => {
  if (!listId || !itemIdToUpdate) {
    throw new Error('El ID de la lista y el ID del ítem no pueden ser nulos.');
  }
  const itemDocRef = doc(db, `shoppingLists/${listId}/items/${itemIdToUpdate}`);
  await updateDoc(itemDocRef, {
    [field]: value,
  });
  console.log(`Ítem ${itemIdToUpdate} actualizado con éxito. Campo: ${field}, Nuevo valor: ${value}`);
};