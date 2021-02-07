<template>
  <!-- <div
    class="anouncing-wrapper mx-auto my-2/12 pb-20 lg:-my-4/12 xl:my-56 bg-gray-900 lg:mx-56 nasIntro"
  >-->
  <!-- -mb-3/12 -->
  <div
    class="relative h-11/12 bg-gray-900 h-full shadow overflow-hidden"
    :class="setSlide === 'Triangle' ? 'bg-blue-500' : 'bg-gray-900'"
  >
    <!-- v-show="showComp" -->

    <div class="current-slide">
      <Intro
        v-if="setSlide === 'NasIntro'"
        :show="show"
        :setMainAnim="setMainAnim"
      />
      <Triangle v-if="setSlide === 'Triangle'" />
      <Slide1 v-if="setSlide === 'Slide1'" />
      <Slide2 v-if="setSlide === 'Slide2'" />
    </div>

    <!-- <Triangle /> -->
    <!-- <SlideShow /> -->

    <!-- <slide-show></slide-show> -->
    <!-- && setSlide ==='NasPresentation' -->
  </div>
</template>

<script>
import Triangle from "./Review-Animated/Triangles";
import Intro from "./Review-Animated/Intro";
import Slide1 from "./Review-Animated/Slide1";
import Slide2 from "./Review-Animated/Slide2";

export default {
  name: "TopTeaser",
  components: {
    Triangle,
    Intro,
    Slide1,
    Slide2
  },
  data() {
    return {
      defaultTime: 0,
      time: 0,
      timer: null,
      slideCompName: "",
      number: 0,
      showComp: "",
      comps: ["Triangle", "Comp2", "Comp3"],
      element: "",

      resetButton: false,
      title: "Let the countUp begin!!"
    };
  },

  methods: {
    formatNumber(num) {
      return (num < 10 ? "0" : "") + num.toString();
    },
    getMinutes() {
      return this.formatNumber(Math.floor(this.time / 60));
    },
    getSeconds() {
      return this.formatNumber(this.time % 60);
    },
    playPause() {
      if (!this.timer) {
        this.play();
      } else {
        this.pause();
      }
    },
    play() {
      if (this.time <= 0) this.time = this.defaultTime;
      this.timer = setInterval(() => {
        this.time += 1;
        if (this.time >= 40) this.reset();
      }, 1000);
    },
    pause() {
      clearInterval(this.timer);
      this.timer = null;
    },
    reset() {
      this.time = this.defaultTime;
    },
    getPlayState() {
      return !!this.timer;
    }
  },
  computed: {
    setSlide: function() {
      if (this.time === 0 || this.time <= 6) {
        return "NasIntro";
      }
      if (this.time >= 6 && this.time < 12) {
        return "Slide1";
      }
      if (this.time >= 12 && this.time < 19) {
        return "Slide2";
      }
      if (this.time >= 19) {
        return "Triangle";
      }
    }
  },
  created() {
    this.time = this.defaultTime;
    this.play();
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

<style>

</style>
