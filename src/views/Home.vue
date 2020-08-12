<template>
<div id="movie">
    <section class="section hero is-dark is-bold is-fullheight">
        <div class="columns">
            <div class="column is-one-quarter-desktop"></div>
            <div class="column is-full-mobile is-three-quarters-tablet is-half-desktop">
                <div class="box">
                    <div class="columns">
                        <div class="column is-full has-text-centered">
                            <h1 class="title is-1 has-text-dark">Movie Search</h1>
                            <div class="field has-addons">
                                <div class="control is-expanded">
                                    <input id="movie-search" class="input" type="text" placeholder="Enter a Movie Title">
                                </div>
                                <div class="control">
                                  <a class="button is-dark is-outlined">
                                    Search
                                  </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section class="section notification">
                        <div class="columns has-text-centered container">
                            <div class="column is-half">
                                <img :src="test[0].poster" :alt="test[0].title" class="image" style="margin: auto;">
                            </div>
                            <div class="column is-half">
                                <h2 class="title has-text-dark">{{ test[0].title }}</h2>
                                <hr style="background-color: hsl(0, 0%, 21%);">
                                <h3 class="subtitle has-text-dark">Available on these online, subscription platforms</h3>
                                <div class="tags are-large container" style="justify-content: center">
                                  <p class="tag is-dark" v-for="tag in test[0].providers" :key="tag">
                                    {{ tag }}
                                  </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div class="column is-one-quarter-desktop"></div>
        </div>
    </section>
</div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    test: [
      {
        title: 'Terminator 2',
        poster: 'https://resizing.flixster.com/Cv2EPiuODhgnnvyzXNDUzt4pK4o=/206x305/v1.bTsxMjMyNTU1MTtqOzE4NTAyOzEyMDA7MjIwMDsyOTM0',
        providers: ['HBO', 'Netflix', 'Amazon']
      }
    ]
  })
  
}
</script>
