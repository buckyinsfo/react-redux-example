import {BUY_CAKE} from './cakeTypes'

export const buyCake = (number = 1) => {
    // return an action
    return {
        type: BUY_CAKE,
        info: 'First redux action',
        payload: number
    }
}
