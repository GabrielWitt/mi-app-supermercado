
import { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button } from 'react-native';

interface AddItemModalProps {
  isVisible: boolean;
  onClose: () => void;
  onAddItem: (name: string) => void;
}



const AddItemModal: React.FC<AddItemModalProps> = ({isVisible, onClose, onAddItem}) => {

    const [itemName, setItemName] = useState('');

    const handleSave = () => {
      onAddItem(itemName);
      setItemName('');
    };

    return (

              <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={onClose}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Añadir nuevo ítem</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="Nombre del ítem"
                      value={itemName}
                      onChangeText={setItemName}
                    />
                    <View style={styles.modalButtons}>
                      <Button title="Cancelar" onPress={onClose} color="#666" />
                      <Button title="Guardar" onPress={handleSave} />
                    </View>
                  </View>
                </View>
              </Modal>
    )
};

const styles = StyleSheet.create({
  // --- Estilos para el modal de añadir ítem ---
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%', // El modal ocupa el 80% del ancho de la pantalla
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default AddItemModal;
