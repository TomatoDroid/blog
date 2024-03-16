<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed } from 'vue'
import Date from './Date.vue'
import { data as posts } from './posts.data'
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
  <article xl:b-t dark:b-slate-200:5 xl:b-gray-200>
    <header pb-1 pt-6 text-center xl:pb-10>
      <Date :date="date" />
      <h1
        text-3xl text-gray-900 font-extrabold leading-9 tracking-tight md:text-5xl sm:text-4xl dark:text-white md:leading-14 sm:leading-10
      >
        {{ data.title }}
      </h1>
    </header>
    <div xl:grid="~ cols-4 rows-[auto_1fr] gap-x-10" b-t b-gray-200 pb-16 dark:b-slate-200:5 xl:pb-20>
      <Author />
      <div b-t b-gray-200 xl:col-span-3 xl:row-span-3 dark:b-slate-200:5 xl:pb-0>
        <Content prose-base max-w-none pb-8 pt-10 />
      </div>
      <footer text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2>
        <div v-if="nextPost" b-b b-gray-200 py-8 dark:b-slate-200:5>
          <h2 text-xs text-gray-500 tracking-wide uppercase dark:text-white>
            Next Article
          </h2>
          <div link>
            <a :href="nextPost.url">{{ nextPost.title }}</a>
          </div>
        </div>
        <div v-if="prevPost" b-b b-gray-200 py-8 dark:b-slate-200:5>
          <h2 text-xs text-gray-500 tracking-wide uppercase dark:text-white>
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
