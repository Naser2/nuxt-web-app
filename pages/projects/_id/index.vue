<template>
  <div
    class="main relative justify-center text-center mx-auto  h-full"
  >
    <div
      class=" py-8 text-gray-100 sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl"
    >
    <div    class="project-name text-gray-100  text-3xl tracking-tight text-gray-700 leading-10 font-extrabold sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl mt-4">
     {{ loadItem.title }}
     </div>
     <!-- <br class="hidden md:inline" /> -->
   <span class="text-indigo-600 text-3xl tracking-tight leading-10 font-extrabold sm:leading-none sm:text-4xl lg:text-5xl xl:text-6xl lg:mt-2">   {{ loadItem.tagline }}</span>

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
  </action-dropdown>
      <div class="mx-auto py-12 px-4 max-w-8xl sm:px-6 lg:px-64 lg:py-24">
        <div class="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div class="space-y-5 sm:space-y-4 lg:-mt-10">


  <span class="text-xl text-gray-500 pr-2">Techonolgy:</span>
    <ul class=" flex-row mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-1">
    <li class="col-span-1 flex shadow-sm rounded-md">
      <div class="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
       Type
      </div>
      <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div class="flex-1 px-4 py-2 text-sm truncate">
          <a href="#" class="text-left text-pink-600 font-medium hover:text-gray-600">{{loadItem.projectType}}</a>
        </div>
        <div class="flex-shrink-0 pr-2">

        </div>
      </div>
    </li>

    <li class="col-span-1 flex shadow-sm rounded-md">
      <div class="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
       Tech
      </div>
      <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
    <div class="inline-flex  px-4 py-2 text-sm truncate">

        <ul x-max="1" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"   v-for="(tek, id) in loadItem.tech"
        :key="id">
          <li class="px-2">
            <div class="space-y-1 inline-flex">
              <a href="#" class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-200 text-purple-600">{{tek}}</a>
            </div>


          </li>
        </ul>

        </div>
        <div class="flex-shrink-0 pr-2">

        </div>
      </div>
    </li>
    </ul>
      <div class="tech mt-1 inline-flex justify-center text-center">

        <!-- <span class="text-xl text-gray-500 pr-2">Tech:</span> -->
        <span
          v-for="(tk, index) in loadItem.tags"
          :key="index"
          class="items-center px-3 py-1  mx-2 rounded-full text-sm font-medium bg-green-100 text-green-800"
        >
          {{ tk }}
        </span>
      </div>
        <span v-show="loadItem.websiteUrl  && loadItem.websiteUrl !=''"
                        class=" pr-4  flex inline-flex items-center justify-between text-sm">
                          <!-- <div class="w-0 flex-1 flex items-center"> -->
                            <button

                               type="button"
                              class="iflex-shrink-0 items-center px-3 py-1.5 rounded-full text-sm font-medium rounded-xl text-white bg-green-400 hover:text-orange-500"
                              >

                                 <a class="card__cta" :href="loadItem.websiteUrl">View Website</a>
                              </button>
                          <!-- </div> -->
                        </span>
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
            <p class="mt-1 text-sm text-gray-900 lg:text-3xl tracking-wide text-left" v-html="loadItem.description">

            </p>

          </div>

   <div class="lg:col-span-2">
        <ul x-max="1" class="sr-only lg:not-sr-only space-y-12  lg:gap-x-8">
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
    <div class="bg-white">
  <!-- <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24" v-if="projects.images">
    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
      <div class="space-y-5 sm:space-y-4">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">More phots</h2>
        <p class="text-xl text-gray-500">These are additional photos of the projects screens.</p>
      </div>
      <div class="lg:col-span-2">
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
            <li v-for="(image, id) in projects.images.splice(2,-1)" :key="id">
            <div class="flex items-center space-x-4 lg:space-x-6">
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
            </div>
          </li>





        </ul>
      </div>
    </div>
  </div> -->
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
.project-name {
  /* background-color: #f6f7f8; */

}
</style>
