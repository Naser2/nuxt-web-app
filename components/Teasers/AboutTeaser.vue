<template>
  <!-- v-scrollAnimation -->
  <div
    class="background-image-wrapper block lg:flex row-gt-sm pt-0 h-10/12 relative"
  >
    <div class="image lg:w-8/12 flex-50-gt-sm animated slide-in-left z-20">
      <img
        class="w-full image shadow-md"
        src="~assets/images/nas-portrait.jpg"
        alt="imageAlt"
      />
      <!-- relative -mt-5/12  -->
      <!-- <div
        class=" relative mt-64 -mt-12/12 lg:absolute lg:bottom-0 lg:mx-54 xl:mx-auto
      -->
      <div
        class="absolute px-8 -mt-56 font-extrabold justify-center text-3xl font-play"
      >
        <h1 class="gray-word dynamic-words">Make</h1>
        <div id="flip">
          <div>
            <div class="bg-indigo-500 text-center text-3xl">Websites</div>
          </div>

          <div>
            <div class="bg-purple-500 text-center w-48">Apps</div>
          </div>

          <div class>
            <div class="bg-blue-400 text-center w-48">Work</div>
          </div>
        </div>
        <div class="text-indigo-600 italic dynamic-words blue-word">
          Awesome!
        </div>
      </div>
    </div>
    <div class="about-intro flex-50-gt-sm slide-in-right bg-black lg:w-8/12">
      <div class=" sm:text-center md:max-w-6xl md:mx-auto lg:text-left lg:px-10">


        <!-- <div class="layer-content z-50">
						<div class="header-text">
							<h3 style="transform: translate(0px, 0px); opacity: 1;" class="mt-10 text-gray-200 text-4xl">Hello. We're Lucky Beard.</h3>
							<h1 style="transform: translate(0px, 0px); opacity: 1;" class="mt-10 text-gray-200 text-4xl">A global design<br>company</h1>
							<p style="transform: translate(0px, 0px); opacity: 1;" class="mt-10 text-gray-200 text-4xl">Built to help start-ups become brands, and brands become start-ups.</p>
						</div><!-- header_text -->

					</div>
        <!-- Mobile Bkg -->
        <img class="w-full h-64 mobileBkg lg:hidden object-cover absolute z-negative lg:top-0 lg:right-0" src="~assets/images/beautiful_green_dots_on_grey_bkg.jpg" alt="" />
        <!-- Desktop Bkg -->
        <img class="w-full lg:object-cover lg:absolute z-negative lg:top-0 lg:right-0 -mb-32" src="~assets/images/beautiful_green_dots_on_grey_bkg.jpg" alt="" />
        <div class="about-description justify-center py-20 lg:py-36 px-2/12 bg-white -mt-20  ">
        	<h3 style="transform: translate(0px, 0px); opacity: 1;" class="mt-10 text-gray-900 font-bold text-4xl text-left lg:mx-20">I am Nas Codes.</h3>
          <h2 class="mt-5 text-gray-900 text-4xl text-left tracking-tight leading-10 font-extrabold sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
            A Creative and Intuitive
            <span class="text-indigo-600 blue-word">Engineer</span>
          </h2>
          <!-- mt-3 text-base text-left text-gray-500 sm:mt-5 sm:text-3xl lg:text-lg xl:text-4xl z-20 -->
          <p class="mt-3 max-w-4xl mx-auto text-xl leading-7 text-gray-600 sm:mt-5 sm:text-2xl sm:leading-8">
            With a fine arts and music background, Nasser is an enthusiastic Full Stack Developer with a passion for art.
            Solid foundation in JavaScript, React, React-Native, NodeJS, Ruby on Rails, Sass, Flutter, etc.
          </p>
          <div class="justify-center mt-8 mb-20 sm:max-w-lg sm:mx-0 lg:text-left lg:mx-0">
            <button
              type="submit"
              class="mt-3 px-6 py-3 rounded-full shadow-lg border-solid border-transparent text-base leading-6 font-medium  text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto lg:rounded-md "
            >
            <nuxt-link to="/profile">   Read more</nuxt-link>

            </button>
          </div>
        </div>

        <!-- <div
          class="flex bg-blue-200 pt-10 lg:pt-32 relative sm:max-w-2xl sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:items-center lg:mt-20"
        > -->
        <div class="hidden lg:w-full circle"></div>
          <!-- <div
            class="w-full justify-center text-center relative shadow-lg lg:max-w-md lg:w-1/3"
          > -->
            <!-- <div class="my-5">
              <div
                class="flame-wrapper justify-centern text-center mx-1/4 my-1/4"
              >
                <div class="flame red"></div>
                <div class="flame orange"></div>
                <div class="flame gold"></div>
                <div class="flame white"></div>
                <div class="base my-blue"></div>
                <div class="flame my-blue-flame"></div>
                <div class="base blue"></div>
                <div class="base black bg-gray-900 shadow-lg"></div>
              </div> -->

              <!-- <img
                  src="../../assets/images/market-place-apps.gif"
                  alt="first app image"
                  class="w-full lg:h-64 w-6/12"
              />
            </div>-->
          <!-- </div> -->
       <div class=" justify-center py-18  lg:py-32 px-1/12 bg-black -mt-40 px-2/12 ">
        	<!-- <h3 style="transform: translate(0px, 0px); opacity: 1;" class="mt-10 text-gray-900 font-bold text-4xl text-left lg:mx-20">I am Nas Codes.</h3> -->
          <h2 class="px-4 py-10 mt-5 text-gray-100 text-4xl text-left tracking-tight leading-10 font-extrabold sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl lg:mt-20 ">
            If you love what you do you'll never work a day in your life
            <!-- <span class="text-indigo-600 blue-word">Engineer</span>a day in your life -->
          </h2>
          <!-- mt-3 text-base text-left text-gray-500 sm:mt-5 sm:text-3xl lg:text-lg xl:text-4xl z-20 -->


        </div>

        <!-- <div
          class="sr-only lg:not-sr-only text-xl italic font-play mt-0 max-w-4xl mx-auto text-xl leading-7 text-gray-300 sm:mt-5 sm:text-2xl sm:leading-8"
        >
          "You Can Love What You Do for a Living, But Still Think it Feels Like
          Work
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutNas"
};
</script>

