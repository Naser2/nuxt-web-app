<template>
  <div
    class="main relative justify-center text-center mx-auto  h-full" :class="loadItem.backgroundColor"
  >
    <div
      class=" py-4 text-gray-100 sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl"
    >
    <div    class="project-name text-gray-100  text-3xl tracking-tight text-gray-700 leading-10 font-extrabold sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl mt-4">
     {{ loadItem.title }}
     </div>
     <div class=" lg:hidden absolute -mt-40  right-1 loating-action-btns sm:items-center sm:text-sm md:text-base
sm:flex absolute sm:top-4 z-50 sm:right-8 loating-action-btns sm:items-center sm:text-sm md:text-base"><action-dropdown
     :controlModal="controlModal"
     :open="open"
     :itemType="loadItem.type"
     :title="loadItem.title"
     :actionDropDown="actionDropDown"
     :performChange="performChange"
     :addedToFavorites="addedToFavorites"
     :warn="warn"
     >
  </action-dropdown></div>
     <!-- <br class="hidden md:inline" /> -->
   <span class="text-indigo-600 text-3xl tracking-tight leading-10 font-extrabold sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl lg:mt-2">   {{ loadItem.tagline }}</span>
     <div class=" hidden lg:flex  absolute  right-1 loating-action-btns sm:items-center sm:text-sm md:text-base
sm:flex absolute sm:top-4 z-50 sm:right-8 loating-action-btns sm:items-center sm:text-sm md:text-base">
<action-dropdown
     :controlModal="controlModal"
     :open="open"
     :itemType="loadItem.type"
     :title="loadItem.title"
     :actionDropDown="actionDropDown"
     :performChange="performChange"
     :addedToFavorites="addedToFavorites"
     :warn="warn"
     >
  </action-dropdown></div>

      <div class="lg:mx-auto py-12 px-1 lg:px-4 max-w-8xl sm:px-6 lg:px-64 lg:py-24">
        <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div class="space-y-5 sm:space-y-4 ">

