import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native-web";
import Card from "./card";


export default function App(){
    return(
        
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.boldText}>hoev;s.</Text>
                    <Image source={require('../pics/cake.png')} />
                </View> 

                    
                </View>
                
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boldText: {
        fontweight: 'bold',
    },
});