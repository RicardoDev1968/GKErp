<template>
  <pagina-do-ze
    titulo="Gerenciamento de Produtos"
    subtitulo="Cadastre e gerencie os produtos do seu estoque"
    :formulario.sync="modal"
    @salvar="salvarProduto"
  >
    <template #formulario>
      <v-form>
        <v-container fluid>
          <v-row dense>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="formulario.codigo"
                dense
                outlined
                label="Código"
                hide-details
              />
            </v-col>

            <v-col cols="12" md="9">
              <v-text-field
                v-model="formulario.descricao"
                dense
                outlined
                label="Descrição"
                hide-details
              />
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </template>

    <template #listagem>
      <filtro-do-ze
        @limparFiltros="limparFiltros"
        @adicionar="abrirModal"
      >
        <v-row dense>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="filtro.codigo"
              dense
              outlined
              label="Código"
              hide-details
            />
          </v-col>

          <v-col cols="12" md="9">
            <v-text-field
              v-model="filtro.descricao"
              dense
              outlined
              label="Descrição"
              hide-details
            />
          </v-col>
        </v-row>
      </filtro-do-ze>

      <tabela-do-ze
        :colunas="headers"
        :registros="produtosFiltrados"
      />
    </template>
  </pagina-do-ze>
</template>

<script>
export default {
  name: 'HomePage',

  data: () => ({
    modal: false,

    headers: [
      { text: 'Código', value: 'codigo' },
      { text: 'Descrição', value: 'descricao' },
      { text: 'Categoria', value: 'categoria' },
      { text: 'Preço', value: 'preco' },
      { text: 'Estoque', value: 'estoque' }
    ],

    produtos: [
      {
        codigo: '001',
        descricao: 'Whey Protein Concentrado',
        categoria: 'Suplemento',
        preco: 'R$ 129,90',
        estoque: 18
      },
      {
        codigo: '002',
        descricao: 'Creatina 300g',
        categoria: 'Suplemento',
        preco: 'R$ 89,90',
        estoque: 32
      },
      {
        codigo: '003',
        descricao: 'Coqueteleira 700ml',
        categoria: 'Acessório',
        preco: 'R$ 24,90',
        estoque: 45
      }
    ],

    filtro: {
      codigo: '',
      descricao: ''
    },

    formulario: {
      codigo: '',
      descricao: ''
    }
  }),

  computed: {
    produtosFiltrados () {
      return this.produtos.filter(item => {
        const codigoOk = !this.filtro.codigo ||
          item.codigo.toLowerCase().includes(this.filtro.codigo.toLowerCase())

        const descricaoOk = !this.filtro.descricao ||
          item.descricao.toLowerCase().includes(this.filtro.descricao.toLowerCase())

        return codigoOk && descricaoOk
      })
    }
  },

  methods: {
    abrirModal () {
      this.formulario = {
        codigo: '',
        descricao: ''
      }
      this.modal = true
    },

    limparFiltros () {
      this.filtro = {
        codigo: '',
        descricao: ''
      }
    },

    salvarProduto () {
      if (!this.formulario.codigo || !this.formulario.descricao) {
        return
      }

      this.produtos.unshift({
        codigo: this.formulario.codigo,
        descricao: this.formulario.descricao,
        categoria: 'Novo produto',
        preco: 'R$ 0,00',
        estoque: 0
      })

      this.formulario = {
        codigo: '',
        descricao: ''
      }

      this.modal = false
    }
  }
}
</script>
