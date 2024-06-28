import axios from "axios"
import { base_url } from "../contant"


let get_api = async(endpoint)=>{
    let res = await axios.get(base_url+endpoint) 
    return res;
}

let post_api = async (endpoint,product)=>{
    let res = await axios.post(base_url+endpoint,product)
    return res;
}

let delete_api = async (endpoint,id)=>{
    let res = await axios.delete(base_url+endpoint+`/${id}`)
    return res;
}

let put_api = async (endpoint,product)=>{
    let res = await axios.put(base_url + endpoint+`/${product.id}`, product)
    return res;
}

export{get_api,post_api,delete_api,put_api}