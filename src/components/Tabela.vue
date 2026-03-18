<template>
  <v-row dense class="mt-2">
    <v-col cols="12">
      <v-card>
        <v-card-title class="py-1"> Listagem de Registros </v-card-title>

        <v-divider></v-divider>

        <v-card-text class="pa-0">
          <v-data-table
            :headers="colunas"
            :items="registros"
            :items-per-page="5"
            class="elevation-1"
          ></v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'ComponenteTabela',

  props: {
    colunas: {
      type: [Array],
      default: () => []
    },
    registros: {
      type: [Array],
      default: () => []
    }
  }
}
</script>