<section aria-labelledby="timeline-title" class="px-0 lg:col-start-3 lg:col-span-1 shadow-xl">
          <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
            <h2 id="timeline-title" class="text-lg font-medium text-gray-900 text-2xl font-extrabold tracking-tight sm:text-3xl">{{loadItem.projectType}} Details</h2>

            <!-- Activity Feed -->
            <div class="mt-6 flow-root">
              <ul class="-mb-8">

                  <li>
                    <div class="relative pb-8">

                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <svg class="h-5 w-5 text-white" x-description="Heroicon name: solid/user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                            </svg>
                           </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-10" v-show="loadItem.client_name">
                          <div>
                            <p class="text-sm text-gray-500 lg:pr-10">Client
                              <a href="#" class="font-medium text-gray-900">{{loadItem.client_name}}</a>
                              </p>
                          </div>
                              <div class="hidden lg:flex text-right text-sm whitespace-nowrap text-gray-500 ">
                              <span v-show="loadItem.websiteUrl  && loadItem.websiteUrl !=''"
                               class=" pr-4  flex inline-flex items-center justify-between text-sm">
                            <button type="button"
                              class="iflex-shrink-0 items-center px-3 py-1.5 rounded-full text-sm font-medium rounded-xl text-white bg-green-400 hover:text-white hover:bg-green-600 shadow-md"
                              >  <a class="card__cta" :href="loadItem.websiteUrl">View Website</a>
                              </button>
                          <!-- </div> -->
                        </span>
                          </div>
                              <div class="lg:hidden text-right text-sm whitespace-nowrap text-gray-500 ">
                              <span v-show="loadItem.websiteUrl  && loadItem.websiteUrl !=''"
                               class=" flex inline-flex items-center justify-between text-sm">
                            <button
                               type="button"
                              class="iflex-shrink-0 items-center px-3 py-1.5 rounded-full text-sm font-medium rounded-xl text-white bg-green-400 hover:text-white hover:bg-green-600 shadow-md"
                              ><a class="card__cta" :href="loadItem.websiteUrl">View Website</a>
                              </button>

                        </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="relative pb-8">

                        <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                              <svg class="h-5 w-5 text-white" x-description="Heroicon name: solid/thumb-up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-500 lg:pr-10">Delivery Time <a href="#" class="font-medium text-gray-900">1.5 month</a></p>
                          </div>
                          <div class="text-right text-sm whitespace-nowrap text-gray-500">
                            <time datetime="2020-09-22">Sep 22</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="relative pb-8 h-full">
                      <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                              <svg class="h-5 w-5 text-white" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">

                              </path>
                            </svg>
                          </span>
                        </div>
                        <div class="min-w-0  pt-1.5 flex justify-between space-x-2">
                          <div>
                            <p class="text-sm text-gray-500">Technology<a href="#" class="font-medium text-gray-900">
                           <span
                            v-for="(tk, index) in loadItem.tech"
                              :key="index"
                              class="my-10 items-center px-3 py-1  mx-2 rounded-full text-sm font-medium bg-green-100 text-green-800"
                            >
                              {{ tk }}
                            </span>
                              </a>
                              </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div class="relative pb-8">
                      <div class="relative flex space-x-3">
                        <div>
                          <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                            <svg class="h-5 w-5 text-white" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                        </span>
                        </div>
                          <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                            <span
                          v-for="(tk, index) in loadItem.tags"
                          :key="index"
                          class="items-center px-3 py-1  mx-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                        >
                          {{ tk }}
                        </span>

                        </div>
                      </div>
                    </div>
                  </li>
              </ul>
            </div>
            <div class="mt-6 flex flex-col justify-stretch">
              <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
             Request simmilar {{loadItem.projectType}} ?
              </button>
            </div>
          </div>
        </section>


                           <ul x-max="1" class="lg:hidden sm:block">
          <li>
            <div class="space-y-4">
              <div class="w-full rounded-lg">
               <img v-if="loadItem.thumbnail" :src=" loadItem.thumbnail" alt="project-image" class="object-cover shadow-lg rounded-lg">
            </div>
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3>{{loadItem.name}} thumbnail</h3>
            </div>
            </div>
          </li>
        </ul>
        <h2 id="project-details" class="text-xl text-black text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Details
           </h2>
            <p class="mt-1 px-10 -mb-10 lg:px-0 text-sm mt-2 text-sm text-gray-500 lg:text-2xl tracking-wide text-left" v-html="loadItem.description">

            </p>

          </div>

   <div class="lg:col-span-2 sr-only lg:not-sr-only space-y-12  lg:gap-x-8">
        <ul x-max="1" class="">
          <li>
            <div class="space-y-4">
              <div class="w-full rounded-lg">
               <img v-if="loadItem.thumbnail" :src=" loadItem.thumbnail" alt="project-image" class="object-cover shadow-lg rounded-lg">
            </div>
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3>{{loadItem.name}} thumbnail</h3>
            </div>
            </div>
          </li>
        </ul>

      <div class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8" v-if="loadItem.images">
        <ul x-max="1"

            >
              <!-- <li  class="sm:space-y-0 lg:gap-x-8"
              v-for="(image, id) in projects.images.splice(0,2)"
              :key="id">
                <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-2">
                    <img
                      :src="image"
                      alt="project-image"
                      class="object-cover shadow-lg rounded-lg"
                    />
                  </div>
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="mb-3">{{ projects.title }} image</h3>
                  </div>
                </div>
              </li> -->
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
    <div class="bg-white border-t border-googleBgMidBlue lg:py-10"
     :style="{backgroundColor:loadItem.backgroundColor2}">
  <div class="mx-auto py-0 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-4" v-if="loadItem.images">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
      <div class="space-y-5 sm:space-y-4">
        <h2 class="text-3xl mt-6  font-extrabold tracking-tight sm:text-4xl">More phots</h2>
        <p class="text-xl text-gray-500">These are additional photos of the {{loadItem.title}} screens.</p>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li v-for="(image, id) in loadItem.images" :key="id">
            <div class="flex items-center space-x-4 lg:space-x-6">
              <div class="space-y-4">
                  <div class="aspect-w-3 aspect-h-2" v-if="image.includes('mp4' || 'mov')">
                    <!-- <span>Has A video </span> -->
                    <video
                      :src="image"
                      autoplay
                      muted
                      loop
                      class="object-contain w-full h-full"
                    >
                  </video>
                   <div class="text-lg  text-gray-300 leading-6 font-medium space-y-1">
                    <h3 class="mb-3">{{ loadItem.title }} video</h3>
                  </div>
                    <!-- <img
                      :src="image"
                      alt="project-image"
                      class="object-cover shadow-lg rounded-lg"
                    /> -->
                  </div>
                  <div class="aspect-w-3 aspect-h-2" v-else>
                    <img
                      :src="image"
                      alt="project-image"
                      class="object-cover shadow-lg rounded-lg"
                    />
                    <div class="text-lg  text-gray-300 leading-6 font-medium space-y-1">
                    <h3 class="mb-3">{{ loadItem.title }} image</h3>
                  </div>
                  </div>

                </div>
            </div>
          </li>





        </ul>
      </div>
    </div>
  </div>
