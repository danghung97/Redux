import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'
import cart from './cart';
import productDetail from './productDetailt/index';

const mainNavigator = createStackNavigator({
    productDetailScreen: {screen: productDetail},
    cartScreen: {screen: cart},
},{navigationOptions:{
    header: 'none',
    headerMode: 'none'
}});

const App=createAppContainer(mainNavigator);

export default App;