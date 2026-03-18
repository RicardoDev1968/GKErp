<template>
  <pagina-do-ze
      titulo="Pagina de teste do ze"
      subtitulo="Subtitulo de teste do ze"
      :formulario="modal"
      @cancelar="modal = false"
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
        name: 'Iorgute',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: 1
      },
      {
        name: 'Iorgute',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: 1
      }
    ],

    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' }
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
    }
  }
}
</script>
