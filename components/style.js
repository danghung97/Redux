import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container:{
      backgroundColor: "#333333",
      height: "100%"
    },
    shoppingcart:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 15,
      lineHeight: 19,
      color: "#FFFFFF",
    },
    part1:{
      width: "90%",
      marginTop: 15,
      marginBottom: 15,
      alignSelf: "center"
    },
    part2:{
      backgroundColor: "#E5E5E5",
      height: "70%"
    },
    group:{
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      width: "90%",
      marginTop: 17,
      alignSelf: 'center',
      justifyContent: "center",
      alignItems: "center",
    },
    block:{
      width: "90%",
      flexDirection: "row",
      marginTop: 18
    },
    rectangleItem:{
      width: 90,
      height: 90,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 6,
      borderWidth: 1,
      borderColor: "#F2F2F2",
    },
    title:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 12,
      lineHeight: 14,
      color: "#4F4F4F"
    },
    descrip:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 10,
      lineHeight: 12,
      color: "#BDBDBD"
    },
    price:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: 16,
      color: "#F9A825"
    },
    pick:{
      width: 110,
      height: 30,
      backgroundColor: "#F8F8F8",
      borderWidth: 1,
      borderColor: "#F2F2F2",
      borderRadius: 6,
      flexDirection: "row"
    },
    beforePrice:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 10,
      lineHeight: 12,
      color: "#BDBDBD"
    },
    discount:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 12,
      lineHeight: 14,
      color: "#333333"
    },
    minusplus:{
      fontFamily: "Material Icons",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: 18,
      color: "#BDBDBD"
    },
    amount:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 14,
      lineHeight: 16,
      color: "#333333"
    },
    trash:{
      fontFamily: "Material Icons",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 18,
      lineHeight: 18,
      color: "#BDBDBD",
    },
    border:{
      borderWidth: 1,
      borderColor: "#E0E0E0",
      width: "90%" ,
      marginTop: 18,
    },
    part3:{
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
    },
    rectangle:{
      width: "90%",
      marginTop: 10,
      marginBottom: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    subtotal:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: 25,
      color: "#4F4F4F",
    },
    total:{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: 16,
      lineHeight: 19,
      color: "#4F4F4F"
    },
    part4:{
      alignItems: "center",
      backgroundColor: "#F9A825",
    },
    checkout:{
      marginTop: 10,
      marginBottom: 10,
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 19,
      color: "#FFFFFF"
    },
    part5:{
      flexDirection: "row",
      marginTop: 10,
      marginBottom: 10,
      alignSelf: "center",
  
    }
  }) 
  
  export default styles;