<template>
  <div class="warapper-main bg-red-500 lg:mb-40">
    <div class="wrapper relative lg:pb-0">
      <div class="hero-main-wrapper">
        <div
          class="absolute w-full bg-cover object-center bg-repeat h-screen top-0 right-0 lg:hidden"
          :class="[{ 'mobile-background': currentImgIndex ==1}, {'mobile-background-blue':currentImgIndex ==2}]"
        ></div>
        <div class="yellow-triangle"></div>
        <div class="pink-triangle"></div>
        <div class="hero-background orange-triangle"></div>
        <div class="relative mb-20 lg:hidden">
          <h1
            class="text-gray-800 bg-orange-300 py-2 text-4xl tracking-tight text-gray-200 leading-10 font-extrabold sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl lg:hidden"
          >{{ people[currentImgIndex].review }}</h1>
        </div>

        <div class="hero-main hidden lg:block" :class="currentImgIndex ===1 ?  'down-patern' : ''">
          <div class="header bg-gray-300 py-10 rounded-sm shadow-md">
            <h1
              class="text-gray-800 pb-4 text-4xl tracking-tight text-gray-200 leading-10 font-extrabold sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
            >{{ people[currentImgIndex].review }}</h1>
          </div>

          <div class="hero-images block">
            <figure class="figure">
              <div class="sr-only lg:not-sr-only xl:mt-2/12">
                <img
                  class="testimony-img"
                  :alt="people[currentImgIndex].alt || 'hello '"
                  :src="
                  Array.isArray(people) ? people[currentImgIndex].img : +imgSrc
                "
                  :style="{ opacity: imageOpactity.opacity }"
                />
              </div>

              <figcaption :style="{ opacity: imageOpactity.opacity }">
                <div class="seller-wrapper sr-only lg:not-sr-only">
                  {{ people[currentImgIndex].name }},
                  <b>Happy Client</b>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- :src="Array.isArray(people) ? people[currentImgIndex].img : imgSrc" -->
        <!-- pt-9/12  md:pt-2/6 md:ml-1/6 sm:pt-9/12 style="nexus"-->
        <!-- <div class="relative pb-11/12 h-11/12 sm:ml-40   lg:hidden"> -->
        <div class="mobile h-screen lg:hidden">
          <div class="relative h-11/12 lg:hidden">
            <img
              class="absolute -mt-10 h-11/12 object-cover lg:w-full z-negative"
              :style="[
              { opacity: imageOpactity.opacity },
              'opacity:1',
              'mobile-img',
              'height:100px'
            ]"
              :alt="people[currentImgIndex].alt || 'hello '"
              :src="Array.isArray(people) ? people[currentImgIndex].img : imgSrc"
            />
          </div>
        </div>
        <div
          class="relative -mt-32 testimony-review w-full bg-gray-900 py-6 bottom-0 z-negative lg:hidden lg:hidden"
        >
          <div class="reviewer-name text-gray-200">
            {{ people[currentImgIndex].name }},
            <b>Happy Client</b>
          </div>
        </div>
        <!-- <div
        class="bg-gray-900 text-4xl px-4 tracking-tight text-gray-200 leading-10 font-extrabold sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
      >
        {{ people[currentImgIndex].review }}
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {},
      currentImgIndex: 0,
      // currentImgIndex: this.changeSrc(),
      people: [
        {
          name: "matthew",
          img: require("assets/images/testimonies/900-matthew2x.webp"),
          alt: "Website Client",
          review: "He did such a awesome job!"
        },
        {
          name: "Sergue",
          img: require("assets/images/testimonies/900-darren2x.webp"),
          alt: "Designer and Animator",
          review: "I loved the entire process!"
        },
        {
          name: "Melissa",
          img: require("assets/images/testimonies/900-melissa2x.webp"),
          alt: "Mobile Client",
          review: "Will definitely recommend!"
        }
      ],
      imgSrc: [
        require("assets/images/testimonies/900-matthew2x.webp"),
        require("assets/images/testimonies/900-darren2x.webp"),
        require("assets/images/testimonies/900-melissa2x.webp")
      ],
      imageOpactity: { opacity: 1 }
    };
  },
  methods: {
    changeSrc() {
      let people = [...this.people];
      let person;
      // const imgSource = this.imgSrc;
      person = people.map(person => {
        // person;
        console.log("person", person);
        // const newIndex = this.currentImgIndex + 1;
        // this.currentImgIndex = person[newIndex] ? newIndex : 0;
        return person;
      });

      if (Array.isArray(people)) {
        console.log("Yes IS ARRAY", person);
        setInterval(() => {
          this.imageOpactity.opacity = 0;
        }, 4000);
        setInterval(() => {
          this.imageOpactity.opacity = 1;
          this.person = person;

          // console.log("PRES INDEX", people.length - 1);
          // if (newIndex >= people.length) {
          //   newIndex = 0;
          // }
          const newIndex = this.currentImgIndex + 1;
          // console.log("New IIDEX", newIndex);
          // console.log("PERSON", person[newIndex]);
          this.currentImgIndex = people[newIndex] ? newIndex : 0;
          // console.log("CURRENT ----", people[newIndex]);
        }, 4010);
      }
    }

    // changeSrc() {
    //   // this.imageOpactity.opacity = 1;
    //   const imgSource = this.imgSrc;

    //   if (Array.isArray(imgSource)) {
    //     setInterval(() => {
    //       this.imageOpactity.opacity = 0;

    //       // continue;

    //       console.log(
    //         "CURRENT: ",
    //         this.currentImgIndex,
    //         "opacity run1",
    //         this.imageOpactity.opacity
    //       );
    //     }, 7000);
    //     setInterval(() => {
    //       this.imageOpactity.opacity = 1;
    //       console.log(
    //         "CURRENT: ",
    //         this.currentImgIndex,
    //         "opacity run -2",
    //         this.imageOpactity.opacity
    //       );
    //       const newIndex = this.currentImgIndex + 1;
    //       this.currentImgIndex = imgSource[newIndex] ? newIndex : 0;
    //     }, 7100);
    //   }
    // }
  },
  computed: {},
  created() {
    this.changeSrc();
  }
};
</script>

