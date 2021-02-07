<template>
  <!-- v-scrollAnimation -->
  <div
    class="relative myblack"
  >
    <div
     class="bg-white overflow-hidden shadow divide-y divide-gray-200 h-full lg:max-h-screen sm:grid sm:grid-cols-3 sm:gap-px-0 ">
      <div class="hidden lg:flex bg-white relavtive  max-w-7xlz-20 h-1/3">
      <div class="hidden  lg:flex absolute top-0 right-0 py-20 px-0 w-2/3 h-1/3 z-20 myblack "></div>

      <section id="" class="hidden lg:flex grid-x lg:h-1/2">
              <img src="~/assets/shapes/triangle-top-yellow.png" class="orange-triange bottom-0 w-full h-screen/2"
      style="opacity: 1; transform: translate(0px, 0px);">
         <div class="hidden lg:flex circle-cunstom circleblue" style="opacity: 1; transform: translate(0px, 0px);"></div>
         <div class="hidden lg:flex circle-cunstom circleblue2" style="opacity: 1; transform: translate(0px, 0px);"></div>
         <div class="hidden lg:flex circle-cunstom circleblue3" style="opacity: 1; transform: translate(0px, 0px);"></div>
              <img src="~/assets/shapes/triangle-bottom-orange.png" class="orange-triange bottom-0 w-full h-screen/2 top-60"
      style="opacity: 1; transform: translate(0px, 0px);">
        <!-- <div data-v-0c768fa4="" class="circle-blue circle z-20" style="opacity: 1; transform: translate(0px, 0px);"></div> -->
         <!-- <div class="circle-cunstom1  z-20" style="opacity: 1; transform: translate(0px, 0px);"></div> -->
      <!-- <div class="el circle-cunstom2  z-20" style="opacity: 1; transform: rotate(-45deg);"></div> -->
      <!-- <div class="el bar-left" style="opacity: 1; transform: translate(0px, 0px);"></div> -->
          <!-- <div class="el mytriangle-rotate" style="opacity: 1; transform: translate(0px, 0px);">
						<img src="https://www.luckybeard.com/wp-content/themes/uncode-child/assets/images/triangle-blue.svg">
					</div> -->
      </section>
    </div>

  <div class="bg-white relavtive h-full py-0 px-0 max-w-7xl sm:px-0 lg:px-0 lg:pt-24 z-20 ">
    <section id="about" class="grid-x ">

    <!-- <div class="hidden lg:flex circle-cunstom circle" style="opacity: 1; transform: translate(0px, 0px);"></div> -->
      <!-- <div class="circle-black circle" style="opacity: 1; transform: translate(0px, 0px);"></div> -->
      <div class="hidden lg:flex circle-blue circle" style="opacity: 1; transform: translate(0px, 0px);"></div>
      <div class="hidden lg:flex el circle-yellow circle" style="opacity: 1; transform: rotate(-45deg);"></div>
      <div class=" lg:hidden flex el circle-4-yrs-mobile0 circle" style="opacity: 1; transform: rotate(-45deg);"></div>
      <div class=" lg:hidden flex el circle-4-yrs-mobile1 circle" style="opacity: 1; transform: rotate(-45deg);"></div>
      <div class=" lg:hidden flex el circle-4-yrs-mobile2 circle" style="opacity: 1; transform: rotate(-45deg);"></div>
      <div class="el bar-left" style="opacity: 1; transform: translate(0px, 0px);"></div>
        <div class="el triangle-rotate pt-10" style="opacity: 1; transform: translate(0px, 0px);">
							<!-- <img src="~/assets/shapes/triangle-bottom-orange.png" class="orange-triange w-full" style="opacity: 1; transform: translate(0px, 0px);"> -->
					</div>


      <div class="relative  max-w-6xl mt-20 lg:left-1/6">
        <div id=" absolute top-10 right-10">
          <h1 style="opacity: 1; transform: translate(0px, 0px);">4 years young</h1>
          <h2 style="opacity: 1; transform: translate(0px, 0px);">I am an artist and entrepreneur with diverse skills, perspectives, background and talents.</h2>
          <p class="px-6" style="opacity: 1; transform: translate(0px, 0px);">Over the last 4 years I’ve worked on exciting projects. My combination of art, digital, and code understanding allowed me to strategies and build the best wireframes, websites, apps and web-apps through unique lenses.
      I’ve learned a lot about what doesn’t work, what works and most importantly why it works to do it better..</p>
          <p style="opacity: 1; transform: translate(0px, 0px);"><em>That’s why I started NasCodes.</em></p>

          <div class="el black-ball scroll-ball" style="opacity: 1; transform: translate(0px, 0px);">
            <div class="ball" style="transform: translate(0px, 161px);"></div>
            <!-- <div class="body" style="height: 161px;"></div> -->
          </div>
        </div>
      </div>
      <img src="~/assets/shapes/background-home.svg" class="orange-triange bottom-0 w-full h-40"
      style="opacity: 1; transform: translate(0px, 0px);">
              <!-- about-content -->
      <div class="hidden lg:flex circle-blue circle z-20" style="opacity: 1; transform: translate(0px, 0px);"></div>
      <div class="hidden lg:flex circle-blue2 circle z-20" style="opacity: 1; transform: translate(0px, 0px);"></div>
      <div class="hidden lg:flex circle-blue3 circle z-20" style="opacity: 1; transform: translate(0px, 0px);"></div>
      </section>
            <!-- <div class="hidden lg:w-full circle"></div> -->
    </div>
  </div>




  </div>

