import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Screen01({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>A premium online store for sporter and their stylish choice</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.imgMain}>
          <Image source={require('../assets/bifour_-removebg-preview.png')} style={styles.imgFour}/>
        </View> 
        <Text style={styles.textContent}>POWER BIKE SHOP</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btnGet} onPress={() => navigation.navigate('Screen02')}>
          <Text style={styles.textBtnGet}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 30,
    backgroundColor: '#fff'
  },
  header:{
    flex: 1,
  },
  textHeader:{
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 400,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'VT323',
    textAlign: 'center',
    paddingHorizontal: 30
  },
  content:{
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imgMain:{
    width: 280,
    height: 290,
    backgroundColor: '#E941411A',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgFour:{
    width: 222,
    height: 205,
    marginTop: 30
  },
  textContent:{
    fontSize: 21,
    fontWeight: 700,
    width: '50%',
    textAlign: 'center',
    marginBottom: 20
  },
  footer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnGet:{
    width: 285,
    height: 51,
    backgroundColor: '#E94141',
    borderRadius: 30,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBtnGet:{
    fontSize: 22,
    color: '#fff',
    fontFamily: 'VT323',
    
  }
});
