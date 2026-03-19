<template>
  <v-container fluid class="pa-6">
    <v-row dense class="mb-4">
      <v-col cols="12">
        <div class="page-header">
          <div class="page-title">
            {{ titulo }}
          </div>
          <div class="page-subtitle">
            {{ subtitulo }}
          </div>
        </div>
      </v-col>
    </v-row>

    <slot v-if="!formulario" name="listagem" />

    <v-row v-if="formulario" dense>
      <v-col cols="12">
        <v-card class="page-form-card" elevation="2">
          <v-card-title class="font-weight-bold">
            Informações do registro
          </v-card-title>

          <v-divider />

          <v-card-text class="pt-4">
            <slot name="formulario" />
          </v-card-text>

          <v-divider />

          <v-card-actions class="justify-end px-4 py-3">
            <v-btn
              color="#ec4899"
              dark
              depressed
            >
              <v-icon left>mdi-pencil</v-icon>
              Editar
            </v-btn>

            <v-btn
              color="#6d28d9"
              dark
              depressed
              @click="$emit('salvar')"
            >
              <v-icon left>mdi-content-save</v-icon>
              Salvar
            </v-btn>

            <v-btn
              color="#1f2937"
              dark
              depressed
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

<style scoped>
.page-header {
  background: linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%);
  border-radius: 14px;
  padding: 18px 20px;
  border: 1px solid #ddd6fe;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #111827;
}

.page-subtitle {
  margin-top: 4px;
  font-size: 14px;
  color: #6b7280;
}

.page-form-card {
  border-radius: 14px;
  border: 1px solid #ddd6fe;
}
</style>
