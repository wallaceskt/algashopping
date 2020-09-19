import React, { useEffect, useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import { Wrapper, Container } from './App.styles'
import LineChart from '../../shared/LineChart/LineChart'
import ShoppingList from '../../components/ShoppingList/ShoppingList'
import productsMock from '../../mocks/products.json'

function App () {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])

    useEffect(() => {
        // Filtra os produtos que têm a propriedade checked true
        const newSelectedProducts = products.filter(product => product.checked)
        setSelectedProducts(newSelectedProducts)
    }, [products])

    function handleToggle (id, checked, name) {
        const newProducts = products.map(product => 
            product.id === id
            ? {...product, checked: !product.checked} 
            : product

            // if (product.id === id) {
            //     return {
            //         // Spread
            //         ...product,
            //         checked: !product.checked
            //     }
            // } else {
            //     return product
            // }
        )

        setProducts(newProducts)
    }

    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer
                left={<ShoppingList title="Produtos disponíveis" products={products} onToggle={handleToggle} />}

                middle={<ShoppingList title="Sua lista de compras" products={selectedProducts} onToggle={handleToggle} />}
                
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