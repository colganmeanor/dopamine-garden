import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import CreateTaskButton from '../../components/create-task-button';

export default function TabLayout() {
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
        <CreateTaskButton />
      </View>
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
});