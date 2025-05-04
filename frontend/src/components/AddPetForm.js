import React from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';

const AddPetForm = ({ newPetForm, onChangeField, onAdd, onCancel, visible }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <TouchableWithoutFeedback onPress={onCancel}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.keyboardAvoidingView}
            >
              <View style={styles.modalContent}>
                <ScrollView>
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Add New Pet</Text>
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                      style={styles.input}
                      value={newPetForm.name}
                      onChangeText={(text) => onChangeField('name', text)}
                      placeholder="Pet name"
                      accessible={true}
                      accessibilityLabel="Pet name input"
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Type</Text>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={newPetForm.type}
                        style={styles.picker}
                        onValueChange={(itemValue) => onChangeField('type', itemValue)}
                        accessible={true}
                        accessibilityLabel="Select pet type"
                      >
                        <Picker.Item label="Cat" value="Cat" />
                        <Picker.Item label="Dog" value="Dog" />
                      </Picker>
                    </View>
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Age</Text>
                    <TextInput
                      style={styles.input}
                      value={newPetForm.age}
                      onChangeText={(text) => onChangeField('age', text)}
                      placeholder="e.g. 2 years old"
                      accessible={true}
                      accessibilityLabel="Pet age input"
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Mood</Text>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={newPetForm.mood}
                        style={styles.picker}
                        onValueChange={(itemValue) => onChangeField('mood', itemValue)}
                        accessible={true}
                        accessibilityLabel="Select pet mood"
                      >
                        <Picker.Item label="Happy" value="Happy" />
                        <Picker.Item label="Excited" value="Excited" />
                        <Picker.Item label="Sad" value="Sad" />
                      </Picker>
                    </View>
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Personality</Text>
                    <TextInput
                      style={styles.input}
                      value={newPetForm.personality}
                      onChangeText={(text) => onChangeField('personality', text)}
                      placeholder="e.g. Friendly and playful"
                      accessible={true}
                      accessibilityLabel="Pet personality input"
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Image URL</Text>
                    <TextInput
                      style={styles.input}
                      value={newPetForm.images[0]}
                      onChangeText={(text) => onChangeField('images', text)}
                      placeholder="Enter image URL"
                      accessible={true}
                      accessibilityLabel="Pet image URL input"
                    />
                  </View>

                  <View style={styles.buttonGroup}>
                    <TouchableOpacity
                      style={styles.cancelButton}
                      onPress={onCancel}
                      accessible={true}
                      accessibilityLabel="Cancel adding pet"
                      accessibilityRole="button"
                    >
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={onAdd}
                      accessible={true}
                      accessibilityLabel="Add new pet"
                      accessibilityRole="button"
                    >
                      <Text style={styles.addButtonText}>Add Pet</Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  keyboardAvoidingView: {
    width: '100%',
    maxWidth: 500,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxHeight: '80%',
  },
  modalHeader: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4a154b',
    fontFamily: 'Poppins-SemiBold',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4a154b',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(172, 126, 244, 0.2)',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'rgba(172, 126, 244, 0.2)',
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 24,
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(172, 126, 244, 0.2)',
    marginRight: 12,
  },
  cancelButtonText: {
    color: '#4a154b',
    fontSize: 14,
    fontWeight: '500',
  },
  addButton: {
    backgroundColor: '#4a154b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default AddPetForm;