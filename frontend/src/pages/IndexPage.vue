<template>
  <!-- padding => espaçamento nas laterais -->
  <q-page padding>
    <q-table title="Artigos" :rows="posts" :columns="columns" row-key="name">
      <template v-slot:top>
        <span class="text-h5">Artigos</span>
        <q-space />
        <q-btn color="primary" label="Novo" :to="{ name: 'formPost' }"></q-btn>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn icon="delete" color="negative" dense size="sm" @click="handleDeletePosts(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import postsService from 'src/services/posts'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const posts = ref([])
    const { get, remove } = postsService()
    const $q = useQuasar()

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

    const handleDeletePosts = async (id) => {
      try {
        $q.dialog({
          title: 'Confirmar',
          message: 'Deseja realmente excluir o registro?',
          cancel: true,
          persistent: true,
        }).onOk(async () => {
          await remove(id)
          $q.notify({ message: 'Registro removido com sucesso!', icon: 'check', color: 'positive' })
          await getPosts()
        })
      } catch (error) {
        $q.notify({ message: 'Falha ao remover registro!', icon: 'times', color: 'negative' })
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
      {
        name: 'actions',
        field: 'actions',
        label: 'Ações',
        align: 'right',
      },
    ]

    return { posts, columns, handleDeletePosts }
  },
})
</script>
