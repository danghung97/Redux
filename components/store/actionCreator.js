
export function toggleIncrease(id){
    return{
        type: 'INCREASE',
        id
    }
}

export function toggleDecrease(id){
    return{
        type: 'DECREASE',
        id
    }
}

export function toggleDelete(id){
    return{
        type: 'DELETE_ITEM',
        id
    }
}

export function toggleBuy(amount, price){
    return{
        type: 'ADD_ITEM',
        amount,
        price
    }
}