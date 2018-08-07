<template>

    <div>
        <h2 class="sub-header">添加英雄</h2>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">英雄名称</label>
                <input type="text" v-model="formData.name" class="form-control" id="exampleInputEmail1" placeholder="请输入英雄名称">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">英雄性别</label>
                <input type="text" v-model="formData.gender" class="form-control" id="exampleInputPassword1" placeholder="请输入英雄性别">
            </div>
            <button @click='handleAdd' type="button" class="btn btn-success">提交</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
        // 绑定文本框数据
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
      handleAdd() {
          axios 
            .post("http://localhost:3000/heroes", this.formData)
            .then((response) => {
                if (response.status == 201) {
                    this.$router.push('/heroes')
                }
            })
            .catch((err) => {

            })
      }
  }

};
</script>

<style>
</style>

