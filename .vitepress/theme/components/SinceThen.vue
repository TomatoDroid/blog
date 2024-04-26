<script setup lang="ts">
import { computed, ref } from 'vue'

const thatTime = ref(new Date('2021-08-01 00:00:00'))
const days = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = today.getTime() - thatTime.value.getTime()
  return diff / (60 * 60 * 24 * 1000) + 1
})

console.log(days.value)
</script>

<!-- <template>
  <div>
    {{ days }}
  </div>
</template> -->
