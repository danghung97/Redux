import{
    Dimensions,
    StyleSheet
} from 'react-native';

const {width: widthScreen}=Dimensions.get('screen');
const w=widthScreen

const styles=StyleSheet.create({
  container:{
    backgroundColor: "#E5E5E5"
  },
  part1:{
    backgroundColor: "#333333"
  },
  productdetail:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    marginLeft: 38,
    marginTop: 20,
    marginBottom: 20
  },
  part2:{
    width: w,
    height: 360,
  },
  part3:{
    width: "90%",
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center'
  },
  template:{
    height: 60,
    width: 60,
    marginRight: 10,
  },
  part4:{
    width: "90%",
    marginTop: 16,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
  },
  title:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 23,
    color: '#000000',
  },
  descrip:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: '300',
    fontSize: 12,
    lineHeight: 14,
    color: '#4F4F4F',
  },
  price:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    color: '#F9A825',
  },
  beforeprice:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#BDBDBD',
    marginLeft: 7,
  },
  information:{
    width: "90%",
    alignSelf: 'center',
    flex: 1,
    marginTop: 11,
    flexDirection:'row',
    marginBottom: 17,
  },
  code:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#4F4F4F',
  },
  core:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    color: '#828282',
    marginLeft: 5
  },
  part5:{
    width: "90%",
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 16,
  },
  rectangle:{
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantity:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
    color: '#333333',
    
  },
  minusplus:{
    fontFamily: "Material Icons",
    fontStyle: "normal",
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 18,
    color: '#BDBDBD',
  },
  rectangle2:{
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: '#F8F8F8',
    borderColor: '#F2F2F2',
    borderWidth: 1,
  },
  border:{
    borderWidth: 1,
    borderColor: '#F2F2F2'
  },
  rectangle3:{
      backgroundColor: '#F9A825',
      flex:2,
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  buynow:{
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    marginTop: 10,
    marginBottom: 10
  }
})

export default styles