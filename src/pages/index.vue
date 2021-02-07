<template>
  <div class="myblack justify-center text-center">






      <!-- <div class="relative"> <div  v-if="!actionDropDown && this.open===false"  class=" flex absolute top-60  right-1 loating-action-btns sm:items-center sm:text-sm md:text-base
    sm:flex absolute sm:top-4 z-50 sm:right-8 loating-action-btns sm:items-center sm:text-sm md:text-base">
          <button  @click="performChange('create')"
            type="button" class="inline-flex items-center p-2  border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            hover:text-white transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110
            ">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </button>
    </div>
      </div> -->
     <!-- <action-dropdown
     :controlModal="controlModal"
     :open="open"
     :type="blog.type"
     :title="blog.title"
     :actionDropDown="actionDropDown"
     :performChange="performChange"
     :addedToFavorites="addedToFavorites"
     :warn="warn"
     ></action-dropdown> -->
    <AboutTeaser />
    <div v-scrollAnimation class="bg-gray-100 overflow-hidden shadow divide-y divide-gray-200  sm:grid sm:grid-cols-3 sm:gap-px">
      <div class="art tech col-span-1 services2"><Brainstorming/></div>
      <div class="services col-span-2">
        <div class="bg-white">
  <!-- <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24"> -->
      <div class="mx-auto max-w-8xl">
        <div class="">
          <!-- <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8"> -->
          <ul class=" sm:grid sm:grid-cols-2 lg:grid-cols-2">
            <li>
         <div class="lg:h-full">
                <div class="px-2, py-4 lg:px-32 lg:py-20 services1">
              <div class="anim q-appear  px-20, py-20 lg:text-left">
              <img class="mb-4" src="https://www.luckybeard.com/wp-content/themes/uncode-child/assets/images/service-1-icon.svg" alt="Lucky Beard Business Design" title="Lucky Beard Business Design" style="opacity: 1; transform: translate(0px, 0px);">
                <h3 class="block-title" style="opacity: 1; transform: translate(0px, 0px);">Business Design</h3>
                    <p class="block-intro" style="opacity: 1; transform: translate(0px, 0px);">We create clarity and conviction.</p>
                      <ul style="opacity: 1; transform: translate(0px, 0px);">
                        <li style="opacity: 1; transform: translate(0px, 0px);">Business as-is analysis</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Vertical / industry research</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Gap &amp; opportunity identification</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Co-creation of future proofing roadmap</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Co-creation of future proofing roadmap</li>
                      </ul>
                    </div>
                </div>
              </div>
            </li>

            <li>
              <div class="lg:h-full">
                <div class="px-20, py-4 lg:px-32 lg:py-20 services2">
              <div class="anim q-appear  px-20, py-20 lg:text-left">
                      <img src="https://www.luckybeard.com/wp-content/themes/uncode-child/assets/images/service-2-icon.svg" alt="Lucky Beard Brand Design" title="Lucky Beard Brand Design" style="opacity: 1; transform: translate(0px, 0px);" class="mb-4">
                      <h3 class="block-title" style="opacity: 1; transform: translate(0px, 0px);">Brand Design</h3>
                      <p class="block-intro" style="opacity: 1; transform: translate(0px, 0px);">We create clarity and conviction.</p>
                      <ul style="opacity: 1; transform: translate(0px, 0px);">
                        <li style="opacity: 1; transform: translate(0px, 0px);">Defined Company purpose and Brand story</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Brand architecture</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Brand identity</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Interface and packaging design</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Go to market strategy</li>
                      </ul>
                    </div>
                </div>
              </div>
            </li>

            <li>
              <div class="lg:h-full">
                <div class="px-20, py-4 lg:px-32 lg:py-20 services3">
              <div class="anim q-appear  px-20, py-20 lg:text-left">
                      <img  class="mb-4" src="https://www.luckybeard.com/wp-content/themes/uncode-child/assets/images/service-3-icon.svg" alt="nasCodes" title="nasCodes" style="opacity: 1; transform: translate(0px, 0px);">
                      <h3 class="block-title" style="opacity: 1; transform: translate(0px, 0px);">Product Design</h3>
                      <p class="block-intro" style="opacity: 1; transform: translate(0px, 0px);">We assist in creating value through more progressive and intuitive products.</p>
                      <ul style="opacity: 1; transform: translate(0px, 0px);">
                        <li style="opacity: 1; transform: translate(0px, 0px);">Analysis of needs</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Product scope and feature set definition</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">MVP &amp; Proof of concept</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Commercial modelling</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Commercial modelling</li>
                      </ul>
                    </div>
                </div>
              </div>
            </li>

            <li>
              <div class="lg:h-full">
                <div class="px-20, py-4 lg:px-32 lg:py-20 services4">
                  <div class="anim q-appear  px-20, py-20 lg:text-left">
                    <img  class="mb-4" src="https://www.luckybeard.com/wp-content/themes/uncode-child/assets/images/service-4-icon.svg" alt="Lucky Beard Experience Design" title="Lucky Beard Experience Design" style="opacity: 1; transform: translate(0px, 0px);">
                      <h3 class="block-title" style="opacity: 1; transform: translate(0px, 0px);">Experience Design</h3>
                      <p class="block-intro" style="opacity: 1; transform: translate(0px, 0px);">We help create deeper connections to the people who matter most.</p>
                      <ul style="opacity: 1; transform: translate(0px, 0px);">
                        <li style="opacity: 1; transform: translate(0px, 0px);">CX, UX, UI</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Personas, needs, stories and goals</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Wireframe design</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Low fidelity prototyping</li>
                        <li style="opacity: 1; transform: translate(0px, 0px);">Testing &amp; Analysis</li>
                      </ul>
                    </div>
                </div>
              </div>
            </li>
            <!-- More items... -->
          </ul>
        </div>
      </div>
    </div>
        <!-- <div class="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">


          	<div class="cell large-6 t-left verflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-1">
								<div class="anim q-appear span-col-1">
									<img src="https://www.luckybeard.com/wp-content/themes/uncode-child/assets/images/service-1-icon.svg" alt="Lucky Beard Business Design" title="Lucky Beard Business Design" style="opacity: 1; transform: translate(0px, 0px);">
									<h3 class="block-title" style="opacity: 1; transform: translate(0px, 0px);">Business Design</h3>
									<p class="block-intro" style="opacity: 1; transform: translate(0px, 0px);">We help create new opportunities for growth.</p>
									<ul style="opacity: 1; transform: translate(0px, 0px);">
										<li style="opacity: 1; transform: translate(0px, 0px);">Business as-is analysis</li>
										<li style="opacity: 1; transform: translate(0px, 0px);">Vertical / industry research</li>
										<li style="opacity: 1; transform: translate(0px, 0px);">Gap &amp; opportunity identification</li>
										<li style="opacity: 1; transform: translate(0px, 0px);">Co-creation of future proofing roadmap</li>
									</ul>
								</div>
                <div class="cell large-6 t-left span-col-1">
								<div class="anim q-appear ">
									<img src="https://www.luckybeard.com/wp-content/themes/uncode-child/assets/images/service-1-icon.svg" alt="Lucky Beard Business Design" title="Lucky Beard Business Design" style="opacity: 1; transform: translate(0px, 0px);">
									<h3 class="block-title" style="opacity: 1; transform: translate(0px, 0px);">Business Design</h3>
									<p class="block-intro" style="opacity: 1; transform: translate(0px, 0px);">We help create new opportunities for growth.</p>
									<ul style="opacity: 1; transform: translate(0px, 0px);">
										<li style="opacity: 1; transform: translate(0px, 0px);">Business as-is analysis</li>
										<li style="opacity: 1; transform: translate(0px, 0px);">Vertical / industry research</li>
										<li style="opacity: 1; transform: translate(0px, 0px);">Gap &amp; opportunity identification</li>
										<li style="opacity: 1; transform: translate(0px, 0px);">Co-creation of future proofing roadmap</li>
									</ul>
								</div>
							</div>
							</div>


          </div> -->

      </div>
    </div>




    <Gallery />
    <CustomBackground />
      <div class="image relative  lg:w-12/12 flex-50-gt-sm animated slide-in-left z-20">
      <img
        class="w-screen bg-cover image shadow-md"
        src="~assets/images/CustomBackground_copy.jpeg"
        alt="imageAlt"
      />
   </div>
    <div
      class="user-reviews relative w-full py-6 bg-gray-700 text-2xl tracking-tight text-gray-200 leading-10 font-extrabold sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl rounded-md shadow-sm"
    >Reviews</div>
    <!-- <AnimatedReviews :show="show" :setMainAnim="setMainAnim" /> -->
    <!-- <Pricing /> -->
    <!-- <ServicesTeaser /> -->
    <create-modal :controlModal="controlModal" :item="blog"></create-modal>
  </div>

