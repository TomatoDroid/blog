<script setup lang="ts">
import { data as posts } from '../posts.data'
import Date from './Date.vue'
</script>

<template>
  <div pb-8 pt-6>
    <div>
      <h1 text-center text-3xl font-extrabold leading-9>
        hey, I'm liuzhen
      </h1>
      <p class="text-gray-500/60" text-center text-2xl font-bold leading-loose>
        a FrontEnd Developer
      </p>
    </div>
  </div>
  <ul>
    <li v-for="{ title, url, date, excerpt } in posts" :key="url" py-12 b-t="~ #629be70d">
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
