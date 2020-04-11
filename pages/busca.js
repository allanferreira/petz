import Metadata from '@/components/Metadata'
import {List as ProductList} from '@/components/Product'
import Page from '@/components/Page'
import {productsAPI} from '@/services/api'
import {Warning} from '@/components/Message'

const Index = ({products = [], query = '', error = null}) => {
 
    const pageTitle = `Bucando por ${query}`
    const hasProducts = products.length > 0

    return (
        <Page error={error}>
            <Metadata pageTitle={pageTitle}/>
            
            {!hasProducts && 
                <Warning title='Nenhum produto encontrado! '>
                    Tente adicionar o nome completo dele na busca.
                </Warning>
            }

            <ProductList products={products}/>
        </Page>
    )
}

Index.getInitialProps = async ({query}) => {

    let products = []
    let error = null
    
    try {
        const {data} = await productsAPI.search(query.q)
        products = data
    } catch (err) {
        error = err
    }

    return {
        query: query.q,
        products,
        error
    }
}

export default Index
