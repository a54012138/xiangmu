<template>
  <v-app>
    <v-img src="../assets/FF14_2.png">
      <!-- 顶部栏 侧边栏 -->
      <v-app-bar app color="blue">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
              <v-list-item-title>相关数据</v-list-item-title>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-btn text>当天数据</v-btn>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-btn text @click="go()">14天数据</v-btn>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
      <v-spacer></v-spacer>
      <v-main>
        <div class="container elevation-5 d-flex ma-auto">
          <div class="box">
            <v-carousel cycle height="490" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item
                v-for="(item, i) in itemss"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
              </v-carousel-item>
            </v-carousel>
          </div>
          <div class="box pa-1">
            <div class="content grey lighten-3">
              <span>当天数据</span>
              <v-data-table
                dense
                :headers="headers"
                :items="desserts"
                item-key="id0"
                class="elevation-1"
              ></v-data-table>
            </div>
            <div class="action d-flex justify-space-around align-center">
              <v-btn color="cyan lighten-4" rounded @click="getdata()">数据获取</v-btn>
            </div>
          </div>
        </div>
      </v-main>
    </v-img>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      drawer: true,
      ites: "",
      desserts: [
        {
          id0: "1",
          id1: "1",
          id2: "1",
          id3: "1",
          id4: "1",
          id5: "1",
          id6: "1",
        },
      ],
      headers: [
        {
          text: "小时",
          align: "start",
          sortable: false,
          value: "id0",
        },
        { text: "温度", value: "id1" },
        { text: "风力方向", value: "id2" },
        { text: "风级", value: "id3" },
        { text: "降水量", value: "id4" },
        { text: "相对湿度", value: "id5" },
        { text: "空气质量", value: "id6" },
      ],
      itemss: [
        {
          src: require("../assets/correlation.jpg"),
        },
        {
          src: require("../assets/direction.jpg"),
        },
        {
          src: require("../assets/humidity.jpg"),
        },
        {
          src: require("../assets/quality.jpg"),
        },
        {
          src: require("../assets/temperature.jpg"),
        },
      ],
    };
  },
  methods: {
    login() {
      let _this = this;
      _this.$router.push({ path: "/login" });
    },
    getdata() {
      axios
        .get("http://127.0.0.1:5000/get-weather", {
          headers: {
            "content-type": "application/json",
            Accept: "application/json",
            changOrigin: true,
          },
        })
        .then((res) => {
          const data1 = res.data.data.data1;
          const data14 = res.data.data.data14;
          for (let i = 0; i < 25; i++) {
            for (let j = 0; j < 8; j++) {
              console.log(data1[i][j]);
              this.desserts["id" + j] = data1[i][j];
              this.$set(this.desserts, this.desserts.id0, data1[i][j]);
            }
          }
          return this.desserts;
        });
    },
    go() {
      let _this = this;
      _this.$router.push({ path: "/second" });
    },
  },
};
</script>

<style scoped>
.container {
  height: 600px;
  width: 1000px;
}
.box {
  width: 100%;
  height: 100%;
}
.content {
  height: 80%;
  width: 100%;
}
.action {
  height: 20%;
  widows: 100%;
}
.btn {
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
