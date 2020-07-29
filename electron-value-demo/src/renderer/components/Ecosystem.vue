<template>
  <div class="ecosystem">
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">
          vue-devtools
        </a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'Ecosystem',
})
export default class Ecosystem extends Vue {}
</script>
<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    a {
      color: #42a5b9;
    }
  }
}
</style>
