// src/components/list/ListSetup.tsx
import React from 'react';
import { View, Text, Modal, StyleSheet, Button, Switch, TextInput } from 'react-native';

interface ListSetupProps {
  isVisible: boolean;
  onClose: () => void;
  // Añadiremos más props aquí cuando implementemos la lógica
}

const ListSetup: React.FC<ListSetupProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Configuración de la Lista</Text>
          
          <View style={styles.settingItem}>
            <Text>Bloquear Lista</Text>
            <Switch 
              // Los props de la lógica irán aquí
            />
          </View>
          
          <View style={styles.settingItem}>
            <Text>Presupuesto</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="0.00"
              // Los props de la lógica irán aquí
            />
          </View>
          
          <View style={styles.modalButtons}>
            <Button title="Cancelar" color="red" onPress={onClose} /> {/* ⬅️  Botón de cancelar */}
            <Button title="Guardar" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '50%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'right',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
});

export default ListSetup;