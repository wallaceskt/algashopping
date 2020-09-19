import React, { useEffect, useState } from 'react'
import AppHeader from '../AppHeader/AppHeader'
import AppContainer from '../AppContainer/AppContainer'
import { Wrapper, Container } from './App.styles'
import LineChart from '../../shared/LineChart/LineChart'
import ShoppingList from '../../components/ShoppingList/ShoppingList'
import productsMock from '../../mocks/products.json'
import extractPercentage from '../../utils/extractPercent'
import Price from '../Price/Price'

function App () {
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

    const [products, setProducts] = useState(productsMock.products)
    const [selectedProducts, setSelectedProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        // Filtra os produtos que têm a propriedade checked true
        const newSelectedProducts = products.filter(product => product.checked)
        setSelectedProducts(newSelectedProducts)
    }, [products])

    useEffect(() => {
        const total = selectedProducts
            .map(product => product.price)
            .reduce((a, b) => a + b, 0)
        setTotalPrice(total)
    }, [selectedProducts])

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
                    <LineChart 
                        title="Saudável" 
                        color={colors[0]} 
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('healthy')).length
                        )} 
                    />
                    <LineChart 
                        title="Não tão saudável assim" 
                        color={colors[1]} 
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('junk')).length
                        )} 
                    />
                    <LineChart
                        title="Limpeza" 
                        color={colors[2]} 
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('cleaning')).length
                        )} 
                    />
                    <LineChart
                        title="Outros" 
                        color={colors[3]} 
                        percentage={extractPercentage(
                            selectedProducts.length,
                            selectedProducts.filter(product => product.tags.includes('others')).length
                        )} 
                    />

                    <Price 
                        title="Previsão de gastos" 
                        totalValue={ totalPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'}) }
                    />
                </div>}
            />
        </Container>
    </Wrapper>
}

export default App