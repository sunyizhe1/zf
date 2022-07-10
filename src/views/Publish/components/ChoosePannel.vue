<template>
  <div>
    <van-field
      readonly
      clickable
      :label="label"
      :value="value"
      placeholder="请选择"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { publishParams } from '@/api/publish'

export default {
  props: {
    label: {
      type: String,
      required: true
    }
  },
  async created () {
    try {
      const res = await publishParams()
      console.log(res)
      res.data.body.roomType.forEach(item => this.typeInfo.push(item.label))
      res.data.body.floor.forEach(item => this.floorInfo.push(item.label))
      res.data.body.oriented.forEach(item => this.orientedInfo.push(item.label))
      console.log(this.floorInfo)
    } catch (err) {
      console.log(err)
    }
    if (this.label === '户型') {
      this.columns = this.typeInfo
    } else if (this.label === '所在楼层') {
      this.columns = this.floorInfo
    } else {
      this.columns = this.orientedInfo
    }
  },
  data () {
    return {
      value: '',
      showPicker: false,
      columns: [],
      paramsData: {}, // 房源信息
      typeInfo: [], // 选中的户型信息
      floorInfo: [], // 选中的楼层信息
      orientedInfo: [] // 选中的朝向信息
    }
  },
  methods: {
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
