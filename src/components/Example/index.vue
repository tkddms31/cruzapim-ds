<template>
  <div :id="`example-box--${no}`" class="example-box">
    <div :id="`preview--${no}`" class="preview">
      <slot name="code" />
    </div>
    <div class="style-board">
      <el-button @click="codeShow = !codeShow">
        Code
        <i :class="codeShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down'" />
      </el-button>
      <el-button v-if="usePlayground" @click="playgroundShow = !playgroundShow">
        Playground
        <i :class="playgroundShow ? 'el-icon-arrow-up' : 'el-icon-arrow-down'" />
      </el-button>
    </div>
    <div v-if="playgroundShow" class="playground">
      <slot name="playground" />
    </div>
    <codemirror
      v-if="codeShow"
      :id="`code-editor--${no}`"
      ref="cmEditor"
      class="code-editor"
      :value="code"
      :options="cmOptions"
      @ready="onCmReady"
      @focus="onCmFocus"
      @input="onCmCodeChange"
    />
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/material-darker.css'
import 'codemirror/theme/panda-syntax.css'

export default {
  name: 'Example',
  components: { codemirror },
  props: {
    no: {
      type: String,
      default: '0'
    },
    usePlayground: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      code: '',
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-vue',
        theme: 'panda-syntax',
        lineNumbers: false,
        line: true,
        smartIndent: true
        // more CodeMirror options...
      },
      codeShow: false,
      playgroundShow: false
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
  },
  mounted() {
    // console.log('the current CodeMirror instance object:', this.codemirror)
    // you can use this.codemirror to do something...
    const id = 'preview--' + this.no
    const preview = window.document.getElementById(id)
    this.code = preview.innerHTML

    console.log(this)
  },
  methods: {
    onCmReady(cm) {
      // console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      // console.log('the editor is focused!', cm)
    },
    onCmCodeChange(newCode) {
      this.code = newCode

      const id = 'preview--' + this.no
      const preview = window.document.getElementById(id)
      preview.innerHTML = newCode
    }
  }

}
</script>

<style lang="scss">
.CodeMirror {
  height: auto;
  padding: 20px;
}
</style>>
