<script setup lang="ts">
import { Data } from './posts.data';

const props = defineProps<{ date: Data['date'] }>()

function getDateTime() {
    return new Date(props.date.time).toISOString()
}
</script>

<template>
  <dl>
    <dd text-base text-gray-900 font-medium leading-6 dark:text-gray-300>
      <time :datetime="getDateTime()">{{ date.string }}</time>
    </dd>
  </dl>
</template>