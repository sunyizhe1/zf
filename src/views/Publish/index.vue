<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="发布房源" left-arrow @click-left="clickEvent" />
    <!-- 列表 -->
    <!-- 房源信息 -->
    <div class="list-header">房源信息</div>
    <van-form @submit="onSubmit">
      <van-field
        name="小区名称"
        label="小区名称"
        placeholder="请输入小区名称"
        :value="CommunityName"
        @click="$router.push({ name: 'search' })"
      />
      <van-field
        v-model="price"
        name="租金"
        label="租金"
        placeholder="请输入租金/月"
      />
      <van-field
        v-model="size"
        name="建筑面积"
        label="建筑面积"
        placeholder="请输入建筑面积"
      />
      <!-- 户型 -->
      <ChoosePannel
        v-for="(item, index) in choose"
        :key="index"
        :label="item"
        :floorInfo="floorInfo"
      ></ChoosePannel>
      <!-- <van-field name="所在楼层" label="所在楼层" placeholder="请选择" />
      <van-field name="朝向" label="朝向" placeholder="请选择" /> -->
      <div class="title">房屋标题</div>
      <van-field
        v-model="title"
        name="房屋标题"
        placeholder="请输入标题(例如:整租 小区名 2室 5000元)"
      />
      <div class="pic">房屋图像</div>
      <van-field name="uploader">
        <template #input>
          <van-uploader multiple />
        </template>
      </van-field>
      <div class="tools">房屋配置</div>
      <van-grid :column-num="5">
        <van-grid-item
          icon="photo-o"
          :text="item"
          v-for="(item, index) in configuration"
          :key="index"
        />
      </van-grid>
      <div class="desc">房屋描述</div>
      <textarea placeholder="请输入房屋描述内容" v-model="desc"></textarea>
      <div class="btns">
        <van-button block>取消</van-button>
        <van-button block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// import { Toast } from 'vant'
// import { publishRoomData } from '@/api/publish'
import bus from '@/eventbus'
import ChoosePannel from './components/ChoosePannel.vue'
export default {
  created () {
    bus.$on('showVal', val => {
      console.log(val)
      this.CommunityName = val
    })
  },

  data () {
    return {
      price: '', // 价格
      size: '', // 面积
      title: '', // 标题
      desc: '', // 房屋描述
      CommunityName: '', // 小区名称的数据
      choose: ['户型', '所在楼层', '朝向'],
      // 朝向信息
      configuration: ['衣柜', '洗衣机', '空调', '天然气', '冰箱', '暖气', '电视', '热水器', '宽带', '沙发'],
      paramsData: {}, // 房源信息
      typeInfo: {}, // 选中的户型信息
      floorInfo: {}, // 选中的楼层信息
      orientedInfo: {} // 选中的朝向信息
    }
  },
  methods: {
    onSubmit () {
      // if (this.uploader.length === 0) return Toast.fail('请上传房源图片')
      // try {
      //   const res = await publishRoomData(this.title, this.desc, this.uploader.join('|'))
      //   console.log(res)
      // } catch (err) {
      //   console.log(err)
      // }
    },
    // 点击退出
    clickEvent () {
      this.$router.push({ name: 'home' })
      this.CommunityName = ''
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: { ChoosePannel }
}
</script>

<style scoped lang='less'>
.list-header {
  padding: 15px 15px 9px;
  width: 100%;
  font-size: 15px;
  color: #21b97a;
  background-color: #fff;
}
.title,
.pic,
.tools,
.title,
.desc {
  height: 44px;
  line-height: 44px;
  font-size: 14px;
  color: #646566;
  padding-left: 16px;
}
textarea {
  width: 100%;
  height: 100px;
}
textarea::placeholder {
  font-size: 14px;
  padding: 8px;
}
.btns {
  display: flex;
}
</style>