</template>

<script>
export default {
  name: "MidSection"
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
    top: 264px;
    left: -114px;
    z-index: 0;

}
.circleblue {
    height: 200px;
    width: 200px;
    border-radius: 60%;
    /* background-color: #d4e6e9; */
    background-color: rgb(125,200,239);
    position: absolute;
    top: 264px;
    left: 214px;
    z-index: 0;

}
.circleblue2{
    height: 100px;
    width: 100px;
    border-radius: 60%;
    /* background-color: #d4e6e9; */
    background-color: rgb(125,200,239);
    position: absolute;
    top: 564px;
    left: 414px;
    z-index: 0;

}
.circleblue3{
    height: 50px;
    width: 50px;
    border-radius: 60%;
    /* background-color: #d4e6e9; */
    background-color: rgb(125,200,239);
    position: absolute;
    top: 265px;
    left: 404px;

}

circle-cunstom1 {
    height: 600px;
    width: 600px;
    border-radius: 60%;
    /* background-color: #d4e6e9;
    background-color: white; */
    background-color: rgb(69, 74, 77);
    position: absolute;
    top: 40px;
    left: 214px;
    z-index: 0;

}
.myblack{
 background-color: #34363E;
}

 #about #about-content {
     left: 45%;
     left: 30%;
     width: 4%;
    position: relative;
    height: 115vh;
}
#about h1 {
    font-size: 70px;
    letter-spacing: -0.05em;
    margin-top: 2.5em;
    font-weight: 900;
}

#about h2 {
    font: 100 34px/1.4em 'poppins', sans-serif;
}
#about p {
  padding-top: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 180%;
    margin-bottom: 10px;
}
#about .triangle-rotate {
    width: 20.4%;
    left: 18%;
    top: 38%;
    transform-origin: bottom right;
    position: absolute;
}
.mytriangle-rotate {
    width: 50.4%;
   margin-left: 30%;
    margin-top: 100%;
    transform-origin: bottom right;
    position: relative;
}


#about .circle.circle-blue {
    width: 72px;
    height: 72px;
    border-radius: 100%;
    /* background-color: #D4E6E9; */
    top: -10%;
    left: 69%;
}
#about .circle.circle-blue2 {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    /* background-color: #D4E6E9; */
    top: 23%;
    left: 80%;
}

#about .circle.circle-blue3 {
    width: 63px;
    height: 63px;
    border-radius: 100%;
    /* background-color: #D4E6E9; */
    top: -30%;
    left: 88%;
}
.orange-triange {

    /* width: 172px;
    height: 172px; */
    /* border-radius: 100%; */
    /* background-color: #D4E6E9; */
    /* top: 0%;
    right: 169%; */
}

#about .circle.circle-yellow {
    opacity: 0;
    transform: translate(0px, -100px) rotate(-45deg);
}
 #about .circle.circle-yellow {
    width: 30%;
    background-color: #FFF59A;
    padding-bottom: 30%;
    transform: rotate(-45deg);
    transform-origin: 50% 100%;
    border-radius: 50%;
    left: 68%;
    top: 1%;
}
 #about .circle-4-yrs-mobile0 {
    height: 50px;
    width: 50px;
    background-color: rgb(125,200,239);
    transform: rotate(-45deg);
    transform-origin: 50% 100%;
    border-radius: 50%;
    left: 80%;
    top: 13.4%;
}
 #about .circle-4-yrs-mobile1 {
    height: 120px;
    width: 120px;
    background-color: rgb(125,200,239);
    /* padding-bottom: 10%; */
    transform: rotate(-45deg);
    transform-origin: 50% 100%;
    border-radius: 50%;
    left: 22%;
    top: 19.4%;
}
 #about .circle-4-yrs-mobile2 {
height: 292px;
    width: 292px;

    background-color: rgb(125,200,239);
    /* padding-bottom: 10%; */
    transform: rotate(-45deg);
    transform-origin: 50% 100%;
    border-radius: 50%;
    left: 39%;
    top: 31%;
}
 #about .circle.circle-bottom {
    /* width: 30%; */
    background-color: rgb(125,200,239);
    padding-bottom: 30%;
    transform: rotate(-45deg);
    transform-origin: 50% 100%;
    border-radius: 50%;

     bottom: -250px;
    right: -250px;
}
 #about .circle.circle-top {
    /* width: 30%; */
    background-color: rgb(125,200,239);
    padding-bottom: 30%;
    transform: rotate(-45deg);
    transform-origin: 50% 100%;
    border-radius: 50%;
    top: -250px;
    left: -250px;
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
