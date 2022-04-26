<template>
    <v-app>
        <v-img src="../assets/FF14.png">
        <v-container class="fill-height">
            <v-row align="center" justify="center">
                <v-col cols="12" md="6">
                    <v-card>
                        <v-card-title>
                            <h1 class="text-center blue--text text--accent-2 display-2">注册页面</h1>
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
								v-model="name"
								:error-messages="nameErrors"
								:counter="10"
								label="Name"
                                prepend-icon="person"
								required
								@input="$v.name.$touch()"
								@blur="$v.name.$touch()"
							></v-text-field>
							<v-text-field
								v-model="password"
								:error-messages="passwordErrors"
								:counter="10"
								label="password"
                                prepend-icon="lock"
								required
								@input="$v.password.$touch()"
								@blur="$v.password.$touch()"
							></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn rounded color="blue" dark @click="login()">
                                注册
                            </v-btn>
                            <v-spacer></v-spacer>
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
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
    mixins: [validationMixin],

	validations: {
		name: { required, maxLength: maxLength(10) },
		password: { required, maxLength: maxLength(10) }
	},

   data() {
       return {
           username:"",
           password: "",
       }
    },
    computed: {
		nameErrors() {
			const errors = [];
			if (!this.$v.name.$dirty) return errors;
			!this.$v.name.maxLength &&
				errors.push("Name must be at most 10 characters long");
			!this.$v.name.required && errors.push("Name is required.");
			return errors;
		},
        passwordErrors() {
			const errors = [];
			if (!this.$v.password.$dirty) return errors;
			!this.$v.name.maxLength &&
				errors.push("Name must be at most 10 characters long");
			!this.$v.name.required && errors.push("Name is required.");
			return errors;
		}
	},

	methods:{
        login() {
            let _this = this;
            _this.$router.push("/login");
        },
    }
}
</script>

<style>

</style>