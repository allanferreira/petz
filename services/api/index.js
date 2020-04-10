import axios from 'axios'
import productsAPI from './productsAPI'

export default axios.create({
    baseURL: 'https://my-json-server.typicode.com/allanferreira/petz-api/',
})

export {
    productsAPI,
}
