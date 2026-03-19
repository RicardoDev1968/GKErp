<template>
  <v-container fluid class="pa-0">
    <v-row dense class="grey lighten-3 mb-3">
      <v-col class="py-2 px-3">
        <span class="font-weight-bold">{{ titulo }} | </span>{{ subtitulo }}
      </v-col>
    </v-row>

    <slot v-if="!formulario" name="listagem" />

    <v-row v-if="formulario">
      <v-col>
        <v-card class="pa-3">
          <v-card-title>Informações do registro</v-card-title>

          <v-divider />

          <v-card-text>
            <slot name="formulario" />
          </v-card-text>

          <v-divider />

          <v-card-actions class="justify-end">
            <v-btn color="pink" class="white--text">
              <v-icon left>mdi-pencil</v-icon>
              Editar
            </v-btn>

            <v-btn
              color="purple"
              class="white--text"
              @click="$emit('salvar', { id: 1, nome: 'Zé' })"
            >
              <v-icon left>mdi-content-save</v-icon>
              Salvar
            </v-btn>

            <v-btn
              color="black"
              class="white--text"
              @click="$emit('update:formulario', false)"
            >
              <v-icon left>mdi-cancel</v-icon>
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ComponentePagina',

  props: {
    titulo: {
      type: String,
      default: ''
    },
    subtitulo: {
      type: String,
      default: ''
    },
    formulario: {
      type: Boolean,
      default: false
    }
  }
}
</script>
