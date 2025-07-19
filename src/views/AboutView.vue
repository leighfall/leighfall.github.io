<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
</script>

<template>
  <div class="section" id="about">
    <SectionHeader>Hello World</SectionHeader>
    <p>
      Ever heard of
      <a href="https://www.neopets.com/" target="_blank" title="Neopets">Neopets</a>
      <span>?</span>
    </p>
    <p>
      That's where I found my passion for front-end website development when I was 14 years old. The
      community inspired me to learn HTML and CSS so that I could create beautiful layouts for the
      guilds I became a part of.
    </p>
    <p>
      I attended
      <a
        href="https://www.vanderbilt.edu"
        class="vanderbilt"
        target="_blank"
        title="Vanderbilt University">
        Vanderbilt University
      </a>
      <span>,</span>
      where I immediately fell in love with learning about the environment, how it has changed, and
      where it is going. While honing my coding skills, my fascination with fossils and rocks, and
      what they could tell us about Earth's past and future, led me to pursue a B.A. in Earth and
      Environmental Sciences.
    </p>
    <p>
      After graduating from Vanderbilt, I worked for
      <a href="https://www.target.com" class="target" target="_blank" title="Target">
        Target Corporation
      </a>
      in various roles. Throughout my 6-year tenure, I spent the last 3 years as a Food Team Lead,
      overseeing the operations of the Grocery and Starbucks departments. I led a team of 18 to
      ensure the floor was fully stocked with fresh fruits, veggies, and pasta while creating the
      ultimate guest experience.
    </p>
    <p>
      Throughout all of this, my passion for coding never wavered. I decided to go back to school at
      the
      <a href="https://www.utk.edu" class="ut" target="_blank" title="University of Tennessee">
        University of Tennessee
      </a>
      in Knoxville to pursue that passion once and for all. I completed a second Bachelor's degree
      in Computer Science, focusing on Software Development, with a minor in Cybersecurity. During
      my final year, I had the pleasure of interning for both
      <a href="https://www.uscellular.com" class="uscc" target="_blank" title="UScellular">
        UScellular
      </a>
      and
      <a href="https://www.kub.org" class="kub" target="_blank" title="Knoxville Utilities Board">
        Knoxville Utilities Board
      </a>
      <span>,</span>
      where I worked on automation projects and customer-facing website development. Currently, I
      work full-time as a Software Engineer for
      <a href="https://www.cadre5.com" target="_blank" title="Cadre5">Cadre5</a>
      <span>,</span>
      where I get to continue expressing my passion for front-end programming using the
      <a href="https://www.vuejs.org" class="vue" target="_blank" title="Vue 3">Vue 3</a>
      framework and building software for national laboratories.
    </p>
    <p>
      When I'm not programming, you can find me doing yoga, playing video games, watching
      binge-worthy shows on Hulu, rock climbing, or crafting my website.
    </p>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/main.less';

.section {
  display: flex;
  flex-flow: column;
  margin-bottom: 35px;
  line-height: 1.7;

  p {
    margin: 2vh 0;
  }
}

.vanderbilt {
  color: @vanderbilt-yellow;

  &:hover {
    color: @purple;
  }
}

.target {
  color: @target-red;

  &:hover {
    color: @purple;
  }
}

.ut {
  color: @tn-orange;

  &:hover {
    color: @purple;
  }
}

.kub {
  color: @kub-blue;

  &:hover {
    color: @purple;
  }
}

.uscc {
  color: @uscc-blue;

  &:hover {
    color: @purple;
  }
}

.vue {
  color: @vue-green;

  &:hover {
    color: @purple;
  }
}
</style>
