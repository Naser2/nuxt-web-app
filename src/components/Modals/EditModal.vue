 <template>
  <div class="edit-modal-wrapper z-50" v-if="this.$store.getters.getEdit">
    <!-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js" defer></script> -->
    <!-- :x-data=" open " -->
    <!-- :x-show="open" -->
    <div
      class="absolute top-0 inset-x-0 px-4 pb-6 sm:p-0 sm:flex sm:items-center sm:justify-center"
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
        class="fixed inset-0 transition-opacity"
      >
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div
        :x-show="open"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        class="bg-white rounded-lg pb-4 overflow-hidden shadow-xl transform transition-all"
      >
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

          <div class="text-center">
            <div class="modal-header px-4 border-b border-gray-400">
              <div
                class="py-1 flex justify-between items-center sm:py-4 sm:pb-2 sm:px-6 sm:items-baseline"
              >
                <div class="flex items-center">
                  <h3 class="font-regular text-base md:text-lg leading-snug truncate">
                    <h2 class="sm:text-2xl lg:text-3xl xl:text-4xl">Make changes</h2>
                  </h3>
                </div>
                <div class="ml-4 flex flex-shrink-0 items-center">
                  <div class="flex items-center text-sm sm:hidden">
                    <button
                      type="button"
                      class="inline-block rounded-lg font-medium leading-none py-3 px-3 focus:outline-none text-gray-400 hover:text-gray-600 focus:text-gray-600"
                    >
                      <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="hidden sm:flex items-center text-sm md:text-base">
                    <button
                      type="button"
                      class="inline-flex items-center bg-yellow-300 rounded-full text-gray-800 font-medium leading-none py-2 px-3 focus:outline-none text-gray-700"
                    >
                      <svg
                        class="mr-1.5 h-2 w-2 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>Editing
                    </button>
                    <button
                      type="button"
                      @click="controlModal"
                      class="ml-2 inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none text-gray-200 hover:text-orange-600 focus:text-indigo-600"
                    >Close</button>
                  </div>
                </div>
              </div>
              <div class="header-top-inline text-left">
                <div>
                  <p
                    class="py-1 flex justify-between items-center sm:py-4 sm:pb-2 sm:px-6 sm:items-baseline sm:pt-2 sm:pb-4 max-w-2xl text-sm leading-5 text-gray-100"
                  >This content is displayed publicly but default but you cahnge it in share settings.</p>
                </div>
              </div>
            </div>

            <div class="mt-2 max-w-6xl ic px-4 pt-5 sm:p-6 lg:mx-20">
              <form>
                <div>
                  <div>
                    <div>
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900 mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
                      >{{item.title}}</h3>
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900 mt-1 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
                      >{{item.tagline && item.tagline}}</h3>
                    </div>
                    <div class="mt-6 sm:mt-5">
                      <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-lg flex rounded-md shadow-sm">
                            <span
                              class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                            >Title</span>
                            <input
                              id="username"
                              v-model="item.title"
                              class="flex-1 text-gray-700 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>
       <div class="field mt-8 bg-white rounded px-0">
               <span
                  class="inline-flex text-gray-700 font-bold px-4 py-1 text-gray-500 sm:text-sm"
                  >Teaser Description</span
                >
               <span
                  class="inline-flex font-bold px-1 py-1 items-center px-3 text-orange-400 sm:text-sm"
                  >Enter a 20 words brief description for preview below</span
                >
              <div class="mt-1 flex rounded-md shadow-sm">

                <input
                  v-model="item.previewDescription"
                  id="previewDescription"
                  class="flex-1 form-input block w-full text-gray-500 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  type="text"
                  placeholder="Enter a preview description"
                />
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
                          <div class="max-w-6xl flex rounded-md shadow-sm">
                            <vue-editor
                              style="text-editor-style mb-4"
                              v-model="item.description"
                            ></vue-editor>
                          </div>
                        </div>
                      </div>

                      <div class="relative pt-10 lg:pt-4" v-if="item.thumbnail">
                          <div class="mx-auto mt-20 py-4 px-4 max-w-9xl sm:px-6 lg:px-8 lg:mt-0  lg:pt-20">
