<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="white"
      height="74"
      class="topbar"
    >
      <div class="app-logo" @click="$router.push('/')">
        <img
          src="@/assets/logo.png"
          alt="GK Logo"
          class="logo-img"
        >
        <span class="logo-text">ERP</span>
      </div>

      <v-btn
        icon
        class="mx-2"
        color="#8e8e8e"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>

      <div class="menu-wrapper">
        <v-btn
          v-for="item in menuItems"
          :key="item.label"
          text
          class="menu-btn"
        >
          <span>{{ item.label }}</span>
          <v-icon
            small
            right
            color="#0b6835"
          >
            {{ item.icon }}
          </v-icon>
        </v-btn>
      </div>

      <v-spacer />

      <div class="search-box mr-3">
        <v-text-field
          dense
          flat
          solo
          hide-details
          prepend-inner-icon="mdi-magnify"
          placeholder="Pesquise pelo menu"
        />
      </div>

      <v-menu offset-y>
        <template #activator="{ on, attrs }">
          <v-btn
            color="#0b6835"
            dark
            depressed
            class="mr-3 user-sector-btn"
            v-bind="attrs"
            v-on="on"
          >
            MT
            <v-icon right small>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item>
            <v-list-item-title>MT</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>ADM</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn icon color="#0b6835" class="mr-2">
        <v-icon>mdi-star</v-icon>
      </v-btn>

      <v-btn icon color="#0b6835" class="mr-3">
        <v-icon>mdi-store</v-icon>
      </v-btn>

      <v-avatar color="#0b6835" size="42" class="user-avatar">
        <span class="white--text font-weight-bold">RI</span>
      </v-avatar>
    </v-app-bar>

    <v-main class="main-bg">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    menuItems: [
      { label: 'LOJA', icon: 'mdi-storefront-outline' },
      { label: 'TRANSPORTE', icon: 'mdi-truck-outline' },
      { label: 'FINANCEIRO', icon: 'mdi-finance' },
      { label: 'VENDA ATACADO', icon: 'mdi-cart-outline' },
      { label: 'TI', icon: 'mdi-monitor-dashboard' },
      { label: 'PRECIFICAÇÃO', icon: 'mdi-file-document-outline' },
      { label: 'COMPRAS', icon: 'mdi-package-variant-closed' },
      { label: 'PCM', icon: 'mdi-tools' },
      { label: 'CRÉDITO', icon: 'mdi-cash-multiple' },
      { label: 'DRH', icon: 'mdi-account-group-outline' },
      { label: 'SEGURANÇA', icon: 'mdi-shield-outline' }
    ]
  })
}
</script>

<style scoped>
.topbar {
  border-bottom: 1px solid #ddd6fe;
  background: linear-gradient(90deg, #111827 0%, #1e1b4b 45%, #312e81 100%) !important;
}

.main-bg {
  background: #f5f3ff;
}

.app-logo {
  display: flex;
  align-items: center;
  cursor: pointer;
  min-width: 150px;
}

.logo-img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.logo-text {
  margin-left: 10px;
  font-size: 30px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.menu-wrapper {
  display: flex;
  align-items: center;
  gap: 2px;
  overflow-x: auto;
  scrollbar-width: none;
}

.menu-wrapper::-webkit-scrollbar {
  display: none;
}

.menu-btn {
  min-width: auto !important;
  font-size: 12px;
  font-weight: 700;
  color: #e9d5ff !important;
  letter-spacing: 0.7px;
}

.menu-btn:hover {
  color: #ffffff !important;
}

.search-box {
  width: 250px;
}

.search-box :deep(.v-input__slot) {
  border-radius: 18px !important;
  background: #ede9fe !important;
  box-shadow: none !important;
}

.user-sector-btn {
  border-radius: 8px;
  text-transform: none;
  font-weight: 700;
  background: #7c3aed !important;
}

.user-avatar {
  background: #2563eb !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
</style>
