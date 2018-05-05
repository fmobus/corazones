import * as constants from '../constants'

export const types = {
    SHUFFLE: 'lead::SHUFFLE',
    DRAW: 'lead::DRAW_CARD'
}

export const draw = () => {
    return { type: types.DRAW }
}
export const shuffle = () => {
    const order = shuffleArray(constants.RANKS)
    return { type: types.SHUFFLE, order }
}

const INITIAL_STATE = {
    cards: constants.RANKS,
    order: shuffleArray(constants.RANKS),
    drawn: undefined
}

const reducer = (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
        case types.SHUFFLE:
            return { ...state, order: action.order }
        case types.DRAW:
            const drawn = state.order[13 - state.cards.length]
            const index = state.cards.indexOf(drawn)
            const before = state.cards.slice(0,index)
            const after = state.cards.slice(index+1, state.cards.length)
            const cards = [ ...before, ...after ]
            return { ...state, cards, drawn }
        default:
            return state
    }
}

export const getCards = (state) => state.lead.cards
export const getCurrentCard = (state) => state.lead.drawn

export default reducer

// *****************************************************************************
// *****************************************************************************
// *****************************************************************************
// *****************************************************************************
// taken from https://bost.ocks.org/mike/shuffle/
function shuffleArray(input) {
    const output = [...input]
    let counter = output.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = output[counter];
        output[counter] = output[index];
        output[index] = temp;
    }

    return output;
}
