import * as lead from './lead'
import * as players from './players'

const INITIAL_STATE = {
    current: {
        lead: undefined,
        clubs: undefined,
        spades: undefined,
        diamonds: undefined
    },
    busted: [],
    clubs: [],
    spades: [],
    diamonds: []
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}

export default reducer
