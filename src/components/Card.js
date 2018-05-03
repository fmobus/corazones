import React from 'react'
import PropTypes from 'prop-types'

import * as constants from '../constants'

import cards from '../assets/cards.png'

const Card = ({ suit, rank, onClick }) => {
    const handleClick = () => onClick(suit, rank)

    const top = constants.SUITS.indexOf(suit) * constants.CARD_HEIGHT
    const left = constants.RANKS.indexOf(rank) * constants.CARD_WIDTH
    const cardStyle = {
        backgroundImage: `url(${cards})`,
        backgroundPositionY: -top,
        backgroundPositionX: -left,
    }
    const label = `${rank} of ${suit}`
    return <div style={{ ...styles.card, ...cardStyle }} alt={label} onClick={handleClick}/>
}
Card.propTypes = {
    suit: PropTypes.oneOf(constants.SUITS),
    rank: PropTypes.oneOf(constants.RANKS),
    onClick: PropTypes.func
}
Card.defaultProps = {
    onClick: () => {}
}

const styles = {
    card: {
        border: '1px dotted transparent',
        width: constants.CARD_WIDTH,
        height: constants.CARD_HEIGHT,
        margin: constants.CARD_MARGIN,
        display: 'inline-block',
        padding: 0,
    }
}
export default Card
