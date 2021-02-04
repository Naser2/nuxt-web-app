<template>
  <div class="relative h-full max-w-md mx-auto">
    <p class="has-text-grey py-2">
      <a
        @click.prevent="register"
        class="login text-gray-500 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
      >Register</a>
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
          >Sign Up</a>&nbsp;
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
    <div class="w-full max-w-md block">
      <form class="bg-white rounded px-8 pt-6 pb-4 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="fullName"
          >First Name & Last Name</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="form.fullName"
            id="username"
            type="text"
            placeholder="Username"
            autocomplete="email"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="eamil">Email</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="form.email"
            id="email"
            type="text"
            placeholder="email"
            autocomplete="email"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Avatar</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="avatar"
            type="text"
            placeholder="paste avatar URL"
            v-model="form.avatar"
            autocomplete="current-password"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Passwo..****"
            v-model="form.password"
            autocomplete="current-password"
          />
        </div>

        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="passwordConfirmation"
          >Password Confirmation</label>
          <input
            class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="passwordConfirmation"
            type="password"
            placeholder="Passwo..****"
            v-model="form.passwordComfirmation"
            autocomplete="current-password"
          />
        </div>

        <a @click.prevent="register">Submit</a>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click.prevent="register"
          >Submit</button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >Forgot Password?</a>
        </div>
      </form>
      <p class="has-text-grey relative h-full max-w-screen-xl mx-auto pb-2 text-center">
        <a class="text-blue-500 text-2xl lg:text-3xl font-play font-extrabold italic pr-8">Register</a>
        <router-link to="/login">
          <span class="font-bold text-2xl lg:text-4xl">or</span>
          <button
            class="bg-transparent ml-8 text-white bg-green-400 font-bold border border-green-600 rounded-full px-4 py-2 hover:text-white hover:border-transparent"
          >Login</button>
        </router-link>
      </p>
      <p
        class="text-center text-gray-500 pb-2 text-xs"
      >&copy;2020 nasCode Corp. All rights reserved.</p>
    </div>
  </div>
</template>

<script>
import { required, sameAs, email } from "vuelidate/lib/validators";
// import firebase from "~/firebaseConfig/index";
import { fb } from "~/firebaseConfig/index";
export default {
  data() {
    return {
      form: {
        email: "",
        fullName: " ",
        avatar:
          "https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/p320x320/79868436_10220905300039788_3411785611781079040_n.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=9SPsaA_jJI4AX9eRNTY&_nc_ht=scontent-lga3-1.xx&_nc_tp=6&oh=a326ae52267a57ca3e452700c6c249a1&oe=5EAAF5C7",
        password: "",
        passwordComfirmation: ""
      }
    };
  },

  validations: {
    form: {
      email: {
        required,
        emailValidator: email
      },
      fullName: {
        required
      },
      avatar: {
        required
      },
      password: {
        required
      },
      passwordComfirmation: {
        required,
        sameAsPassword: sameAs("password")
      }
    }
  },

  methods: {
    register() {
      let email = this.form.email;
      let password = this.form.password;
      console.log("Here :");
      fb
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          this.$router.replace("login");
          // TODO: Create profile collection in Firestore
          return user;
        })
        .catch(error => {
          const message = error.message;
          const errorCode = error.code;
          if (errorCode === "auth/weak-password") {
            return Promise.reject(errorCode);
          } else {
            // this.$toasted.error(errorMessage, { duration: 3000 });
            return Promise.reject(message, errorCode);
          }
        });
    }
  }
};
</script>

<style scoped>
.needHelp {
  background-color: #f3a736;
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