<div class="grid grid-cols-0 gap-12 lg:grid-cols-4 lg:gap-2">

  <div class="lg:col-span-1">

                              <label
                            for="photo"
                            class="pt-20 text-2xl lg:mt-0 block text-sm leading-5 font-medium text-gray-700"
                          >Thumbnail</label>
    </div>
  <div class="lg:col-span-3">
    <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-0 sm:space-y-0 lg:gap-x-0">


      <li>
        <div class="flex items-center space-x-4 lg:space-x-0">
          <div class="space-y-4"><div class="aspect-w-3 aspect-h-2">
            <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div class="flex-shrink-0"><img :src="item.thumbnail" alt="" class="h-full w-full object-cover">
              </div>
              </div>
              </div>
              </div>
              </div>
               <span class="rounded-md py-20">
                                  <button
                                    @click="deleteThumbnail(thumbnail)"
                                    type="button"
                                    class="py-2 px-3 text-sm leading-4 font-medium text-blue-600 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                                  >Remove</button>
                                </span>
              </li>


     </ul></div></div>
  </div>
                        <!-- <div
                          class="sm:mt-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-20"
                        >

                          <div class="mt-10 sm:mt-0 sm:col-span-2">
                              <label
                            for="photo"
                            class="pt-20 text-2xl lg:mt-0 block text-sm leading-5 font-medium text-gray-700"
                          >Thumbnail</label>
                            <div class="flex items-center">
                              <div
                                class="block img-div overflow-scroll"

                              >
                              <div class="flex items-center space-x-4 lg:space-x-0"><div class="space-y-4"><div class="aspect-w-3 aspect-h-2"><div class="flex flex-col rounded-lg shadow-lg overflow-hidden"><div class="flex-shrink-0"><img :src="item.thumbnail" alt="" class="h-80 w-80 object-contain"></div> </div>
                              </div>
                              </div>
                              </div>
                                <span class="h-32 w-32 rounded-full overflow-hidden">
                                  <img
                                    :src="item.thumbnail"
                                    class="object-cover shadow-lg rounded-lg"
                                  />
                                </span>

                              </div>
                            </div>
                          </div>
                        </div> -->
                      </div>
                      <div  class="mt-20"></div>
                         <div
                        class="mt-60 sm:mt-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:items-start sm:pt-5" v-if="!item.thumbnail"
                      >
                        <label
                          for="upload_thumbnail"
                          class="block text-xl leading-5 font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >Upload Thumbnail</label>
                        <div class="mt-2 sm:mt-0 sm:col-span-1">
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
                              for="upload_thumbnail"
                            >
                              <!-- <lable for="upload-photo"></lable> -->
                              <!-- <svg
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
                              </svg> -->
                              <!-- <p class="mt-1 text-sm text-gray-600">
                                <button
                                  type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                                >Upload a file</button>

                              </p> -->

                            </label>
                            <input
                               id="upload_thumbnail"
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
                            @click="onUploadThumbnail"
                          >Upload</button>
                        </div>
                      </div>
                      <div class="relative lg:pt-10" v-if="item.images.length > 0">
                        <div
                          class="sm:mt-5 pt-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-20"
                        >
                          <label
                            for="photo"
                            class=" pt-4 text-2xl lg:my-10 lg:mt-0 block text-sm leading-5 font-medium text-gray-700"
                          >Photos</label>
                          <div class="mt-10 sm:mt-0 sm:col-span-2">
                            <div class="lg:flex lg:items-center">
                              <div
                                class="block img-div pr-8 overflow-scroll"
                                v-for="(img, index) in item.images"
                                :key="index"
                              >
                                <span class="h-80 w-80 rounded-full overflow-hidden">
                                  <img
                                    :src="img"
                                    class="justify-center bg-center cursor-pointer lg:h-64 lg:w-64 text-gray-300"
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
                        class="max-w-2xl mt-4 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="cover_photo"
                          class="block text-xl  leading-5 font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >Upload Photos</label>
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
                        v-if="item && item.type === 'videos'"
                      >
                        <span
                          v-if="item.type === 'videos' && triedToUploadNull === false"
                          class="py-4 mx-4 md:mx-2 font-bold text-blue-400 md:flex"
                        >Select video or paste link</span>
                        <span
                          v-else-if="selectedFile === null && item.image === ''"
                          class="mt-4 font-bold text-red-600 md:flex"
                        >Please Select video or paste link</span>
                        <span v-else class="mt-4 font-bold text-green-600 md:flex">
                          <span v-if="item.images">Upload Complete</span>
                          <span v-else>
                            Good!
                            <span class="text-white font-sans pl-2">Click upload now</span>
                          </span>
                        </span>

                        <div
                          class="mb-8 w-full relative md:flex lg:w-12/12 px-2"
                          v-if="item.type === 'videos'"
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


                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-5 mx-4 lg:mx-20 lg:my-10 space-between  sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <span class=" w-full rounded-md shadow-sm sm:col-start-1">
            <div class="max-w-lg flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                >Tags</span>
                <input
                  id="username"
                  v-model="item.tags"
                  class="flex-1 text-gray-700 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
          </span>
          <span class="mt-3  w-full rounded-md shadow-sm sm:mt-0 sm:col-start-2">
            <div class="max-w-lg flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                >Website</span>
                <input v-model="item.websiteUrl"
                    id="websiteUrl"
                    type="text"
                    class="flex-1 text-gray-700 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
              </div>
          </span>
        </div>


        <div class="mt-5 mx-10 space-y-4 lg:mx-20 lg:my-20 space-between  sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
          <span class="sm:mx-4 py-4  rounded-md shadow-sm sm:col-start-2">
            <button
              @click.prevent="update(item)"
              type="button"
              class="submit-btn inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Update</button>
          </span>
          <span class=" rounded-md shadow-sm sm:mx-4 sm:my-10 sm:col-start-1">
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
 import { fb } from "~/firebaseConfig/index";
