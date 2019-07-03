import React, {Component} from 'react';
import{
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import styles from './style';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {toggleIncrease, toggleDecrease, toggleDelete} from './store/actionCreator';

class shopcart extends Component{
  // const [beforePrice, setBP] = useState(990000);
  // const [total, setTotal]= useState(0);
  // const [list, setList] = useState([{
  //   price: 899000, amount: 0, maxAmount: 15}, {price:799000, amount: 5, maxAmount: 20},
  //   {price: 899000, amount: 0, maxAmount: 15},    {price: 899000, amount: 0, maxAmount: 15},
  //   {price: 899000, amount: 0, maxAmount: 15},
  //   {price: 899000, amount: 10, maxAmount: 15},
  // ])

  // function removeproduct(e){
  //   let array= [...list]
  //   let index =  array.indexOf(e)
  //   array.splice(index, 1);
  //   setList(array);
  // }

  // useEffect(()=>{
  //   let rs = 0;
  //   list.map(item=>{
  //     rs=rs+item.amount*item.price;
  //   })  
  //   setTotal(rs); 
  // },[]);

  constructor(props){
    super(props);{
      this.state={
        beforePrice: 990000,
        total: 0,
      }
    }
  }

  componentDidMount(){
    let sum=0;
    this.props.myCarts.map(item=>{
      sum+=item.amount*item.price
    })
    this.setState({total: sum})
  }

  render(){
      return(
        <View style={styles.container}>
          <View style={styles.part1}>
            <Text style={styles.shoppingcart}>Shopping Cart (2)</Text>
          </View>
          <View style={styles.part2}>
            <ScrollView>
            <View style={styles.group}>
              {this.props.myCarts.map(item=>{
                if(item.amount !== 0){
              return(
              <View style={styles.block}>
                <View style={styles.rectangleItem}>
                  <Image style={{width: 77, height: 77}} source={require('../Image/image1.png')} />
                </View>
                <View style={{marginLeft: 17, flex: 1}}>
                  <Text style={styles.title}>Café La Llave Espresso, 110-Ounce Vacuum Sealed Brick Pack</Text>
                  <View style={{marginTop: 3}}>
                    <Text style={styles.descrip}>Variation: Small - Orange</Text>
                  </View>
                  <View style={{marginTop: 3, width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.beforePrice}>{this.state.beforePrice}d</Text>
                    <Text style={styles.discount}>{100-Math.floor((100*item.price)/this.state.beforePrice)}</Text>
                  </View>
                  <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 8}}>
                    <View style={styles.pick}>
                      <TouchableHighlight style={{flex: 1, justifyContent: "center",alignItems: 'center'}}
                      onPress={()=>{
                        if(item.amount===0){
                          alert('This is minimum');
                        }
                        else{
                          this.props.toggleDecrease(item.id)
                          this.setState({total: this.state.total-item.price})
                        }
                      }}>
                        <AntDesign
                        name="minus"
                        style={styles.minusplus}
                        />
                      </TouchableHighlight>
                      <View style={{flex: 1, justifyContent: "center",alignItems: 'center'}}>
                        <Text style={styles.amount}>{item.amount}</Text>
                      </View>
                      <TouchableHighlight style={{flex: 1, justifyContent: "center",alignItems: 'center'}}
                      onPress={()=>{
                        if(item.amount<item.maxAmount){
                          this.props.toggleIncrease(item.id);
                          //setTotal(item.price+total);
                          this.setState({total: this.state.total+item.price})

                        }
                        else{
                          alert('quantity in stock is not enough');
                        }
                      }}
                      >
                        <AntDesign
                        name="plus"
                        style={styles.minusplus}
                        />
                      </TouchableHighlight>
                    </View>
                    <TouchableHighlight onPress={()=>this.props.toggleDelete(item.id)}>
                    <Feather
                    name="trash"
                    style={styles.trash}
                    />
                    </TouchableHighlight>
                </View>
              </View>
              </View>
              )}  
            })}
              <View style={styles.border}></View>
            </View>
            </ScrollView>
          </View>
          <View style={styles.part3}>
            <View style={styles.rectangle}>
              <Text style={styles.subtotal}>Subtotal</Text>
              <Text style={styles.total}>{this.state.total}</Text>
            </View>
          </View>
          <View style={styles.part4}>
            <Text style={styles.checkout}>CHECKOUT</Text>
          </View>
          <View style={{backgroundColor: "#333333"}}>
            <View style={styles.part5}>
              <View>
                
              </View>
            </View>
          </View>
        </View>
      );
    }
}

function mapStateToProps(state){
  return { myCarts: state.myCart }
}

export default connect(mapStateToProps,{
  toggleIncrease, toggleDecrease, toggleDelete
})(shopcart)

        
