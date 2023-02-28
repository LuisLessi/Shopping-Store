import Axios from 'axios'

const http = Axios.create({
    baseURL: "https://fakestoreapi.com/products"
})

export default http;