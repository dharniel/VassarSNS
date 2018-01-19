<template>
  <div>
    <v-toolbar dense color="grey lighten-4" light fixed>
      <v-btn icon :to="{ path: '/home' }">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>Payment Profiles</v-toolbar-title>
    </v-toolbar>
    <br>
    <br>
    <div>
      <v-container grid-list-lg>
        <v-layout row wrap justify-center>
          <v-flex sm8 md7 pl-0 pr-0>
            <v-card class="pl-0 pr-0 pt-2">
              <v-layout row align-center justify-center>
                <v-flex xs1>
                <v-btn flat icon @click="dialogadd = true">
                  <v-icon>add</v-icon>
                </v-btn>
                </v-flex xs11>
                <v-flex>
                  <v-card-text
                    class="body-1 text-xs-left"
                    @click.native="">
                    Add Payment Profile
                  </v-card-text>
                </v-flex>
              </v-layout>
            </v-card>

            <v-dialog v-model=dialogadd max-width="500px">
              <v-card color="white">
                <v-card-title>
                  <span class="headline">Add Payment Profile</span>
                </v-card-title>

                <v-card-text class="pt-0">
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12>
                        <v-select
                          label="Payment Service"
                          :items="payment_services"
                          v-model="payment_service"
                          required
                        ></v-select>
                      </v-flex>
                      <v-flex v-if="payment_service === 'Other'" xs12>
                        <v-text-field
                          label="Enter Payment Service Name"
                          v-model="custom_payment_service"
                        ></v-text-field>
                        <v-text-field
                          label="Service's Account Name"
                          hint="Your username in the payment service selected above. Enter phone number for Cash"
                          v-model="service_name"
                        ></v-text-field>
                      </v-flex>
                      <v-flex v-else xs12>
                        <v-text-field
                          label="Service's Account Name"
                          hint="Your username in the payment service selected above. Enter phone number for Cash"
                          v-model="service_name"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>

                <v-card-text class="pt-0">
                  <small>*indicates required field</small>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="dialogadd = false">Cancel</v-btn>
                  <v-btn color="blue darken-1" flat @click="dialogadd= false">Create</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-card class="pa-0 mt-4">
              <v-layout row align-center justify-center>
                <v-flex v-if="profileexists === 'false'">
                  <v-card-text class="text-xs-center">No Payment Profiles created</v-card-text>
                </v-flex>
                <v-flex v-else-if="profileexists === 'true'">
                  <v-layout align-center justify-end>
                    <v-flex xs3 pt-0 pb-0>
                      <v-btn flat @click="dialogedit = true">EDIT</v-btn>
                    </v-flex>
                  </v-layout>
                  <v-divider></v-divider>
                  <v-list>
                    <v-list-tile @click="" v-for="item in paymentprofiles" :key="item">
                      <v-list-tile-action>
                        <v-icon color="grey darken-3">credit_card</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ item.service }}: {{ item.link }}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-flex>
              </v-layout>
            </v-card>

            <v-dialog v-model=dialogedit max-width="500px">
              <v-card color="white">
                <v-card-title>
                  <span class="headline">Edit Payment Profiles</span>
                </v-card-title>

                <v-flex v-for="item in paymentprofiles" :key="item">
                  <v-card-text class="pt-0 pb-0 pr-1">
                    <v-container grid-list-xs>
                      <v-layout row align-center>
                        <v-flex xs11 pa-0>
                          <v-layout row align-center>
                            <v-flex xs4 pa-0>
                              <v-card-text class="subheading">{{ item.service }}</v-card-text>
                            </v-flex>
                            <v-flex xs8 pa-0>
                              <v-card-text class="subheading">{{ item.link }}</v-card-text>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                        <v-flex xs2 pa-0>
                          <v-btn icon @click=removeService(item)>
                            <v-icon>cancel</v-icon>
                          </v-btn>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-text>
                </v-flex>

                <v-card-text class="pt-0">
                  <small>*indicates required field</small>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="dialogedit = false">Cancel</v-btn>
                  <v-btn color="blue darken-1" flat @click="dialogedit= false">Create</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Payment Profiles',
    data () {
      return {
        dialogadd: false,
        dialogedit: false,
        profileexists: 'true',
        paymentprofiles: [
          { service: 'Venmo', link: 'daelendu' },
          { service: 'Paypal', link: 'daelendu' },
          { service: 'Cash', link: '+18453092548' }
        ],
        payment_service: 'Venmo',
        payment_services: ['Venmo', 'PayPal', 'Cash', 'Other'],
        custom_payment_service: null
      }
    },
    methods: {
      removeService (item) {
        let index = this.paymentprofiles.indexOf(item)
        this.paymentprofiles.splice(index, 1)
      }
      // Method to create
    }
  }
</script>