<style scoped>
.circle {
    height: 600px;
    width: 600px;
    border-radius: 60%;
    /* background-color: #d4e6e9; */
    background-color: rgb(125,200,239);
    position: absolute;
    top: 23px;
    left: 125px;
    z-index: 0;

}
.layer-content {
    font: normal 24px/1.3em 'poppins', sans-serif;
    margin: 0;
}
.layer-content {
    position: absolute;
    top: 38%;
    left: 16.666%;
    max-width: 24em;
}
.layer-content h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: -0.03em;
    color: #34363E;
    margin: 0px;
}
.border-gray-blue {
  color: rgb(71, 93, 135);
}
.z-negative {
  z-index: -1;
}
.mobileBkg {
  margin-top: -37px;
}
.nasIntro {
  background-image: url("~assets/images/beautiful_green_dots_on_grey_bkg.jpg");
  height: 100%;
  /* height: 1000px;
  width: 921px; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (max-width: 600px) {
  .nasIntro {
    display: none;
  }
}
#flip {
  height: 50px;
  overflow: hidden;
}

#flip > div > div {
  color: #fff;
  padding: 4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background: #42c58a;
}
#flip div:first-child div {
  background: #4ec7f3;
}
#flip div:last-child div {
  background: #dc143c;
}

@keyframes show {
  0% {
    margin-top: -270px;
  }
  5% {
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
  }
}

.blue-word {
  color: #009fff;
}
.gray-word {
  color: rgb(209, 206, 206);
}
.dynamic-words {
  font-weight: 800;
  font-size: 2.3em;
  letter-spacing: -0.04em;

  line-height: 0.91em;
  font-family: "Playfair Display" !important;
}

@media (max-width: 614px) {
  .dynamic-words {
    font-size: 1.8em;
    font-weight: 700;
    letter-spacing: -0.09em;
  }
}

/* //FALME */
/* body {
    background: black;
} */
.flame-wrapper {
  /* position: absolute; */
  animation: flicker 3ms ease-in infinite;
  /* top: 50%; */
  /* left: 50%; */
}
.flame {
  bottom: 0;
  position: absolute;
  border-radius: 50% 0% 50% 50%;
  transform: rotate(-45deg);
}
.red {
  width: 80px;
  height: 80px;
  background: orangered;
  box-shadow: 0px 0px 10px 5px orangered;
}
.orange {
  left: 10px;
  width: 60px;
  height: 60px;
  background: orange;
  box-shadow: 0px 0px 12px 6px orange;
}
.gold {
  left: 18px;
  width: 45px;
  height: 45px;
  background: gold;
  box-shadow: 0px 0px 9px 4px gold;
}
.white {
  left: 22px;
  width: 35px;
  height: 35px;
  background: lightyellow;
  box-shadow: 0px 0px 9px 4px lightyellow;
}
.blue {
  left: 32px;
  width: 15px;
  height: 15px;
  background: darkblue;
  box-shadow: 0px 0px 15px 10px darkblue;
}
.my-blue {
  left: 20px;
  width: 40px;
  height: 40px;
  bottom: -20px;
  background: #009fff;
  /* background: black; */
  /* box-shadow: 0px 0px 15px 10px black; */
}
.my-blue-flame {
  /* left: 10px;
  width: 60px;
  height: 60px; */
  left: 32px;
  width: 12px;
  height: 15px;
  background: #009fff;
  /* background: black; */
  /* box-shadow: 0px 0px 15px 10px black; */
}
.black {
  left: 20px;
  width: 40px;
  height: 40px;
  bottom: -80px;
  /* background: black; */
  /* box-shadow: 0px 0px 15px 10px black; */
}
.base {
  border-radius: 50%;
  position: absolute;
}

@keyframes flicker {
  0% {
    transform: rotate(-1deg);
  }
  20% {
    transform: rotate(2deg) scaleY(1.05);
  }
  40% {
    transform: rotate(-1deg);
  }
  60% {
    transform: rotate(1deg);
  }
  80% {
    transform: rotate(-1deg) scaleY(0.9);
  }
  100% {
    transform: rotate(1deg);
  }
}
</style>
