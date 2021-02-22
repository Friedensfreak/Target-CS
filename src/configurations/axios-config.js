import axios from 'axios';

import { config } from './config'

export const appInstance = axios.create({
    baseURL: config.API_URL,
})