export default {
  name: "Edit-Modal",
  // mixins: [Uploader],

  data() {
    return {
      // open: this.open,
      selectedFile: null,
      warnDelete: false,
      itemCopy: {
        id: this.item.id,
        title: this.item.title,
        tagline: this.item.tagline && this.item.tagline,
        type: this.item.type,
        description: this.item.description,
        previewDescription:this.item.previewDescription && this.item.previewDescription.slice(0,140),
        tags: this.item.tags,
        images: this.item.images,
        headerBackground: this.item.headerBackground && this.item.headerBackground,
        images: this.item.images,
        leftSideArt: this.item.leftSideArt && this.item.leftSideArt,
        likes: this.item.likes,
        tags: this.item.tags,
        websiteUrl: this.item.websiteUrl && this.item.websiteUrl,
        thumbnail: this.item.thumbnail,

        updated: new Date()
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

  methods: {
    update(item) {
      console.log("updateItem", item, this.id)
      let newitem = {...item, id:this.id,  previewDescription:this.item.previewDescription.slice(0,140),
       updated: new Date()
       };

      this.$store
        .dispatch("updateItem", newitem)
        .then(()=>  {
           this.$store.commit("toggleSuccessModal");
          // this.$router.replace("/blogs")
        });
    },

    onFileSelected(event) {
      console.log("TARGET", event.target);
      //Check to ensure the target file is not null to prevent bugs
      this.selectedFile = event.target.files[0];
      // this.triedToUploadNull == false;
    },
    onuploadFile() {
      console.log("Upload");
      this.$uploader(this.selectedFile, this.item.type, this.addImageCallBack);
    },
    addImageCallBack(res) {
      console.log("addImageCallBack Download URL in Modal:", res);
      this.item.images.push(res);
      this.selectedFile = null;
    },
    deletImageCallBack(idx) {
      console.log("addImageCallBack Download URL in Modal:", idx);
      this.item.images.splice(idx, 1);
    },
    removePh(img, index) {
      let image = fb.storage().refFromURL(img);;
      console.log("IMAGE ", img, "INDEX", index);
      if (!img.startsWith("https://firebasestorage.googleapis")) {
        console.log("IMAGE Starts with HTTP", img);
        const sliced = this.item.images.splice(index, +1);

        console.log(
          "Remaining Images:",
          this.item.images,
          "SLICED:",
          sliced
        );
      } else {
        console.log("TARGETED IMage to Del in FireStorage ", event.target);
        this.$removePhoto(img, index, this.deletImageCallBack);
      }
    },
   deleteThumbnail() {
      // const storageRef = fb.storage().ref();
      //  let image =storageRef.getReferenceFromUrl(img);
      let image = fb.storage().refFromURL(this.item.thumbnail);
      // let image = fb.storage.refFromURL(img);

      if (!this.item.thumbnail.startsWith("https://firebasestorage.googleapis")) {
        console.log("IMAGE", image);
        this.item.thumbnail = '';
        console.log("Remaining Images:", this.item.thumbnail);
      } else {
       this.item.thumbnail = ""
       this.selectedFile = null
        image
          .delete()
          .then(() => {

            console.log("Image Successfully Deleted:");
          })
          .catch(e => {
            console.log("Error in deleting:", e);
          });
      }
    },
      onUploadThumbnail() {
      const DTO = this.selectedFile;
      let formType = this.item.type;


      if (this.item.type === "videos") {
        if (this.selectedFile === null) {
          this.triedToUploadNull = true;
        } else {
          this.uploadGood = true;
          var storageRef = fb.storage().ref(`${formType}/` + DTO.name);
          let uploadTask = storageRef.put(DTO);

          uploadTask.on(
            "state_changed",
            snapshot => {
              var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case fb.storage.TaskState.PAUSED: // or 'paused'

                  break;
                case fb.storage.TaskState.RUNNING: // or 'running'

                  break;
              }
            },
            error => {
              console.log(error);
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                this.item.thumbnail = downloadURL
                console.log("File available at", downloadURL);
              });
            }
          );
        }
      } else if
     (this.item.type === "blogs" || this.item.type === "projects") {
        if (this.selectedFile === null) {
          this.triedToUploadNull = true;
          return;
        } else {

          let storageRef = fb.storage().ref(`${formType}/` + DTO.name);
          let uploadTask = storageRef.put(DTO);

          uploadTask.on(
            "state_changed",
            snapshot => {
              var progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
              switch (snapshot.state) {
                case fb.storage.TaskState.PAUSED: // or 'paused'
                  console.log("Upload is paused");
                  break;
                case fb.storage.TaskState.RUNNING: // or 'running'
                  console.log("Upload is running");
                  break;
              }
            },
            error => {
              console.log(error);
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                //add thumbnail here
                this.item.thumbnail = downloadURL
                console.log("Thumbnail File available at", downloadURL);
              });
            }
          );
        }
      }

    },
    // deleteItem(Id) { //Warn First
    //   this.$store.dispatch("deleteBlog", Id);
    // }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    controlModal: {
      type: Function,
      required: true
    }
  }
};
</script>

 <style >
.modal-header {
  background-color: #1a73e8;
}
label {
  cursor: pointer;
  /* Style as you please, it will become the visible UI component. */
}

#upload-photo {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
.submit-btn {
  background-color: #1a73e8;
}
</style>
