import React from 'react'

import Lead from './Lead'
import PlayingArea from './PlayingArea'
import Hands from './Hands'

const Table = () => {
    return <div style={styles.table}>
        <Lead />
        <PlayingArea />
        <Hands />
    </div>
}
const styles = {
    table: {
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 0,
        top: 0,
        width: '100%',
        margin: 0,
        padding: 0,
        textAlign: 'center'
    }
}
export default Table
