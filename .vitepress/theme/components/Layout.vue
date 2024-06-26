<script setup lang="ts">
import { useData } from 'vitepress'
import { useToggle } from '@vueuse/core'
import { nextTick } from 'vue'
import { isDark } from '../composables/dark'
import NotFound from './NotFound.vue'
import Home from './Home.vue'
import Article from './Article.vue'
import Logo from './Logo.vue'
import Footer from './Footer.vue'

const { frontmatter, page } = useData()

const toggleDark = useToggle(isDark)

function enableTransitions() {
  return 'startViewTransition' in document
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
}

async function handleToggleDark() {
  if (!enableTransitions()) {
    toggleDark()
    return
  }

  const clipPath = [
    `inset(${innerHeight}px 0px 0px 0px)`,
    `inset(0px 0px 0px 0px)`,
  ]

  // @ts-ignore
  await document.startViewTransition(async () => {
    toggleDark()
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 500,
      easing: 'ease-in',
      // easing: isDark.value ? 'cubic-bezier(.04,.31,.74,-0.42)' : 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
}
</script>

<template>
  <div mx-auto max-w-3xl px-4 antialiased xl:max-w-5xl sm:px-6 xl:px-0>
    <header>
      <nav flex="~ justify-between items-center" py-10 font-bold>
        <a href="/" aria-label="zhen blog">
          <Logo size-12 />
        </a>
        <div text-sm text-gray-500 leading-5 text-base flex="~ items-center">
          <a href="/" title="home" hover:text-gray-700 dark:hover:text-gray-200>Home</a>
          <span mx-2>·</span>
          <!-- <a href="/blog" title="blog" hover:text-gray-700 dark:hover:text-gray-200>Blog</a>
          <span mx-2>·</span> -->
          <a
            href="https://github.com/TomatoDroid"
            target="_blank"
            title="github"
            i-ph:github-logo
            text-3xl dark:hover:text-gray-200
          />
          <span mx-2>·</span>
          <span flex="~ items-center" w-30px cursor-pointer @click="handleToggleDark">
            <div dark:i-ph:moon-stars i-ph:sun text-3xl />
          </span>
        </div>
      </nav>
    </header>
    <main>
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
    <Footer />
  </div>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
