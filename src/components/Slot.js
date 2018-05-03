import React from 'react'
import PropTypes from 'prop-types'

import * as constants from '../constants'

const Slot = ({ onClick }) => {
    return <div onClick={onClick} style={styles.slot} />
}
Slot.propTypes = {
    onClick: PropTypes.func
}
export default Slot

const styles = {
    slot: {
        border: '1px dotted lightgreen',
        borderRadius: '20px',
        width: constants.CARD_WIDTH,
        height: constants.CARD_HEIGHT,
        margin: constants.CARD_MARGIN,
        display: 'inline-block'
    },
}
