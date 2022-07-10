<template>
  <div>
    <!-- 头部搜索 -->
    <div class="topBox">
      <span class="city" @click="cityClick"
        >上海<van-icon name="arrow-down" style="margin-left: 5px" />
        <i class="line"></i>
      </span>
      <van-search disabled show-action placeholder="请输入小区或地址">
        <template #action>
          <van-icon name="map-marked" class="map" />
        </template>
      </van-search>
    </div>
    <!-- 筛选导航 -->
    <van-sticky>
      <MyScreen></MyScreen>
    </van-sticky>
    <!-- 房屋列表 -->
    <van-card
      v-for="(item, index) in HouseList"
      :key="index"
      :desc="item.desc"
      :title="item.title"
      :thumb="'http://liufusong.top:8080' + item.houseImg"
      @click="$router.push({ name: 'detail', query: { id: item.houseCode } })"
    >
      <template #tags>
        <van-tag
          plain
          type="danger"
          v-for="(item1, index1) in item.tags"
          :key="index1"
          >{{ item1 }}</van-tag
        >
      </template>
      <template #price>
        {{ item.price + "元/月" }}
      </template>
    </van-card>
  </div>
</template>

<script>
import { getHouseList } from '@/api/find'
import MyScreen from './components/MyScreen.vue'
export default {
  async created () {
    try {
      const res = await getHouseList({ cityId: 'AREA|88cff55c-aaa4-e2e0' })
      console.log(res)
      this.HouseList = res.data.body.list
    } catch (err) {
      console.log(err)
    }
  },
  data () {
    return {
      HouseList: []
    }
  },
  methods: {
    // 选择城市
    cityClick () {
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { MyScreen }
}
</script>

<style scoped lang='less'>
.topBox {
  height: 70px;
  background-color: #21b97a;
}
.van-search {
  position: fixed;
  z-index: 1000;
  top: 10px;
  width: 365px;
  background-color: transparent;
}
.van-search .van-cell {
  position: relative;
  z-index: 10000;
  padding-left: 65px;
  background-color: white;
}
.van-search__action {
  padding-left: 15px;
  font-size: 20px;
}
.city {
  position: absolute;
  left: 18px;
  top: 26px;
  z-index: 1001;
  font-size: 15px;
}
.line {
  position: absolute;
  left: 54px;
  top: 2px;
  width: 1px;
  height: 20px;
  margin-left: 5px;
  background-color: #ccc;
}
</style>
