<template>
  <v-app>
    <!-- 顶部栏 侧边栏 -->
    <v-app-bar app color="blue">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-bold">天气查询</span>
        <span>系统</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="font-weight-bold" @click="login()">退出</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app color="#F8F8F8" v-model="drawer">
      <v-list>
        <v-list-group prepend-icon="folder" no-action="">
          <template v-slot:activator>
            <v-list-item-title>相关数据图</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>空气质量图</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>风向雷达图</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>温湿度变化</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data: function() {
    return {
      drawer: true,
    }
  },
  methods :{
        login(){
            let _this = this;
            _this.$router.push({path:"/login"});
        }
    }
}
</script>

<style>

</style>