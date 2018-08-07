<template>
    <div>
        <h2 class="sub-header">英雄管理</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link class="btn btn-success" to="/heroes/add" >添加</router-link>
        <div class="table-responsive">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>英雄名称</th>
                        <th>英雄性别</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in list" :key="item.id">
                        <td> {{ index + 1 }} </td>
                        <td> {{ item.name }} </td>
                        <td> {{ item.gender }} </td>
                        <td>
                            <a href="edit.html">编辑</a>
                            &nbsp;&nbsp;
                            <a href="javascript:window.confirm('Are you sure?')">删除</a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>

</template>

<script>
// 导入模块
import axios from "axios";

// 导出模块
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    axios
      .get("http://localhost:3000/heroes")
      .then((response) => {
        if (response.status == 200) {
          this.list = response.data;
        }
      })
      .catch(err => {});
  }
};
</script>

<style>
</style>