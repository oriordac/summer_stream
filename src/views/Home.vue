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
                                    <input id="movie-search" class="input" type="text" placeholder="Enter a Movie Title" v-model="query">
                                </div>
                                <div class="control">
                                  <a class="button is-dark is-outlined" @click="fetchMovie">
                                    Search
                                  </a>
                                </div>
                            </div>
                            <p class="is-3 content" v-if="movie.Message">{{movie.Message}}</p>
                        </div>
                    </div>
                    <!--Display Results-->
                    <section class="section notification" v-if="movie.TitleData">
                        <div class="columns has-text-centered container">
                            <div class="column is-half">
                                <img :src="movie.PosterData" :alt="movie.TitleData" class="image" style="margin: auto;">
                            </div>
                            <div class="column is-half">
                                <h2 class="title has-text-dark">{{ movie.TitleData }}</h2>
                                <hr style="background-color: hsl(0, 0%, 21%);">
                                <h3 class="subtitle has-text-dark">Available on these online, subscription platforms</h3>
                                <div class="tags are-large container" style="justify-content: center">
                                  <p class="tag is-dark" v-for="tag in movie.ServicesData" :key="tag">
                                    {{ tag }}
                                  </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!--Default Section onload-->
                    <section class="section notification" v-else>
                        <div class="columns has-text-centered container">
                            <div class="column is-half">
                                <img :src="example.PosterData" :alt="example.TitleData" class="image" style="margin: auto;">
                            </div>
                            <div class="column is-half">
                                <h2 class="title has-text-dark">{{ example.TitleData }}</h2>
                                <hr style="background-color: hsl(0, 0%, 21%);">
                                <h3 class="subtitle has-text-dark">Available on these online, subscription platforms</h3>
                                <div class="tags are-large container" style="justify-content: center">
                                  <p class="tag is-dark" v-for="tag in example.ServicesData" :key="tag">
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
    query:"",
    movie: {},
    example:{
      TitleData:"SAMPLE MOVIE SEARCH",
      PosterData: "https://resizing.flixster.com/4MrL62heb7yBgBt8zllSeqNZxg4=/206x305/v2/https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
      ServicesData: ["Amazon Prime Video"]
    }
  }),
  methods: {
      fetchMovie() {
        fetch(`${process.env.VUE_APP_API_GET_ROOT}?title=${this.query.toUpperCase()}`)
          .then(response => response.json())
          .then(data => this.movie = data);
      }
    }
  
}
</script>