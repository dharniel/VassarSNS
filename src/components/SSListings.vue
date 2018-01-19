<template>
  <div>
    <v-toolbar dense color="grey lighten-4" light fixed>
      <v-btn icon :to="{ path: '/home' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Listings</v-toolbar-title>
    </v-toolbar>
    <br>
    <br>
    <div>
      <v-container grid-list-lg>
        <v-layout row wrap justify-center>
          <v-flex sm8 md7 pl-0 pr-0 v-for="i in 6" :key="i">
            <v-card raised>
              <v-card-media
                :src="require('@/assets/logo.png')"
                height="200px">
              </v-card-media>
              <v-layout column>
                <v-card class="ml-2 mr-2" flat tile color="grey lighten-3">
                  <v-card-text class="title text-xs-center pt-2 pb-0">$45</v-card-text>
                  <v-card-text class="subtitle text-xs-center">Pay via: Venmo, Cash, PayPal</v-card-text>
                </v-card>
              </v-layout>
              <v-card-actions>
                <v-btn round outline color="green lighten-1">Edit</v-btn>
                <v-spacer></v-spacer>
                <v-icon color="green lighten-1">remove_red_eye</v-icon>
                <span class="green--text">50</span>
              </v-card-actions>
            </v-card>
          </v-flex>

          <SSCreateListing/>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  import SSCreateListing from '@/components/SSCreateListing'

  export default {
    name: 'Listings',
    data () {
      return {
      }
    },
    methods: {
    },
    components: {
      SSCreateListing
    }
  }
</script>
