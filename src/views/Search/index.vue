<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <seachSuggest
      v-if="value.length !== 0"
      @searchEvent="Search"
      :value="value"
    ></seachSuggest>
  </div>
</template>

<script>
import seachSuggest from '@/views/Search/components/searchSuggest.vue'
import bus from '@/eventbus'
export default {
  created () { },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch () {

    },
    Search (val) {
      this.value = val
      bus.$emit('showVal', val)
      this.$router.push({ name: 'publish' })
      this.value = ''
    },
    onCancel () {
      this.$router.back()
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { seachSuggest }
}
</script>

<style scoped lang='less'>
</style>
