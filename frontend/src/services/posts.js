import useApi from 'src/composables/UseApi'

export default function postsService () {
  const { get, getOne, post, put, remove } = useApi('posts')

  return {
    get,
    getOne,
    post,
    put,
    remove,
  }
}
