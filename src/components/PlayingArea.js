import React from 'react'
import { connect } from 'react-redux'

import * as lead from '../modules/lead'
import * as players from '../modules/players'

import Card from './Card'
import Slot from './Slot'

const PlayingArea = ({ leadCard, playerCards, onDrawLead, onRevertPlayer }) => {
    const renderLeadCard = (rank) => {
        const renderCard = () => <Card rank={rank} suit='hearts' onClick={onDrawLead}/>
        const renderSlot = () => <Slot onClick={onDrawLead}/>
        return (rank)? renderCard() : renderSlot()

    }
    const renderPlayerCard = (suit) => {
        const handleRevert = () => onRevertPlayer(suit)
        const rank = playerCards[suit]
        const renderCard = () => <Card rank={rank} suit={suit} onClick={handleRevert}/>
        const renderSlot = () => <Slot />
        return (rank) ? renderCard() : renderSlot()
    }

    return <div style={styles.playingArea}>
        <div style={styles.lead}>
            {renderLeadCard(leadCard)}
        </div>
        <div style={styles.played}>
            {renderPlayerCard('clubs')}
            {renderPlayerCard('spades')}
            {renderPlayerCard('diamonds')}
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    leadCard: lead.getCurrentCard(state),
    playerCards: players.getCurrentCards(state)
})
const mapDispatchToProps = (dispatch) => ({
    onDrawLead: () => {
        dispatch(lead.draw())
    },
    onRevertPlayer: (suit) => {
        dispatch(players.revert(suit))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(PlayingArea)


const styles = {
    playingArea: {
      padding: '1em',
      // width: '80%'
    },
    lead: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    },
    played: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
}
