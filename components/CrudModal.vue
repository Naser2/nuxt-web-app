
 <template>
  <div class="modal-wrapper" v-if="open">
    <!-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js" defer></script> -->
    <!-- :x-data=" open " -->
    <!-- :x-show="open" -->
    <div
      class="absolute top-20 inset-x-0 px-4 pb-6 sm:p-0 sm:flex sm:items-center sm:justify-center"
    >
      <!-- :x-show="open" -->
      <div
        :x-show="open"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-20 transition-opacity"
      >
        <div class="old-crud-modal absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div
        :x-show="open"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6"
      >
        <template>
          <!-- <div class="bg-blue-500 text-center py-4 lg:px-4">
            <div
              class="p-2 bg-blue-700 classPostType font-extra-bold items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span
                :class="[
              'flex rounded-full uppercase p-4 font-extrabold mr-3 text-2xl',
              typeColor
            ]"
              >{{ form.type }}</span>
              <span class="font-semibold text-left flex-auto pr-8">
                Post the coolest
                <span
                  :class="['px-1', formTypeText]"
                >{{ form.type.charAt(0).toUpperCase() + form.type.slice(1, -1) }}</span>
                of your mind
              </span>
            </div>
          </div>-->
        </template>
        <!-- sm:max-w-lg sm:w-full max-w-4xl content ofupper Div-->
        <div>
          <div
            v-if="changesMade"
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
          >
            <svg
              class="h-6 w-6 text-green-600"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div
            @click="setCreateFunc"
            class="create text-gray-700 bg-blue-300 py-4 px-2 w-10"
          >Create in old Modal</div>
          <div
            @click="setEditFunc"
            class="create text-gray-700 bg-indigo-300 py-4 px-2 w-10"
          >Edit in old Modal</div>
          <div
            class="create text-gray-700 bg-red-300 py-10"
            v-if="this.$store.getters.getCreate"
          >Creating</div>
          <div
            class="create text-gray-700 bg-green-300 py-10"
            v-if="this.$store.getters.getEdit"
          >EDITING</div>
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900">POST MODAL {{itemCopy.title}}</h3>
            <div class="mt-2 modal-item-content static">
              <form>
                <div>
                  <div>
                    <div>
                      <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                      <p
                        class="mt-1 max-w-2xl text-sm leading-5 text-gray-500"
                      >This information will be displayed publicly so be careful what you share.</p>
                    </div>
                    <div class="mt-6 sm:mt-5">
                      <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <!-- <label
                          for="title"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Title</label>-->
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-lg flex rounded-md shadow-sm">
                            <span
                              class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                            >Title</span>
                            <input
                              id="username"
                              v-model="itemCopy.title"
                              class="flex-1 text-gray-700 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="inline-block mt-6 sm:mt-5 w-full sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <h1
                          for="description"
                          class="block my-4 text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Description</h1>
                        <div class="mt-1 sm:mt-0">
                          <div class="max-w-2xl flex rounded-md shadow-sm">
                            <vue-editor
                              style="text-editor-style mb-4"
                              v-model="itemCopy.description"
                            ></vue-editor>
                          </div>
                        </div>
                      </div>

                      <div class="relative pt-20 lg:pt-4">
                        <div
                          class="sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-20"
                        >
                          <label
                            for="photo"
                            class="mt-20 lg:mt-0 block text-sm leading-5 font-medium text-gray-700"
                          >Current Photos</label>
                          <div class="mt-10 sm:mt-0 sm:col-span-2">
                            <div class="flex items-center">
                              <div
                                class="block img-div pr-8"
                                v-for="(img, index) in itemCopy.images"
                                :key="index"
                              >
                                <span class="h-12 w-12 rounded-full overflow-hidden">
                                  <img
                                    :src="img"
                                    class="justify-center bg-center cursor-pointer h-24 w-24 text-gray-300"
                                  />
                                </span>
                                <span class="rounded-md my-10">
                                  <button
                                    @click="removePh(img, index)"
                                    type="button"
                                    class="py-2 px-3 text-sm leading-4 font-medium text-blue-600 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                                  >Remove</button>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- UPLOAD IMAGES -->
                      <div
                        class="mt-4 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="cover_photo"
                          class="block text-sm leading-5 font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >Upload Photo</label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                          <div
                            class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                          >
                            <div class="inline-flex flex-shrink-1" v-if="selectedFile">
                              <h1 class="text-gray-600 mr-3">Chosen File:</h1>
                              <h1 class="text-blue-500">{{selectedFile.name}}</h1>
                            </div>

                            <label
                              v-show="selectedFile ==null"
                              class="text-center"
                              for="upload-photo"
                            >
                              <!-- <lable for="upload-photo"></lable> -->
                              <svg
                                class="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              <p class="mt-1 text-sm text-gray-600">
                                <button
                                  type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                                >Upload a file</button>
                                or paste link bellow
                              </p>

                              <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </label>
                            <input
                              id="upload-photo"
                              @change="onFileSelected"
                              name="photo"
                              type="file"
                              class="input upload-input rounded py-4 text-gray-500 font-sans pb-2 pt-2 justify-centter text-center"
                            />

                            <!-- onuploadFile -->
                          </div>
                          <button
                            v-show="selectedFile !==null"
                            class="btn-primary mt-2 bg-blue-600 label px-4 py-2 outline-none justify-centter text-center bg-googleBgMidBlue text-white rounded-full hover:bg-blue-800 hover:text-white font-semibold"
                            type="button"
                            @click="onuploadFile"
                          >Upload</button>
                        </div>
                      </div>
                      <!-- PASTE LINKS -->

                      <!-- UPLOAD VIDEO -->
                      <!-- VIDEOS UPLOAD -->
                      <div
                        class="videoUploadWarapper lg:px-2/12"
                        v-if="itemCopy && itemCopy.type === 'videos'"
                      >
                        <span
                          v-if="itemCopy.type === 'videos' && triedToUploadNull === false"
                          class="py-4 mx-4 md:mx-2 font-bold text-blue-400 md:flex"
                        >Select video or paste link</span>
                        <span
                          v-else-if="selectedFile === null && itemCopy.image === ''"
                          class="mt-4 font-bold text-red-600 md:flex"
                        >Please Select video or paste link</span>
                        <span v-else class="mt-4 font-bold text-green-600 md:flex">
                          <span v-if="itemCopy.images">Upload Complete</span>
                          <span v-else>
                            Good!
                            <span class="text-white font-sans pl-2">Click upload now</span>
                          </span>
                        </span>

                        <div
                          class="mb-8 w-full relative md:flex lg:w-12/12 px-2"
                          v-if="itemCopy.type === 'videos'"
                        >
                          <div class="flex justify-centter text-center">
                            <div class="control bg-white">
                              <input
                                class="input rounded py-4 text-gray-500 font-sans pb-2 pt-2 justify-centter text-center videoUpload"
                                type="file"
                                @change="onFileSelected"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- UPLOAD VIDEO END-->
                    </div>
                  </div>
                  <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                    <!-- <div>
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900"
                      >{{itemCopy.title}}-Personal Information</h3>
                      <p
                        class="mt-1 max-w-2xl text-sm leading-5 text-gray-500"
                      >Use a permanent address where you can receive mail.</p>
                    </div>-->
                    <div class="mt-6 sm:mt-5">
                      <div class="mt-1 sm:mt-0 sm:col-span-2">
                        <div class="max-w-lg flex rounded-md shadow-sm">
                          <span
                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                          >Tags</span>
                          <input
                            id="username"
                            v-model="itemCopy.tags"
                            class="flex-1 text-gray-700 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                          />
                        </div>
                      </div>
                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="email"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Email address</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-3">
                          <div class="max-w-lg rounded-md shadow-sm">
                            <input
                              id="email"
                              type="email"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <!-- <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="country"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Country / Region</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-xs rounded-md shadow-sm">
                            <select
                              id="country"
                              class="block form-select w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            >
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                        </div>
                      </div>-->
                    </div>
                  </div>
                  <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                    <div>
                      <h3 class="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
                      <p
                        class="mt-1 max-w-2xl text-sm leading-5 text-gray-500"
                      >We'll always let you know about important changes, but you pick what else you want to hear about.</p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <span class="flex w-full rounded-md shadow-sm sm:col-start-2">
            <button
              @click.prevent="this.$store.dispatch('updateItem',itemCopy)"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Update</button>
          </span>
          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:col-start-1">
            <button
              @click="controlModal"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Cancel</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

 <script>
