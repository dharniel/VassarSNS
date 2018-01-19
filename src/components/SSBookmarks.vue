<template>
  <div>
    <v-toolbar dense color="grey lighten-4" light fixed>
      <v-btn icon :to="{ path: '/home' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Bookmarks</v-toolbar-title>
    </v-toolbar>
    <br>
    <br>
    <div>
      <v-container grid-list-lg>
          <v-layout row wrap justify-center>
            <v-flex sm8 md7 pa-3 v-for="i in 6" :key="i">
              <v-chip disabled small color="red" text-color="white">CMPU-101-01</v-chip>
              <v-card raised>
                <v-card flat color="green lighten-1" class="pa-1">
                  <v-layout row align-center>
                    <v-flex xs1>
                      <v-avatar size="36px" class="white lighten-1">
                        <v-icon dark>account_circle</v-icon>
                      </v-avatar>
                    </v-flex>
                    <v-flex xs11>
                      <h3 class="subheading white--text text-xs-right">Daniel Elendu</h3>
                    </v-flex>
                  </v-layout>
                </v-card>
                <v-card-media
                  :src="require('@/assets/logo.png')"
                  height="200px">
                </v-card-media>
                <v-layout column>
                  <v-card class="ml-2 mr-2" flat tile color="grey lighten-3">
                    <v-card-text class="title text-xs-center pt-1 pb-2">Introduction to Computer Science</v-card-text>
                    <v-card-text class="title text-xs-center pt-1">$45</v-card-text>
                    <v-card-text class="subtitle text-xs-center pt-1">Pay via: Venmo, Cash, PayPal</v-card-text>
                  </v-card>
                </v-layout>
                <v-card-actions>
                  <v-btn round outline color="green lighten-1">View</v-btn>
                  <v-spacer></v-spacer>
                  <v-icon color="green lighten-1">remove_red_eye</v-icon>
                  <span class="green--text">50</span>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Bookmarks',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
