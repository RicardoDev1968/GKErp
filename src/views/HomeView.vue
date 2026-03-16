<template>
 <v-container fluid class="mt-1">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>IGDIRECIONADOR</v-card-title>
           <v-divider></v-divider>

          <v-card-text>Pesquisar...</v-card-text>

          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue">
              <v-icon color="black" left>
                mdi-magnify
              </v-icon>
              Pesquisar
            </v-btn>
             <v-btn color ="white">
              <v-icon color="black" left>
                mdi-filter-remove
              </v-icon>
              Limpar Filtros
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
 </v-container>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>
