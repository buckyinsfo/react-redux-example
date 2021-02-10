import {BUY_ICECREAM } from './iceCreamTypes'

export const buyIceCream = () => {
    // return an action
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    }
}
