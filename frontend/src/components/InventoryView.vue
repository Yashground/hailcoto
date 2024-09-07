// eslint-disable-next-line vue/multi-word-component-names
<template>
  <v-container>
    <h2>Current Inventory</h2>
    <v-data-table class="elevation-1" :headers="headers" :items="inventory">
      <template #[`item.expiresAt`]="{ item }">
        <span :class="{ 'text-red': isExpiringSoon(item.expiresAt) }">
          {{ item.expiresAt }}
        </span>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  import apiService from '@/services/apiService.ts'

  export default {
    data () {
      return {
        inventory: [],
        headers: [
          { title: 'id', value: 'id' },
          { title: 'name', value: 'name' },
          { title: 'expiresAt', value: 'expiresAt' },
          { title: 'price', value: 'price' },
          { title: 'weight', value: 'weight' },
          { title: 'packagingUnit', value: 'packagingUnit' },
          { title: 'available', value: 'available' },
        ],
      }
    },
    mounted () {
      this.fetchInventory()
    },
    methods: {
      async fetchInventory () {
        this.inventory = await apiService.getAll('inventory')
      },
      isExpiringSoon (expiryDate) {
        const today = new Date()
        const expiry = new Date(expiryDate)
        const differenceInDays = (expiry - today) / (1000 * 3600 * 24)
        return differenceInDays < 15// Highlight if expiring in less than 7 days
      },
    },
  }
</script>
