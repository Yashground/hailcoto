<template>
  <v-container>
    <h2>Redistribution Options</h2>
    <v-data-table class="elevation-1" :headers="headers" :items="redistributionOptions">
      <template #[`item.actions`]="{ item }">
        <v-btn color="green" @click="redistribute(item)">
          Redistribute
        </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

  <script>
  import apiService from '@/services/apiService'

  export default {
    data () {
      return {
        redistributionOptions: [],
        headers: [
          { title: 'Organization', value: 'name' },
          { title: 'Location', value: 'location' },
          { title: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
    mounted () {
      this.fetchRedistributionOptions()
    },
    methods: {
      async fetchRedistributionOptions () {
        this.redistributionOptions = await apiService.getAll('redistribution-options')
      },
      redistribute (item) {
        // Implement logic to handle redistribution
        console.log(`Redistributing to ${item.name}`)
      },
    },
  }
  </script>
