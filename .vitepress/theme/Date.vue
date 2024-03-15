<script setup lang="ts">
import type { Post } from './post.data'

const props = defineProps<{
    date: Post['date']
}>()

function getDateTime() {
    return new Date()
}
</script>

<template>
  <dl>
    <dd text-base text-gray-900 font-medium leading-6 dark:text-gray-300>
      <time datetime="">{{ data }}</time>
    </dd>
  </dl>
</template>
