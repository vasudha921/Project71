import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScr extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.Story}> Read Story </Text>
             </View>
                
        )
    }
}

const styles = StyleSheet.create({
    Story:{
        marginTop:45,
        justifyContent:'center',
        alignItems:'center',
    }
})