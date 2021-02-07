<template>
  <div>
    <div class="relative overflow-hidden ">
      <div x-data="{ open: false }" class="relative md:pb-0 lg:pb-4 xl:pb-2">
        <div class="nav-wrapper bg-gray-800">
          <!-- Nav Modal  -->
          <div
            :class="{ block: open, hidden: !open }"
            class="absolute top-0 inset-x-0 p-2 md:hidden"
          >
            <div
              x-show="open"
              x-transition:enter="duration-150 ease-out"
              x-transition:enter-start="opacity-0 scale-95"
              x-transition:enter-end="opacity-100 scale-100"
              x-transition:leave="duration-100 ease-in"
              x-transition:leave-start="opacity-100 scale-100"
              x-transition:leave-end="opacity-0 scale-95"
              class="rounded-lg shadow-md transition transform origin-top-right"
            >
              <div class="rounded-lg bg-white shadow-xs overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      class="h-8 w-auto"
                      src="~assets/images/logos/workflow-mark-on-white.svg"
                      alt
                    />
                  </div>
                  <div class="-mr-2">
                    <button
                      @click="open = false"
                      type="button"
                      class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <nuxt-link
                    href="#"
                    to="/producta"
                    class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >Products</nuxt-link
                  >
                  <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >projects</a
                  >
                  <a
                    href="#"
                    class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    >My Company</a
                  >
                </div>
                <div>
                  <a
                    href="#"
                    class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                    >Learn Code Here</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mx-auto bg-gray-900 pb-20 max-w-screen-2xl px-4 sm:px-6 lg:mx-48"
        >
          <div class="lg:grid lg:grid-cols-12 lg:mx-54">
            <div
              class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            >

              <h2
                class="py-8 text-4xl tracking-tight text-gray-200 leading-10 font-extrabold sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl lg:pt-10"
              >
                Building sites & apps for
                <span class="blue-word">online businesses</span>
              </h2>
              <div
                id="container"
                class="px-8 lg:py-4 lg:px-32 font-extrabold justify-center text-3xl font-play "
              >
                <h1 class="dynamic-words">Make</h1>
                <div id="flip">
                  <div>
                    <div class="bg-indigo-500 text-center text-3xl">
                      Websites
                    </div>
                  </div>
                  <div>
                    <div
                      class="bg-green-500 text-center w-48 tracking-tight text-gray-200 leading-10 font-extrabold sm:leading-none sm:text-5xl lg:text-2xl xl:text-5xl"
                    >
                      life
                    </div>
                  </div>

                  <div>
                    <div class="bg-purple-500 text-center w-48">Apps</div>
                  </div>
                  <div class>
                    <div class="bg-blue-400 text-center w-48">Work</div>
                  </div>
                  <div class>
                    <div class="bg-red-600 text-center">Everything</div>
                  </div>
                </div>
                <div class="text-yellow-600 italic dynamic-words">Awesome!</div>
              </div>

              <div
                class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
              >
                <p class="text-base font-medium text-gray-100">
                  Sign up to get notified when I have deals for you.
                </p>
                <form action="#" method="POST" class="mt-3 sm:flex">
                  <input
                    aria-label="Email"
                    class="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    class="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Notify me
                  </button>
                </form>
                <p class="mt-3 text-sm leading-5 text-gray-500">
                  We care about the protection of your data. Read our
                  <a href="#" class="font-medium text-gray-900 underline"
                    >Privacy Policy</a
                  >.
                </p>
              </div>
            </div>
            <div
              class="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            >
              <div
                class="relative mx-auto -pt-40 w-full rounded-lg shadow-lg lg:max-w-md lg:ml-20"
              >
                <!-- <p class="mt-3 text-sm leading-5 text-gray-500">
                  We care about the protection of your data. Read our
                  <a href="#" class="font-medium text-gray-900 underline"
                    >Privacy Policy</a
                  >.
                </p>-->
                <button
                  class="relative block w-full rounded-lg overflow-hidden focus:outline-none focus:shadow-outline"
                >
                  <img
                    class="w-full"
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Woman making a sale"
                  />
                  <p
                    class="sr-only py-4 bg-gray-700 text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl"
                  ></p>

                  <p
                    class="lg:hidden py-4 bg-gray-800 text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl"
                  >
                    Anim aute magna aliquant sunt. Qui irure qui lorem commodo.
                  </p>

                  <div
                    class="absolute inset-0 w-full h-full flex items-center justify-center"
                  >
                    <svg
                      class="h-20 w-20 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <path
                        d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesTeaser",
  components: {},
  data() {
    return { open: false };
  }
  // props: {
  //   menuNotAuthItems: {
  //     type: Array,
  //     required: true
  //   }
  // }
};

