import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Loginscreen = () => {
    const navigation = useNavigation();

    const handle_regsiter = () => {
        console.log("Nara oh register sa");
      }
    const handle_login = () => {
    console.log("Naka sulod naka");
      }
    const handle_forget = () => {
    console.log("dili na nimo ma balik imo password");
        }

    const P_signup = () => {
        navigation.navigate('signup');
    }
  return (
    <View style = {styles.container}>
        <View style = {styles.brandimage}>  
            <Image source = {require('../assets/logologin.png')} style = {styles.brandimage}/>
        </View>
        <View style = {styles.user_container}>
            <Text style = {styles.user_label} >Username</Text>
            <TextInput style = {styles.user_input}  placeholder='' />
        </View>
        <View style = {styles.password_container}>
            <Text style = {styles.pass_label}>Password</Text>
            <TextInput style = {styles.pass_input}  placeholder='' />
        </View>
        
        <View style = {styles.buttons_container}>
        <TouchableOpacity style={styles.register_button} onPress={P_signup}>
            <Text style={styles.register_label}>Regsiter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.login_button} onPress={handle_login}>
            <Text style={styles.login_label}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.forget_button} onPress={handle_forget}>
            <Text style={styles.forget_label}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        
    </View>         
  )
}

export default Loginscreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2D3873'

    },
    brandimage:{
        width:300,
        height:300,
        marginLeft: 15,
        marginTop: 10,
        
    },
    user_container:{
        marginTop: -40,
        marginLeft: 30,
        
    },
    user_label:{
        color: "white",
        fontSize: 15,
        fontStyle: "inter",
        marginLeft:10

    },
    user_input:{
        backgroundColor: 'white',
        width:300,
        borderRadius:20,
        padding:5
    },
    user_container:{
        marginTop: -40,
        marginLeft: 30,
        
    },
    user_label:{
        color: "white",
        fontSize: 15,
        fontStyle: "inter",
        marginLeft:10

    },
    user_input:{
        backgroundColor: 'white',
        width:300,
        borderRadius:20,
        padding:5
    },
    user_container:{
        marginTop: -40,
        marginLeft: 30,
        
    },
    user_label:{
        color: "white",
        fontSize: 15,
        fontStyle: "inter",
        marginLeft:10

    },
    user_input:{
        backgroundColor: 'white',
        width:300,
        borderRadius:20,
        padding:5
    },
    password_container:{
        marginTop: 10,
        marginLeft: 30,
        
    },
    pass_label:{
        color: "white",
        fontSize: 15,
        fontStyle: "inter",
        marginLeft:10

    },
    pass_input:{
        backgroundColor: 'white',
        width:300,
        borderRadius:20,
        padding:5
    },

   register_button:{
    marginTop:30,
    marginLeft:45,
    backgroundColor:'#81BD36', 
    width:130,
    padding:10,
    borderRadius:20
   },

   register_label:{
    textAlign:'center'
   },

   login_button:{
    marginTop:-39,
    marginLeft:185,
    backgroundColor:'#4251DB', 
    width:130,
    padding:10,
    borderRadius:20
   },

   login_label:{
    textAlign:'center'
   },

   forget_button:{
    marginLeft:125,
    marginTop:20
   },
   forget_label:{
    color:'white'
   }



   
})