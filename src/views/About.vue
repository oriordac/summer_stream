<template>
  <div class="about">
    <h1>This is an about page</h1>

    <section class="section">
    <!-- Form to search for movie by title -->
    <label class="label">Azure API Test</label>
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Text Input" v-model="query">
      </div>
      <div class="control">
        <a class="button is-info" @click="fetchMovie">Search</a>
      </div>
    </div>
    <!-- Notification containing info from a successful API call -->
    <div class="notification" v-if="typeof movie.stream_service != 'undefined'">
      <div class="level-item title">{{ movie.stream_service }}</div>
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
    url_base: "http://summerstream.azurewebsites.net/index.php",
  }),
  methods: {
    fetchMovie () {
      fetch(`${this.url_base}?movie_title=${this.query}`)
      .then(res => res.json())
      .then(body => this.setResults(body));
    },
    setResults (results) {
      this.movie = results;
    }
  }
}
</script>
