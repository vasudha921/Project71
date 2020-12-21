import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScr extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:''
        }
    }
    sumbitStory(){
      db.collection("Stories").doc(this.state.title).get()
      db.collection("Stories").doc(this.state.author).get()
    }
    render(){
      return(
          <View>
              <Header
                    backgroundColor={'teal'}
                    centerComponent={{
                    text: 'My Story Hub',
                    style: { color: '#fff', fontSize: 20 },
                    }}
                />
                <Text style = {styles.text}>Title of the Book:- </Text>
               <TextInput
                  style={styles.inputBox}
                  onChangeText={text => {
                    this.setState({ title: text });
                  }}
                  value={this.state.title}
                />
             <Text style = {styles.text2}>Author of the Book:- </Text>
             <TextInput 
                onChangeText={text => {
                 this.setState({ author:text });
               }}
               style={styles.inputBox2}
               value={this.state.author}
              />
          <TouchableOpacity 
           style= {styles.submit}
           onPress= {this.sumbitStory}>
           <Text> SUBMIT</Text>
          </TouchableOpacity>
               
        </View>
      )
    }
}

const styles = StyleSheet.create({
 inputBox: {
             marginTop: 50,
             width: '80%',
             alignSelf: 'center',
             height: 40,
             textAlign: 'center',
             borderWidth: 4,
             
           },
           inputBox2: {
            marginTop: 20,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,
            
          },
          text:{
            color:'purple',
            fontSize:20,
          },
          text2:{
            color:'purple',
            fontSize:20,
          },
          submit:{
            justifyContent:'center',
            borderWidth:4,
            backgroundColor:'orange',
            marginTop:20,
            marginLeft:150,
            width:75,
            height:45,
          }
    
})