// src = 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v1.9.3/dist/alpine.js';
// defer;
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

/* body {
  margin: 0px;
  font-family: 'Roboto';
  text-align: center;
} */

#container {
  color: #999 !important;
}

#flip {
  height: 50px;
  overflow: hidden;
  height: 90px;
}

#flip > div > div {
  color: #fff;
  padding: 4px 12px;
  /* height:45px; */
  height: 60px;
  margin-bottom: 45px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 10s linear infinite;
}

@keyframes show {
  0% {
    margin-top: -400px; /*EVERYTHIMN*/
  }
  5% {
    margin-top: -380px;
  }
  8% {
    margin-top: -390px;
  }
  10% {
    margin-top: -400px;
  }
  12% {
    margin-top: -380px;
  }
  15% {
    margin-top: -400px;
  }
  18% {
    margin-top: -380px; /*EVERYTHING BOUNCE*/
  }
  19% {
    margin-top: -380px; /*LIFE*/
  }
  22% {
    margin-top: -380px; /* EVERYTHIN END*/
  }

  25% {
    margin-top: -370px; /* EVERYTHIN END*/
  }

  27% {
    margin-top: -270px; /* WORK */
  }
  28% {
    margin-top: -270px;
  }
  30% {
    margin-top: -270px;
  }
  32% {
    margin-top: -270px; /* WORK END */
  }
  34% {
    margin-top: -270px; /* WORK END */
  }
  35% {
    margin-top: -270px;
  }
  40% {
    margin-top: -180px; /*APPS */
  }
  48% {
    margin-top: -180px;
  }
  60% {
    margin-top: -180px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: -90px;
  }
  81% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }

  /* 0% {
    margin-top: -290px;
  }
  5% {
    margin-top: -300px;
  }
  10% {
    margin-top: -280px;
  }
  15% {
    margin-top: -290px;
  }
  18% {
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }

  30% {
    margin-top: -180px;
  }
  35% {
    margin-top: -180px;
  }

  40% {
    margin-top: -190px;
  }

  44% {
    margin-top: -180px;
  }
  56% {
    margin-top: -180px;
  }
  66% {
    margin-top: -160px;
  }
  71% {
    margin-top: -140px;
  }
  80% {
    margin-top: -90px;
  }
 71% {
    margin-top: -90px;
  }
  80.99% {
    margin-top: -60px;
  }
  99.99% {
    margin-top: -60px;
  }
  100% {
    margin-top: -270px;
  }  */

  /* BOUNCY */
  /* 0% {
    margin-top: -300px;
  }
  5% {
    margin-top: -300px;
  }
  10% {
    margin-top: -280px;
  }
  15% {
    margin-top: -290px;
  }
  18% {
    margin-top: -270px;
  }
  25% {
    margin-top: -270px;
  }

  30% {
    margin-top: -180px;
  }
  35% {
    margin-top: -180px;
  }

  40% {
    margin-top: -190px;
  }

  44% {
    margin-top: -180px;
  }
  56% {
    margin-top: -180px;
  }
  66% {
    margin-top: -160px;
  }
  71% {
    margin-top: -140px;
  }
  80% {
    margin-top: -90px;
  }
 71% {
    margin-top: -90px;
  }
  80.99% {
    margin-top: -60px;
  }
  99.99% {
    margin-top: -60px;
  }
  100% {
    margin-top: -270px;  } */

  /* //WORKS */
  /* 0% {
    margin-top: -290px;
  }
  5% {
    margin-top: -270px;
  }
  10% {
    margin-top: -270px;
  }
  15% {
    margin-top: -270px;
  }
  18% {
    margin-top: -180px;
  }
  20% {
    margin-top: -180px;
  }
  25% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  } */
}
.dynamic-words {
  font-weight: 900;
  font-size: 2.1em;
  letter-spacing: -0.04em;
  color: rgb(209, 206, 206);
  /* font-style: italic; */
  letter-spacing: -0.02em;
  line-height: 0.9em;
  /* text-transform: lowercase; */
  font-family: "Playfair Display" !important;
}

@media (max-width: 614px) {
  .dynamic-words {
    font-size: 1.1em;
    font-weight: 900;
    letter-spacing: -0.09em;
  }
}
</style>
