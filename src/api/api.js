import * as axios from 'axios'



const instance = axios.create({
    baseURL: 'http://ec2-3-139-90-250.us-east-2.compute.amazonaws.com:8080/'
})

export const api = {
    getList(pageNumber = 1, pageSize = 12) {
        return instance.get(`api/apartments?page=${pageNumber}&count=${pageSize}`)
    }
}