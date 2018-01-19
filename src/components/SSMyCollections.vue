<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>
        <v-flex sm8 md7 pl-0 pr-0 pt-3 v-for="i in 6" :key="i">
          <v-card raised hover>
            <v-card-media
            :src="require('@/assets/logo.png')"
            height="250px">
            </v-card-media>
            <v-divider></v-divider>
            <v-card flat class="pa-1">
              <v-layout row justify-start align-center>
                <v-flex xs9 pa-4>
                  <v-chip disabled small color="red" text-color="white">CMPU-101-01</v-chip>
                  <h3 class="headline text-xs-left">Introduction to Computer Science</h3>
                  <span class="grey--text text-xs-left">Third Edition</span><br>
                  <span class="grey--text text-xs-left">ISBN: XXXX_XXXX_XXXX </span><br>
                  <span class="grey--text text-xs-left">Author(s): XXXX_XXXX_XXXX </span>
                </v-flex>
                <v-flex xs2 offset-sm1>
                  <v-btn flat ripple icon left color="black" :to="{ path: '/collection' }">
                    <v-icon>keyboard_arrow_right</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-card>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'SSMyCollections',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>
