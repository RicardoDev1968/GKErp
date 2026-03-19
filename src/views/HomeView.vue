<template>
  <pagina-do-ze
      titulo="Gerenciamento de Produtos"
      subtitulo="Cadastre e gerencie os produtos do seu estoque"
      :formulario.sync="modal"
      @salvar="teste($event)"
    >
    <template v-slot:formulario>
      <v-form>
      <v-container fluid>
        <v-row dense>
          <v-col cols="12" xl="2" lg="4" md="8" xs="12">
            <v-text-field
              v-model="formulario.codigo"
              dense
              outlined
              label="Codigo"
              hide-details
            />
          </v-col>

          <v-col cols="12" xl="10" lg="8" md="6" xs="12">
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
    <template v-slot:listagem>
      <filtro-do-ze @limparFiltros="limparFiltros" @adicionar="modal = true">
      <v-row dense>
        <v-col cols="12" xl="2" lg="4" md="8" xs="12">
          <v-text-field
            v-model="filtro.codigo"
            dense
            outlined
            label="Codigo"
            hide-details
          />
        </v-col>

        <v-col cols="12" xl="10" lg="8" md="6" xs="12">
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
      :registros="desserts"
    />

    </template>

    <!-- Formulario -->
  </pagina-do-ze>
</template>

<script>
export default {
  name: 'HomePage',

  data: () => ({
    modal: false,
    desserts: [
      {
        name: 'Whey Protein',
        calories: 700,
        fat: 6.0,
        carbs: 200,
        protein: 8.0,
        iron: 1
      },
      {
        name: 'Creatina',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: 1
      }
    ],

    headers: [
      {
        text: 'Sobremesa (porção 100g)',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Calorias', value: 'calories' },
      { text: 'Gordura (g)', value: 'fat' },
      { text: 'Carboidratos (g)', value: 'carbs' },
      { text: 'Proteína (g)', value: 'protein' },
      { text: 'Ferro (%)', value: 'iron' }
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

  methods: {
    limparFiltros () {
      this.filtro = {
        codigo: '',
        descricao: ''
      }
    },
    teste (parametro) {
      console.log(parametro)
    }
  }
}
</script>
