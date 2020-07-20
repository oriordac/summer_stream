<template>
  <div class="about">
    <h1>This is an about page</h1>

    <section class="section">
    <!-- Form to search for movie by title -->
    <label class="label">Amazon API Test</label>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Text Input" v-model="query">
      </div>
      <div class="control">
        <a class="button is-info" @click="fetchMovie">Search</a>
      </div>
    </div>
    <!-- Notification containing info from a successful API call -->
    <div class="notification" v-if="typeof movie.Data != 'undefined'">
      <div class="level-item title">{{ movie.Data }}</div>
      <hr>
    </div>
    </section>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    query: "",
    movie: {},
    url_base: "https://vzafhox7zf.execute-api.us-east-2.amazonaws.com/dev/se3/",
  }),
  methods: {
    fetchMovie () {
      fetch(`${this.url_base}?name=${this.query}`)
      .then(res => res.json())
      .then(body => this.setResults(body));
    },
    setResults (results) {
      this.movie = results;
    }
  }
}
</script>
