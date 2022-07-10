<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item title="区域">
        <van-picker :columns="columns" value-key="label" />
        <van-row>
          <van-col span="8">
            <van-button block>取消</van-button>
          </van-col>
          <van-col span="16">
            <van-button type="primary" block>确定</van-button>
          </van-col>
        </van-row>
      </van-dropdown-item>
      <van-dropdown-item title="租金">
        <van-picker :columns="columns" value-key="label" />
        <van-row>
          <van-col span="8">
            <van-button block>取消</van-button>
          </van-col>
          <van-col span="16">
            <van-button type="primary" block>确定</van-button>
          </van-col>
        </van-row>
      </van-dropdown-item>
      <van-dropdown-item title="方式">
        <van-picker :columns="columns" value-key="label" />
        <van-row>
          <van-col span="8">
            <van-button block>取消</van-button>
          </van-col>
          <van-col span="16">
            <van-button type="primary" block>确定</van-button>
          </van-col>
        </van-row>
      </van-dropdown-item>
      <van-dropdown-item title="筛选" @open="flag = true"></van-dropdown-item>
    </van-dropdown-menu>
    <van-popup position="right" style="height: 100%; width: 70%" v-model="flag">
    </van-popup>
  </div>
</template>

<script>
import { getHouseInquiry } from '@/api/find'
export default {
  async created () {
    try {
      const res1 = await getHouseInquiry({ id: 'AREA|88cff55c-aaa4-e2e0' })
      console.log(res1)
      res1.data.body.area.children[0].children = [{ label: '' }]
      res1.data.body.subway.children[0].children = [{ label: '' }]
      this.columns = [res1.data.body.area, res1.data.body.subway]
      this.columns1 = res1.data.body.rentType
      this.columns2 = res1.data.body.price
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      flag: false,
      columns: [],
      columns1: [],
      columns2: []
    }
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
</style>
