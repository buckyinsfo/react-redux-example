import React from 'react'
import { connect } from 'react-redux'

const ItemContainer = props => {
    return (
        <div>
            <h2>Items - {props.item}</h2>
        </div>
    )
}

// This implementation isn't ikely 
// but research Master-Detail Design where this would be useful
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }
}

export default connect(mapStateToProps)(ItemContainer)
