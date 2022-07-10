<template>
  <div class="city">
    <!-- 头部 -->
    <van-nav-bar title="城市列表" fixed>
      <template #left>
        <van-icon
          name="arrow-left"
          size="18"
          class="icon"
          @click="$router.back()"
        />
      </template>
    </van-nav-bar>
    <!-- 列表 -->
    <van-index-bar :index-list="indexList">
      <div v-for="(item, index) in theList" :key="index">
        <van-index-anchor :index="index">
          {{
            index === "#" ? "当前城市" : index === "Hot" ? "热门城市" : index
          }}
        </van-index-anchor>

        <van-cell
          :title="item2.label"
          v-for="(item2, index2) in item"
          :key="index2"
          @click="onClick(item2)"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotCityList } from '@/api/city'
import citySort from '@/utils/citySort'
export default {
  data () {
    return {
      // 侧边索引对应项
      indexList: [],
      // cell区域标题(外层遍历) cell区域内容(内层遍历)
      theList: {}
    }
  },
  async created () {
    try {
      // 获取所有城市
      const res = await getCityList(1)
      console.log(res)
      // 获取热门城市
      const res2 = await getHotCityList()
      // 拼接#和热门城市
      const obj = {
        '#': [this.$store.state.defaultCityInfo],
        // 热门城市数据
        Hot: res2.data.body
      }
      // console.log(obj)
      // 保存地区数据(需要拼接当前与热门城市选项)
      this.theList = { ...obj, ...citySort(res.data.body) }
      console.log(this.theList)
      // 获取键名保存侧边索引
      this.indexList = Object.keys(this.theList)
    } catch (err) {
      console.error(err)
    }
  },
  methods: {
    onClick (item) {
      this.$store.commit('CHANGE_CITY', {
        cityName: item.label,
        cityId: item.value
      })
      // 必须是返回,因为city与search页面的返回地址不一样

      this.$router.go(-1)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.city {
  padding-top: 70px;
  .van-nav-bar {
    height: 50px;
    z-index: 999;
  }
}
</style>
