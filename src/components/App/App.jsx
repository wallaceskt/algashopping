import React, { useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import { Wrapper, Container } from './App.styles'
import Checkbox from '../../shared/Checkbox/Checkbox'

function App () {
    const [lettuce, setLettuce] = useState(true)
    const [rice, setRice] = useState(false)

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<div>
                    Produtos disponíveis
                    <Checkbox value={lettuce} title="Alface" onClick={() => setLettuce(!lettuce)} />
                    <Checkbox value={rice} title="Arroz" onClick={() => setRice(!rice)} />
                </div>}

                middle={<div>
                    Sua lista de compras
                </div>}
                
                right={<div>
                    Estatísticas
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App