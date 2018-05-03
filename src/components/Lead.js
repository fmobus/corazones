import React from 'react'
import { connect } from 'react-redux'

import * as constants from '../constants'
import * as lead from '../modules/lead'
import Card from './Card'
import Slot from './Slot'

const Lead = ({cards}) => {
    const renderSlot = (rank) => <Slot key={rank} />
    const renderCard = (rank) => <Card key={rank} rank={rank} suit='hearts' />
    const renderSlotOrCard = (rank) => cards.includes(rank)? renderCard(rank) : renderSlot(rank)
    
    return <div id="BountyDeck">
        {constants.RANKS.map(renderSlotOrCard)}
    </div>
}

const mapStateToProps = (state) => ({
    cards: lead.getCards(state)
})

export default connect(mapStateToProps)(Lead)
