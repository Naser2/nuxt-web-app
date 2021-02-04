<template>
  <div class="bg-gray-900 justify-center text-center">
    <AboutTeaser />
    <Brainstorming />
    <Gallery />
    <div
      class="user-reviews relative w-full py-6 bg-gray-700 text-2xl tracking-tight text-gray-200 leading-10 font-extrabold sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl rounded-md shadow-sm"
    >Reviews</div>
    <AnimatedReviews :show="show" :setMainAnim="setMainAnim" />
    <Pricing />
    <ServicesTeaser />
  </div>
</template>

<script>
import AboutTeaser from "~/components/Teasers/AboutTeaser";
import Brainstorming from "~/components/Teasers/Brainstorming-svg";
import ServicesTeaser from "~/components/Teasers/ServicesTeaser";
import Gallery from "~/components/Teasers/GalleryTeaser";
import AnimatedReviews from "~/components/Teasers/Animated-Review";
import Pricing from "~/components/Teasers/Pricing";

export default {
  middleware: "auth",
  components: {
    AboutTeaser,
    Brainstorming,
    ServicesTeaser,
    Gallery,
    Pricing,
    AnimatedReviews
  },
  mounted (){
    console.log("LMAO")
  },
  data() {
    return {
      mode: "main",
      modeColor: ["bg-gray-900"],
      ModeTitle: "",
      brandName: "Nasser Sanou",

      menuNotAuthItems: [
        { text: "Home", link: "/", tag: "Home" },
        { text: "Test", link: "/test", tag: "Test" },
        { text: "About", link: "/about", tag: "About" },
        { text: "Services", link: "/search", tag: "Services" },
        { text: "Projects", link: "/recipes", tag: "Projects" },
        { text: "Blogs", link: "/blogs", tag: "Philosophy" },
        { text: "Philosophy", link: "/philosophy" },
        { text: "Pricing", link: "/Pricing", tag: "Pricing" },
        { text: "Contact", link: "/contact", tag: "Tag" }
      ],

      menuAuthItems: [
        { text: "Home", link: "/", tag: "Home" },
        { text: "Test", link: "/test", tag: "Test" },
        { text: "About", link: "/about", tag: "About" },
        { text: "Services", link: "/search", tag: "Services" },
        { text: "Projects", link: "/recipes", tag: "Projects" },
        { text: "Blogs", link: "/blogs", tag: "Philosophy" },
        { text: "Philosophy", link: "/philosophy", tag: "philosophy" },
        { text: "Pricing", link: "/Pricing", tag: "Pricing" },
        { text: "Contact", link: "/contact", tag: "Tag" },
        { text: "Create", link: "/create", tag: "create" },
        { text: "Signup", link: "/Signup", tag: "signup" }
      ]
    };
  },
  created() {
    this.show = !this.show;
    this.setMainAnim();
  },
  methods: {
    setMainAnim() {
      setTimeout(() => {
        console.log("SHOW - 0", this.show);

        console.log("SHOW - 1", this.show);
      }, 0.5);
    },

    changeMode(mode) {
      this.mode = mode;
      this.changeTheme();
    },
    changeTheme() {
      if (this.mode === "day") {
        this.modeColor = ["bg-gray-100", "text-gray-800"];
      } else if (this.mode === "night") {
        this.modeColor = ["bg-gray-900", "text-white"];
      } else if (this.mode === "main") {
        this.modeColor = ["bg-orange-600", "text-gray-200"];
      }
    }
  },
  directives: {
    theme: {
      // directive definition
      inserted(el, binding, vnode) {
        console.log("INSER", vnode);
        console.log("ELEMENT", el);
        if (binding.value === "day") {
          console.log("VAL", binding.value);
          el.style.backgroundColor = "bg-gray-200";
        } else if (binding.value === "night") {
          console.log("VAL", binding.value);
          el.style.backgroundColor = "bg-blue-200";
        } else {
          el.style.backgroundColor = "bg-blue-200";
        }
      }
    }
  }
};
</script>

<style>
.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.quote {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  margin-left: 200px;
  margin-right: 200px;
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-top: 15px !important;
  padding-bottom: 50px !important;
}

.links {
  padding-top: 15px;
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
.b40 {
  /* margin-bottom: 40px; */
}
.t40 {
  /* margin-top: 40px; */
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
/ .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.quote {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: white;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
