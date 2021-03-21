import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#44475a',
      justifyContent: 'space-around',

    },

    titleView: {
      alignItems: 'center',
      
    },

    titleText:{
      fontSize: 40,
      color: '#8be9fd',
      fontWeight: 'bold',
    },

    latitudeView: {
      backgroundColor: '#f8f8f2',
      marginVertical:10,
      marginHorizontal: '20%',
      padding: 10,
      borderRadius: 50,
    },

    latitudeText: {
      textAlign: 'center',
      fontSize: 20,
    },

    longitudeView: {
      backgroundColor: '#f8f8f2',
      marginVertical:10,
      marginHorizontal: '20%',
      borderRadius: 50,
    },

    longitudeText: {
      textAlign: 'center',
      padding: 10,
      fontSize: 20,
    },

    button: {
      marginHorizontal: '20%',
      marginTop: 50,
      borderRadius: 50,
      backgroundColor: '#ffb86c',
      
      
    },

    buttonText: {
      padding: 15,
      color: '#6272a4',
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      
    }

  });

export default styles