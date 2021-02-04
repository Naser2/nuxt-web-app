<template>
  <div>
    <Navbar :modeColor="modeColor" :changeModeColor="changeModeColor"/>
    <nuxt :modeColor="modeColor" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "defaultTheme",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      mode: "main",
      modeColor: ["bg-gray-900"],
      ModeTitle: "",
      brandName: "Nasser Sanou",

      menuNotAuthItems: [
        { text: "Home", link: "/", tag: "Home" },
        { text: "Home", link: "/admin", tag: "Home" },
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
        { text: "Home", link: "/admin", tag: "Home" },
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
  methods:{
     changeModeColor() {
      if (this.mode === "day") {
        this.modeColor = ["bg-gray-100", "text-gray-800"];
      } else if (this.mode === "night") {
        this.modeColor = ["bg-gray-900", "text-white"];
      } else if (this.mode === "main") {
        this.modeColor = ["bg-orange-600", "text-gray-200"];
      }
    },
  }

};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
