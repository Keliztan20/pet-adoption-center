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

const EditPetModal = ({ editingPet, editForm, onChangeField, onSave, onCancel }) => {
  if (!editingPet) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!!editingPet}
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
                    <Text style={styles.modalTitle}>Edit {editingPet.name}</Text>
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                      style={styles.input}
                      value={editForm.name}
                      onChangeText={(text) => onChangeField('name', text)}
                      placeholder="Pet name"
                      accessible={true}
                      accessibilityLabel="Pet name input"
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Personality</Text>
                    <TextInput
                      style={styles.input}
                      value={editForm.personality}
                      onChangeText={(text) => onChangeField('personality', text)}
                      placeholder="Pet personality"
                      accessible={true}
                      accessibilityLabel="Pet personality input"
                    />
                  </View>

                  <View style={styles.formGroup}>
                    <Text style={styles.label}>Mood</Text>
                    <View style={styles.pickerContainer}>
                      <Picker
                        selectedValue={editForm.mood}
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

                  <View style={styles.buttonGroup}>
                    <TouchableOpacity
                      style={styles.cancelButton}
                      onPress={onCancel}
                      accessible={true}
                      accessibilityLabel="Cancel editing"
                      accessibilityRole="button"
                    >
                      <Text style={styles.cancelButtonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={styles.saveButton}
                      onPress={onSave}
                      accessible={true}
                      accessibilityLabel="Save changes"
                      accessibilityRole="button"
                    >
                      <Text style={styles.saveButtonText}>Save Changes</Text>
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
  saveButton: {
    backgroundColor: '#4a154b',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default EditPetModal;