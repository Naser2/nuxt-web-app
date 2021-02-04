<template>
  <transition>
    <div class="block mt-0 h-12/12 px-4  lg:py-8 lg:px-2/12 lg:py-14" v-show="show">
      <!-- stars -->
      <div
        class="flex py-2 lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-10 lg:items-center lg:pt-10 "
      >
        <div class="col-start-1 flex pt-1 pr-10 lg:pl-20">
          <svg
            v-for="i in 5"
            :key="i"
            viewBox="0 0 24 24"
            :class="i <= stars ? 'text-yellow-300' : 'text-gray-400'"
            class="h-8 w-8 lg:h-12 lg:w-16 fill-current "
          >
            <path
              d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
            />
          </svg>
        </div>

        <div
          class="col-start-2 flex lg:block pb-2 justify-center text-center sm:pl-2/6 lg:pr-1/3 lg:pl-0 "
        >
          <div
            class="lg:hidden reviewer-name text-gray-200 px-0 py-0 sm:py-2 sm:px-2 "
          >
            Cynthia Rosewood
          </div>
          <div class="review-image flex-shrink-0 ">
            <img
              src="~assets/images/mamadou-mariame.jpg"
              width="490"
              class="relative  mx-auto h-12 w-12 lg:w-16 lg:h-16 rounded-full"
            />
          </div>
          <div
            class="sr-only lg:not-sr-only reviewer-name text-gray-200 px-0 py-0 sm:py-2 sm:px-2 "
          >
            Cynthia Rosewood
          </div>
        </div>
      </div>
      <!-- content -->
      <div
        class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-10 lg:items-center lg:pt-1 pb-2"
      >
        <div class="lg:col-start-2">
          <h4
            class="text-gray-100 bg-gray-800 py-2 rounded text-4xl tracking-tight text-gray-100 leading-10 font-extrabold sm:leading-none sm:text-4xl lg:text-3xl xl:text-4xl "
          >
            I was always kept in the<span class="text-indigo-500"> loop</span>.
          </h4>
          <p class="mt-3 text-lg leading-7 text-gray-500">
            The entire development process was transparent and brieffed to me so
            I knew at what stage we where.
          </p>
          <ul class="mt-4">
            <li>
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-medium text-gray-100">
                    Mobile notifications
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Nasser implemented mobile notification for my app.
                  </p>
                </div>
              </div>
            </li>
            <li class="mt-10">
              <div class="flex">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="h-6 w-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h5 class="text-lg leading-6 font-medium text-gray-100">
                    Reminder emails
                  </h5>
                  <p class="mt-2 text-base leading-6 text-gray-500">
                    Remeinder emails functionalties was well done. Great job
                    🎉🎉
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-10 -mx-4 relative lg:mt-4 lg:col-start-1">
          <img
            src="/_nuxt/assets/images/market-place-apps.gif"
            width="490"
            class="relative mx-auto"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      stars: 5
    };
  },
  props: {
    show: {
      required: true,
      type: Boolean
    },
    setMainAnim: {
      required: true,
      type: Function
    }
  }
};
</script>

<style></style>
