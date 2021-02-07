<template>
  <div class="main relative justify-center text-center bg-gray-100 text-gray-100 z-negative">
  <action-dropdown
     :controlModal="controlModal"
     :open="open"
     :itemType="loadItem && loadItem.type"
     :title="loadItem  && loadItem.title"
     :actionDropDown="actionDropDown"
     :performChange="performChange"
     :addedToFavorites="addedToFavorites"
     :warn="warn"
     >
  </action-dropdown>

   <!-- <div class="lg:relative lg:inset-y-0 lg:left-0 lg:w-1/2">
      <img class="h-56 w-full object-contain object-center lg:relative lg:h-full" :src="loadItem && loadItem.thumbnail">
    </div>
    <div class="lg:relative lg:inset-y-0 lg:left-0 lg:w-1/2">
      <img class="h-56 w-full object-cover lg:relative lg:h-full" :src="loadItem && loadItem.thumbnail">
    </div> -->
<div class="relative bg-white">
  <div class="lg:absolute lg:inset-0">
    <div class="lg:relative lg:inset-y-0 lg:left-0 lg:w-1/2 lg:h-full">
      <img class="h-56 w-full object-cover lg:relative lg:h-full" :src="loadItem && loadItem.thumbnail">
    </div>
        <div class="bg-white" v-if="loadItem.images">
  <div class="mx-auto py-12 px-4 max-w-9xl sm:px-6 lg:px-8 lg:py-24">
<div class="grid grid-cols-0 gap-12 lg:grid-cols-4 lg:gap-2">
  <div class="lg:col-span-2" >
    <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-0 sm:space-y-4 lg:gap-x-4" >


      <li v-for="(img, index) in loadItem.images" :key="index"><div class="flex items-center space-x-4 lg:space-x-0"><div class="space-y-4"><div class="aspect-w-3 aspect-h-2"><div class="flex flex-col rounded-lg shadow-lg overflow-hidden"><div class="flex-shrink-0"><img :src="img" alt="" class="h-full w-full object-cover"></div> </div></div></div></div></li>


     </ul></div></div>
  </div>
</div>
    <!-- <div class="lg:relative lg:inset-y-0 lg:left-0 lg:w-1/2">
      <img class="h-56 w-full object-cover lg:relative lg:h-full" :src="loadItem && loadItem.thumbnail">
    </div> -->

  </div>
  <div class="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
    <div class="lg:col-start-2 lg:pl-8">
      <div class="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
         <h3 class="title text-black  mt-2 text-3xl leading-8 font-extrabold tracking-tight capitalize text-gray-900 sm:text-4xl">
          {{loadItem.title}}</h3>
        <h2 class=" text-indigo-600 font-extrabold text-5xl tracking-wide">{{loadItem.tagline && loadItem.tagline}}</h2>
       <h2 class=" text-blue-600 font-extrabold text-xl tracking-wide">{{loadItem.websiteUrl && loadItem.websiteUrl}}</h2>
        <div class="mt-5 prose prose-indigo text-gray-500"  v-html="loadItem.description">


        </div>
      </div>
    </div>
  </div>
</div>

<!-- <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
    <div>
      <h2 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Recent publications
      </h2>
      <p class="mt-3 text-xl text-gray-500 sm:mt-4">
        Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
      </p>
    </div>
    <div class="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      <div>
        <div>
          <a href="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Article
            </span>
          </a>
        </div>
        <a href="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">
            Boost your conversion rate
          </p>
          <p class="mt-3 text-base text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </a>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">Paul York</span>
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#">
                Paul York
              </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-16">
                Mar 16, 2020
              </time>
              <span aria-hidden="true">
                &middot;
              </span>
              <span>
                6 min read
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <a href="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
              Video
            </span>
          </a>
        </div>
        <a href="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">
            How to use search engine optimization to drive sales
          </p>
          <p class="mt-3 text-base text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.
          </p>
        </a>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">Dessie Ryan</span>
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#">
                Dessie Ryan
              </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-03-10">
                Mar 10, 2020
              </time>
              <span aria-hidden="true">
                &middot;
              </span>
              <span>
                4 min read
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <a href="#" class="inline-block">
            <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Case Study
            </span>
          </a>
        </div>
        <a href="#" class="block mt-4">
          <p class="text-xl font-semibold text-gray-900">
            Improve your customer experience
          </p>
          <p class="mt-3 text-base text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.
          </p>
        </a>
        <div class="mt-6 flex items-center">
          <div class="flex-shrink-0">
            <a href="#">
              <span class="sr-only">Easer Collins</span>
              <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#">
                Easer Collins
              </a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time datetime="2020-02-12">
                Feb 12, 2020
              </time>
              <span aria-hidden="true">
                &middot;
              </span>
              <span>
                11 min read
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->

    <edit-modal :controlModal="controlModal" :item="loadItem" :id="loadItemId"></edit-modal>
    <create-modal :controlModal="controlModal"></create-modal>
      <success-modal :controlModal="controlModal" :message="message" :title="loadItem.title"></success-modal>
      <warn-modal :title="loadItem.title" :id="loadItem.id" :type="loadItem.type"></warn-modal>

  </div>
</template>

<script>
import TestAnim from "~/components/testAnim";
import ActionDropdown from "~/components/ActionDropdown";
import EditModal from "~/components/Modals/EditModal";
import CreateModal from "../../../components/Modals/CreateModal";
import WarnModal from "~/components/Modals/warn";
import SuccessModal from "~/components/Modals/SuccessModal";
import {mapGetters} from "vuex";


export default {
  name: "BlogPage",
  components: {
    ActionDropdown,
    EditModal,
    WarnModal,
    SuccessModal,
    TestAnim,
    CreateModal
  },
  data() {
    return {
      // item: { ...this.item },
      addedToFavorites: false,
      open: false,
      blogId: "",
      personPortrait: "devPhoto",
      personName: "Nas dev",
      editblog: false,
      deleteblog: false,
      actionDropDown: false,
      hideFromTimeline: false,
      share: false,
      saved: false,
      warnOpen: false
    };
  },
  methods: {
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
    }
  },



  computed: {
   ...mapGetters(['loadItem'])

  },

  props: {
  },

  created() {
     const { id } = this.$route.params;
    const info = {type:'blogs', id: id }

    this.blogId = this.$route.params.id;
    console.log("blog ID   ", id);
    this.$store.dispatch("getById", info);
  }

};
</script>
<style>
.edit {
  background-color: #e4e6eb;
  color: #050505;
  /* background-image: url('../../../assets/images/icons/edit_pen.png'); */
  /* background-repeat: no-repeat; */
}
.project-name {
  /* background-color: rgb(248, 216, 111); */
}
.square1 {
  background-image: url("~assets/images/icons/capucine_crop_use_copy.jpg");
  /* height: 100%;
 height: 1000px;
  width: 921px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
}

.header-bkg {
  position: relative;
  /* background: #09b3af; */
  /* background: #62cde7; */
}
@media (min-width: 768px) {
  .green-wave--centered {
    background-size: 100% 100%;
  }
}

.green-wave--centered {
  padding-top: 0;
  overflow: visible;
  /* background-image: url("~/assets/images/bkgs/green-wave.svg"); */
  background-repeat: no-repeat;
  /* background-repeat: repeat-y; */
  background-size: cover;
  height: auto;
}
@media (min-width: 768px) {
  .header-bkg {
    height: 0;
    overflow: hidden;
    padding-top: 40.38889%;
  }
}
.wave {
  margin-top: -20px;
  position: relative;
}
</style>
