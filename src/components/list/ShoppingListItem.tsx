// src/components/list/ShoppingListItem.tsx
import React, { use, useEffect, useState } from 'react'; // <-- Importa useState
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ShoppingItem } from '../../services/listService';

interface ShoppingListItemProps {
  item: ShoppingItem
  onRemove: () => void;
  onUpdate: (itemId: string, field: 'price' | 'quantity', value: number) => void;
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({ item, onRemove, onUpdate }) => {
  // ➡️ Estado local para los valores de los TextInput
  const [localItem, setLocalItem] = useState(item);
  const [localPrice, setLocalPrice] = useState(item.price.toString());
  const [localQuantity, setLocalQuantity] = useState(item.quantity.toString());

  // ➡️ Funciones para guardar en la base de datos cuando el input pierde el foco
  const handlePriceBlur = () => {
    console.log(`Actualizando el precio del ítem ${localItem.id} a ${localPrice}`);
    onUpdate(localItem.id, 'price', parseFloat(localPrice));
  };
  
  const handleQuantityBlur = () => {
    console.log(`Actualizando la cantidad del ítem ${localItem.id} a ${localQuantity}`);
    onUpdate(localItem.id, 'quantity', parseInt(localQuantity, 10));
  };

  useEffect(() => {
    setLocalItem(item);
    setLocalPrice(item.price.toString());
    setLocalQuantity(item.quantity.toString());
    // console.log(`Item: ${item.name}`,item);
  }, [item]);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.detailsContainer}>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={localPrice} // <-- Usa el estado local
            onChangeText={setLocalPrice} // <-- Actualiza el estado local
            onBlur={handlePriceBlur} // <-- Llama a Firestore al perder el foco
            placeholder="0.00"
          />
          <Text style={{ marginHorizontal: 5 }}>x</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={localQuantity} // <-- Usa el estado local
            onChangeText={setLocalQuantity} // <-- Actualiza el estado local
            onBlur={handleQuantityBlur} // <-- Llama a Firestore al perder el foco
            placeholder="1"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
        <Ionicons name="trash-outline" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  input: {
    width: 60,
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  deleteButton: {
    padding: 10,
  },
});

export default ShoppingListItem;