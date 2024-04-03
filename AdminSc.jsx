import { StyleSheet, Text, View, TouchableOpacity, onPress } from 'react-native';

export default function AdminSc({navigation}){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Admin!!!!!!!!!</Text>

        </View>
        
        
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"purple",
        alignItems:"center",
        justifyContent:"center",
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 34,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        paddingHorizontal: 50,
        borderRadius: 30,
    },
})