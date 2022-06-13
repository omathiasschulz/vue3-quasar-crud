<template>
  <!-- padding => espaçamento nas laterais -->
  <q-page padding>
    <q-table title="Treats" :rows="posts" :columns="columns" row-key="name" />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import postsService from 'src/services/posts'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const { get } = postsService()

    // ao montar tela realizar a consulta dos artigos
    onMounted(() => {
      getPosts()
    })

    /**
     * Realiza um get dos artigos no API utilizando o axios
     */
    const getPosts = async () => {
      try {
        posts.value = await get()
      } catch (error) {
        console.error(error)
      }
    }

    const columns = [
      {
        name: 'id',
        field: 'id',
        label: 'ID',
        sortable: true,
        align: 'left',
      },
      {
        name: 'title',
        field: 'title',
        label: 'Título',
        sortable: true,
        align: 'left',
      },
      {
        name: 'author',
        field: 'author',
        label: 'Autor',
        sortable: true,
        align: 'left',
      },
    ]

    return { posts, columns }
  },
})
</script>
