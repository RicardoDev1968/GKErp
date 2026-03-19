<template>
  <v-row dense>
    <v-col cols="12">
      <v-card class="filtro-card" elevation="1">
        <v-card-title class="filtro-title">
          Filtro do Sistema
        </v-card-title>

        <v-divider />

        <v-card-text class="py-4">
          <slot />
        </v-card-text>

        <v-divider />

        <v-card-actions class="justify-end px-4 py-3">
          <v-btn
            color="#6d28d9"
            dark
            depressed
            @click="$emit('adicionar')"
          >
            <v-icon left>mdi-plus-circle</v-icon>
            Adicionar
          </v-btn>

          <v-btn
            color="#0b6835"
            dark
            depressed
          >
            <v-icon left>mdi-magnify</v-icon>
            Pesquisar
          </v-btn>

          <v-btn
            color="#1f2937"
            dark
            depressed
            @click="$emit('limparFiltros')"
          >
            <v-icon left>mdi-cancel</v-icon>
            Limpar Filtros
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ComponenteFiltro'
}
</script>

<style scoped>
.filtro-card {
  border-radius: 14px;
  background: #ffffff !important;
}

.filtro-title {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
}
</style>