</div>
  <edit-modal :controlModal="controlModal" :item="loadItem" :id="projectId"></edit-modal>
  <success-modal :controlModal="controlModal" :message="message" :title="loadItem.title"></success-modal>
  <create-modal :controlModal="controlModal" :item="loadItem"></create-modal>
    <warn-modal :title="loadItem.title" :id="projectId" :type="loadItem.type"></warn-modal>
  </div>
</template>

<script>
import ActionDropdown from "~/components/ActionDropdown";
import EditModal from "~/components/Modals/EditModal";
import CreateModal from "../../../components/Modals/CreateModal";
import WarnModal from "~/components/Modals/warn";
import SuccessModal from "~/components/Modals/SuccessModal";
import {mapGetters} from "vuex";

export default {
  name: "SingleProject",
    components: {
    ActionDropdown,
    EditModal,
    WarnModal,
    SuccessModal,
    CreateModal
  },
  data() {
    return {
      // item: { ...this.item },
      message:'',
      addedToFavorites: false,
      open: false,
      projectId: "",
      personPortrait: "devPhoto",
      personName: "Nas dev",
      editProject: false,
      deleteProject: false,
      actionDropDown: false,
      hideFromTimeline: false,
      share: false,
      saved: false,
      warnOpen: false
    };
  },
  methods:{
      performChange(name) {
      console.log("perform ", name);

      if (name === "edit") {
        this.message ="has been updated!"
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
      this.$deleteItem(this.projectId, this.deletItemCB);
    },
    cancel() {
      this.$store.commit("toggleWarnModal");
    },
    warn() {
       this.message ="has been deleted!"
      this.$store.commit("toggleWarnModal");
      this.actionDropDown = false;
    },
    deletItemCB(res) {
      console.log("addImageCallBack Download URL in Modal:", res);
      // this.$router.replace("/projects");
    },
    dispatchModalAction(btnName) {
      if (btnName === "Edit") {
        this.editProject = true;
      }
      if (btnName === "Delete") {
        this.deleteProject = true;
      }
    }
  },
  computed: {
    // ...['loadItem']
      ...mapGetters(['loadItem'])
    // projects() {
    //   return this.$store.getters.loadProjects;
    // }
  },
  // computed: {
  //   projects() {
  //     return this.$store.dispatch("getProjectById", this.$route.params.id );
  //   }
  // },
  created() {
    // this.$store.getters.getSuccessModal;
    const { id } = this.$route.params;
    const info = {type:'projects', id: id }
    this.projectId = this.$route.params.id;
    console.log("project ID   ", id);
    this.$store.dispatch("getById", info);
  },

};
</script>

<style>
.footer-bg{
  background: rgb(243, 243, 244);
}
.project-name {
  /* background-color: #f6f7f8; */

}
</style>
