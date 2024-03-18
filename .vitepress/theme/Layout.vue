<script setup lang="ts">
import { useData } from 'vitepress'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Article from './Article.vue'
import Logo from './Logo.vue'

const { frontmatter, page } = useData()
</script>

<template>
  <div antialiased dark:bg-slate-900>
    <header mx-auto max-w-3xl px-4 xl:max-w-5xl sm:px-6 xl:px-0>
      <nav flex="~ justify-between items-center" py-10 font-bold>
        <a href="/" aria-label="zhen blog" flex="~ items-center gap-col-2" text-xl>
          <Logo />
        </a>
        <div text-sm text-gray-500 leading-5 dark:text-white flex="~ items-center">
          <a href="/" title="blog" hover:text-gray-700 dark:hover:text-gray-200>Blog</a>
          <span mx-2>·</span>
          <a href="https://github.com/TomatoDroid" target="_blank" title="github" i-ph:github-logo inline-block h-30px w-30px dark:hover:text-gray-200 />
          <!-- <span mx-2>·</span> -->
          <!-- <a i-ph:moon-stars inline-block h-30px w-30px />
          <span mx-2>·</span>
          <a i-ph:sun inline-block h-30px w-30px /> -->
        </div>
      </nav>
    </header>
    <main mx-auto max-w-3xl px-4 xl:max-w-5xl sm:px-6 xl:px-0>
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
