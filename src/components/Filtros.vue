<template>
    <div>
        <v-row dense>
      <v-col>
        <v-card style="background-color: white !important;">
          <v-card-title>
            Filtro do Sistema
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text class="py-1">
            <slot />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn color="purple" class="white--text" @click="$emit('adicionar')">
               <v-icon color="white" left> mdi-plus-circle </v-icon>
               Adicionar
            </v-btn>
            <v-btn color="pink" class="white--text">
              <v-icon color="white" left> mdi-magnify </v-icon>
              Pesquisar
            </v-btn>
            <v-btn color="black" class="white--text" @click="$emit('limparFiltros')">
              <v-icon color="white" left> mdi-cancel </v-icon>
              Limpar Filtros
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    </div>
</template>

<script>
export default {
  name: 'ComponenteFiltro'
}
</script>

<style>
.card-filtro {
  background-color: #ffffff !important;
}
</style>
