import React, {Component} from 'react';
import{
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';
import {toggleBuy} from '../store/actionCreator';
import { connect } from 'react-redux';

class pd extends Component{
  constructor(props){
    super(props);{
      this.state={
        amount: 5,
      }
    }
  }

  render(){
  return(
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.part1}>
        <Text style={styles.productdetail}>Product Details</Text>
      </View>
      <View style={styles.part2}>
        <Image style={{height: "100%", width: "100%" }} source={require('../../Image/image1.png')} />
      </View>
      <View style={styles.part3}>
        <Image style={styles.template} source={require('../../Image/image1.png')} />
        <Image style={styles.template} source={require('../../Image/image1.png')} />
        <Image style={styles.template} source={require('../../Image/image1.png')} />
        <Image style={styles.template} source={require('../../Image/image1.png')} />
      </View>
      <View style={styles.part4}>
        <View style={{width: "90%", marginTop: 12, alignSelf: 'center'}}>
          <Text style={styles.title}>Nike Air Jordan 5 Retro Camo</Text>
        </View>
        <View style={{width: "90%", marginTop: 9, alignSelf: 'center', flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.price}>899.000 ₫</Text>
          <Text style={styles.beforeprice}>899.000 ₫</Text>
        </View>
        <View style={{width: "90%", marginTop: 25, alignSelf: 'center'}}>
          <Text style={styles.descrip}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea com modo co
          </Text>
        </View>
        <View style={styles.information}>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.code}>Availability:</Text>
              <Text style={styles.core}>In Stock</Text>
            </View>
            <View style={{marginTop: 8, flexDirection: 'row'}}>
              <Text style={styles.code}>Weight:</Text>
              <Text style={styles.core}>500g</Text>
            </View>
          </View>
          <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.code}>Product Code:</Text>
              <Text style={styles.core}>BS01-284S</Text>
            </View>
            <View style={{marginTop: 8, flexDirection: 'row'}}>
              <Text style={styles.code}>FREE shipping::</Text>
              <Text style={styles.core}>Yes</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.part5}>
        <View style={styles.rectangle}>
          <Text style={styles.quantity}>Quantity</Text>
          <View style={styles.rectangle2}>
            <AntDesign
            name='minus'
            style={styles.minusplus}
            onPress={()=>{
              if(this.state.amount===0){
                return;
              }
              else{
                this.setState({amount: this.state.amount-1});
              }
            }}
            />
            <View style={styles.border}></View>
            <Text style={styles.quantity}>{this.state.amount}</Text>
            <View style={styles.border}></View>
            <AntDesign
            name='plus'
            style={styles.minusplus}
            onPress={()=>{
              if(true){
                this.setState({amount: this.state.amount+1})
              }           
            }}
            />
          </View>
        </View>
      </View>
      <TouchableHighlight style={{flexDirection: 'row', marginTop: 16}} onPress={()=>{this.props.navigation.navigate('cartScreen'),
    this.props.toggleBuy(this.state.amount, 1000000),this.setState({amount: 0})}}>
        <View style={styles.rectangle3}>
          <Text style={styles.buynow}>BUY NOW</Text>
        </View>
      </TouchableHighlight>
    </View>
    </ScrollView>
  )
          }
}

export default connect(null,{toggleBuy})(pd);
