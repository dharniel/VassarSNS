<template>
  <div>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center>

        <v-flex xs12 sm8 md7 pl-0 pr-0>
          <v-card-text class="body-2 pl-0 pb-2"><strong>Book</strong></v-card-text>
          <v-divider color="black"></v-divider>
          <v-divider color="black"></v-divider>
          <v-divider color="black"></v-divider>
          <v-card color="white">
            <v-list>
              <v-list-tile @click="" :to="{ path: '/listings' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">book</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Listings</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="" :to="{ path: '/following' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">whatshot</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Following</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="" :to="{ path: '/bookmarks' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">bookmark</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Bookmarks</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex xs12 sm8 md7 pl-0 pr-0>
          <v-card-text class="body-2 pl-0 pb-2"><strong>Account</strong></v-card-text>
          <v-divider color="black"></v-divider>
          <v-divider color="black"></v-divider>
          <v-divider color="black"></v-divider>
          <v-card color="white">
            <v-list>
              <v-list-tile @click="" :to="{ path: '/my_profile' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">person</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Profile</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="" :to="{ path: '/password' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">lock</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Change Password</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="" :to="{ path: '/notifications' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">notifications</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Notifications</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="" :to="{ path: '/payment_profiles' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">payment</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Payment Profiles</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex xs12 sm8 md7 pl-0 pr-0 pt-3>
          <v-divider color="black"></v-divider>
          <v-divider color="black"></v-divider>
          <v-divider color="black"></v-divider>
          <v-card color="white">
            <v-list>
              <v-list-tile @click="" :to="{ path: '/help' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">help</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Help</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
              <v-list-tile @click="" :to="{ path: '/feedback_issues' }">
                <v-list-tile-action>
                  <v-icon color="grey darken-3">feedback</v-icon>
                    </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Feedback, Issues</v-list-tile-title>
                  </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'SSHub',
    data () {
      return {
        items: [
          {
            action: 'book',
            title: 'Listings',
            items: [
              {
                title: 'VIEW ALL'
              },
              {
                title: 'Sell',
                action: 'attach_money'
              },
              {
                title: 'Share',
                action: 'compare_arrows'
              },
              {
                title: 'Free',
                action: 'money_off'
              }
            ]
          },
          {
            action: 'whatshot',
            title: 'Following',
            items: [
              {
                title: 'Courses'
              },
              {
                title: 'Genres'
              }
            ]
          }
        ]
      }
    },
    methods: {
    }
  }
</script>
