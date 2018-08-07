<template>
  <div id="app">
    <!-- 网页的头部 -->
    <app-header></app-header>
    
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-sidebar></app-sidebar>


        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          
          <router-view></router-view>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入APPHeader.vue
import AppHeader from './components/AppHeader.vue';
// 导入AppSidebar.vue
import AppSidebar from './components/AppSidebar.vue';



export default {
  // 局部组件
  components: {
    AppHeader,
    AppSidebar
  }

};


</script>

<style>
</style>
