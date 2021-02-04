


<template>
  <div class="gallery-wrapper myblack h-screen">
    <div class="py-16 overflow-hidden lg:py-24">
      <div class="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">


        <div class="relative">
          <h3
            class="text-center title text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10"
          >Projects</h3>
          <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-200">
          Some completed projects
          </p>
        </div>

        <div class="relative mt-8 lg:mt-24 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
          <div
            v-for="(data, index) in loadProjects.slice(0,3)"
            :key="index"
            class="gallery-img-card relative flex-block mb-6 bg-white "
            :class="
              carouselOpen && index === activeCardId
                ? 'mb-10 pb-10 lg:pb-0 bg-gray-900 z-50'
                : 'lg:pb-10/12 mb-32 lg:mb-10 bg-white '
            "
            @mouseover="mouseHoverFunc(index)"
            @mouseleave="mouseLeaveFunc(index)"
          >
            <div
              class="carousel-component inset-0 w-full lg:mb-20 opacity-100"
              v-if="index === activeCardId && carouselOpen"
            >
              <carousel-slide
                :data="data"
                :carouselOpen="carouselOpen"
                :closeCarousel="closeCarousel"
              ></carousel-slide>
            </div>

            <!-- <div v-show="index !==activeCardId && !carouselOpen"> -->
            <div class="Mobileimg justify-center text-center">
              <!-- <img
                :class="
                  carouselOpen
                    ? 'hidden'
                    : ' mt-6 rounded-t-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-cover sm:object-center lg:hidden font-sans text-sm'
                "
                :src="data.thumbnail"
                alt="Mobileimg"
              /> -->
