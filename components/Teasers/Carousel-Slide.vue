<template v-if="carouselOpen">
  <div class="carousel-wrap mb-64 lg:mb-20 mx-5 relative">
    <div
      v-for="(item, index) in data"
      :key="index"
      x-data="{ open: true }"
      x-show="open"
      class="fixed bottom-0 inset-x-0 px-2 lg:px-40 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
    >
      <div
        x-show="open"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
      >
        <carousel :perPage="1" :navigationEnabled="true">
          <slide
            v-for="(image, index) in data.images"
            :key="index"
            class="rounded-t-lg mt-2"
          >
            <img
              class="shadow-xl object-contain  h-full w-full sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center font-sans text-sm"
              :src="image"
              alt="carousel-img"
            />
          </slide>
        </carousel>

        <div class="rounded-t-lg mt-4">
          <div class=" px-4 carousel-post-details bg-gray-200 pt-4 pb-4">
            <div class="post-details">
              <div class="mx-auto sm:px-6 ">
                <h3
                  class="text-left text-3xl leading-8 font-extrabold tracking-tight text-googleBgMidBlue text-orange-900 sm:text-4xl sm:leading-10"
                >
                  {{ data.title }}
                </h3>
              </div>
              <div class="ml-4 flex flex-shrink-0 ">
                <div class="text-left inline-flex">
                  <ul
                    class="text-left "
                    v-for="(tech, index) in data.tags"
                    :key="index"
                  >
                    <li class="text-left px-0 sm:px-1 lg:px-2">
                      <span
                        class=" inline-flex px-1 py-.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
                      >
                        {{ tech }}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p
              class="mx-6 mt-2 pb-4 text-left max-w-3xl  text-xl leading-7 text-gray-500" v-html="data.previewDescription"
            >
            </p>

            <div class="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">
              <button
                type="button"
                class=" px-2 py-1 border border-transparent text-base font-medium   rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <nuxt-link :to="'/projects/' + data.id">View Site</nuxt-link>
              </button>
              <span
                @click="closeCarousel"
                class="close  mdi mdi-close bg-gray-400 text-gray-700 rounded-full shadow-lg px-4 py-2 hover:bg-red-400"
                >Close
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel-Slide",
  components: {},
  props: {
    data: {
      type: Array || [],
      required: true,
      showCarousel: false
    },
    carouselOpen: {
      type: Boolean,
      required: true
    },
    activeCardId: {
      type: Number,
      required: false
    },
    closeCarousel: {
      type: Function,
      required: true
    }
  },
  mounted() {
    // Vue.use(VueCarousel);
    this.showCarousel = true;
  }
};
</script>

<style>
.VueCarousel-navigation-button {
  position: absolute;
  top: 50%;
  box-sizing: border-box;
  background-color: black !important ;
  border-radius: 25%;
  border-color: red !important;
  /* color: rgb(63, 26, 105) !important; */
  /* color:lightblue !important;; */
  color: #009fff !important;
  /* color: white !important; */
  opacity: 1 !important;
  /* text-decoration: none;
  appearance: none; */
  border: none;
  /* background-color: transparent; */
  padding: 21 !important;
  cursor: pointer;
  outline: none;
  /* left: 94%;
  right: 94% !important; */
}
@media only screen and (max-width: 600px) {
  .VueCarousel-navigation-button {
    position: absolute;
    top: 33%;
    box-sizing: border-box;
    background-color: #009fff !important;
    border-radius: 25%;
    color: #fff !important;
    opacity: 1 !important;
    border: none;
    padding: 21 !important;
    cursor: pointer;
    outline: none;
    left: 89%;
  }
  .VueCarousel-navigation--disabled {
    padding: 8px;
    margin-right: -8px;
    /* right: 94% !important; */
    margin-left: 80%;
    /* left: 5% !important; */
    /* left: 83% !important; */
  }
  .VueCarousel-navigation-prev {
    padding: 8px;
    margin-right: -8px;
    /* right: 94% !important; */
    margin-left: 6%;
    /* left: 5% !important; */
    /* left: 83% !important; */
  }
}
.VueCarousel-dot.VueCarousel-dot--active {
  margin-top: 20px;
  padding: 10px;
  width: 10px;
  height: 10px;
  /* background-color: rgb(56, 123, 224) !important; */
  background-color: #009fff !important;
}
.VueCarousel-pagination {
  /* background-color: rgb(56, 123, 224) !important; */
}
@media (min-width: 1200px) {
  .VueCarousel-pagination {
    /* margin-bottom: 10px !important; */
  }
}
.VueCarousel-pagination {
  margin-top: 0px !important;
  margin-top: -28px !important;
  margin-bottom: 3px !important;
}
.view-site-btn {
  background-color: #0c68e6 !important;
}
</style>
