import Metadata from '@/components/Metadata'
import {List, Card as Product} from '@/components/Product'
import Page from '@/components/Page'
import {productsAPI} from '@/services/api'
import {Warning} from '@/components/Message'

const Index = ({products = [], error = null}) => (
    <Page error={error}>
        <Metadata/>
        
        {products.length === 0 && 
            <Warning title='Nenhum produto encontrado! '>
                Tente adicionar o nome completo dele na busca.
            </Warning>
        }

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
        products,
        error
    }
}

export default Index
