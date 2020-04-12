import axios from 'axios';

const api = axios.create({
    // baseURL: é a base padrão da nossa URL de todas as chamadas
    baseURL: 'http://localhost:3333',
})
// outro arquivos conseguem importar este
export default api;