<style>
.mobile {
  height: 30rem !important;
}
@media (min-width: 968px) {
  .mobile-img {
    height: 37rem !important;
  }
}

@media only screen and (min-width: 900px) {
  .hero-main-wrapper {
    bottom: 0;
  }
}
.hero-main-wrapper {
  background-color: #eef2f5;
  position: relative;
}

.mobile-background {
  width: 200%;
  background: rgb(243, 193, 79);
}
.mobile-background-blue {
  width: 200%;
  background: rgb(68, 106, 212);
}
.pink-triangle {
  /* border-bottom-color: #e7643e !important; */
  border-bottom-color: rgb(240, 144, 110) !important;
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom: 94vw solid;
  border-left: 99vw solid transparent;
}
.yellow-triangle {
  /* border-bottom-color: #e7643e !important; */
  border-bottom-color: rgb(243, 193, 79) !important;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 42vw solid;
  border-right: 313vw solid transparent;

  border-bottom: 32.1vw solid;
}
.hero-background.orange-triangle {
  border-bottom-color: #e7643e;
  border-bottom-color: #f192ad;
  border-bottom-color: #009fff;
}
/* .orange-triangle {
    background-color: #e7643e;
} */

.hero-background {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom: 30vw solid;
  border-left: 80vw solid transparent;
}
.hero-main {
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  /* background-color: #e4edf9; */
}
@media only screen and (min-width: 900px) {
  .hero-main {
    height: 580px;
  }
}
@media only screen and (min-width: 600px) {
  .hero-main {
    /* height: 430px; */
    height: 460px;
    padding-top: 100px;
  }
}
@media only screen and (min-width: 900px) {
  .hero-background {
    display: block;
  }
}

/* HEADER */

.header {
  max-width: 380px;
  margin: 0 auto;
  background-color: #e4edf9 !important;
  /* padding: 0 24px 32px; */
}

@media only screen and (min-width: 600px) {
  .header {
    width: 60%;
    max-width: 400px;
    padding-left: 30px;
  }
}
@media only screen and (min-width: 600px) {
  .nexus {
    padding-top: 10%;

    padding-left: 30px;
  }
}
@media only screen and (min-width: 900px) {
  .header {
    margin: 0;
    max-width: 543px;
    /* padding: 0 0 0 30px; */
    width: auto;
  }
}
@media only screen and (min-width: 1160px) {
  .header {
    /* padding: 0 0 0 150px; */
    /* Added */
    /* padding-bottom: 450px; */
    margin: 0 0 0 150px;
  }
}

