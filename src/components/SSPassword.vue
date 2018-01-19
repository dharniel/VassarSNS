<template>
  <div>
    <v-toolbar dense color="grey lighten-4" light fixed>
      <v-btn icon :to="{ path: '/home' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Password</v-toolbar-title>
    </v-toolbar>
    <br>
    <br>
    <br>
    <v-layout row justify-center>
      <v-flex sm8 md7 pl-0 pr-0>
        <v-card class="pa-3">
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <v-text-field
              label="Enter old password"
              :append-icon="e1 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
            ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
              label="Enter new password"
              min="8"
              :append-icon="e2 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
            ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
              label="Verify new password"
              :append-icon="e3 ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (e1 = !e1)"
              :type="e1 ? 'password' : 'text'"
            ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-layout row justify-end>
                <v-btn flat color="primary" >Cancel</v-btn>
                <v-btn flat color="primary">Confirm</v-btn>
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
        e1: true,
        e2: true,
        e3: true
      }
    },
    methods: {
    }
  }
</script>
