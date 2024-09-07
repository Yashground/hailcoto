<template>
  <v-container>
    <h2>Expiring Soon</h2>
    <v-data-table class="elevation-1" :headers="headers" :items="expiringSoon">
      <template #[`item.expiry`]="{ item }">
        <span class="text-red--text">
          {{ item.expiry }}
        </span>
      </template>
    </v-data-table>
  </v-container>
</template>

  <script>
  import apiService from '@/services/apiService'

  export default {
    data () {
      return {
        expiringSoon: [],
        headers: [
          { title: 'Product', value: 'name' },
          { title: 'Quantity', value: 'quantity' },
          { title: 'Expiry Date', value: 'expiry' },
        ],
      }
    },
    mounted () {
      this.fetchExpiringSoon()
    },
    methods: {
      async fetchExpiringSoon () {
        this.expiringSoon = await apiService.getAll('expiring-soon')
      },
    },
  }
  </script>
