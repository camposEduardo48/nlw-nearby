import axios from 'axios'

// alterar o ip sempre que reiniciar o computador
export const api = axios.create({
  baseURL: 'http://192.168.0.27:3333',
  timeout: 700, // tempo para obter uma resposta, se passar irá parar a requisição
})
