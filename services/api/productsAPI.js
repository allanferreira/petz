import api from './index'

export default {
    all: () => api.get('posts'),
    find: id => api.get(`posts/${id}`),
    destroy: id => api.delete(`posts/${id}`),
}
