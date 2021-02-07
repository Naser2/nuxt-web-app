<template>
  <nav
    :x-data="open"
    class="the-nav-bar relative shadow fixed w-full z-50 bg-gray-800"
  >
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            @click="open = !open"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 transition duration-150 ease-in-out"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="bg-white"
              viewBox="0 0 24 24"
            >
              <path
                :class="{ hidden: open, 'inline-flex': !open }"
                class="inline-flex"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="{ hidden: !open, 'inline-flex': open }"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="~assets/images/logos/workflow-mark-on-white.svg"
              alt
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="~assets/images/logos/workflow-mark-on-white.svg"
              alt
            />
          </div>
          <div class="hidden sm:ml-6 sm:flex">
            <a
              href="#"
              class="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-indigo-500 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
            >
              <nuxt-link to="/" class="rounded py-2 px-3">Home</nuxt-link>
            </a>
            <a
              href="#"
              class="nav-link ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              <nuxt-link to="/projects" class="rounded py-2 px-3"
                >Projects</nuxt-link
              >
            </a>
            <!-- v-show="$route.name !== 'blogs'" -->
            <a
              href="#"
              class="nav-link ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              <nuxt-link to="/blogs" class="rounded py-2 px-3">Blogs</nuxt-link>
            </a>
            <a
              v-if="isAdmin == true && loggedIn == false"
              href="#"
              class="nav-link ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              <nuxt-link to="/register" class="rounded py-2 px-3"
                >Register</nuxt-link
              >
            </a>
            <a
              v-if="isAdmin == true && loggedIn == false"
              href="#"
              class="nav-link ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              <nuxt-link to="/login" class="rounded py-2 px-3">Login</nuxt-link>
            </a>
            <a 
              href="#"
              class="nav-link ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              <nuxt-link to="/profile" class="rounded py-2 px-3"
                >Profile</nuxt-link
              >
            </a>
            <a
              href="#"
              class="nav-link ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out"
            >
              <nuxt-link to="/contact" class="rounded py-2 px-3"
                >Contact</nuxt-link
              >
            </a>
            <a
              v-if="loggedIn == true"
              @click.prevent="signOut"
              href="#"
              class="nav-link ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-100 focus:outline-none focus:text-gray-100 focus:border-gray-300 transition duration-150 ease-in-out"
              >Logout</a
            >
          </div>
        </div>
        <!-- MOBILE -->
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button   @click.prevent="changeModeColor"
            class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:text-gray-500 focus:bg-gray-100 transition duration-150 ease-in-out"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <div
            @click.prevent="open = false"
            class="ml-3 relative"
            :x-data="open"
          >
            <div>
              <OpenCreate-ModalButton></OpenCreate-ModalButton>
              <!-- <button
                @click="open = !open"
                class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
              >
                <img
                  class="h-12 w-8 rounded-full flex-shrink-0 profile_img"
                  src="~assets/images/nas-portrait.jpg"
                  alt
                />
              </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="{ block: open, hidden: !open }" class="sm:hidden">
      <div class="pt-2 pb-4">

        <!-- <a  v-show="$route.name !== 'index'"
          href="#"
          class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
          ><nuxt-link to="/">Back</nuxt-link></a
        > -->
        <a
          v-show="$route.name !== 'index'"
          href="#"
          class="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out"
        >
          <nuxt-link to="/">Home</nuxt-link>
        </a>
        <a
          href="#"
          class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
        >
          <nuxt-link to="/projects">Projects</nuxt-link>
        </a>
        <a
          href="#"
          class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
        >
          <nuxt-link to="/profile">Pofile</nuxt-link>
        </a>
        <a
          href="#"
          class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
        >
          <nuxt-link to="/blogs">Blogs</nuxt-link>
        </a>
        <a
          href="#"
          class="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
        >
          <nuxt-link to="/contact">Contact</nuxt-link>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { fb } from "~/firebaseConfig";
import OpenCreateModalButton from "~/components/buttons/OpenCreateModalButton";
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  components:{
    OpenCreateModalButton
  },
  data() {
    return { open: false, loggedIn: true ,isAdmin:false, mode:'night', modeColor:""};
  },
  computed: {},
  mounted() {
    this.$root.$on("refreshNav", () => {
      this.showRegister();
    });
    this.showRegister();
  },
  methods: {
    showRegister() {
      var isAuthenticated = localStorage.getItem("email");
      var path = this.$router.history.current.path

      console.log(isAuthenticated);
      this.loggedIn = isAuthenticated == null ? false : true;
      this.isAdmin = path == '/admin' ? true : false
    },
    signOut() {
      const _this = this;
      fb.auth()
        .signOut()
        .then(function() {
          localStorage.removeItem("email");
          _this.$root.$emit("refreshNav")
          console.log("Sign-out successful");
          _this.$router.push("/");
        })
        .catch(function(error) {
          // An error happened.
          console.log("Error happened signing out user", error);
        });
    },
     changeModeColor() {
      if (this.mode === "day") {
        this.modeColor = ["bg-gray-100", "text-gray-800"];
      } else if (this.mode === "night") {
        this.modeColor = ["bg-gray-900", "text-white"];
      } else if (this.mode === "main") {
        this.modeColor = ["bg-orange-600", "text-gray-200"];
      }
    },
  },
  // props: {
  //   modeColor: {
  //     type: Array,
  //     required: true
  //   }
  // },
    // changeModeColor: {
    //   type: Function,
    //   required: true
    // }

};
</script>

<style>
.nav-link .nuxt-link-active {
  background: rgb(122, 136, 219) !important;
  color: aliceblue !important;
}
.profile_img {
  width: 3rem;
}
</style>
