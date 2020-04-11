import Metadata from '@/components/Metadata'
import Page from '@/components/Page'
import {Detail as ProductDetail} from '@/components/Product'
import {productsAPI} from '@/services/api'

const Index = product => {
    
    const {name, error = null} = product

    return (
        <Page error={error}>
            <Metadata pageTitle={name}/>
            <ProductDetail {...product}/>
        </Page>
    )
}

Index.getInitialProps = async ({query}) => {
    let product = {}
    
    try {
        const {data} = await productsAPI.find(query.id)
        product = data
    } catch (err) {
        product.error = err.response
    }
    
    return product
}

export default Index
