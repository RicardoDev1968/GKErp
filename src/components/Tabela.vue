<template>
  <v-row dense class="mt-3">
    <v-col cols="12">
      <v-card class="tabela-card" elevation="1">
        <v-card-title class="font-weight-bold">
          Listagem de Registros
        </v-card-title>

        <v-divider />

        <v-card-text class="pa-0">
          <v-data-table
            :headers="colunas"
            :items="registros"
            :items-per-page="5"
            class="tabela-custom"
          />
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
      type: Array,
      default: () => []
    },
    registros: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.tabela-card {
  border-radius: 14px;
  overflow: hidden;
}

.tabela-custom {
  background: #fff;
}
</style>
