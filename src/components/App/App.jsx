import React, { useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import { Wrapper, Container } from './App.styles'
import Checkbox from '../../shared/Checkbox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'

function App () {
    const [lettuce, setLettuce] = useState(true)
    const [rice, setRice] = useState(false)
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

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
                    <Checkbox value={rice} title="Arroz" onClick={() => setRice(!rice)} />
                </div>}
                
                right={<div>
                    Estatísticas
                    <LineChart title="Saudável" color={colors[0]} percentage={80} />
                    <LineChart title="Não tão saudável assim" color={colors[1]} percentage={20} />
                    <LineChart title="Limpeza" color={colors[2]} percentage={35} />
                    <LineChart title="Outros" color={colors[3 ]} percentage={15} />
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App