import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button ,View,TouchableOpacity } from 'react-native';
import { firebase } from './firebase'; // Import the Firebase instance
import {ref, child, push, update } from "firebase/database";
import {db} from './firebase'


export default function App() {

const [driverId,setDriverId]=useState('')

  const [status, setStatus] = useState('Offline'); // Initial status should match the status in the database


  const toggleStatus = () => {
    const newStatus = status === 'Offline' ? 'Online' : 'Offline'; 
    setStatus(newStatus); 
    update(ref(db,'Driver/'+driverId),{
      driverId:driverId,
      status:status
    }).then(()=>{
      alert('Driver status updated')
    })
    .catch((error)=>{
      alert(error)
    })

    
  }

  return (
    <View style={styles.container}>
      <View style={styles.goBtn}>
        <TouchableOpacity onPress={toggleStatus}>
        <Text style={styles.goTxt}>Go</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBtn: {
    backgroundColor: '#2475B0',
    padding: 20,
    borderRadius: 100,
  },
  goTxt:{
    fontWeight:'bold',
    fontSize:20
  }
});
