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
            color="#7C3AED"
            dark
            depressed
            @click="$emit('adicionar')"
          >
            <v-icon left>mdi-plus-circle</v-icon>
            Adicionar
          </v-btn>

          <v-btn
            color="#2563EB"
            dark
            depressed
          >
            <v-icon left>mdi-magnify</v-icon>
            Pesquisar
          </v-btn>

          <v-btn
            color="#111827"
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
  border: 1px solid #ddd6fe;
}

.filtro-title {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
}
</style>
