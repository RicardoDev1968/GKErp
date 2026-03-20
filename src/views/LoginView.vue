<template>
  <v-container fluid class="login-page">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="5" lg="4">
        <v-card class="login-card" elevation="8">
          <v-card-text class="pa-8">
            <div class="text-center mb-6">
              <img
                src="@/assets/logo.png"
                alt="GK Logo"
                class="login-logo"
              >
              <div class="login-title">Bem-vindo ao GKErp</div>
              <div class="login-subtitle">
                Faça login para continuar
              </div>
            </div>

            <v-text-field
              v-model="usuario"
              outlined
              dense
              label="Usuário"
              prepend-inner-icon="mdi-account-outline"
              class="mb-3"
            />

            <v-text-field
              v-model="senha"
              :type="mostrarSenha ? 'text' : 'password'"
              outlined
              dense
              label="Senha"
              prepend-inner-icon="mdi-lock-outline"
              :append-icon="mostrarSenha ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append="mostrarSenha = !mostrarSenha"
            />

            <v-alert
              v-if="erro"
              type="error"
              dense
              text
              class="mt-3"
            >
              Usuário ou senha inválidos.
            </v-alert>

            <v-btn
              block
              color="#0b6835"
              dark
              large
              class="mt-5"
              @click="entrar"
            >
              Entrar
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',

  data: () => ({
    usuario: '',
    senha: '',
    mostrarSenha: false,
    erro: false
  }),

  methods: {
    entrar () {
      if (this.usuario === '81180-RICARDO' && this.senha === '221207') {
        this.erro = false
        this.$router.push('/')
        return
      }

      this.erro = true
    }
  }
}

</script>

<style scoped>
.login-page {
  min-height: calc(100vh - 74px);
  background: linear-gradient(135deg, #f5f5f5 0%, #ececec 100%);
}

.login-card {
  border-radius: 18px;
}

.login-logo {
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin-bottom: 14px;
}

.login-title {
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
}

.login-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
}
</style>
