<template>
  <div>
    <v-toolbar dense color="grey lighten-4" light fixed>
      <v-btn icon :to="{ path: '/home' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Notifications</v-toolbar-title>
    </v-toolbar>
    <br>
    <br>
    <br>
    <v-layout row justify-center>
      <v-flex sm8 md7 pl-0 pr-0>
        <v-card class="pa-0">
          <v-card-text class="heading">Show Notifications for:</v-card-text>
          <v-layout row wrap>
            <v-flex xs12 pl-2>
              <v-card flat>
                  <v-list one-line subheader>
                     <v-list-tile avatar>
                       <v-list-tile-content>
                         <v-list-tile-title>New Book Listings</v-list-tile-title>
                       </v-list-tile-content>
                       <v-list-tile-action>
                         <v-checkbox
                           v-model="new_book"
                         ></v-checkbox>
                       </v-list-tile-action>
                     </v-list-tile>
                 </v-list>
              </v-card>
            </v-flex>

            <v-flex xs12 pl-2>
              <v-card flat>
                  <v-list one-line subheader>
                     <v-list-tile avatar>
                       <v-list-tile-content>
                         <v-list-tile-title>New Book Follow</v-list-tile-title>
                       </v-list-tile-content>
                       <v-list-tile-action>
                         <v-checkbox
                           v-model="new_book"
                         ></v-checkbox>
                       </v-list-tile-action>
                     </v-list-tile>
                 </v-list>
              </v-card>
            </v-flex>

            <v-flex xs12 pl-2>
              <v-card flat>
                  <v-list one-line subheader>
                     <v-list-tile avatar>
                       <v-list-tile-content>
                         <v-list-tile-title>All comments (for followed books)</v-list-tile-title>
                       </v-list-tile-content>
                       <v-list-tile-action>
                         <v-checkbox
                           v-model="new_book"
                         ></v-checkbox>
                       </v-list-tile-action>
                     </v-list-tile>
                 </v-list>
              </v-card>
            </v-flex>

            <v-flex xs12 pl-2>
              <v-card flat>
                  <v-list one-line subheader>
                     <v-list-tile avatar>
                       <v-list-tile-content>
                         <v-list-tile-title>Private comments (for followed books)</v-list-tile-title>
                       </v-list-tile-content>
                       <v-list-tile-action>
                         <v-checkbox
                           v-model="new_book"
                         ></v-checkbox>
                       </v-list-tile-action>
                     </v-list-tile>
                 </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>

        <v-card class="pa-0 mt-4">
          <v-card-text class="heading">Emails:</v-card-text>
          <v-layout row wrap>
            <v-flex xs12 pl-2>
              <v-card flat>
                  <v-list one-line subheader>
                     <v-list-tile avatar>
                       <v-list-tile-content>
                         <v-list-tile-title>Send Notifications via email</v-list-tile-title>
                       </v-list-tile-content>
                       <v-list-tile-action>
                         <v-checkbox
                            v-model="email_notifications"
                         ></v-checkbox>
                       </v-list-tile-action>
                     </v-list-tile>
                 </v-list>
              </v-card>
            </v-flex>

            <v-flex xs12 pl-4 pr-4 pb-3>
              <v-text-field
                label="Email"
                :value="notifications_email"
                :disabled="!email_notifications"
                hint="Enter valid email"
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-layout row justify-end>
                <v-btn flat color="primary">Save</v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'My Profile',
    data () {
      return {
        new_book: true,
        book_follows: true,
        all_comments: true,
        private_comments: true,
        email_notifications: true,
        notifications_email: null
      }
    },
    methods: {
    }
  }
</script>
