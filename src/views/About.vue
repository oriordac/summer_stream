<template>
  <div class="about">
    <h1>This is an about page</h1>

    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Text input" v-model="query">
      </div>
    </div>

    <div class="control">
      <button class="button is-link" @click="fetchAPI">Submit</button>
    </div>

    <div v-if="rowdata">
      <h3>{{rowdata.Data}}</h3>
    </div>

  </div>
</template>

<script>

import axios from 'axios'

export default {
  data: () => ({
    query: "",
    rowdata: {},
    url_base: "https://vzafhox7zf.execute-api.us-east-2.amazonaws.com/dev/se3/"
  }),
  methods: {
    fetchAPI () {
      axios.get(`${this.url_base}?name=${this.query}`)
        .then(res => {
          return res.data;
      }).then(this.setResults);
    },
    setResults (results) {
      this.rowdata = results;
    },
  }
}
</script>
