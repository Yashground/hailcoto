<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="SIT Dashboard" />

    <v-navigation-drawer>
      <v-list>
        <v-list-item> <v-btn block color="blue" to="/inventory">Inventory</v-btn> </v-list-item>
        <v-list-item> <v-btn block color="blue" to="/expiring-soon">Expiring Soon</v-btn></v-list-item>
        <v-list-item> <v-btn block color="blue" to="/redistribution-options">Redistribution</v-btn></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
  //
</script>
