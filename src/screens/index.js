import React, {useState, useEffect} from 'react';
import { TouchableOpacity, Text, View, Alert, Button } from 'react-native';
import * as Location from 'expo-location';

import styles from './styles'

export default function App() {

  const [currentLatitude, setCurrentLatitude] = useState('');
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [watchID, setWatchID] = useState(0);
 

  const getCurrentPosition = async () => {
      
      let { status } = await Location.requestPermissionsAsync();
  
      if (status !== "granted") {
          Alert.alert("Ops!", "Permissão de acesso a localização negada.");
      }
  
      let {
          coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setCurrentLatitude(latitude);
      setCurrentLongitude(longitude);  
      //Api(String(latitude),String(longitude))
       
      
  };
  
  function Api(lati, long){
    const data = { 
      latitude: lati,
      longitude: long
     };
  
    fetch('http://192.168.18.9:8000/api/locais/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };
  

  

  return (
    <View style={styles.container}>

      <View style={styles.titleView}>
        <Text style={styles.titleText}>
          Your Location
        </Text>
      </View>

      <View style={styles.component}>

        <View style={styles.latitudeView}>
          <Text style={styles.latitudeText}>
            Latitude: {currentLatitude}
          </Text>
        </View>

        <View style={styles.longitudeView}>
          <Text style={styles.longitudeText}>
            Longitude: {currentLongitude}
          </Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={getCurrentPosition}>
          <Text style={styles.buttonText}>Get Location</Text>
        </TouchableOpacity>
        
      </View>
      
    </View>
  );
}