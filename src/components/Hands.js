import React from 'react'

import Card from './Card'
import { RANKS } from '../constants'

const SUITS = "diamonds clubs spades".split(' ')

const Hand = ({suit}) => {
    const onClick = console.log
    return <div className="hand">
        {RANKS.map(rank => <Card key={rank} suit={suit} rank={rank} onClick={onClick} />)}
    </div>
}

const Hands = () => {
    return <div id="Hands">
        {SUITS.map(suit=> <Hand key={suit} suit={suit} />)}
    </div>
}

export default Hands
