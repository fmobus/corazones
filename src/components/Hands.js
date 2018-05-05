import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import Slot from './Slot'
import * as constants from '../constants'
import * as players from '../modules/players'

const Hand = ({ suit, cards, onSelectCard }) => {
    const renderSlot = (rank) => <Slot key={rank} />
    const renderCard = (rank) => <Card key={rank} rank={rank} suit={suit} onClick={onSelectCard}/>
    const renderSlotOrCard = (rank) => cards.includes(rank)? renderCard(rank) : renderSlot(rank)

    return <div>
        {constants.RANKS.map(renderSlotOrCard)}
    </div>
}

const Hands = ({ cards, currentCards, onSelectCard, onReplaceCard }) => {
    const handlerSelectCard = (suit, rank) => {
        currentCards[suit] ? onReplaceCard(suit, rank) : onSelectCard(suit, rank)
    }
    return <div id="Hands">
        <Hand onSelectCard={handlerSelectCard} cards={cards.clubs} suit='clubs' />
        <Hand onSelectCard={handlerSelectCard} cards={cards.spades} suit='spades' />
        <Hand onSelectCard={handlerSelectCard} cards={cards.diamonds} suit='diamonds' />
    </div>
}

const mapStateToProps = (state) => ({
    cards: players.getCards(state),
    currentCards: players.getCurrentCards(state)
})
const mapDispatchToProps = (dispatch) => ({
    onSelectCard: (suit, rank) => {
        dispatch(players.play(suit, rank))
    },
    onReplaceCard: (suit, rank) => {
        dispatch(players.revert(suit))
        dispatch(players.play(suit, rank))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Hands)
