<script setup lang="ts">
import { useData } from 'vitepress'
import { data as posts } from './posts.data'
import Date from './Date.vue'

const { frontmatter } = useData()
</script>

<template>
  <div pb-8 pt-6>
    <h1 text-3xl text-gray-900 font-extrabold leading-9 tracking-tight md:text-6xl sm:text-4xl dark:text-white md:leading-14 sm:leading-10>
      {{ frontmatter.title }}
    </h1>
    <p mt-5 text-lg text-gray-500 leading-7 dark:text-white>
      {{ frontmatter.subtext }}
    </p>
  </div>
  <ul>
    <li v-for="{ title, url, date, excerpt } in posts" :key="url" py-12 b-t="~ #629be70d">
      <article my-2 xl:grid="~ cols-[1fr_3fr] items-baseline" xl:my-0>
        <Date :date="date" />
        <div my-5 xl:grid-cols-3>
          <div my-6>
            <h2 text-2xl font-bold leading-8 tracking-tight>
              <a text-gray-900 dark:text-white :href="url">
                {{ title }}
              </a>
            </h2>
            <div
              v-if="excerpt"
              prose-base max-w-none text-gray-500 dark:text-gray-300
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
