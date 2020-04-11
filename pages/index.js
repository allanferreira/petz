import Metadata from '@/components/Metadata'
import {List as ProductList} from '@/components/Product'
import Page from '@/components/Page'
import {productsAPI} from '@/services/api'

const Index = ({products = [], error = null}) => (
    <Page error={error}>
        <Metadata/>
        <ProductList products={products}/>
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
