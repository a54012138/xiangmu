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
								<v-btn text @click="gos()">当天数据</v-btn>
							</v-list-item-content>
						</v-list-item>

						<v-list-item>
							<v-list-item-content>
								<v-btn text>14天数据</v-btn>
							</v-list-item-content>
						</v-list-item>
					</v-list-group>
				</v-list>
			</v-navigation-drawer>
			<v-spacer></v-spacer>
			<v-main>
				<div class="container elevation-5 d-flex ma-auto">
					<div class="box">
						<v-carousel
							cycle
							height="490"
							hide-delimiter-background
							show-arrows-on-hover
						>
							<v-carousel-item 
							v-for="(item, i) in items" 
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
							<span>14天数据</span>
							<v-simple-table fixed-header height="450px">
								<template v-slot:default>
									<thead>
										<tr>
											<th class="text-left">日期</th>
											<th class="text-left">天气</th>
											<th class="text-left">最低气温</th>
											<th class="text-left">最高气温</th>
											<th class="text-left">风向1</th>
											<th class="text-left">风向2</th>
											<th class="text-left">风级</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="item in desserts" :key="item.id0">
											<td>{{ item.id0 }}</td>
											<td>{{ item.id1 }}</td>
											<td>{{ item.id2 }}</td>
											<td>{{ item.id2 }}</td>
											<td>{{ item.id2 }}</td>
											<td>{{ item.id2 }}</td>
											<td>{{ item.id2 }}</td>
										</tr>
									</tbody>
								</template>
							</v-simple-table>
						</div>
						<div class="action d-flex justify-space-around align-center">
							<v-btn color="cyan lighten-4" rounded @click="getdata()"
								>数据获取</v-btn
							>
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
	data() {
		return {
			drawer: true,
			ites: "",
			desserts: [{
					id0: "",
					id1: "",
					id2: "",
					id3: "",
					id4: "",
					id5: "",
					id6: ""
				}],
			items:[
				{
					src: require('../assets/directions.jpg')
				},
				{
					src: require('../assets/temperatures.jpg')
				},
				{
					src: require('../assets/distribution.jpg')
				}
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
						changOrigin: true
					}
				})
				.then((res) => {
					
					this.ites = res.data.data14;
					for (let i = 0; i < 24; i++) {
						for (let j = 0; j < 8; j++) {
							for (let k=0; k< 8;k++){
							this.desserts["id" + k] = this.ites[i][j];
							console.log(desserts);
						}
						}
					}
				});
		},
        gos() {
			let _this = this;
			_this.$router.push({ path: "/admin" });
		}
	}
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