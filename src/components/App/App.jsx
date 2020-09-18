import React from 'react';
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import { Wrapper, Container } from './App.styles'

function App () {
    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<div style={ { backgroundColor: 'red' } }>Produtos disponíveis</div>}
                middle={<div style={ { backgroundColor: 'green' } }>Sua lista de compras</div>}
                right={<div style={ { backgroundColor: 'blue' } }>Estatísticas</div>}
            />
        </Container>
    </Wrapper>
}

export default App