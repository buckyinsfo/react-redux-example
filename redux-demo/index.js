const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// *** Our action creators
const buyCake = () => {
    // return an action
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const buyIceCream = () => {
    // return an action
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

// *** Our reducer
// (previousState, action) => newState
const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

// *** Our store
// 1st responsibility
// const store = createStore(reducer)
const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))

// 2nd respinsibility
console.log('Initial state', store.getState())

// 4th responsibility
//const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
const unsubscribe = store.subscribe(() => {})  // with middleware handling logging. 

// 3rd responsibility
store.dispatch(buyCake())

// emit the same more actions.
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

// 5th responsibility
unsubscribe()


