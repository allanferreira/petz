import axios from 'axios'
import productsAPI from './productsAPI'

export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export {
    productsAPI,
}
