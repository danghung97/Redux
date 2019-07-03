
const stateDefault=[
    {id: 0, price: 899000, amount: 1, maxAmount: 15}, 
    {id: 1, price:799000, amount: 5, maxAmount: 20},
    {id: 2, price: 899000, amount: 2, maxAmount: 15},    
    {id: 3, price: 899000, amount: 3, maxAmount: 15},
    {id: 4, price: 899000, amount: 4, maxAmount: 15},
    {id: 5, price: 899000, amount: 6, maxAmount: 15}
]

const arrReducer = (state=stateDefault, action)=>{
    if(action.type==='INCREASE'){
        return state.map(item=>{
            if(item.id!==action.id) return item;
            return {...item, amount: item.amount+1}
        });
    }
    if(action.type==='DECREASE'){
        return state.map(item=>{
            if(item.id!==action.id) return item;
            return {...item, amount: item.amount-1}
        });
    }
    if(action.type==='DELETE_ITEM'){
        return state.map(item=>{
            if(item.id !== action.id) return item;
            return {...item, amount: 0}
        })
    }
    if(action.type==='ADD_ITEM'){
        return [{
            id: state.length,
            price: action.price,
            amount: action.amount,
            maxAmount: 15
        }].concat(state)
    }
    return state;
}

export default arrReducer;