<!-- <span class="sm:h4-full sm:w-full h-45 w-45 lg:h-64 lg:w-64 overflow-hidden">
            <img  :src="data.thumbnail"  alt="Mobileimg"
                :class="
                  carouselOpen || hideMainImg ===true
                  ? 'hidden'
                   :'justify-center bg-center cursor-pointer h-45 w-45 lg:h-64 lg:w-64'"

             />


        </span> -->
              <img
                :class="
                  carouselOpen || hideMainImg ===true
                    ? 'hidden'
                    : ' mt-6 rounded-t-lg shadow-xl sm:mt-8 sm:h-72 sm:w-full sm:object-contain sm:object-center lg:hidden font-sans text-sm'
                "
                :src="data.thumbnail"
                alt="Mobileimg"
              />
              <div class="initial-view flex-block"></div>

              <div
                class="mobile-Card opacity-100"
                :class="{ hidden: carouselOpen }"
                v-if="index === hoveredIndex"
              >
               <div class="btns-wrapper opacity-100">
                  <div
                    v-show="!activeCardId"
                    class="action-buttons absolute top-0 left-0 z-10"
                  >
                    <div class="flex" v-show="hideMainImg === false">
                      <div
                        class="btns"
                        :class="index == hoveredIndex ? 'slideBtnsIn' : 'none'"
                      >
                        <button
                          @click.prevent="setCardId(index)"
                          type="button"
                          class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-black text-white mb-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Read More
                        </button>

                        <button
                          type="button"
                          class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <nuxt-link :to="'/projects/' + data.id">View page</nuxt-link>
                        </button>
                      </div>

                      <div
                        class="flex teaser-card-detail max-w-md text-white text-center bg-black px-4 py-2  ml-2 rounded"
                        style="font-size: 12px"
                      >
                        {{ data.previewDescription }}
                      </div>
                    </div>
                  </div>
                </div>


              </div>

              <template class="h-full lg:w-full z-0 order-last w-full">
                <div class="hidden lg:block content-wrapper relative max-h-full">
                <div
                class="sm:not-sr-only md:sr-only lg:sr-only"
                :class="{ hidden: carouselOpen }"
                v-if="index === hoveredIndex"
              >
                <div class="btns-wrapper opacity-100">
                  <div
                    v-show="!activeCardId"
                    class="action-buttons absolute top-0 left-0 z-10"
                  >
                    <div class="flex" v-show="hideMainImg === false">
                      <div
                        class="btns"
                        :class="index == hoveredIndex ? 'slideBtnsIn' : 'none'"
                      >
                        <button
                          @click.prevent="setCardId(index)"
                          type="button"
                          class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-black text-white mb-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Read More
                        </button>

                        <button
                          type="button"
                          class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-black text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          <nuxt-link :to="'/projects/' + data.id">View page</nuxt-link>
                        </button>
                      </div>

                      <div
                        class="flex teaser-card-detail max-w-md text-white text-center bg-black px-4 py-2  ml-2 rounded"
                        style="font-size: 12px"
                      >
                        {{ data.previewDescription }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                </div>
                <!-- v-if=" !hideMainImg  || index == !hoveredIndex" -->
                <!-- opacity: 1; -->
                <!--  height: 400px -->
                <img
                  v-show="index !== activeCardId"
                  class="hidden lg:absolute lg:opacity-100 lg:block h-auto w-full lg:col-start-1 inset-0 h-full lw-full lg:object-cover object-center"
                  :style="
                    index === hoveredIndex
                      ? { opacity: reduceImageOpacity.opacity }
                      : { imageOpacity }
                  "
                  :src="data.thumbnail"
                  alt="gallimgLarge"
                />
                <!-- !-- STARS v-show="carouselOpen && index === activeCardId"-->
                <div
                  class="stars hovered-footer absolute bottom-0 block bg-gray-900 w-full px-4"
                  v-if="!carouselOpen"
                  :style="showCardDetails ? 'bottom:-34px' : 'bone'"
                >
                  <div class="stars-class py-3 lg:py-4 px-8 flex sr-only lg:not-sr-only">
                    <svg
                      v-for="i in 5"
                      :key="i"
                      viewBox="0 0 24 24"
                      :class="
                        i <= data.rating ? 'text-teal-500' : 'text-gray-400'
                      "
                      class="h-4 w-6 lg:h-8 lg:w-8 fill-current"
                    >
                      <path
                        d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                      />
                    </svg>

                    <div class="vote-close flex ml-64">
                      <span
                        class="font-sans text-sm flex-none text-white h-5/6 mt-1 py-2 bg-purple-700 rounded-l px-2"
                      >
                        <em class="rounded-full px-1 text-white">{{ data.votes }}</em>
                        votes
                      </span>

                      <span
                        v-show="activeCardId !== null && index === hoveredIndex"
                        @click.prevent="close"
                        class="lg:ml-1/12 justify-end bg-gray-400 text-gray-700 rounded-full shadow-lg px-4 py-2 hover:bg-red-400"
                      >X</span>
                    </div>
                  </div>
                </div>

                <!-- <div
                  class="stars init-footer absolute bottom-0 block bg-gray-900 w-full"
                  v-if="!carouselOpen"
                >
                  <div
                    class="stars-class py-3 lg:py-4 px-8 flex"
                    v-if="showCardDetails && index === !hoveredIndex"
                  >
                    <svg
                      v-for="i in 5"
                      :key="i"
                      viewBox="0 0 24 24"
                      :class="
                        i <= data.rating ? 'text-teal-500' : 'text-gray-400'
                      "
                      class="h-4 w-6 lg:h-8 lg:w-8 fill-current"
                    >
                      <path
                        d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                      />
                    </svg>
                    <span
                      class="font-sans text-white text-sm text-white h-5/6 mt-1 bg-purple-700 rounded-l px-2"
                    >
                      {{ index }}
                    </span>
                    <span
                      class="font-sans text-sm text-white h-5/6 mt-1 ml-6/12  bg-purple-700 rounded-l px-2"
                      :class="{ 'ml-6/12': index === !hoveredIndex }"
                    >
                      <em class="rounded-full px-1">{{ data.votes }}</em>
                      votes
                    </span>
                  </div>
                </div>-->

                <!-- <div v-show="index === activeCardId" class="absolute inset-0 h-full "> -->
                <div
                  v-if="showCardDetails && index === activeCardId"
                  class="lg:absolute inset-0 h-10/12 "
                >
                  <transition>
                  <div>
      <div  class=" lg:relative my-4 lg:mt-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
         <div  class="relative">
         <h3  class="text-2xl text-left font-extrabold text-gray-900 tracking-tight sm:text-3xl pl-8">
             {{ data.title }}
        </h3>
        <p  class="mt-3 text-lg text-gray-500">
          <div class="left-descrip lg:px-2 text-left pl-8">
            <!-- text-blue-400  green-color  Great colors -->
            <div class="top-details">
           <dl class="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-1 pl-8">
              <div class=" flex inline-flex  sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                  Type of app
                    </dt>
                    <dd class="text-sm  mx-2">

                           <span class="mt-1 inline-flex py-0.1 px-2 text-gray-900 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 ">{{data.projectType}}</span>
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-500">
                  Technology
                    </dt>
                    <dd class="flex inline-flex text-sm  mx-2"  v-for="(tk, index) in data.tech" :key="index">

                           <span class="mt-1 py-0.1 px-2 text-gray-900 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 ">{{tk}}</span>
                    </dd>
                  </div>

                      <span v-show="data.websiteUrl  && data.websiteUrl !=''"
                        class=" pr-4  flex inline-flex items-center justify-between text-sm">
                          <!-- <div class="w-0 flex-1 flex items-center"> -->
                            <button

                               type="button"
                              class="iflex-shrink-0 items-center px-3 py-0.5 rounded-full text-sm font-medium rounded-xl text-white bg-green-600 hover:text-orange-500"
                              >
                                 <a class="card__cta" :href="data.websiteUrl">View website</a>
                              </button>
                          <!-- </div> -->
                        </span>
                    <!-- <span v-show="data.websiteUrl  && data.websiteUrl !=''"
                        class=" pr-4  flex inline-flex items-center justify-between text-sm">

                            <button
                              href="#"
                              @click.prevent="redirectToPage(index)"
                              class="iflex-shrink-0 items-center px-3 py-0.5 rounded-full text-sm font-medium rounded-xl text-white bg-green-600 hover:text-orange-500"
                              >
                                <nuxt-link :to="'/projects/' + data.websiteUrl">View Website</nuxt-link>
                              </button>

                        </span> -->

                </dl>















                            </div>
          <div class="sr-only lg:not-sr-only">
                 <div class="sm:col-span-1  pl-8">
                    <dd class="mt-4 text-sm text-gray-900">
                      <ul class=" inline-flex">
                        <li class=" pr-4  flex inline-flex items-center justify-between text-sm">
                          <!-- <div class="w-0 flex-1 flex items-center"> -->
                            <button
                              href="#"

                              class="iflex-shrink-0 items-center px-3 py-0.5 rounded-full text-sm font-medium rounded-xl text-white bg-black hover:text-orange-500"
                              >
                                <nuxt-link :to="'/projects/' + data.id">See page</nuxt-link>
                              </button>
                          <!-- </div> -->
                        </li>
                        <li class=" py-3 flex items-center justify-between text-sm">
                          <!-- <div class="w-0 flex-1 flex items-center"> -->
                          <button
                              href="#"
                              @click="showCarousel"
                              class="flex-shrink-0 items-center px-3 py-0.5 rounded-full text-sm font-medium rounded-xl text-white bg-black hover:text-orange-500"
                              >
                                View screens
                              </button>
                          <!-- </div> -->
                        </li>
                      </ul>
                    </dd>
                  </div>
                  </div>
              <div class="lg:sr-only">
                 <div class="sm:col-span-1  pl-8">
                    <dd class="mt-4 text-sm text-gray-900">
                      <ul class=" inline-flex">
                        <li class=" pr-4  flex inline-flex items-center justify-between text-sm">
                          <!-- <div class="w-0 flex-1 flex items-center"> -->
                            <button
                              href="#"

                              class="iflex-shrink-0 items-center px-3 py-0.5 rounded-full text-sm font-medium rounded-xl text-white bg-black hover:text-orange-500"
                              >
                                <nuxt-link :to="'/projects/' + data.id">See page</nuxt-link>
                              </button>
                          <!-- </div> -->
                        </li>

                        <li class=" py-3 flex items-center justify-between text-sm">
                          <!-- <div class="w-0 flex-1 flex items-center"> -->
                          <button
                              href="#"
                              @click="showCarousel"
                              class="flex-shrink-0 items-center px-3 py-0.5 rounded-full text-sm font-medium rounded-xl text-white bg-black hover:text-orange-500"
                              >
                                View screens
                              </button>
                          <!-- </div> -->
                        </li>
                      </ul>
                    </dd>
                  </div>
                  </div>
                </div>
          <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima sequi recusandae, porro maiores officia assumenda aliquam laborum ab aliquid veritatis -->
        </p>
        </div>
        <div  aria-hidden="true" class="mt-10 -mx-4 relative lg:mt-0">

<span class="sm:h4-full sm:w-full h-45 w-45 lg:h-64 lg:w-64 overflow-hidden">
                                  <img
                                    :src="data.thumbnail"
                                    class="justify-center bg-center cursor-pointer h-45 w-45 lg:h-64 lg:w-64"
                                  />   </span>
        <!-- <img  width="490" height="200"
                  class="relative mx-auto card-inner-image object-contain"
                  :src="data.thumbnail"
                  alt="gallimg"
                /> -->
         </div>
          <div class="sm:col-span-2 divide-y divide-gray-200 ">
                    <dt class="text-sm font-medium text-gray-500 ">
                     Description
                    </dt>
                    <dd class="mt-1 text-sm text-gray-900 px-8 py-2" v-html="data.previewDescription">


                <div class="">
                 <div class="sm:col-span-1  pl-8">
                    <dd class="mt-4 text-sm text-gray-900">

                    </dd>
                  </div>
                  </div>


                    </dd>

                  </div>  <div class="sm:sr-only">
                      <span
                        v-show="activeCardId !== null && index === hoveredIndex"
                        @click.prevent="close"
                        class=" justify-end float-right bg-gray-400 text-gray-700 rounded-full shadow-lg px-4 py-2 hover:bg-red-400"
                        >X</span
                      >
                    </div>
         </div>

         </div>
                  </transition>
                </div>
              </template>
            </div>
          </div>
        </div>





      </div>
    </div>

    <div class="material-stuff bg-gray-100"></div>
  </div>
</template>


<script>
import CarouselSlide from "./Carousel-Slide";

import {mapGetters} from 'vuex';

export default {
  components: {
    CarouselSlide
  },
  data() {
    return {
      hoveredIndex: null,
      activeCardId: null,
      hideMainImg: false,
      // showCardDetails,
      showCardDetails: false,
      carouselOpen: false,
      hover: false,
      reduceImageOpacity: { opacity: 0.3 },
      imageOpacity: { opacity: 1 }
      // cardsData: [
      //   {
      //     id: "/projects/chef-app",
      //     descriptionTeaser:
      //       "Item One tdesc teaser  that cannot grow or shrink - this was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.",
      //     title: "Chef App  ",
      //     tech: "Javascript",
      //     type: "web",
      //     description:
      //       "This was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam,voluptatum cupiditate veritatis in, accusamus quisquam.",
      //     mainImg: require("assets/images/chef-gallery.jpg"),
      //     showImg: true,
      //     smallCardInnerImg: require("assets/images/chef-small-card-inner-img.png"),
      //     rating: "5",
      //     votes: 17,
      //     slideImages: [
      //       require("assets/images/undraw_empty_cart_co35.svg"),
      //       require("assets/images/beati_soup.jpeg"),
      //       require("assets/images/chef-gallery.jpg"),
      //       require("assets/images/bonnappetit.jpg")
      //     ]
      //   },
      // ]
    };
  },
  methods: {
    mouseHoverFunc(index) {
      console.log("Hover-In Index", index);

      this.hoveredIndex = index;
    },
    mouseLeaveFunc() {
      this.showCardDetails = false;
      this.hideMainImg = false;
      this.closeCarousel();
    },
    close() {
      this.activeCardId = null;
      this.hideMainImg = false;
    },
    setCardId(cardId) {
      console.log("CARD ID", cardId);
      this.activeCardId = cardId;
      this.hideMainImg = true;
      this.showCardDetails = true;
    },
    showCarousel() {
      this.carouselOpen = true;
      this.showCardDetails = false;
    },
    showCarouselMobile(index) {
      this.activeCardId = index;
      this.carouselOpen = true;
    },
    closeCarousel() {
      // this.activeCardId = null;
      this.carouselOpen = false;
      this.activeCardId = null;
    },
    myFunction: function () {
      let projectsArray = []
      if(	this.projects = Array.isArray(this.item1)){
         return this.projects
      }
      else {
        projectsArray.push(this.projects);
          return projectsArray
        }
    },
  //   redirecToPage(id) {
  //   alert("redirect:", id);
  //  },
  },
  computed: {
      ...mapGetters(['loadProjects'])

  },



};
</script>
<style scoped>
@media screen and (min-width: 1200px){
  .myblack{
 background-color: #34363E;
}
.card-main-image {
    background-size: cover;
    background-position: 50% 50%;
    height: 500px;
    width: 100%;
}
}
@media screen and (min-width: 600px){

.card-main-image{
    background-size: cover;
    background-position: 50% 50%;
}
}
.card-main-image {
    background-size: cover;
    background-position: 50% 50%;
}


.card-inner-image{
    max-width: 100%;
    height: 265px;

}
.bg-main {
  background-color: #009fff;
}
.active {
  background: green;
  padding: 4px;
}
.image {
  /* opacity: 1;
  display: block;
  width: 100%;
  height: auto; */
  transition: 0.5s ease;
  backface-visibility: hidden;
  /* transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); */
}
.blockBtns {
  display: block !important;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

/* .gallery-img-card:hover .card-grid > {
  background: red;
} */
/* .gallery-img-card:hover .image {
  opacity: 0.3;
} */
.card-title {
  font-weight: 900 !important;
  font-size: 4em !important;
  letter-spacing: -0.03em;
  color: black;
  color: #3fb3b3;
  line-height: 0.9em;
  /* text-transform: lowercase; */
  /* font-family: "Playfair Display" !important; */
}
.green-color {
  color: #3fb3b3;
}
.bg-green-color {
  background: #3fb3b3;
}
.btns {
  align-items: center;
  width: 0px;
  /* width: 20%; */
  opacity: 0;
}
.slideBtnsIn {
  opacity: 1;
  flex: row;
  margin-left: 1%;
  margin-right: 1%;
  width: 36%;
  /* margin-top: 24%; */
  margin-top: 20%;
  margin-left: 4%;
  transition-duration: 0.4s;
  transition-property: width;
  transition-timing-function: ease-in-out;
}
/* .gallery-img-card2:hover .btns {
  opacity: 1;
  width: 180px;
} */
.teaser-card-detail {
  margin-top: 18%;
  /* width: 60%; */
  /* width: 1%; */
  margin-right: 5%;
  opacity: 0;
  transition-duration: 0.6s;
  transition-property: width;
}

.gallery-img-card:hover .teaser-card-detail {
  /* margin-top: 25%; */
  opacity: 1;
  width: 60%;
  align-items: center;
  transform: translate(-5%, -5%);
  -ms-transform: translate(-5%, -5%);
  transition-duration: 0.4s;
  transition-delay: 0.2s;
  transition-timing-function: ease-in-out;
  text-align: center;
}

.gallery-img-card2:hover {
  /* background: green; */
  z-index: 2;
}

.card-image {
  /* height: 400px; */
  /* margin: 4px; */
  display: inline-block;
  vertical-align: top;
}

/* x Button  Close */
/* x Button  Close */
@media (min-width: 600px) {
  .close {
    right: 25px;
  }
}
/*
@media (max-width: 600px) { .card-image {
    height: 200px;

  }
} */
.close {
  bottom: -50px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  margin-bottom: 10px;
}

.mdi {
  display: inline-block;
}

/* .mdi-close:before {
  content: 'x';
} */
</style>