/* IMAGES */
.figure {
  display: block;
}

@media only screen and (min-width: 600px) {
  .hero-images picture {
    height: 100%;
  }
}

.testimony-img {
  left: 18px;
  margin-left: 55%;
  min-height: 241px;
  /* height: 27vw; */
  /* width: 56vh;
  height: 27vw; */
  width: 66vh;
  height: 30vw;

  -webkit-animation: fade 2s linear;
  animation: fade 2s linear;
  -webkit-transition: opacity 0.9s;
  -o-transition: opacity 0.9s;
  transition: opacity 1.9s;
  position: absolute;
  right: 0;
  bottom: 0;
}

@media only screen and (min-width: 1160px) {
  .hero-images figcaption {
    left: 150px;
    right: auto;
  }
}
@media only screen and (min-width: 900px) {
  .hero-images figcaption {
    font-size: 13px;
    line-height: 18px;
    right: 120px;
    margin-left: 60%;
  }
}
.hero-images figcaption {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  position: absolute;
  bottom: 15px;
  right: 24px;
  font-size: 12px;
  line-height: 14px;
  color: #fff;
  z-index: 2;
  letter-spacing: 0.5px;
  -webkit-animation: fade 2s linear;
  animation: fade 2s linear;
  -webkit-transition: opacity 0.9s;
  -o-transition: opacity 0.9s;
  transition: opacity 0.9s;
  cursor: default;
}
.down-patern {
  background-color: #2774c7 !important;
  padding: 5rem 2rem 0.6rem 2rem;
  background: var(--bg2);
  border-radius: 3px;
  position: relative;
  clip-path: polygon(
    0 0,
    5% 5%,
    10% 0,
    15% 5%,
    20% 0,
    25% 5%,
    30% 0,
    35% 5%,
    40% 0,
    45% 5%,
    50% 0,
    55% 5%,
    60% 0,
    65% 5%,
    70% 0,
    75% 5%,
    80% 0,
    85% 5%,
    90% 0,
    95% 5%,
    100% 0,
    100% 100%,
    0 100%
  );
  /* polygon(
    0 100%,
    100% 100%,
    100% 0,
    95% 5%,
    90% 0,
    85% 5%,
    80% 0,
    75% 5%,
    70% 0,
    65% 5%,
    60% 0,
    55% 5%,
    50% 0,
    45% 5%,
    40% 0,
    35% 5%,
    30% 0,
    25% 5%,
    20% 0,
    15% 5%,
    10% 0,
    5% 5%,
    0 0
  ); */
}

.recommended {
  background-color: #35495e !important;
  padding: 5rem 2rem 0.6rem 2rem;
  background: var(--bg2);
  border-radius: 3px;
  position: relative;
  -webkit-clip-path: polygon(
    0 0,
    5% 5%,
    10% 0,
    15% 5%,
    20% 0,
    25% 5%,
    30% 0,
    35% 5%,
    40% 0,
    45% 5%,
    50% 0,
    55% 5%,
    60% 0,
    65% 5%,
    70% 0,
    75% 5%,
    80% 0,
    85% 5%,
    90% 0,
    95% 5%,
    100% 0,
    100% 100%,
    0 100%
  );
  clip-path: polygon(
    0 0,
    5% 5%,
    10% 0,
    15% 5%,
    20% 0,
    25% 5%,
    30% 0,
    35% 5%,
    40% 0,
    45% 5%,
    50% 0,
    55% 5%,
    60% 0,
    65% 5%,
    70% 0,
    75% 5%,
    80% 0,
    85% 5%,
    90% 0,
    95% 5%,
    100% 0,
    100% 100%,
    0 100%
  );
  /* clear: both; */
}

.site-sponsors,
#codefund,
.recommended {
  border-bottom: 3px solid var(--code);
  border-image-source: linear-gradient(to right, #008f68, #fae042);
  border-image-slice: 1;
  border-top: 0;
  border-left: 0;
  border-right: 0;
}
</style>
