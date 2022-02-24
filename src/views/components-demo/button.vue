<template>
  <div class="app-container components-container">
    <el-container>
      <el-main class="content-main">
        <div>
          <h1>Button</h1>
          <p class="description">전역에서 등록, 수정, 삭제 버튼으로 쓰이고, 검색 아이콘 버튼이나 테이블에서 상세 버튼 등으로 사용된다.</p>
        </div>
        <h2 id="naming" class="sub-title">Naming</h2>

        <h2 id="spacing" class="sub-title">Spacing</h2>

        <h2 id="examples" class="sub-title">Examples</h2>
        <h3 id="basic-button" class="sub-sub-title">Basic Button</h3>
        <div class="example-content" />
        <h3 id="icon-button" class="sub-sub-title">Icon Button</h3>
        <div class="example-content" />

        <h2 id="guidelines" class="sub-title">Guidelines</h2>
        <div class="info">
          The secondary small button is great for actions in cards as it stands out from the interface but doesn’t take so much attention.
          The secondary small button is great for actions in cards as it stands out from the interface but doesn’t take so much attention.
          The secondary small button is great for actions in cards as it stands out from the interface but doesn’t take so much attention.
        </div>

        <h2 id="props" class="sub-title">Props</h2>
        <el-table class="props-table" :data="propsData" :header-row-style="{'color': '#606266'}">
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="type" label="Type" width="180" />
          <el-table-column prop="default" label="Default" width="180" />
          <el-table-column prop="description" label="Description" />
        </el-table>
      </el-main>
      <el-aside v-if="device!=='mobile'" class="right-menu" width="250px">
        <sticky :sticky-top="100">
          <div :style="{'height': windowHeight, 'overflow': 'auto'}">
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside<br>
            aside
          </div>
        </sticky>
      </el-aside>
    </el-container>

  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import { mapGetters } from 'vuex'

export default {
  name: 'ButtonDemo',
  components: { Sticky },
  data() {
    return {
      propsData: [{
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Button의 사용가능 상태를 설정한다.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Button의 사용가능 상태를 설정한다.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Button의 사용가능 상태를 설정한다.'
      }]
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'windowHeight'
    ]),
    linkList() {
      return []
    }
  }
}
</script>