</template>

<script>
import AboutTeaser from "~/components/Teasers/AboutTeaser";
import Brainstorming from "~/components/Teasers/Brainstorming-svg";
import ServicesTeaser from "~/components/Teasers/ServicesTeaser";
import Gallery from "~/components/Teasers/GalleryTeaser";
import CustomBackground from "~/components/MidSection/MidSection";
import AnimatedReviews from "~/components/Teasers/Animated-Review";
import Pricing from "~/components/Teasers/Pricing";
import TestAnim from "~/components/testAnim";
import ActionDropdown from "~/components/ActionDropdown";
import EditModal from "~/components/Modals/EditModal";
import CreateModal from "~/components/Modals/CreateModal";
import WarnModal from "~/components/Modals/warn";
import SuccessModal from "~/components/Modals/SuccessModal";
import { fb } from "~/firebaseConfig/index";

export default {
  name:'App-Index',
  middleware: "auth",
  components: {
    AboutTeaser,
    Brainstorming,
    ServicesTeaser,
    Gallery,
    Pricing,
    AnimatedReviews,
    CustomBackground,
    ActionDropdown,
    EditModal,
    WarnModal,
    SuccessModal,
    TestAnim,
    CreateModal
  },
  mounted (){
    console.log("LMAO")
  },
  data() {
    return {
      open:true,
      show: false,

      // item: { ...this.item },
      addedToFavorites: false,
      open: false,
      mode: "main",
      modeColor: ["bg-gray-900"],
      ModeTitle: "",
      brandName: "Nasser Sanou",

      menuNotAuthItems: [
        { text: "Home", link: "/", tag: "Home" },
        { text: "Admin", link: "/admin", tag: "Admin" },
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
        { text: "Admin", link: "/admin", tag: "Admin" },
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
    console.log("ENV SECRETssRRRRRR: ", process.env.API_SECRET);
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
    },
     performChange(name) {
      console.log("perform ", name);

      if (name === "edit") {
        // this.open = true;
        this.$store.commit("setEdit", true);
        //  this.opreationEdit = this.$store.commit("setEdit", true);
        this.open = true;
        this.actionDropDown = false;
      }
      if (name === "save") {
        this.saved === false ? (this.saved = true) : (this.saved = false);
      }
      if (name === "share") {
        this.share === false ? (this.share = true) : (this.share = false);
      }
      if (name === "hideFromTimeline") {
        this.hideFromTimeline === false
          ? (this.hideFromTimeline = true)
          : (this.hideFromTimeline = false);
      }
      if (name === "addedToFavorites") {
        this.addedToFavorites === false
          ? (this.addedToFavorites = true)
          : (this.addedToFavorites = false);
      }
      if (name === "create") {
        this.$store.commit("setCreate", true);
      //  this.$router.replace("/create");
        this.open = true;
        this.actionDropDown = false;
      }
    },

    showActionsModal() {
      console.log("show actions", this.actionDropDown);
      this.actionDropDown = true;
    },
    controlModal() {
      this.$store.commit("setCreate", false);
      this.$store.commit("setEdit", false);
      this.open = true;
      setTimeout(() => {
        if (this.open === true) {
          this.open = false;
        } else if (this.open === false) {
          this.open = true;
        }
      }, 1000);
    },
    confirm() {
      this.$store.commit("toggleWarnModal");
      this.$deleteItem(this.item.id, this.deletItemCB);
    },
    cancel() {
      this.$store.commit("toggleWarnModal");
    },
    warn() {
      this.$store.commit("toggleWarnModal");
      this.actionDropDown = false;
    },
    deletItemCB(res) {
      console.log("addImageCallBack Download URL in Modal:", res);
      this.$router.replace("blogs");
    },
    dispatchModalAction(btnName) {
      if (btnName === "Edit") {
        this.editblog = true;
      }
      if (btnName === "Delete") {
        this.deleteblog = true;
      }
    },

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
.myblack{
 background-color: #34363E;
}

.anim {
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
}
.services  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: -0.05em;
    color: #34363E;
}
 .services1,.services2, .services3, .services4, .large-6 {
    /* padding: 15% 7% 7% 7%; */
    /* padding: 12% 10% 10% 10%; */
        /* padding: 8% 16% 8% 19%; */
    /* align-content: center; */
    /* padding: 23% 18% 18% 18%; */
    background-position: 20% 15%;
    background-repeat: no-repeat;
    background-size: 30px;
}
.services1{
background-color: #F2E2CE;
}
.services2{
 background-color: #D4E6E9;
}
.services3{
  background-color: #FFF59A;
}
.services4{
  background-color: white;
}
 .block-intro {
    line-height: 14px;
    margin-top: 25px;
    margin-bottom: 30px;
}


.services p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 180%;
    color: #34363E;
}
@media print, screen and (min-width: 64em){
.grid-x>.large-6 {
    width: 50%;
}}
@media (min-width: 64em){
.grid-x>.large-8 {
    width: 66.66667%;
}
}
@media (min-width: 64em){
.grid-x>.large-1, .grid-x>.large-10, .grid-x>.large-11, .grid-x>.large-12, .grid-x>.large-2, .grid-x>.large-3, .grid-x>.large-4, .grid-x>.large-5, .grid-x>.large-6, .grid-x>.large-7, .grid-x>.large-8, .grid-x>.large-9, .grid-x>.large-shrink {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
}
@media  (min-width: 64em){
.grid-x>.large-1, .grid-x>.large-10, .grid-x>.large-11, .grid-x>.large-12, .grid-x>.large-2, .grid-x>.large-3, .grid-x>.large-4, .grid-x>.large-5, .grid-x>.large-6, .grid-x>.large-7, .grid-x>.large-8, .grid-x>.large-9, .grid-x>.large-full, .grid-x>.large-shrink {
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
}
}
.cell {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
}

.grid-x {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}
.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
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
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  /* color: #35495e; */
  letter-spacing: 1px;
}
.quote {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color:white;
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
 .container {
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
  /* color: #35495e; */
  letter-spacing: 1px;
}
.quote {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-weight: 700;
  color: rgb(248, 248, 248);
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
.gradient-word-blue {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
}
.nasIntro {
  /* background-image: url("../assets/images/gray_parts_bkg.png"); */
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.about-title {
  transition-delay: 10s;
}
/* GLOGAL SCROLL ANIMATION  */
.before-enter {
  opacity: 0;
  transform: translateY(100px);
  transition: all 2s ease-out;
}
.enter {
  opacity: 1;
  transform: translateY(0px);
  /* transition: all 2s ease-out; */
}

/* SHOW AND LEAVE */
.bounce-enter {
  opacity: 0;
}
.bounce-enter-active,
.bounce-leave-active {
  animation: fade 0.5s;
}

.bounce-leave-to {
  opacity: 0;
}

.fadeInOut-enter {
  opacity: 0;
}
.fadeInOut-enter-active,
.fadeInOut-leave-active {
  animation: fade 0.5s;
}

.fadeInOut-leave-to {
  opacity: 0;
}
/* .bounce-leave-active {
  animation: bounce-in 0.5s reverse;
} */

@keyframes fade {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0%);
    opacity: 0;
  }
  /* 0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
  */
}
/* SHOW AND LEAVE END */
.artBkg {
  background-image: url("~assets/images/artbkgbalck-white.png");
}
.artBkg2 {
  /* background-image: url('../assets/images/artbkgbalck-white.png'); */
}
.mobileImg {
  height: 400%;
  width: 200%;
  top: -10%;
  left: -723%;
  background-size: 370px;
  /* background-size: 800px auto; */
  background-size: 800px auto;
  /* background-image: url(/img/hero-pattern-lg.png);
 background-repeat: no-repeat; */
  /* background-size: 1200px auto; */
  /* transition: opacity 0.5s ease-out; */
  background-image: url("~assets/images/nas-portrait.jpg");
}
.scrollUpDiv {
  opacity: 1;
}
.scrollUpDiv:hover {
  /* height: 400%;
  width: 400%;
  top: -25%;
  left: -100%; */
  height: 425%;
  width: 200%;
  top: -25%;
  left: 60%;
  background-size: 1800px auto;
  background-image: url("~assets/images/nas-guitar.jpg");
  transition: opacity 1s ease-out;
  /* background-size: 900px auto !important; */
  /* background-repeat: no-repeat; */
}
.slideUP {
  animation: MoveUp 5s linear infinite;
  /* position: absolute; */
  left: 0;
  bottom: 0;
}

@keyframes scrollLarge {
  0% {
    transform: rotate(-13deg) translateY(0);
  }
  100% {
    transform: rotate(-13deg) translateY(-1278px);
  }
  /* 100% {
    transform: translateY(-66.6666%);
  } */
}
@keyframes MoveUp {
  80% {
    bottom: 100%;
  }
  50% {
    bottom: 0%;
  }
  100% {
    transform: translateY(-66.6666%);
  }
}
.triangle {
  background-image: url("~assets/images/angled-background.svg");
}
.scroll-bg {
  -webkit-animation-name: scrollSmall;
  animation-name: scrollSmall;
  -webkit-animation-duration: 15s;
  animation-duration: 15s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
@media (min-width: 1024px) {
  .scroll-bg {
    -webkit-animation-name: scrollLarge;
    animation-name: scrollLarge;
    -webkit-animation-duration: 35s;
    animation-duration: 35s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
}

/* https://css-tricks.com/infinite-all-css-scrolling-slideshow/ */

/* @keyframes scrollLarge {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  40% {
    transform: scale(1.1);
    opacity: 0.5;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
} */
.v-enter-active {
  animation: bounceIn 5s;
}
.v-leave-active {
  animation: bounceIn 2s reverse;
}

@keyframes bounceIn {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  40% {
    transform: scale(1.1);
    opacity: 0.5;
  }
  60% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.name {
  font-size: 9rem;
  font-style: italic;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 0.9em;
  text-transform: lowercase;
  font-family: "Playfair Display" !important;
  font-weight: 900 !important;
}
.loading-name-wrapper {
  background-color: #f8f5ec;
}
.loading-story {
  position: relative;

  margin: auto;
  margin-top: 10vh;
  /* transform: translateY(-50%); */
  font-size: 142px;
  font-weight: 400;
  line-height: 0.99;
  letter-spacing: -2.4px;
  text-align: center;
  /* color: #000; */
  font-family: concorde-pro, serif;
}
.loading-name {
  position: relative;
  /* z-index: 1; */
  margin: auto;
  margin-top: 50vh;
  transform: translateY(-50%);
  font-size: 162px;
  font-weight: 400;
  line-height: 0.99;
  letter-spacing: -2.4px;
  text-align: center;
  color: #000;
  font-family: concorde-pro, serif;
}
.elevator-pitch {
  font-family: Georgia, serif;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: 0.1px;
  line-height: 66px;
  font-family: "Times New Roman", Times, serif;
  font-size: 45px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 1.2em;
  text-decoration: none;
  color: #ff3a1d;
  margin: 0 0 1em;
  text-align: center;
  font-family: "Life LT Std", serif !important;
  text-align: center;
  margin: 360px auto 120px auto;
  font-size: 80px;
  width: 90%;
  line-height: 106px;
  letter-spacing: 0.3px;
  font-weight: 700;
}
.gradBack {
  background: linear-gradient(
    to right,
    rgba(0, 0, 0.4, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#cc000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 */
}
.mainImageOverlay {
  margin-bottom: 10%;
  margin-left: 10%;
  margin-right: 10%;
}
@media (max-width: 767px) {
  .absoluteChild {
    display: none;
  }
}
.typingStyle {
  margin-top: 14.5rem !important;
}

@media (min-width: 992px) {
  .imageMaintainHeight#rx0429f246bbaa4e76a50c5d71c2581737 {
    /* padding-bottom: 49.9648629655657%; */
    /* justify-content: center !important; */
  }
}
@media (min-width: 768px) {
  .imageMaintainHeight#rx0429f246bbaa4e76a50c5d71c2581737 {
    /* padding-bottom: 63.9949109414758%; */
  }
}
.topical-bar-overlay {
  position: absolute;
  top: 60%;
  left: 0;
  /* width: 45%; */
  width: 26%;
  padding: 30px;
  display: block;
}
@media (min-width: 860px) {
  .topical-bar-overlay {
    transform: translate(0, -60%);
    -moz-transform: translate(0, -60%);
    -ms-transform: translate(0, -60%);
    -o-transform: translate(0, -60%);
    -webkit-transform: translate(0, -60%);
    padding-left: 3rem;
  }
}

/* Tranparent text Boxed */
@media (max-width: 840px) {
  .topical-bar-overlay {
    position: relative;
    width: 100%;
    padding: 15px 15px 1rem 15px;
  }
}

/* @media (max-width: 767px) {
  .topical-bar-heading {
    font-size: 1.6rem;
    line-height: normal;
    position: relative;
    padding-top: 0;
    color: #292929 !important;
    position: relative;
    color: rgba(41, 41, 41, 0.9) !important;
  }
  .topical-bar-text p {
    font-size: 0.9rem;
    line-height: 1.4rem;
    color: rgba(41, 41, 41, 0.9) !important;
  }
} */

/* transparent Boxed link */

.topical-bar-link {
  text-transform: uppercase;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  font-family: "Lato", Verdana, Helvetica, sans-serif;
  font-weight: 700;
  width: 100%;
  max-width: 330px;
  border: 1px solid rgba(41, 41, 41, 0.2);
  background: none;
  position: relative;
}
@media (max-width: 767px) {
  .topical-bar-link {
    border-color: rgba(47, 47, 47, 0.1) !important;
    max-width: inherit;
    color: rgba(41, 41, 41, 0.8) !important;
    margin-top: 30px;
  }
}

.interesting {
  font-weight: 900 !important;
  font-size: 5em !important;
  letter-spacing: -0.04em;
  color: rgb(180, 130, 38);
  font-style: italic;
  letter-spacing: -0.02em;
  line-height: 0.9em;
  text-transform: lowercase;
  font-family: "Playfair Display" !important;
}

@media (max-width: 614px) {
  .interesting {
    font-size: 5rem;
    font-style: italic;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 0.9em;
    color: #fff;
    text-transform: lowercase;
    font-family: "Playfair Display" !important;
    font-weight: 900 !important;
    font-size: 5em !important;
  }
}

.noticeAbsolute {
  background-color: transparent;
  margin-right: 60px;
  margin-top: 60px;
}

@media (max-width: 834px) {
  .title2 {
    font-style: italic;
    font-weight: 200;
    /* color: #fff; */
    /* text-transform: lowercase; */
    font-family: "Playfair Display" !important;
    font-weight: 900 !important;
    font-size: 3em !important;
  }
}
/* //main */
.title {
  font-weight: 900 !important;
  font-size: 3em !important;
  letter-spacing: -0.04em;
  /* color: #fff; */
  /* font-style: italic; */
  /* letter-spacing: -0.2em; */
  letter-spacing:  0.05em;
  line-height: 0.9em;
  /* text-transform: lowercase; */
  /* font-family: "Playfair Display" !important; */
}
.slogan {
  font-weight: 600 !important;
  font-size: 2.5em !important;
  letter-spacing: -0.04em;
  /* color: rgba(206, 197, 197, 0.856); */
  /* font-style: italic; */
  /* letter-spacing: -0.02em; */
  line-height: 0.9em;
  text-transform: lowercase;
  font-family: "Playfair Display" !important;
}

.preAnimationFont {
  letter-spacing: -0.02em;
  line-height: 0.9em;
  line-height: 0.9em;
  text-transform: lowercase;
  font-family: "Playfair Display" !important;
  font-weight: 900 !important;
  font-size: 7.6em !important;
}
@media (min-width: 1214px) {
  .mainImageOverlay {
    margin-left: 30%;
    margin-right: 30%;
  }
  .slogan {
    letter-spacing: -0.02em;
    line-height: 0.9em;
    line-height: 0.9em;
    text-transform: lowercase;
    font-family: "Playfair Display" !important;
    font-weight: 900 !important;
    font-size: 4.6em !important;
  }
  .preAnimationFont {
    letter-spacing: -0.02em;
    line-height: 0.9em;
    line-height: 0.9em;
    text-transform: lowercase;
    font-family: "Playfair Display" !important;
    font-weight: 900 !important;
    font-size: 7.6em !important;
  }
  .title {
    /* font-size: 7rem; */
    /* font-style: italic; */
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 0.96em;
    /* text-transform: lowercase; */
    /* font-family: "Playfair Display" !important; */
    font-weight: 900 !important;
    /* font-size: 5em !important; */
    font-size: 4.5em !important;
  }
  .titleActiononWhite {
    font-size: 7rem;
    font-style: italic;
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 0.9em;
    text-transform: lowercase;
    font-family: "Playfair Display" !important;
    font-weight: 900 !important;
    font-size: 5em !important;
  }
  .title2 {
    font-size: 7rem;
    font-style: italic;
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 0.9em;
    /* text-transform: lowercase; */
    font-family: "Playfair Display" !important;
    font-weight: 900 !important;
    font-size: 5em !important;
    color: rgb(206, 159, 41);
  }
  .searchBtn {
    height: 54px;
  }
}
.c {
  font-weight: 900 !important;
  font-size: 3em !important;
  letter-spacing: -0.04em;
  color: black;
  font-style: italic;
  letter-spacing: -0.02em;
  line-height: 0.9em;
  text-transform: lowercase;
  font-family: "Playfair Display" !important;
}

.foodTag {
  padding-left: 12px;
  padding-right: 12px;
  margin-left: 13px;
  background-color: #069035;
  color: white;
  font-size: 7rem;
  font-style: italic;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 0.9em;
  text-transform: lowercase;
  font-family: "Playfair Display" !important;
  font-weight: 600 !important;
  font-size: 2em !important;
}

@media (min-width: 992px) {
  .nav-bar-overlay {
    transform: translate(0, -60%);
    -moz-transform: translate(0, -60%);
    -ms-transform: translate(0, -60%);
    -o-transform: translate(0, -60%);
    -webkit-transform: translate(0, -60%);
    padding-left: 3rem;
  }
}
.nav-bar-overlay {
  position: absolute;
  top: 30%;
  left: 0;
  /* width: 45%; */
  width: 26%;
  padding: 30px;
  display: block;
}
/* Tranparent text Boxed */
@media (max-width: 767px) {
  .nav-bar-overlay {
    display: none;
  }
  .nav-bar-heading {
    font-size: 1.6rem;
    line-height: normal;
    position: relative;
    padding-top: 0;
    color: #292929 !important;
    position: relative;
    color: rgba(41, 41, 41, 0.9) !important;
  }
  .nav-bar-text p {
    font-size: 0.9rem;
    line-height: 1.4rem;
    color: rgba(41, 41, 41, 0.9) !important;
  }
}

.sectionT {
  font-weight: 900 !important;
  font-size: 2em !important;
  letter-spacing: -0.04em;
}
@media (min-width: 1214px) {
  .sectionT {
    font-family: "Playfair Display" !important;
    font-weight: 900 !important;
    font-size: 5.2em !important;
  }
  .recipesLi {
    margin-left: 6px;
    margin-top: 19px;
  }
  .recipesBtn {
    margin-top: 19px;
  }
}
.details_overlapping_photo {
  padding-top: 2rem;
}
#welcome #featured-overlay .own_logo::before {
  display: block;
  color: aliceblue;
  width: 56px;
  height: 18px;
}
.play {
  margin-bottom: 0.2rem;
}
.watch_link {
  color: #fff;
  font-family: museo_sans;
  font-weight: 900;
  font-size: 18px;
  line-height: 17px;
  text-transform: uppercase;
  margin-left: 8px;
}

#welcome #featured-overlay {
  position: absolute;
  bottom: 52px;
  left: 165px;
  width: 1110px;
  height: auto;
  /* Added bellow */
  width: 630px;
}

#welcome #featured-overlay .own_logo {
  display: inline-block;
  height: 24px;
  border-bottom: solid 3px #e3ba74;
  border-bottom: solid 6px #ca4802eb;
  border-bottom: solid 6px #742a2a;
  font-weight: 900;
  margin-left: 8px;
  font-family: "Playfair Display";
  font-family: "Playfair Display";
  font-size: 6rem;
  font-style: italic;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 0.9em;
  text-transform: lowercase;
}
#welcome #featured-overlay .own_exclusive {
  display: inline-block;
  margin-left: 6px;
  padding: 0 6px;
  background-color: #ca4802eb;
  background-color: #e07b44eb;
  background-color: rgb(234, 154, 63);
  background-color: rgb(242, 193, 56);
  color: #000;
  font-family: "Novecento Wide Light";
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  vertical-align: top;
}
#welcome #featured-overlay .featured_inlay .inlay_button {
  margin-top: 23px;
}

