<template>
	<v-app>
		<v-img src="../assets/FF14.png">
		<v-container class="fill-height">
			<v-row align="center" justify="center">
				<v-col cols="12" md="6">
					<v-card>
						<v-card-title>
							<h1 class="text-center blue--text text--accent-2 display-2">
								登陆页面
							</h1>
							<v-spacer></v-spacer>
						</v-card-title>
						<v-card-text>
							<v-form ref="loginRules" v-model="valid" lazy-validation>
								<v-text-field
									v-model="loginRuleForm.username"
									:counter="10"
									label="Name"
									prepend-icon="person"
									required
									:rules="loginRules.username"
									prop="username"
								></v-text-field>
								<v-text-field
									v-model="loginRuleForm.password"
									:counter="10"
									label="password"
									prepend-icon="lock"
									required
									:rules="loginRules.password"
									prop="password"
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions>
							<v-spacer></v-spacer>
							<v-btn rounded color="blue" dark @click="login()"> 登陆 </v-btn>
							<v-spacer></v-spacer>
							<span>还没有账号？</span>
							<v-btn rounded color="black" text dark @click="registered()">
								注册
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
		</v-img>
	</v-app>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";
import axios from "axios";
import qs from "qs";

export default {
	mixins: [validationMixin],
	validations: {
		username: { required, maxLength: maxLength(10) },
		password: { required, maxLength: maxLength(10) }
	},

	data: () => ({
		// 请求数据
		loginRuleForm: {
			username: "",
			password: ""
		},
		//表单验证
		loginRules: {
			username: [
				(v) => !!v || "请写名字",
				(v) => (v && v.length <= 10) || "名字长度需要少于10"
			],
			password: [
				(v) => !!v || "请写密码",
				(v) => (v && v.length <= 10) || "密码长度需要少于10"
			]
		},
		
	}),

	computed: {
		validate() {
			loginRules.validate();
		}
	},
	mounted() {
		this.login();
	},
	methods: {
		login() {
				axios
				.post("http://127.0.0.1:5000/login", JSON.stringify(this.loginRuleForm))
				.then((res) => {
					console.log(res);

					if (res.data.code != 0 && res.data.code != 401) {
						return this.$message.error(res.data.msg);
					}

					// 跳转到主页
					this.$router.push("/admin");
				});
		},
		registered() {
			this.$router.push("/registered");
		}
	},
};
</script>

<style>
</style>
