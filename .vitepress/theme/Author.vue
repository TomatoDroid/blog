<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <dl pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 dark:xl:border-slate-200:5>
    <dd>
      <ul flex justify-center xl:block>
        <li flex items-center gap-x-2>
          <img
            v-if="frontmatter.gravatar"
            :src="`https://gravatar.com/avatar/${frontmatter.gravatar}`"
            alt="author image"
            h-10 w-10 rounded-full
          >
          <img
            v-else-if="frontmatter.avatar"
            :src="frontmatter.avatar"
            alt="author image"
            h-10 w-10 rounded-full
          >
          <dl whitespace-nowrap text-sm font-medium leading-5>
            <dd text-gray-900 dark:text-white>
              {{ frontmatter.author }}
            </dd>
            <dd v-if="frontmatter.twitter">
              <a
                :href="`https://twitter.com/${frontmatter.twitter}`"
                target="_blank"
                rel="noopnener noreferrer"
                link
              >{{ frontmatter.twitter }}</a>
            </dd>
          </dl>
        </li>
      </ul>
    </dd>
  </dl>
</template>
