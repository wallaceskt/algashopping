import React from 'react'
import { Wrapper, Title, TotalValue } from './Price.styles'

function Price ({ title, totalValue }) {
    return <Wrapper>
        <Title>{ title }:</Title>
        <TotalValue>{ totalValue }</TotalValue>
    </Wrapper>
}

export default Price