#welcome #featured-overlay .featured_inlay .inlay_button::before {
  content: "";
  display: inline-block;
  width: 169px;
  height: 31px;
}
#welcome #featured-overlay .featured_inlay {
  margin-top: 3px;
  height: 154px;
  background: rgba(0, 0, 0, 0.58);
  padding: 4px 4px 4px;
  text-align: center;
}

#welcome #featured-overlay .featured_inlay .inlay_title {
  font-size: 30px;
  line-height: 51px;
}

#welcome #featured-overlay .featured_inlay .inlay_description {
  margin-top: 1px;
  font-family: museo_sans;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
}

#welcome #featured-overlay .featured_inlay .inlay_button {
  margin-top: 23px;
}
#welcome #featured-overlay .show_title {
  color: #fff;
  font-family: "Novecento Wide Bold";
  font-size: 29px;
  line-height: 36px;
  margin: 13px 0;
  margin-left: 8px;
}
.play_text {
  font-size: 40x;
  margin-left: 0.1rem;
  color: #ffff;
  opacity: 100;
}
.watch_anywhere_download {
}

@media (max-width: 768px) {
  #welcome {
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
}

@media (max-width: 767px) {
  #welcome #featured-overlay {
    width: 90%;
    left: 5%;
  }
}
@media (max-width: 1439px) {
  #welcome #featured-overlay {
    left: 11.5%;
    width: 77%;
    bottom: 7.75%;
  }
}

