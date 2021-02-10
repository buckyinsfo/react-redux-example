import {BUY_CAKE} from './cakeTypes'

export const buyCake = () => {
    // return an action
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
