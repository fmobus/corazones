import React from 'react'
import { connect } from 'react-redux'

import * as lead from '../modules/lead'

import Card from './Card'
import Slot from './Slot'

const PlayingArea = ({ leadCard, onDrawLead }) => {
    const renderLeadCard = () => (leadCard)?
        <Card rank={leadCard} suit='hearts' onClick={onDrawLead}/> : <Slot onClick={onDrawLead}/>

    return <div style={styles.playingArea}>
        <div style={styles.lead}>
            {renderLeadCard()}
        </div>
        <div style={styles.played}>
            <Slot />
            <Slot />
            <Slot />
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    leadCard: lead.getCurrentCard(state)
})
const mapDispatchToProps = (dispatch) => ({
    onDrawLead: () => {
        dispatch(lead.draw())
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
