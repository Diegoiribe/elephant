import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api-laravel-production-85f1.up.railway.app/api/v1'
})

// Metodo Get para buscar datos en la API
export const buscar = async (url, setData) => {
  const respuesta = await api.get(url)
  setData(respuesta.data)
}

// Metodo Post para enviar datos a la API
export const enviar = async (url, dataToSend, setData) => {
  const respuesta = await api.post(url, dataToSend)
  setData(respuesta.data)
}

// Metodo Put para actualizar datos en la API
export const eliminar = async (url) => {
  await api.delete(url)
}
