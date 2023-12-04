import axios from 'axios'
import { environment } from '../environment/environment.dev'

const axiosClient = axios.create({
    baseURL: `${environment.backendUrl}/api`
})

export default axiosClient
