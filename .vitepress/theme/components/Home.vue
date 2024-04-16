<script setup lang="ts">
import { data as posts } from '../posts.data'
import Date from './Date.vue'
</script>

<template>
  <div pb-8 pt-6>
    <div>
      <h1 mb-10 text-3xl text-white font-extrabold>
        Hey, I'm liuzhen!
      </h1>
      <p text-2xl>
        Welcome to my blog! I'm a passionate open source enthusiast and front-end developer.
      </p>
    </div>
  </div>
  <ul>
    <li v-for="{ title, url, date, excerpt } in posts" :key="url" py-12>
      <article my-2 xl:grid="~ cols-[1fr_3fr] items-baseline" xl:my-0>
        <Date :date="date" />
        <div my-5 xl:grid-cols-3>
          <div my-6>
            <h2 text-2xl font-bold leading-8 tracking-tight>
              <a head-base :href="url">
                {{ title }}
              </a>
            </h2>
            <div
              v-if="excerpt"
              prose-base max-w-none text-base
              v-html="excerpt"
            />
            <div text-balance font-medium leading-6>
              <a link :href="url" aria-label="read more">Read more →</a>
            </div>
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>
