import api from './index'

export default {
    all: () => api.get('products'),
    find: id => api.get(`products/${id}`),
    destroy: id => api.delete(`products/${id}`),
    search: term => api.get(`products?name=${term}`),
}
