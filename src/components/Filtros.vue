<template>
    <div>
        <v-row dense>
      <v-col>
        <v-card dense>
          <v-card-title class="py-0">Filtro do Sistema</v-card-title>
          <v-divider></v-divider>

          <v-card-text class="py-1">
            ///FILTRO deve ser renderizado aqui
            <slot />
          </v-card-text>

          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn color="green" class="white--text">
              <v-icon color="white" left> mdi-magnify </v-icon>
              Pesquisar
            </v-btn>
            <v-btn color="red" class="white--text" @click="$emit('limparFiltros')">
              <v-icon color="white" left> mdi-cancel </v-icon>
              Limpar Filtros
            </v-btn>
            <v-btn color="orange" class="white--text" @click="$emit('adicionar')">
               <v-icon color="white" left> mdi-plus-circle </v-icon>
               Adicionar
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