@media (max-width: 767px) {
  #welcome #featured-overlay {
    width: 90%;
    left: 5%;
  }
}
@media (max-width: 1439px) {
  #welcome #featured-overlay {
    left: 11.5%;
    width: 77%;
    bottom: 7.75%;
  }
}

@media (max-width: 767px) {
  #welcome #featured-overlay .featured_inlay {
    text-align: center;
    margin-top: 8px;
  }
}
@media (max-width: 1054px) {
  #welcome #featured-overlay .featured_inlay {
    height: auto;
  }
}
@media (max-width: 767px) {
  #welcome #featured-overlay .featured_inlay .inlay_description {
    display: none;
  }
}
@media (max-width: 767px) {
  #welcome #featured-overlay .featured_inlay {
    display: none;
  }
}
@media (max-width: 767px) {
  #welcome #featured-overlay .featured_inlay .inlay_title {
    font-size: 15px;
    line-height: 40px;
  }
}
@media (max-width: 767px) {
  #welcome #featured-overlay .featured_inlay .inlay_button::before {
    background-size: 97px 20px;
    width: 97px;
    height: 20px;
  }

  @media (max-width: 414px) {
    #welcome {
      background-image: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 50%,
        rgba(0, 0, 0, 0.9) 100%
      );
    }
  }
}

@media (max-width: 414px) {
  #welcome #featured-overlay {
    width: 99%;
    left: 1%;
  }
}

@media (max-width: 414px) {
  #welcome #featured-overlay .watch_link {
    font-size: 10px;
  }
}
@media (max-width: 414px) {
  #featured-overlay .inlay_title {
    display: none;
  }
}

@media (max-width: 414px) {
  .watch_anywhere_download {
    display: none;
  }
}
@media (max-width: 767px) {
  .watch_anywhere_download {
    display: none;
  }
}
@media (max-width: 767px) {
  #welcome #featured-overlay .watch_link {
    font-size: 14px;
    line-height: 14px;
  }
}

@media (max-width: 767px) {
  #welcome .sectionT {
    font-family: "Playfair Display" !important;
    font-weight: 600 !important;
    font-size: 4em !important;
  }
}

@media (max-width: 414px) {
  #welcome .sectionT {
    font-family: "Playfair Display" !important;
    font-weight: 600 !important;
    font-size: 4em !important;
  }
}
</style>