// import Uploader from "../Mixins/uploader";
import { fb } from "~/firebaseConfig/index";
export default {
  name: "Crud-Modal",
  // mixins: [Uploader],
  data() {
    return {
      // open: this.open,
      selectedFile: null,
      warnDelete: false,
      itemCopy: {
        id: this.item.id,
        title: this.item.title,
        description: this.item.description,
        tags: this.item.tags,
        images: this.item.images
      },
      changesMade: false,
      formTypeText: "",
      uploadSuccess: false,
      triedToUploadNull: false,
      upload: false,
      uploadType: "text",
      selectedFile: null,
      typeColor: "bg-yellow-600",

      // itemToUpdate: {
      //   images: this.item.images
      // }
      opreationCreate: false,
      opreationEdit: false
    };
  },
  // computed: {
  //   this.createFunc();
  //   this.editFunc();
  // },
  mounted() {
    // this.createFunc();
    // this.editFunc();
  },
  created() {
    // this.createFunc();
    // this.editFunc();
  },

  // created() {
  //   // this.$myInjectedFunction("test");
  // },
  methods: {
    setCreateFunc() {
      this.opreationCreate = this.$store.commit("setCreate", true);
      this.opreationEdit = this.$store.commit("setEdit", false);
      // return (this.opreationCreate = response);
      // console.log("CReate Response  From STORE ", response);
    },
    setEditFunc() {
      this.opreationEdit = this.$store.commit("setEdit", true);
      this.opreationCreate = this.$store.commit("setCreate", false);
      // return (this.opreationEdit = response);
      // console.log("EDIT Response From STORE ", response);
    },
    onFileSelected(event) {
      console.log("TARGET", event.target);
      this.selectedFile = event.target.files[0];
      // this.triedToUploadNull == false;
    },
    onuploadFile() {
      console.log("Upload");
      // this.$myInjectedFunction("test");
      this.$uploader(this.selectedFile, "blogs", this.addImageCallBack);
      // console.log("Download URL in Modal:", res);
      // this.itemCopy.images.push(res);
      // this.Uploder();
    },
    addImageCallBack(res) {
      console.log("addImageCallBack Download URL in Modal:", res);
      this.itemCopy.images.push(res);
      this.selectedFile = null;
    },
    deletImageCallBack(idx) {
      console.log("addImageCallBack Download URL in Modal:", idx);
      this.itemCopy.images.splice(idx, 1);
    },

    removePh(img, index) {
      let image = fb.storage.refFromURL(img);
      console.log("IMAGE Ref", image);
      if (image.startsWith("http")) {
        console.log("IMAGE", image);
        this.form.images = this.form.images.slice(index, -1);
        console.log("Remaining Images:", this.form.images);
      } else {
         console.log("TARGETED IMage to Del in FireStorage ", event.target);
      this.$removePhoto(img, index, this.deletImageCallBack);
      }

      // this.triedToUploadNull == false;
    },
    deleteItem(Id) {
      debugger;
      db.collection("blogs")
        .doc(Id)
        .delete();
      // this.$store.dispatch('blogs/deleteBlog', Id);
      this.warnDelete = true;
    }
  },
  props: {
    open: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    controlModal: {
      type: Function,
      required: true
    },
    updateItem: {
      type: Function,
      required: true
    }
    // editing: {
    //   type: Boolean,
    //   required: false
    // },
    // creating: {
    //   type: Boolean,
    //   required: false
    // }
    // updateItem: {
    //   type: Function,
    //   required: true
    // }
  }
};
</script>

 <style scoped>
/* .input[type="file" i] {
  padding: 0 !important;
  border-color: #fff !important;
} */
label {
  cursor: pointer;
  /* Style as you please, it will become the visible UI component. */
}

#upload-photo {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
