<template>
  <div class="app-container components-container">
    <el-container>
      <el-main class="content-main">
        <div>
          <h1 class="title1">Button</h1>
          <p class="description">전역에서 등록, 수정, 삭제 버튼으로 쓰이고, 검색 아이콘 버튼이나 테이블에서 상세 버튼 등으로 사용된다.</p>
        </div>
        <!-- <h2 id="naming" class="title2">Naming</h2>
        <div>
          <div class="component-naming-rule">button [size] [color]</div>
          <div class="content-box">
            ex) &lt;div class="button medium green"&gt;등록&lt;/div&gt;
          </div>
        </div> -->

        <h2 id="spacing" class="title2">Spacing</h2>
        <el-row class="info-box info">
          <el-col :span="16">
            <div class="info-title">
              두 Button 간 간격은 10px로 정의한다.
            </div>
          </el-col>
          <el-col :lg="8" :sm="10" class="content-box" style="text-align: center;">
            <!-- <div class="button medium green" style="margin-right: 10px;">등록</div>
            <div class="button medium red">삭제</div> -->
            <el-button type="success" round>등록</el-button>
            <el-button type="danger" round>삭제</el-button>
          </el-col>
        </el-row>
        <el-row class="info-box info">
          <el-col :span="12">
            <div class="info-title">
              Input과 Button 간 간격은 0px로 정의한다.
            </div>
          </el-col>
          <el-col :lg="12" :sm="12" class="content-box" style="text-align: center;">
            <el-input v-model="input" placeholder="Please input">
              <el-button slot="append" icon="el-icon-search" />
            </el-input>
          </el-col>
        </el-row>

        <h2 id="examples" class="title2">Examples</h2>
        <h3 id="basic-button" class="title3">Basic Button</h3>
        <example no="1">
          <el-button slot="code" round>버튼</el-button>
          <div slot="playground">
            test
          </div>
        </example>
        <h3 id="icon-button" class="title3">Icon Button</h3>
        <example no="2" :use-playground="false">
          <el-button slot="code" icon="el-icon-search" />
        </example>
        <h2 id="guidelines" class="title2">Guidelines</h2>
        <div class="info-box do">
          Small Button은 Table이나 Dialog같은 하위 기능 내에서 사용된다.
        </div>
        <div class="info-box do">
          Search Icon은 목록 검색 Dialog를 띄울 때 사용된다.
        </div>

        <h2 id="props" class="title2">Props</h2>
        <el-table class="props-table" :data="propsData" :header-row-style="{'color': '#606266'}">
          <el-table-column prop="name" label="Name" width="150" />
          <el-table-column prop="type" label="Type" width="150" />
          <el-table-column prop="default" label="Default" width="150" />
          <el-table-column prop="description" label="Description" />
        </el-table>

      </el-main>
      <el-aside v-if="device!=='mobile'" class="right-menu" width="250px">
        <sticky :sticky-top="100">
          <div :style="{'height': windowHeight, 'overflow': 'auto'}">
            <div style="font-weight: 600;">Contents</div>
            <div class="menu-level1">
              <a href="#naming">Naming</a>
            </div>
            <div class="menu-level1">
              <a href="#spacing">Spacing</a>
            </div>
            <div class="menu-level1">
              <a href="#examples">Examples</a>
            </div>
            <div class="menu-level2">
              <a href="#basic-button">Basic Button</a>
            </div>
            <div class="menu-level2">
              <a href="#icon-button">Icon Button</a>
            </div>
            <div class="menu-level1">
              <a href="#guidelines">Guidelines</a>
            </div>
            <div class="menu-level1">
              <a href="#props">Props</a>
            </div>
          </div>
        </sticky>
      </el-aside>
    </el-container>

  </div>
</template>

<script>
import Sticky from '@/components/Sticky'
import Example from '@/components/Example'
import { mapGetters } from 'vuex'

export default {
  name: 'ButtonDemo',
  components: { Sticky, Example },
  data() {
    return {
      windowHeight: (window.innerHeight - 150) + 'px',
      cmOptions: {
        lineNumbers: false,
        matchBrackets: true,
        mode: 'text/x-vue'
      },
      content: '',
      propsData: [
        {
          name: 'size',
          type: 'string',
          default: 'null',
          description: 'Button의 사용가능 상태를 설정한다. [medium, small]'
        },
        {
          name: 'color',
          type: 'string',
          default: 'null',
          description: 'Button의 Color를 설정한다. [red, orange, yellow, green, blue, white]'
        },
        {
          name: 'disabled',
          type: 'boolean',
          default: 'false',
          description: 'Button의 사용가능 상태를 설정한다. [true, false]'
        }],
      input: '',
      value: '<div class="button medium red">삭제</div>'
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ]),
    linkList() {
      return []
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowHeight = (window.innerHeight - 150) + 'px'
    })
  },
  method: {

  }
}
</script>

