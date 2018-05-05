import * as constants from '../constants'

export const types = {
    PLAY: 'player::play',
    REVERT: 'player::revert'
}

export const play = (suit, rank) => {
    return { type: types.PLAY, suit, rank }
}
export const revert = (suit) => {
    return { type: types.REVERT, suit }
}
const INITIAL_STATE = {
    clubs: { cards: constants.RANKS, drawn: undefined },
    spades: { cards: constants.RANKS, drawn: undefined },
    diamonds: { cards: constants.RANKS, drawn: undefined },
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.PLAY: {
            const suit = action.suit
            const drawn = action.rank
            const index = state[suit].cards.indexOf(drawn)
            const before = state[suit].cards.slice(0, index)
            const after = state[suit].cards.slice(index + 1, state[suit].cards.length)
            const cards = [ ...before, ...after ]
            return { ...state, [suit]: { cards, drawn } }
        }
        case types.REVERT: {
            const suit = action.suit
            const drawn = state[suit].drawn
            const cards = [ ...state[suit].cards, drawn ]
            return { ...state, [suit]: { cards } }
        }
        default:
            return state
    }
}

export default reducer

export const getCurrentCards = (state) => {
    return {
        clubs: state.players.clubs.drawn,
        spades: state.players.spades.drawn,
        diamonds: state.players.diamonds.drawn,
    }
}
export const getCards = (state) => {
    return {
        clubs: state.players.clubs.cards,
        spades: state.players.spades.cards,
        diamonds: state.players.diamonds.cards,
    }
}
