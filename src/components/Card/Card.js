import { StyleSheet, Text, View } from "react-native";

const Card=({name,userName,email})=>{
    return(
        <View style={styles.container}>
            <View style={styles.left_container}>
                <Text style={styles.name_text}>{name}</Text>
                <Text style={styles.username_text}>{'@'+userName}</Text>
            </View>
            <View style={styles.right_container}>
                <Text style={styles.email_text}>{email}</Text>
            </View>
        </View>
    )
}
export default Card;

const styles=StyleSheet.create({
    container:{
        with:100,
        height:100,
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10,
        borderRadius:10,
        borderBottomWidth:8,
        borderLeftWidth:4,
        borderRightWidth:1,
        borderTopWidth:1,
        backgroundColor:'white'
    },
    left_container:{
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    },right_container:{
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        justifyContent:'center'
    },
    name_text:{
        fontSize:20,
        margin:10,
        fontWeight:'bold'
    },
    username_text:{
        fontSize:16,
        marginLeft:10,
        marginTop:10
    },
    email_text:{
        marginRight:5,
        color:'gray'
    }
})