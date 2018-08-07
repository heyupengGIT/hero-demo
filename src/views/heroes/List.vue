<template>
    <div>
        <h2 class="sub-header">英雄管理</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
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
                            <router-link :to="'/heroes/' + item.id">编辑</router-link>
                            &nbsp;&nbsp;
                            <a  @click.prevent="handleDel(item.id)" href="javascript:void(0)">删除</a>
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
    this.loadData()
  },
  methods: {
    loadData() {
      // 发送异步请求，获取数据
      axios
        .get("http://127.0.0.1:3000/heroes")
        .then((response) => {
          // console.log(response);
          if (response.status === 200) {
            this.list = response.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    handleDel(id) {
        if (!confirm('是否要删除该数据')) {
            return;
        }
        
        axios.delete(`http://127.0.0.1:3000/heroes/${id}`)
        .then((response) => {
            if (response.status === 200) {
                this.loadData();
            }else{
                alert('删除失败')
            }
        })
        .catch((err) => {
            console.log('err');
            
        })
    }

  }
};
</script>

<style>
</style>