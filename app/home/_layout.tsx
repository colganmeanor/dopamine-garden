import TaskModal from '@/components/task-modal';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CreateTaskButton from '../../components/create-task-button';

export default function TabLayout() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateTask = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#8E8E93',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Tabs.Screen
          name="active"
          options={{
            title: 'Active Tasks',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
        <Tabs.Screen
          name="completed"
          options={{
            title: 'Completed',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="checkmark-circle" size={size} color={color} />
            ),
            headerShown: false
          }}
        />
      </Tabs>
      <View style={styles.fabContainer}>
        <CreateTaskButton onPress={handleCreateTask} />
      </View>
      <TaskModal isVisible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 80, // Position above the tab bar
    right: 20,
    zIndex: 1000,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
