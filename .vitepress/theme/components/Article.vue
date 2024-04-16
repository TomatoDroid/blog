<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
import { data as posts } from '../posts.data'
import Date from './Date.vue'
import Author from './Author.vue'

const { frontmatter: data } = useData()

const route = useRoute()

function fundCurrentIndex() {
  return posts.findIndex(item => item.url === route.path)
}

const date = computed(() => posts[fundCurrentIndex()].date)
const nextPost = computed(() => posts[fundCurrentIndex() - 1])
const prevPost = computed(() => posts[fundCurrentIndex() + 1])
</script>

<template>
  <article
    b-t="xl:~ xl:gray-200 dark:slate-200/5"
  >
    <header
      p-t-6
      p-b="~ xl:10"
      text-center
    >
      <h1
        text="3xl md:5xl sm:4xl"
        leading="9 md:14 sm:10"
        m-b-4 font-extrabold tracking-tight head-base
      >
        {{ data.title }}
      </h1>
      <Date :date="date" />
    </header>
    <div
      xl:grid="~ cols-4 rows-[auto_1fr] gap-x-10"
      b-t="~ gray-200 dark:slate-200/5"
      p-b="16 xl:20"
    >
      <Author />
      <div
        xl="col-span-3 row-span-3 pb-0"
      >
        <!-- vp-dic is theme default class, don't delete!  -->
        <Content class="vp-doc" max-w-none pb-8 pt-10 />
      </div>
      <footer text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2>
        <div v-if="nextPost" b-b b-gray-200 py-8 dark:b-slate-200:5>
          <h2 text-xs tracking-wide uppercase head-base>
            Next Article
          </h2>
          <div link>
            <a :href="nextPost.url">{{ nextPost.title }}</a>
          </div>
        </div>
        <div v-if="prevPost" b-b b-gray-200 py-8 dark:b-slate-200:5>
          <h2 text-xs tracking-wide uppercase head-base>
            Previous Article
          </h2>
          <div link>
            <a :href="prevPost.url">{{ prevPost.title }}</a>
          </div>
        </div>
        <div pt-8>
          <a href="/" link>← Back to the blog</a>
        </div>
      </footer>
    </div>
  </article>
</template>
