<template>
  <div>
    <v-tabs id="mobile-tabs-5" fixed light grow>
      <v-toolbar dense fixed color="grey lighten-4" light>
        <v-btn icon :to="{ path: '/my_profile' }">
          <v-icon>person_outline</v-icon>
        </v-btn>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>search</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>exit_to_app</v-icon>
        </v-btn>
        <v-tabs-bar class="grey lighten-4" slot="extension">
          <v-tabs-slider color="blue"></v-tabs-slider>
          <v-tabs-item href="#books" @click.native="title = 'Book Collections'" ripple class="primary--text">
            <v-icon>book</v-icon>
          </v-tabs-item>
          <v-tabs-item href="#campus" @click.native="title = 'Notifications'" ripple class="primary--text">
            <v-icon>notifications</v-icon>
          </v-tabs-item>
          <v-tabs-item href="#dashboard" @click.native="title = 'My Hub'" ripple class="primary--text">
            <v-icon>dashboard</v-icon>
          </v-tabs-item>
        </v-tabs-bar>
      </v-toolbar>
      <br>
      <br>
      <br>
      <br>
      <v-tabs-items>
        <v-tabs-content id="books">
          <v-card>
            <SSMyCollections/>
          </v-card>
        </v-tabs-content>

        <v-tabs-content id="campus">
          <v-card flat>
            <SSMyNotifications/>
          </v-card>
        </v-tabs-content>

        <v-tabs-content id="dashboard">
          <v-card>
            <SSHub/>
          </v-card>
        </v-tabs-content>
      </v-tabs-items>
    </v-tabs>

    <SSCreateListing/>
  </div>
</template>

<script>
  import SSMyNotifications from '@/components/SSMyNotifications'
  import SSMyCollections from '@/components/SSMyCollections'
  import SSHub from '@/components/SSHub'
  import SSCreateListing from '@/components/SSCreateListing'

  export default {
    name: 'Hello',
    data () {
      return {
        title: 'Vook$'
      }
    },
    methods: {
    },
    components: {
      SSMyCollections,
      SSMyNotifications,
      SSHub,
      SSCreateListing
    }
  }
</script>
