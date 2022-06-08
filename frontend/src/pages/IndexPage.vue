<template>
  <!-- padding => espaçamento nas laterais -->
  <q-page padding>
    <q-table title="Treats" :rows="posts" :columns="columns" row-key="name" />
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])

    // ao montar tela realizar a consulta dos artigos
    onMounted(() => {
      getPosts()
    })

    /**
     * Realiza um get dos artigos no API utilizando o axios
     */
    const getPosts = async () => {
      try {
        const { data } = await api.get('posts')
        posts.value = data
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
