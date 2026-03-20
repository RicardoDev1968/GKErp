<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="white"
      height="75"
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
        class="mx-1"
        color="#8e8e8e"
      >
        <!-- <v-icon>mdi-chevron-left</v-icon> -->
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
            color="white"
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
            color=""
            dark
            depressed
            class="mr-3 user-sector-btn"
            v-bind="attrs"
            v-on="on"
          >
            LOCAL
            <v-icon right small>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item>
            <v-list-item-title>G01</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>R02</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-btn icon color="white" class="mr-2">
        <v-icon>mdi-star</v-icon>
      </v-btn>

      <v-btn icon color="white" class="mr-3">
        <v-icon>mdi-store</v-icon>
      </v-btn>

      <v-btn
        to="/login"
        icon
        class="user-btn"
      >
        <v-avatar color="black" size="40" class="user-avatar">
          <v-icon color="white">
            mdi-account
          </v-icon>
        </v-avatar>
      </v-btn>
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
      { label: 'COMPRAS', icon: 'mdi-cart-outline' },
      { label: 'CONTAS', icon: 'mdi-cash-multiple' },
      { label: 'FACULDADE', icon: 'mdi-book' }
    ]
  })
}
</script>

<style scoped>
.topbar {
  border-bottom: 1px solid #ddd6fe;
  background: linear-gradient(90deg, #111827 0%, #1e1b4b 45%, #312e81 100%) !important;
}

.topbar :deep(.v-toolbar__content) {
  padding-left: 8px !important;
  padding-right: 12px !important;
}

.app-logo {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  cursor: pointer;
  margin: 0;
  padding: 0;
}

.logo-img {
  width: 150px;
  height: 70px;
  object-fit: contain;
  display: block;
  margin: 0;
}

.logo-text {
  font-size: 26px;
  font-weight: 800;
  color: #ffffff;
  margin-left: -18px;
  line-height: 1;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.user-btn {
  width: 40px !important;
  height: 40px !important;
  min-width: 40px !important;
  padding: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

</style>
