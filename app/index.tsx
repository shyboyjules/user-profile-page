import React from 'react';
import { 
  Text, 
  View, 
  Image, 
  Button, 
  Alert, 
  SafeAreaView, 
  ScrollView 
} from 'react-native';
import styles from './StyleSheet'; 

export default function App() {
  const user = {
    name: 'Jules Gifford T. Filoteo',
    email: 'filoteo.jules18@gmail.com',
    profilePic: '',
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Yes', onPress: () => console.log('User logged out') },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profileContainer}>
          {user.profilePic ? (
            <Image source={{ uri: user.profilePic }} style={styles.profilePic} />
          ) : (
            <View style={[styles.profilePic, styles.placeholder]}>
              <Text style={styles.placeholderText}>No image yet</Text>
            </View>
          )}
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{user.name}</Text>
          </View>
        </View>

        <View style={styles.infoGroupContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Email: {user.email}</Text>
            <View style={styles.line} /> 
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Phone Number: 09111111111</Text>
            <View style={styles.line} /> 
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Address: Bulua, Cagayan De Oro City</Text>
            <View style={styles.line} /> 
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Occupation: IT</Text>
            <View style={styles.line} /> 
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Logout" onPress={handleLogout} color="#F44336" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
