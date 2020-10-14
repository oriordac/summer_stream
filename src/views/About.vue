<template>
<div id="about" class="has-background-dark">
    <section class="section">
        <div class="columns">
            <div class="column is-one-quarter-desktop"></div>
            <div class="column is-full-mobile is-three-quarters-tablet is-half-desktop">
                <div class="box">
                    <div class="columns">
                        <div class="column is-full has-text-centered">
                            <h1 class="title is-1 has-text-dark">About Us</h1>
                        </div>
                    </div>
                    <section class="section">
                        <div class="columns">
                            <div class="column is-full has-text-left">
                              <div class="content" v-for="student in students" :key="student.name">
                                <h2 class="title">{{student.name}}</h2>
                                <h3 class="subtitle">Computer Science Graduate Student</h3>
                                <p>{{student.description}}</p>
                                <address>
                                  <p>{{student.email}}</p>
                                </address>
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
import about from '../models/about'
export default {
 
  data: () => ({
    students: about.about
  })
}
</script>
