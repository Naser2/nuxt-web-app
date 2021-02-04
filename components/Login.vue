<template>
  <!-- <div class="inline-block max-w-md mx-auto"> -->
  <div class="relative h-full max-w-md mx-auto">
    <p class="py-2">
      <a
        class="login text-gray-500 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
        >Login</a
      >
    </p>
    <!-- NEW FORM  -->

    <div class="bg-blue-400 text-center py-4 lg:px-4">
      <div
        class="p-2 bg-blue-500 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span class="font-semibold mr-2 text-left flex-auto">
          <a
            class="font-extrabold text-2xl bg-blue-700 rounded-full uppercase px-2 -py-1 text-xs font-bold mr-3"
            >Login</a
          >
        </span>
        <svg
          class="fill-current opacity-95 h-5 w-5 font-extrabold"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
          />
        </svg>
      </div>
    </div>
    <!-- NEW FORM  -->
    <span
      v-if="message !== ''"
      class="flex bg-red-600 text-white px-2 py-1 font-bold mb-10 mx-10 rounded-md mt-4"
      >{{ message }}</span
    >

    <div class="w-full max-w-md block">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <figure class="avatar flex inline-flex pt-8">
          <img src="https://placehold.it/128x128" />
        </figure>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Email</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="form.email"
            id="username"
            type="text"
            placeholder="Email"
          />
        </div>

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            @keyup.enter="handleLogin"
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            v-model="form.password"
            autocomplete="current-password"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-orange-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="handleLogin"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
            >Forgot Password?</a
          >
        </div>
      </form>
      <p
        class="has-text-grey relative h-full max-w-screen-xl mx-auto pb-2 text-center"
      >
        <a
          class="text-blue-500 text-2xl lg:text-3xl font-play font-extrabold italic pr-8"
          >Login</a
        >
        <router-link to="/register">
          <span class="font-bold text-2xl lg:text-4xl">or</span>
          <button
            class="bg-transparent ml-8 text-white bg-green-400 font-bold border border-green-600 rounded-full px-4 py-2 hover:text-white hover:border-transparent"
          >
            Register
          </button>
        </router-link>
      </p>
      <p class="text-center pb-2 text-gray-500 text-xs">
        &copy;2020 nasCode Corp. All rights reserved.
      </p>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import fb from "~/firebaseConfig/index";
import { required, sameAs, email } from "vuelidate/lib/validators";
// import { backendLoginAuth } from "~/keys.js";
export default {
  data() {
    return {
      errorLogin: "",
      form: {
        email: "",
        password: ""
      },
      message: ""
    };
  },
  methods: {
    handleLogin() {
      // const x = process.env;
      let email = this.form.email;
      let password = this.form.password;

      this.$axios
        .post(process.env.backendLoginAuth + process.env.API_KEY, {
          email,
          password,
          returnSecureToken: true
        })
        .then(res => {
          console.log("Auth Response:", res);
          console.log("Auth Response DATA:", res.data);
          console.log("Auth Response DATA Data:", res.data.data);
          let response = res.data;
          let idToken = response.idToken;
          let refToken = response.refreshToken;
          let registered = response.registered;
          let expiresIn = new Date().getTime() + response.expiresIn * 1000;
          let email = response.email;
          console.log("AUTH DATA:", {
            registered,
            email,
            idToken,
            refToken,
            expiresIn
          });
          localStorage.setItem("email",email)
                    this.$root.$emit("refreshNav");

          this.$store.dispatch("getToken", {
            registered,
            email,
            idToken,
            refToken,
            expiresIn
          });
          // this.$toasted.success("You are successfully Registered", {
          //   duration: 3000
          // });
          this.$router.replace("blogs");
          // TODO: Create profile collection in Firestore
          return response;
        })
        .catch(error => {
          const message = error.message;
          const errorCode = error.code;
          if (errorCode === "auth/weak-password") {
            return Promise.reject(errorCode);
          }
          // else if(errorCode){
          //  console.log("BAD PASSWORD")
          // }
          else {
            this.errorLogin = message;
            // this.$toasted.error(errorMessage, { duration: 3000 });
            return Promise.reject(message, errorCode);
          }
        });
    }
  },
  validations: {
    form: {
      email: {
        required,
        emailValidator: email
      },
      password: {
        required
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.form.$invalid;
    }
  }
};
</script>

<style scoped>
.needHelp {
  background-color: #f3a736;
}
@media (min-width: 1000px) {
  .login {
    letter-spacing: -0.02em;
    /* text-transform: lowercase; */
    font-family: "Playfair Display" !important;
    font-weight: 900 !important;
    font-size: 5em !important;
  }
}
@media (min-width: 300px) {
  .login {
    letter-spacing: -0.02em;
    /* text-transform: lowercase; */
    font-family: "Playfair Display" !important;
    font-weight: 5600 !important;
    font-size: 3em !important;
  }
}
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
input {
  font-weight: 300;
}
p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}
</style>
