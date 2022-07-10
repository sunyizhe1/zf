<template>
  <div>
    <van-cell
      icon="search"
      v-for="(item, index) in list"
      :key="index"
      :value="item.communityName"
      @click="$emit('searchEvent', item.communityName)"
    >
    </van-cell>
  </div>
</template>

<script>
import { getSearch } from '@/api/search'
let timer = null
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  created () { },
  data () {
    return {
      list: ''
    }
  },
  methods: {

  },
  computed: {},
  watch: {
    value: {
      handler (newVal) {
        clearTimeout(timer)
        timer = setTimeout(async () => {
          try {
            const res = await getSearch({ name: newVal, id: 'AREA|88cff55c-aaa4-e2e0' })
            console.log(res)
            this.list = res.data.body
          } catch (err) {
            console.log(err)
          }
        }, 900)
      },
      immediate: true
    }
  },
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
