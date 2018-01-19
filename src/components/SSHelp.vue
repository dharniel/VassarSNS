<template>
  <div>
    <v-toolbar dense color="grey lighten-4" light fixed>
      <v-btn icon :to="{ path: '/home' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Help</v-toolbar-title>
    </v-toolbar>
    <br>
    <br>
    <br>
    <v-layout row wrap justify-center>
      <v-flex sm8 md7 pl-0 pr-0>
        <v-card>
        <v-card-text class="text-xs-center">Content coming soon</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'SSHelp',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
