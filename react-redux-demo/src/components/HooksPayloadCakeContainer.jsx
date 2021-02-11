import React, { useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { buyCake } from '../redux'

const HooksPayloadCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const [number, setNumber] = useState(1)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake(s)</button>
        </div>
    )
}

export default HooksPayloadCakeContainer
