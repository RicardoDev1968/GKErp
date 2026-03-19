<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      width="220"
      color="#f7f7f7"
      class="drawer-custom"
    >
    <v-list-item to="/" class="drawer-header" color="white">
      <div>
        <div class="drawer-brand">
          <v-img
            src="@/assets/logo.png"
            max-width="50"
            max-height="50"
            contain
            class="md-0"
          />
          <span class="logo-text">ERP</span>
        </div>
      </div>
    </v-list-item>
      <v-list dense nav class="pt-2">
        <v-list-item link class="menu-item" to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Início
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="menu-item">
          <v-list-item-icon>
            <v-icon>mdi-package-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Estoque</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="menu-item">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Usuários</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link class="menu-item">
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Relatórios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="purple"
      dark
      flat
      height="70"
      class="appbar-custom"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-spacer />
      <div class="search-wrapper">
        <v-text-field
          dense
          solo
          hide-details
          prepend-inner-icon="mdi-magnify"
          placeholder="Pesquise pela descrição da página..."
          class="search-bar"
        />
      </div>

      <v-btn icon class="user-btn ml-3" @click="efetuarlogin">
        <v-icon size="40">mdi-account-circle</v-icon>
      </v-btn>
      <v-btn icon class="user-btn ml-3" to="/about">
        <v-icon size="40" left>mdi-information</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main-content grey lighten-4">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: true
  }),
  methods: {
    efetuarlogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.drawer-custom {
  border-right: 1px solid #e0e0e0;
}

.drawer-header {
  height: 70px;
  background: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  overflow: hidden;
}

.drawer-brand {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-img {
  flex-shrink: 0;
  margin-right: 10px;
}

.logo-text {
  color: white;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 1px;
  line-height: 1;
}

.appbar-custom {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.search-wrapper {
  width: 100%;
  max-width: 420px;
}

.search-bar .v-input__slot {
  background: white !important;
  border-radius: 10px !important;
}

.search-bar input::placeholder {
  color: #666 !important;
  opacity: 1;
}

.user-btn {
  margin-right: 4px;
}

.main-content {
  padding: 12px;
}

.menu-item {
  min-height: 46px !important;
}

.menu-item .v-list-item__title {
  font-weight: 500;
}
</style>
