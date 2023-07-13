import axios from "axios"
const instance =axios.create({
    // baseURL:'http://localhost:3000'
    baseURL:"https://yellow-underclothes.cyclic.app/"
})

export default instance;