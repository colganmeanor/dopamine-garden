import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

const CreateTaskButton = () => {
  const onPress = () => {
    console.log('Create Task');
  };

  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Ionicons name="add" size={24} color="white" />
    </Pressable>
  );
};

export default CreateTaskButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
