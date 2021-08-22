import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, } from 'react-native';





class App extends React.Component{
constructor(props){
  super(props)
  this.state={
   user:'',


  
  }

}



render(){
  return (
    <View style={styles.container}>

     <TextInput placeholder="Enter your name" style={styles.input}
      value={this.state. user}
      onChangeText={name =>this.setState({user:name})}
      
      /> 

 
      <TouchableOpacity style={styles.btn} onPress={()=>{alert('your name is '+ this.state.user)}}><Text style={{color:"white"}}>Continue</Text></TouchableOpacity>
      <TouchableOpacity >
      <Image
        style={styles.Logo}
        source={require('./assets/images/Zurilogo.png')}
       
      />
      <Text style={styles.linkText}>https://internship.zuri.team/</Text>
      </TouchableOpacity>
      
     
      <StatusBar style="auto"/>
     
    </View>
  );
}

}

export default  App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  btn:{
    width:300,
    height:50,
    backgroundColor:"red",
    borderRadius:30,
    justifyContent:"center",
    alignItems:"center",
  },
  input:{
    width:300,
    height:50,
    borderRadius:30,
    borderColor:"gray",
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20,
    paddingLeft:10,
  },
 
  linkText:{
    position:"absolute",
  marginTop:70,
 marginLeft:-20,
 color:"blue",
  }
});