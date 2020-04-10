import Metadata from '@/components/Metadata'
import {List, Card as Product} from '@/components/Product'
import Page from '@/components/Page'
import {productsAPI} from '@/services/api'

const Index = ({products = [], error = null}) => (
    <Page error={error}>
        <Metadata/>
        <List>
            {products.map(product => 
                <Product 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                />
            )}
        </List>
    </Page>
)

Index.getInitialProps = async () => {
    let products = []
    let error = null
    
    try {
        const {data} = await productsAPI.all()
        products = data
    } catch (err) {
        error = err
    }

    return {
        products,
        error
    }
}

export default Index
