<template>
  <div>
    <v-speed-dial
      v-model="fab"
      fixed
      bottom
      right
      direction="top"
      transition="slide-x-reverse-transition"
    >
      <v-btn
        v-model="fab"
        slot="activator"
        color="red"
        dark
        fab
      >
        <v-icon>add</v-icon>
        <v-icon>close</v-icon>
      </v-btn>

      <v-btn chip round color="white" @click="textbook = true">
        Textbook
      </v-btn>

      <v-btn chip round color="white" @click="other = true">
        Other
      </v-btn>
    </v-speed-dial>

    <v-dialog v-model="textbook" max-width="600px">
      <v-card color="white">
        <v-card-title>
          <span class="headline">New Textbook</span>
        </v-card-title>

        <v-card-text class="subheading pb-0">Book Details</v-card-text>
        <v-card-text class="pt-0">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-select
                  label="Course"
                  :items="courses"
                  v-model="course"
                  required
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-select
                  label="Section"
                  :items="course_sections"
                  v-model="course_section"
                  required
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-select
                  label="Book"
                  :items="course_books"
                  v-model="course_book"
                  required
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Edition" hint="1st, 2nd, 3rd, ..." suffix="Edition" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Other Book Details" multi-line hint="Any other information about the book" v-model="nt_details"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-text class="subheading pb-0">Book Category</v-card-text>
        <v-card-text class="pt-0">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-radio-group v-model="row" row>
                  <v-radio label="Free" value="free" @click.native="category = 'free'"></v-radio>
                  <v-radio label="Sell" value="sell" @click.native="category = 'sell'"></v-radio>
                  <v-radio label="Share" value="share" @click.native="category = 'share'"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex v-if="category === 'sell'" xs12>
                <v-text-field label="Cost" prefix="$"></v-text-field>
              </v-flex>
              <v-flex v-else-if="category === 'share'" xs12>
                <v-dialog
                  persistent
                  v-model="modal"
                  lazy
                  full-width
                  width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="Return Date"
                    v-model="date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="date" scrollable actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-text class="subheading pb-0">Book Images</v-card-text>
        <v-card-text pt-0>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn @click="selectImages">Upload</v-btn>
            </v-flex>
            <input
              type="file"
              ref="fileInput"
              accept="image/*"
              style="display: none"
              multiple
              @change="parseSelectedImages"
            />
            <v-flex xs12 pl-2 pr-2>
              <v-list class="grey lighten-3">
                <v-list-tile v-for="item in images" @click="" :key="item">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-spacer></v-spacer>
                  <v-list-tile-action>
                    <v-btn icon @click="removeImage(item)">
                      <v-icon>cancel</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-card-text>

        <v-card-text class="pt-0">
          <small>*indicates required field</small>
        </v-card-text>


        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="textbook = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click="textbook = false">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="other" max-width="600px">
      <v-card color="white">
        <v-card-title>
          <span class="headline">New Non-textbook</span>
        </v-card-title>

        <v-card-text class="subheading pb-0">Book Details</v-card-text>
        <v-card-text class="pt-0">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Book Name" v-model="nt_name" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Author(s)" v-model="nt_authors" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select
                  label="Genre"
                  :items="genres"
                  v-model="nt_genre"
                  chips
                  multiple
                  autocomplete
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Other Book Details" multi-line hint="Any other information about the book" v-model="nt_details"></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-text class="subheading pb-0">Book Category</v-card-text>
        <v-card-text class="pt-0">
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-radio-group v-model="row" row>
                  <v-radio label="Free" value="free" @click.native="category = 'free'"></v-radio>
                  <v-radio label="Sell" value="sell" @click.native="category = 'sell'"></v-radio>
                  <v-radio label="Share" value="share" @click.native="category = 'share'"></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex v-if="category === 'sell'" xs12>
                <v-text-field label="Cost" prefix="$"></v-text-field>
              </v-flex>
              <v-flex v-else-if="category === 'share'" xs12>
                <v-dialog
                  persistent
                  v-model="modal"
                  lazy
                  full-width
                  width="290px"
                >
                  <v-text-field
                    slot="activator"
                    label="Return Date"
                    v-model="date"
                    prepend-icon="event"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="date" scrollable actions>
                    <template slot-scope="{ save, cancel }">
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                        <v-btn flat color="primary" @click="save">OK</v-btn>
                      </v-card-actions>
                    </template>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>

        <v-card-text class="subheading pb-0">Book Images</v-card-text>
        <v-card-text pt-0>
          <v-layout row wrap>
            <v-flex xs12>
              <v-btn @click="selectImages">Upload</v-btn>
            </v-flex>
            <input
              type="file"
              ref="fileInput"
              accept="image/*"
              style="display: none"
              multiple
              @change="parseSelectedImages"
            />
            <v-flex xs12 pl-2 pr-2>
              <v-list class="grey lighten-3">
                <v-list-tile v-for="item in nt_images" @click="" :key="item">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-spacer></v-spacer>
                  <v-list-tile-action>
                    <v-btn icon @click="removeImage(item)">
                      <v-icon>cancel</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-flex>
          </v-layout>
        </v-card-text>


        <v-card-text class="pt-0">
          <small>*indicates required field</small>
        </v-card-text>


        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="other = false">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click="other = false">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'Listings',
    data () {
      return {
        fab: false,
        transition: 'slide-y-reverse-transition',
        date: null,
        modal: false,
        category: null,
        textbook: false,
        other: false,
        courses: [
          'CMPU-101: Introduction to Computer Science',
          'PSYCH-101: Introduction to Psych',
          'MATH-126: Calculus I',
          'MATH-127: Calculus II'
        ],
        course_sections: [
          '01', '02', '03', '04', '51', '52', '53', '54'
        ],
        course_books: [
          'Intro to Computer Science',
          'Principles of Computing',
          'Basics of Computer Science'
        ],
        images: [
          'IMG_00920.jpg',
          'IMG_09242.jpg'
        ],
        nt_name: null,
        nt_authors: null,
        nt_genre: [],
        genres: [
          'Action',
          'Sci-Fi',
          'Drama'
        ],
        nt_images: [
          'Harry Potter.jpg',
          'Jack and the Beanstalk.jpg'
        ]
      }
    },
    methods: {
      selectImages () {
        this.$refs.fileInput.click()
      },
      parseSelectedImages (event) {
        const files = event.target.files
        const noOfImgs = files.length
        for (var i = 0; i < noOfImgs; i++) {
          let fileName = files[i].name
          if (this.textbook) {
            this.images.push(fileName)
          } else if (this.other) {
            this.nt_images.push(fileName)
          }
        }
      },
      removeImage (img) {
        if (this.textbook) {
          let index = this.images.indexOf(img)
          this.images.splice(index, 1)
        } else if (this.other) {
          let index = this.nt_images.indexOf(img)
          this.nt_images.splice(index, 1)
        }
      }
    }
  }
</script>
