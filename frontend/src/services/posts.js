import useApi from 'src/composables/UseApi'

export default function postsService () {
  const { get, post, put, remove } = useApi('posts')

  return {
    get,
    post,
    put,
    remove,
  }
}
