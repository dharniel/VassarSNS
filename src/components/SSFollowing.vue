<template>
  <div>
    <v-toolbar dense color="grey lighten-4" light fixed>
      <v-btn icon :to="{ path: '/home' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Following</v-toolbar-title>
    </v-toolbar>
    <br>
    <br>
    <br>
    <v-layout row justify-center>
      <v-flex sm8 md7 pl-0 pr-0>
        <v-card class="pa-0">
          <v-layout column>
            <v-layout row justify-center>
              <v-flex xs7>
                <v-select
                  :items="options"
                  v-model="option"
                ></v-select>
              </v-flex>
            </v-layout>

            <v-divider></v-divider>
            <v-divider></v-divider>

            <v-layout row wrap>
              <v-card>
                <v-flex v-if="option === 'Courses'" xs12>
                  <v-expansion-panel class="pa-2" popout>
                     <v-expansion-panel-content v-for="item in departments" :key="item">
                       <div slot="header">{{ item }}</div>
                       <v-card color="grey lighten-3">
                         <v-expansion-panel class="pa-0" inset>
                            <v-expansion-panel-content v-for="item in courses" :key="item">
                              <div slot="header">{{ item.title }}</div>
                              <v-card>
                                  <v-list one-line subheader>
                                     <v-list-tile class="pl-4" avatar>
                                       <v-list-tile-content>
                                         <v-list-tile-title>{{ item.section }}</v-list-tile-title>
                                         <v-list-tile-sub-title>Instructor: {{ item.prof }}</v-list-tile-sub-title>
                                       </v-list-tile-content>
                                       <v-list-tile-action>
                                         <v-checkbox v-model=item.followed></v-checkbox>
                                       </v-list-tile-action>
                                     </v-list-tile>
                                 </v-list>
                              </v-card>
                            </v-expansion-panel-content>
                         </v-expansion-panel>
                       </v-card>
                     </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>


                <v-flex v-else="option === 'Genres'" xs12>
                  <v-expansion-panel class="pa-2">
                     <v-expansion-panel-content v-for="item in genres" :key="item">
                       <div slot="header">{{ item }}</div>
                       <v-card>
                         <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                       </v-card>
                     </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-flex>
              </v-card>
            </v-layout>

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
        option: 'Courses',
        followed: true,
        options: [
          'Courses',
          'Genres'
        ],
        departments: [
          'Computer Science',
          'Anthropology',
          'Psycology',
          'Sociology',
          'Mathematics'
        ],
        courses: [
          {title: 'CMPU-101', section: 'Section 02', followed: 'true', prof: 'Prof.Matt'},
          {title: 'CMPU-102', section: 'Section 01', followed: 'true', prof: 'Prof.Matt'},
          {title: 'CMPU-145', section: 'Section 03', followed: 'true', prof: 'Prof.Matt'},
          {title: 'CMPU-203', section: 'Section 51', followed: 'true', prof: 'Prof.Matt'}
        ],
        genres: [
          'Science Fiction',
          'Non-fiction',
          'Political',
          'Romance'
        ]
      }
    },
    methods: {
    }
  }
</script>
