import { api } from 'boot/axios'

/**
 * Function genérica para comunicação com API e realização de operações de CRUD
 * @param string url
 */
export default function useApi (url) {
  const get = async () => {
    try {
      const { data } = await api.get(url)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const post = async (body) => {
    try {
      const { data } = await api.post(url, body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const put = async (body) => {
    try {
      const { data } = await api.put(`${url}/${body.id}`, body)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  const remove = async (id) => {
    try {
      const { data } = await api.delete(`${url}/${id}`)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    get,
    post,
    put,
    remove,
  }
}
