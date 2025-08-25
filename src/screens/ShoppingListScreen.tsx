import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Modal, TextInput, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth';
import ShoppingListItem from '../components/list/ShoppingListItem';
import ListSetup from '../components/list/ListSetup';
import AddItemModal from '../components/list/AddItemModal';
import { 
  addItemToList, 
  getShoppingItems, 
  getShoppingLists, 
  removeItemFromList, 
  ShoppingItem, 
  updateItemInList 
} from '../services/listService';

/**
 * Pantalla de la lista de compras.
 * Permite al usuario ver, añadir y eliminar ítems de su lista de compras.
 */
const ShoppingListScreen = () => {
  // Estado para manejar los ítems de la lista
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [listId, setListId] = useState<string | null>(null); // Para guardar el ID del documento
  const [isModalVisible, setModalVisible] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [isSettingsModalVisible, setSettingsModalVisible] = useState(false);
  const [total, setTotal] = useState(0);

  // Obtener el usuario autenticado
  const auth = getAuth();
  const user = auth.currentUser;

  const handleAddItem = async (itemName: string) => {
    if (!itemName.trim() || !listId) return;

    const newItem: ShoppingItem = {
      id: '', // El ID se generará en Firestore
      name: itemName,
      quantity: 1,
      price: 0,
      checked: false,
    };

    try {
      await addItemToList(listId, newItem);
      setNewItemName('');
      setModalVisible(false);
      reloadAll();
    } catch (error) {
      console.error('Error al añadir el ítem:', error);
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    if (!listId) return;
    try {
      await removeItemFromList(listId, itemId);
      reloadAll();
    } catch (error) {
      console.error('Error al eliminar el ítem:', error);
    }
  };

  const handleUpdateItem = async (itemId: string, field: 'price' | 'quantity', value: number) => {
    console.log(`Actualizando el ítem ${itemId} - Campo: ${field}, Nuevo valor: ${value}`);
    // Validación de IDs
    if (!listId || !itemId) return;
    try {
      await updateItemInList(listId, itemId, field, value);
      reloadAll();
    } catch (error) {
      console.error('Error al actualizar el ítem:', error);
    }
  };

  const calculateTotal = () => {
    const newTotal = items.reduce((sum, item) => {
      const price = item.price || 0;
      const quantity = item.quantity || 0;
      return sum + (price * quantity);
    }, 0);
    setTotal(newTotal);
  };


  const fetchLists = async () => {
    // console.log('User:', user);
    // if (!user) return;
    try {
      const lists = await getShoppingLists('test'); // Reemplaza 'test' con user.uid
      if (lists.length > 0) {
        // console.log('Lista de compras obtenida:', lists[0]);
        setListId(lists[0].id);
        const items = await getShoppingItems(lists[0].id);
        console.log('Items de la lista:', items);
        setItems(items);
      }
    } catch (error) {
      console.error('Error al cargar la lista de compras:', error);
    }
  };

  function reloadAll() {
    fetchLists();
    calculateTotal();
  }

  // ... useEffect para cargar la lista desde Firestore (código del Día 8) ...
  useEffect(() => { fetchLists(); }, [user]);

  // Nuevo useEffect para el cálculo del total
  useEffect(() => { calculateTotal(); }, [items]);

  return (
    <View style={styles.container}>
      {/* Encabezado con título y botón de configuración */}
      <View style={styles.header}>
        <Text style={styles.title}>Mi Lista de Supermercado</Text>
        <TouchableOpacity onPress={() => setSettingsModalVisible(true)}>
          <Ionicons name="settings-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Área de resumen de la compra */}
      <View style={styles.summaryContainer}>
        <Text>Total de la Compra: ${total.toFixed(2)}</Text>
        <Text>Presupuesto Restante: $0.00</Text>
      </View>
      {/* Lista de ítems */}
      <View style={styles.container}>
        {/* Called List */}
        <FlatList
          data={items} 
          renderItem={({ item }) => <ShoppingListItem key={item.id} item={item} onRemove={() => handleRemoveItem(item.id)} onUpdate={handleUpdateItem} />}
          keyExtractor={item => item.id}
        />
      </View>
      
      {/* ➡️ Usamos el nuevo componente aquí */}
      <ListSetup 
        isVisible={isSettingsModalVisible} 
        onClose={() => setSettingsModalVisible(false)} 
      />

      {/* Botón flotante para agregar ítem */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

      {/* Modal para agregar el ítem */}
      <AddItemModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onAddItem={handleAddItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  summaryContainer: {
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF', // Un color azul para el botón
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default ShoppingListScreen;