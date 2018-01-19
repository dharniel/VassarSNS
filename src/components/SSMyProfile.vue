<template>
  <div>
    <v-toolbar dense color="grey lighten-4" light fixed>
      <v-btn icon :to="{ path: '/home' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>My Profile</v-toolbar-title>
    </v-toolbar>
    <br>
    <br>
    <br>
    <v-layout row justify-center>
      <v-flex sm8 md7 pl-0 pr-0>
        <v-card

          <v-card id="profile_pic" class="pa-3">
            <v-layout row wrap justify-center>
              <v-avatar size="70px"  class="text-xs-center">
                <img src="../assets/logo.png" alt="avatar">
              </v-avatar>
              <v-card-text class="clicky caption blue--text text--darken-2 text-xs-center" @click.native="">Edit Photo</v-card-text>
            </v-layout>
          </v-card>

          <v-divider></v-divider>

          <v-card id="profile_details" class="pa-3">
            <v-layout row wrap justify-center>
              <v-flex xs12>
                <v-text-field
                  label="Name"
                  :value="name">
                </v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-select
                  label="Your class year"
                  :items="years"
                  v-model="class_year"
                  autocomplete
                ></v-select>
              </v-flex>

              <v-flex xs12>
                <v-select
                  label="Your Major(s)"
                  :items="majors"
                  v-model="my_majors"
                  multiple
                  chips
                  autocomplete
                ></v-select>
              </v-flex>

              <v-flex xs12>
                <v-select
                  label="Your Minor(s)"
                  :items="minors"
                  v-model="my_minors"
                  multiple
                  chips
                  autocomplete
                ></v-select>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  label="Book Interests"
                  :value="book_interest"
                  multi-line
                ></v-text-field>
              </v-flex>

              <v-layout row justify-end>
                <v-btn flat color="primary">Save</v-btn>
              </v-layout>
            </v-layout>
          </v-card>
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
        name: 'Daniel Elendu',
        book_interest: 'None',
        my_majors: ['Computer Science'],
        my_minors: ['Mathematics'],
        class_year: 'Junior',
        years: ['Freshman', 'Sophomore', 'Junior', 'Senior'],
        majors: ['Undeclared', 'Anthropology', 'Computer Science', 'Physics', 'Biology', 'Chemistry', 'History', 'French'],
        minors: ['N/A', 'Anthropology', 'Mathematics', 'Computer Science', 'Physics', 'Biology', 'Chemistry', 'History', 'French']
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .clicky {
    cursor: pointer;
    hover:
  }
</style>
