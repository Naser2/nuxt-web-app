<template>
  <div class="absolute top-0 inset-x-0 px-0 lg:my-20 sm:p-0 sm:flex sm:items-center sm:justify-center create-modal-warpper main z-50" v-if="this.$store.getters.getCreate ===true">
    <!-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js" defer></script> -->
    <!-- :x-data=" open " -->
    <!-- :x-show="open" -->
    <div
      class="absolute top-0 inset-x-0 px-0 pb-6 sm:p-0 sm:flex sm:items-center sm:justify-center"
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
        x-show="open"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        class="bg-white lg:rounded-lg mx-0 px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6"
      >
        <!-- //// TRANSTIOTION -->
        <div class="modal-header px-4 border-b border-gray-400">
          <div
            class="py-1 flex justify-between items-center sm:py-4 sm:pb-2 sm:px-6 sm:items-baseline"
          >
            <div class="flex items-center">
              <h3 class="font-regular text-base md:text-lg leading-snug truncate">
                <h2 class="sm:text-2xl lg:text-3xl xl:text-4xl">Create new {{form.type}}</h2>
              </h3>
            </div>
            <div class="ml-4 flex flex-shrink-0 items-center">
              <div class="flex items-center text-sm ">

              </div>
                <div class="device-view-cancel sm:hidden items-center text-sm md:text-base">
                <div class="relative">
                  <div   class="right-1 loating-action-btns sm:items-center sm:text-sm md:text-base
                  sm:flex sm:top-10 z-50 sm:right-8 loating-action-btns sm:items-center sm:text-sm md:text-base">
                   <button
                    @click.prevent="controlModal"
                    class="justify-end bg-gray-300 text-gray-700 rounded-full shadow-lg px-4 py-2.5 mt-2 hover:bg-red-400 focus:outline-none"
                    >X
                  </button>

                </div>
                </div>
              </div>

              <div class="hidden sm:flex items-center text-sm md:text-base">
                <button
                  type="button"
                  class="inline-flex items-center bg-orange-300 rounded-full text-gray-800 font-medium leading-none py-2 px-3 focus:outline-none text-gray-700"
                >
                  <svg class="mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3" />
                  </svg>Not Completed
                </button>

                <button
                  type="button"
                 @click="controlModal"
                  class="ml-2 inline-block rounded-lg font-medium leading-none py-2 px-3 focus:outline-none text-gray-200 hover:text-orange-600 focus:text-indigo-600"
                >Cancel</button>
              </div>
            </div>
          </div>
          <div class="header-top-inline text-left">
            <div>
              <p
                class="py-1 flex justify-between items-center sm:py-1 sm:pb-2 sm:px-3 sm:w-2/3  sm:pt-2 sm:pb-4 max-w-2xl text-sm leading-5 text-gray-100"
              >This content is displayed publicly but default but you cahnge it in share settings.</p>
            </div>
          </div>
        </div>


<!-- ADDEDD -->


 <div
      class="bg-gray-100 lg:bg-white pb-1 lg:px-64 lg:pb-48 lg:mx-auto lg:pb-0"
    >
      <div class="mx-0 md:mx-auto max-w-screen items-center lg:pt-12 font-bold">
        <!-- lg:mx-auto lg:px-10 -->
        <div class="form-container text-xl rounded-lg shadow-lg">
          <form>
            <div
              class="field rounded-t-sm justify-center text-center bg-gray-800 py-4 lg:py-8"
            >
              <div class="control inline-flex">
                <div class="select">
                  <select
                    v-model="form.type"
                    @change="changeTypeHeaderColor()"
                    class="border border-orange-800 text-center text-white font-semibold bg-orange-800 p-1"
                  >
                    <option class="bg-purple-400" value="projects"
                      >projects</option
                    >
                    <option value="blogs">blogs</option>
                    <option value="videos">videos</option>
                  </select>
                </div>
                <span class="pl-4 text-gray-700 choose">Choose</span>
              </div>
            </div>

            <div class="field bg-white rounded p-4 lg:p-10">
              <div class="mt-6 grid grid-cols-12 gap-6"  v-if="form.type == 'projects'">
                  <div class="col-span-12 sm:col-span-6">
                    <label for="first_name" class="block text-sm font-medium text-gray-700">Type of project</label>
                    <input v-model="form.projectType" type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm">
                  </div>

                  <div class="col-span-12 sm:col-span-6">
                    <label for="last_name" class="block text-sm font-medium text-gray-700">Technology</label>
                    <input-tag
                      v-model="form.tech"
                        class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm  px-3 focus:outline-none focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm"
                      type="text"
                      placeholder="react, Node, Python..."
                    ></input-tag>
                  </div>
                </div>
              <div class="mt-1 flex rounded-md shadow-sm">
                <span
                  class="inline-flex text-gray-700 font-bold px-4 py-1 bg-gray-300 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                  >Title</span
                >
                <input
                  v-model="form.title"
                  id="title"
                  class="flex-1 form-input block w-full text-gray-500 rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  type="text"
                  placeholder="Enter a captivating title"
                />
              </div>
              <div class="mt-1 flex rounded-md shadow-sm">
                <span
                  class="inline-flex text-gray-700 font-bold px-4 py-1 bg-gray-300 items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                  >Tagline</span
                >
                <input
                  v-model="form.tagline"
                  id="tagline"
                  class="flex-1 form-input text-gray-500 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  type="text"
                  placeholder="Enter a tagline"
                />
              </div>
            </div>

            <div class="field bg-white rounded lg:px-10">
               <span
                  class="inline-flex text-gray-700 font-bold px-4 py-1 text-gray-500 sm:text-sm"
                  >Teaser Description</span
                >
               <span
                  class="inline-flex px-1 py-1 items-center px-3 text-orange-400 sm:text-sm"
                  >Enter a 20 words brief description for preview below</span
                >
              <div class="mt-1 flex rounded-md shadow-sm px-4 lg:px-0">

                <input
                  v-model="form.previewDescription"
                  id="previewDescription"
                  class="flex-1 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  type="text"
                  placeholder="Enter a preview description"
                />
              </div>
            </div>
                 <!-- @image-added="handleImageAdded" -->
            <!-- v-model="form.description" -->
            <div class="bg-white rounded-lg">
              <div class="field pt-4">
                <div class="control">
                  <vue-editor
                    id="editor"
                    useCustomImageHandler

                    v-model="form.description"
                    style="text-editor-style"
                  ></vue-editor>
                </div>
              </div>
            </div>





               <!-- thumbnail -->
   <!-- thumbnail -->










       <!-- Projects -->
            <div class="form-rest bg-gray-100">
              <div class="form-rest-wrapper pt-10 lg:-mt-4 mx-2 md:mx-1/12">
                <div
                  class="conditionallyRenderedStuff"
                  v-if="form.type === 'projects' || form.type == 'blogs'"
                >






             <div v-show="!form.thumbnail ===null || form.thumbnail !==''">
                   <label  v-if="!uploadThumbnail"
                    class="block mx-1 lg:px-54 pb-10 lg:w-8/12 md:mx-1/12 lg:mx-2/12">
                   <label
                      class="label text-gray-600 text-blue-600 rounded-sm float-left pb-4"
                    >
                      <span class="text-gray-500">Paste</span> Link
                      <span class="text-gray-500 pr-2">or</span>
                      <span
                        class="bg-blue-300 px-2 py-2 text-base rounded-full shadow-lg text-blue-700 font-alt"
                        @click="changeToUploadThumbnail"
                        >Upload thumbnail</span
                      >
                    </label>


                  <input
                      class="form-input mt-1 block w-full rounded p-2 text-gray-900"
                      v-model="form.thumbnail"
                      type="text"
                      placeholder="Paste link or Upload image"
                    />

                  </label>
                   <span  v-if="uploadThumbnail"

                    @click="changeToUploadThumbnail"
                    class="px-2 py-1 text-blue-100 text-xs font-medium bg-green-100 rounded-full justify-center text-center mx-20 lg:mx-4/12 bg-blue-600 lg:px-2 py-1 rounded hover:bg-red-500">Paste link ?</span>



                  <div class="flex-1 flex flex-col p-8 justify-items-center" v-if="triedToUploadNullThumbnail">
                     <h1 class="text-red-500 text-lg text-center">No thumbnail selected</h1>
                  </div>
                  <div class="flex-1 flex flex-col p-8 justify-items-center" v-if="onlyOneThumbnailAllowed">
                     <h1 class="text-red-400 text-lg text-center"> 1 Thumbnail Allowed</h1>
                  </div>

                  <div
                    v-if="uploadThumbnail"
                    class="mx-2 mt-4 text-gray-400 px-2 justify-center items-center block md:mx-2/12 lg:mx-2/12 lg:w-7/12 mb-8 mx-auto"
                  >
                    <!-- <button
                      v-if="selectedFile"
                      class="input rounded py-4 text-gray-500 font-sans pb-2 pt-2 justify-centter text-center videoUpload"
                      type="button"
                      @click="onUploadThumbnail"
                    >
                      Upload
                    </button> -->
                  <div class="control flex">
                      <div class="flex justify-centter text-center">
                        <div class="control bg-white">
                          <input
                            class="input rounded py-4 text-gray-500 font-sans pb-2 pt-2 justify-centter text-center videoUpload"
                            type="file"
                            @change="onFileSelected"
                          />
                        </div>
                        <button
                          class="btn-primary bg-blue-600 label px-2 justify-centter text-center bg-googleBgMidBlue text-white rounded-sm hover:bg-blue-800 hover:text-white font-semibold"
                          type="button"
                          @click="onUploadFile('thumbnail')"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div></div>


                  <div class="text-center inline-flex space-x-4" v-if="form.thumbnail != null">
                    <h2
                      class="text-3xl leading-9 tracking-tight font-extrabold text-gray-500 sm:text-4xl sm:leading-10"
                    >
                      thumbnail
                    </h2>
                    <p
                      class="max-w-2xl mx-auto text-xl leading-7 text-gray-500 "
                    >
                         <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">

                              <svg class="h-5 w-5 text-white" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">

                            </path>
                          </svg>
                       </span>
                    </p>
                  </div>

                <div class="space-y-12 mb-10 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-12 sm:space-y-0 lg:gap-x-8" v-if="form.thumbnail !=null">
                  <!-- <ul x-max="1" class=""  v-for="(img, index) in form.thumbnail"
                                :key="index">
                    <li> -->

                      <div class="space-y-4">
                        <div class="relative w-full rounded-lg">

                        <button type="button" @click.prevent="deleteThumbnail()" class="absolute top-1/12 left-10/12 z-50 h-8 w-8 rounded-full px-2.5 items-center justify-center bg-red-200 text-red-400 hover:bg-red-300 hover:text-red-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
                          <span class="sr-only">Remove </span>
                          <svg class="h-3 w-3" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                            <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7"></path>
                          </svg>
                        </button>
<!--
                        <button
                          class="absolute top-1/12 left-2/12 z-50 text-red-700 rounded-full px-2 py-0 bg-gray-100"
                          @click.prevent="deleteImage(img, index)"
                        >
                          x
                        </button> -->

                        <img :src="form.thumbnail" class="object-cover shadow-lg rounded-lg">
                      </div>
                      <div class="flex-shrink-0 inline-block px-2 py-0.5 text-gray-500 text-xs font-medium bg-green-100 rounded-full mb-10">
                        <!-- <h3 v-if="selectedFile" !="">{{selectedFile.name}} </h3> -->
                      </div>
                      </div>
                    <!-- </li>

                  </ul> -->
                </div>
                  <!-- <div
                    class="imageDiv mt-6 grid gap-5 max-w-lg mx-auto lg:grid-cols-5 lg:max-w-none bg-gray-200 py-2 rounded-lg"
                  >
                    <div
                      class="image flex flex-col overflow-hidden w-full"
                      v-for="(img, index) in form.thumbnail"
                      :key="index"
                    >
                      <div class="relative flex-shrink-0 w-54">
                        <button
                          class="absolute top-1/12 left-2/12 z-50 text-red-700 rounded-full px-2 py-0 bg-gray-100"
                          @click.prevent="deleteImage(img, index)"
                        >
                          x
                        </button>

                        <img
                          class="object-cover text-blue-400 px-2"
                          style="height:100%; width:100%"
                          :src="img"
                          :alt="selectedFile.name"
                        />
                      </div>
                    </div>
                  </div> -->

            <!-- thumbnail -->



















                  <label
                    v-if="!upload"
                    class="block mx-1 lg:px-54 pb-10 lg:w-8/12 md:mx-1/12 lg:mx-2/12"
                  >
                    <label
                      class="label text-gray-600 text-blue-600 rounded-sm float-left pb-4"
                    >
                      <span class="text-gray-500">Paste</span> Link
                      <span class="text-gray-500 pr-2">or</span>
                      <span
                        class="bg-blue-400 px-2 py-2 text-base rounded-full shadow-lg text-blue-700 font-alt"
                        @click="changeToUpload"
                        >Upload image</span
                      >
                    </label>
                    <!-- <span class="text-gray-700">New Tags</span> -->

                    <input
                      class="form-input mt-1 block w-full rounded p-2 text-gray-900"
                      v-model="form.image"
                      type="text"
                      placeholder="Paste link or Upload image"
                    />
                  </label>

                  <!-- Uploading -->
                  <span  v-if="upload"

                    @click="changeToUpload"
                    class="px-2 py-1 text-blue-100 text-xs font-medium bg-green-100 rounded-full justify-center text-center mx-20 lg:mx-4/12 bg-blue-600 lg:px-2 py-1 text-white rounded hover:bg-red-500">Paste link ?</span>
                  <!-- <span
                    v-if="upload"
                    class="justify-center text-center mx-20 lg:mx-4/12 bg-gray-600 lg:px-2 py-1 text-white rounded hover:bg-red-500"
                    @click="changeToUpload"
                    >Cancel Upload X</span
                  > -->
                  <span
                    v-if="triedToUploadNullImage"
                    class="flex mt-4 font-bold text-red-600 md:flex"
                    >Select file or paste link</span
                  >
                  <div
                    v-if="upload"
                    class="mx-2 mt-4 text-gray-400 px-2 justify-center items-center block md:mx-2/12 lg:mx-2/12 lg:w-7/12 mb-8 mx-auto"
                  >
                    <div class="control flex">
                      <div class="flex justify-centter text-center">
                        <div class="control bg-white">
                          <input
                            class="input rounded py-4 text-gray-500 font-sans pb-2 pt-2 justify-centter text-center videoUpload"
                            type="file"
                            @change="onFileSelected"
                          />
                        </div>
                        <button
                          class="btn-primary bg-blue-600 label px-2 justify-centter text-center bg-googleBgMidBlue text-white rounded-sm hover:bg-blue-800 hover:text-white font-semibold"
                          type="button"
                          @click="onUploadFile('image')"
                        >
                          Upload
                        </button>
                      </div>

                    </div>
                  </div>

            <!-- Display Uplaoded Image Here -->
               <!-- <div class="relative pt-20 lg:pt-4">
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
                                class="block img-div pr-8 overflow-scroll"
                                v-for="(img, index) in form.images"
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
                      </div> -->
                  <div class="text-center" v-if="form.images.length !== 0">
                    <h2
                      class="text-xl leading-9 tracking-tight font-extrabold text-gray-600 sm:text-4xl sm:leading-10"
                    >
                      Images
                    </h2>
                    <p
                      class="mt-1 max-w-2xl mx-auto text-sm leading-7 text-gray-500 sm:mt-1"
                    >
                      all photos are here.
                    </p>
                  </div>

                  <div v-if="form.images.length"
                    class="  max-w-lg mx-auto lg:grid-cols-5 lg:max-w-none bg-gray-200 py-2 rounded-lg"
                  >
                  <div class="image flex flex-col overflow-hidden w-full" >
                    <ul  class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <li class="relative col-span-1 " v-for="(img, index) in form.images"
                      :key="index">
                          <div class="flex items-center justify-between">
                            <button type="button" @click.prevent="deleteImage(img, index)" class="absolute top-1/12 left-9/12 z-50  h-8 w-8 rounded-full px-2.5 items-center justify-center bg-red-200 text-red-400 hover:bg-red-300 hover:text-red-500 focus:outline-none focus:bg-indigo-500 focus:text-white">
                              <span class="sr-only">Remove </span>
                              <svg class="h-3 w-3" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                                <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7"></path>
                              </svg>
                            </button>
                             <span class="sm:h4-full sm:w-full h-45 w-45 lg:h-64 lg:w-64 overflow-hidden">
                                  <img
                                    :src="img"
                                    class="justify-center bg-center cursor-pointer h-45 w-45 lg:h-64 lg:w-64"
                                  />   </span>
                            <!-- <img class="object-cover text-blue-400 px-2"
                                style="height:100%; width:100%"
                                :src="img"
                                :alt="selectedFile.name"
                              /> -->
                          </div>
                        </li>
                    </ul>
                  </div>




                  </div>





                </div>
                <!-- VIDEOS UPLOAD -->
                <div
                  class="videoUploadWarapper lg:px-2/12"
                  v-if="form.type === 'videos'"
                >
                  <span
                    v-if="form.type === 'videos' && triedToUploadNullVideo === false"
                    class="py-4 mx-4 md:mx-2 font-bold text-blue-400 md:flex"
                    >Select video or paste link</span
                  >
                  <span
                    v-else-if="selectedFile === null && form.image === ''"
                    class="mt-4 font-bold text-red-600 md:flex"
                    >Please Select video or paste link</span
                  >
                  <span v-else class="mt-4 font-bold text-green-600 md:flex">
                    <span v-if="this.form.images">Upload Complete</span>
                    <span v-else>
                      Good!
                      <span class="text-white font-sans pl-2"
                        >Click upload now</span
                      >
                    </span>
                  </span>

                  <div
                    class="mb-8 w-full relative md:flex lg:w-12/12 px-2"
                    v-if="form.type === 'videos'"
                  >
                    <div class="flex justify-centter text-center">
                      <div class="control bg-white">
                        <input
                          class="input rounded py-4 text-gray-500 font-sans pb-2 pt-2 justify-centter text-center videoUpload"
                          type="file"
                          @change="onFileSelected"
                        />
                      </div>
                      <button
                        class="btn-primary bg-blue-600 label px-2 justify-centter text-center bg-googleBgMidBlue text-white rounded-sm hover:bg-blue-800 hover:text-white font-semibold"
                        type="button"
                        @click="onUploadFile('video')"
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
                <label class="block">
                  <div class="text-center">
                    <h2
                      class="text-3xl leading-9 tracking-tight font-extrabold text-gray-500 sm:text-4xl sm:leading-10
                    "
                    >
                      Tags
                    </h2>
                    <p
                      class="mt-2 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
                    >
                      (separate with commas)
                    </p>
                  </div>

                  <div class="mt-1 rounded-md shadow-sm flex">
                    <span
                      class="inline-flex flex-shrink-1 items-center text-sm text-gray-700 font-bold px-4 bg-gray-300 px-3 lg:flex-shrink-0 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                      >Tags</span
                    >
                    <input-tag
                      v-model="form.tags"
                      class="vue-input-tag-wrapper bg-gray-200 w-full rounded-r"
                      type="text"
                      placeholder="Ex: tech, code, ..."
                    ></input-tag>
                  </div>
                  <div class="mt-1 rounded-md shadow-sm flex pt-2 pb-4">
                    <span
                      class="inline-flex flex-shrink-0 items-center text-gray-700 text-sm font-bold px-4 bg-gray-300 px-3 lg:flex-shrink-0 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                      > Background color</span
                    >
                      <input v-model="form.backgroundColor" type="text" name="username" id="username" autocomplete="username" class="pl-2 focus:ring-light-blue-500 focus:border-light-blue-500 flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" value="lisamarie">
                  </div>
                </label>
                        <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-5 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="email"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Website Link</label>
                      <div class="mt-1 sm:mt-0 sm:col-span-3 text-gray-500">
                          <div class="max-w-lg rounded-md shadow-sm ">
                            <input v-model="form.websiteUrl"
                              id="websiteUrl"
                              type="text"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>


         <div class="flex justify-end py-4 lg:py-10">
          <button type="button"  @click.prevent="controlModal" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
            Cancel
          </button>
          <button  type="button"  @click="onPostRequest" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
            Create this <span class='px-1 capitalize'>{{form.type.slice(0,-1)}}</span>
          </button>
        </div>
                <!-- <div
                  class="Post-buttons pb-20 py-16 submit justify-center text-center inline-flex mx-8 md:mx-20 lg:mt-4 lg:mx-3/12"
                >
                  <div class="control order-1">
                    <button  @click.prevent="controlModal"
                      class="btn-indigo bg-gray-500 px-4 py-1 rounded-full text-gray-200 rounded bg-transparent hover:bg-pink-800 shadow-sm mr-8 lg:mr-56 lg:py-2 lg:px-4"

                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                  <div class="control order-2">
                    <button
                      class="btn-indigo px-4 py-1 bg-blue-600 rounded-full px-2 rounded-sm text-gray-100 lg:py-2 lg:px-4"
                      type="button"
                      @click="onPostRequest"
                    >
                      Submit
                    </button>
                  </div>
                </div> -->
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>




<!-- ADDED EDN -->


        <!-- /////  BUTTONS-->
      </div>
    </div>

    <!-- ///////// -->

    <!-- <template>
      <div class="bg-blue-500 text-center py-4 lg:px-4">
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
      </div>
      <div
        class="justify-center text-center w-full text-white text-sm font-bold px-4 py-3 text-center py-4 lg:px-4 inline-flex"
        role="alert"
      >
        <svg
          class="fill-current w-8 h-8 mr-2 bg-orange-400 rounded-full p-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"
          />
        </svg>
        <p class="justify-center text-center text-gray-400 text-2xl">
          Fill in the
          <span :class="[typeText]">
            {{
            form.type.charAt(0).toUpperCase() + form.type.slice(1, -1)
            }}
          </span>
        </p>
      </div>
    </template>-->
  </div>
</template>

<script>
// import ProfileFinishedVue from './ProfileFinished.vue';
// import { required } from 'vuelidate/lib/validators';

// import { VueEditor } from "vue2-editor";
import { fb } from "~/firebaseConfig/index";
import axios from "axios";
export default {
  name: "Create-Modal",

  data() {
    return {
      onlyOneThumbnailAllowed:false,
      imageCategory: 'photo',
       editorContent: "Initial Content",
      formTypeText: "",
      uploadGood: false,
      triedToUploadNullVideo: false,
      triedToUploadNullImage: false,
      triedToUploadNullThumbnail: false,
      upload: false,
      uploadThumbnail: false,
      uploadType: "text",
      selectedFile: null,
      typeColor: "bg-yellow-600",
      typeText: "",
      form: {
       type: "blogs",
        title: "",
        tagline:'',
        thumbnail: null,
        previewDescription:'',
        description: null,
        projectType:'',
        backgroundColor:'',
        tech:[],
        note: "",
        shares: 0,
        tags: [],
        likes: 0,
        images: [],
        leftSideArt: "",
        headerBackground:'',
        websiteUrl:''
      }
    };
  },

  mounted() {
    // this.$successModal();
  },
   props: {

    controlModal: {
      type: Function,
      required: true
    }
  },
methods: {
    // deleteImage(img, index, cb) {
    //   const handleImageAddedInTextEditor = (file, Editor, cursorLocation) => {
    //     const CLIENT_ID = "993793b1d8d3e2e";
    //     var formData = new FormData();
    //     formData.append("image", file);
    //     axios({
    //       url: "https://api.imgur.com/3/image",
    //       method: "POST",
    //       headers: {
    //         Authorization: "Client-ID " + CLIENT_ID
    //       },
    //       data: formData
    //     })
    //       .then(result => {
    //         console.log(result);
    //         let url = result.data.data.link;
    //         Editor.insertEmbed(cursorLocation, "image", url);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   };
    // }

      // handleImageAdded(file, Editor, cursorLocation) {
      //   const DTO = this.selectedFile;
      //   var formData = new FormData();
      //   formData.append("image", file);
      //   console.log("blog");
      //   let storageRef = firebase.storage().ref(`${formType}/` + DTO.name);
      //   let uploadTask = storageRef.put(DTO);

      //   uploadTask.on(
      //     "state_changed",
      //     snapshot => {
      //       var progress =
      //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //       console.log("Upload is " + progress + "% done");
      //       switch (snapshot.state) {
      //         case firebase.storage.TaskState.PAUSED: // or 'paused'
      //           console.log("Upload is paused");
      //           break;
      //         case firebase.storage.TaskState.RUNNING: // or 'running'
      //           console.log("Upload is running");
      //           break;
      //       }
      //     },
      //     error => {
      //       console.log("ERROR BLOCK", error);
      //     },
      //     () => {
      //       uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
      //         console.log("IMG RES from FireBase", downloadURL);
      //         this.form.images.push(downloadURL);
      //         Editor.insertEmbed(cursorLocation, "image", downloadURL);
      //         console.log(
      //           "Editor insertEmbed from FireBase",
      //           Editor.insertEmbed(cursorLocation, "image", downloadURL)
      //         );
      //         console.log("File available at", downloadURL);
      //       });
      //     }
      //   );
    // },
    deleteImage(img, index) {
      // const storageRef = fb.storage().ref();
      //  let image =storageRef.getReferenceFromUrl(img);
       let image = fb.storage().refFromURL(img);;
      // let image = fb.storage.refFromURL(img);
      console.log("IMAGE", image);
      if (!img.startsWith("https://firebasestorage.googleapis")) {
        console.log("IMAGE", image);
        this.form.images = this.form.images.slice(index, -1);
        console.log("Remaining Images:", this.form.images);
      } else {
        console.log("index", index, img);
        this.form.images.splice(index, 1);
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
    deleteThumbnail() {
      // const storageRef = fb.storage().ref();
      //  let image =storageRef.getReferenceFromUrl(img);
      let image = fb.storage().refFromURL(this.form.thumbnail);
      // let image = fb.storage.refFromURL(img);

      if (!this.form.thumbnail.startsWith("https://firebasestorage.googleapis")) {
        console.log("IMAGE", image);
        this.form.thumbnail = null;
        console.log("Remaining Images:", this.form.thumbnail);
      } else {
       this.form.thumbnail = null
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
    resetForm() {
      Object.assign(this.$data, this.$options.data.apply(this));
    },
        postIdCb(id){
                  return id
        },
   onPostRequest() {
      let moduleName = this.form.type;
      let formType = this.form.type;
      let form;
      let id;
      // let thumbnail = this.form.images && this.form.images[0]
      let previewDescription = this.form.previewDescription.slice(0,125)
      if (formType === "blogs") {
        form = {
          title: this.form.title,
          previewDescription: previewDescription,
          description: this.form.description,
          thumbnail:this.form.thumbnail ,
          tagline: this.form.tagline,
          images: this.form.images,
          shares: this.form.shares,
          tags: this.form.tags,
          likes: this.form.likes,
          type: this.form.type,
          backgroundColor:'',
          createdAt: new Date(),
          updatedAt: "",
          websiteUrl:this.form.websiteUrl,
          stars:5,
         leftSideArt: "",
         headerBackground:''
          // collection: "blogs"
        };

        this.$store.dispatch("createItem", form )

        // .then(
        //  id  = this.$store.getters.loadNewIdToredirect,
        //   // this.$store.getters.load,
        //   // this.$mySuccessModal(),

        //   // settTimeout(() => {
        //   //   this.$emit("closeModal");
        //   // }, 3000),


        //   console.log("POSTPAGE-ID", id),
        //   this.$store.dispatch("getById", id),
        //   this.controlModal(),

        //   //  this.$router.push(`/${formType}/${id}`)
        //   //  this.$router.push(`/${formType}`)
        //   // }
        // );

      }
      if ( this.form.type === "projects") {
        form = {
          title: this.form.title,
          previewDescription: previewDescription,
          description: this.form.description,
          thumbnail:this.form.thumbnail ,
          tagline: this.form.tagline,
          images: this.form.images,
          shares: this.form.shares,
          projectType:this.form.projectType,
          tech:this.form.tech,
          tags: this.form.tags,
          likes: this.form.likes,
          type: this.form.type,
          backgroundColor:'',
          createdAt: new Date(),
          updatedAt: "",
          websiteUrl: this.form.websiteUrl,
          leftSideArt: "",
          stars:4,
          headerBackground:''
          // collection: "blogs"
        };

        this.$store.dispatch("createItem", form).then(
          // this.$mySuccessModal(),

          // settTimeout(() => {
          //   this.$emit("closeModal");
          // }, 3000),

          // postPageId => {
          // console.log("POSTPAGE-ID", postPageId),  REDIRECT TO POST ID  and CALL SUCCESS
          this.controlModal(),
          this.$router.push(`/projects`)
          // }
        );

      }
      else  if ( this.form.type === "videos"){
        this.$store
          .dispatch("createItem", this.form)
          .then(() => {
            this.$emit("colseModal");
            // return this.$toasted.success("RECIPE SUCCESSFULLY Created Yay", {
            //   duration: 3000
            // });
          })

          .catch(e => console.log("something didn work out ", e));
      } else {
        return
      }
    },

    onUploadFile(imageCategory) {
      this.imageCategory = imageCategory
      if(this.selectedFile === null && imageCategory ==='image'){
         this.triedToUploadNullImage = true
        return
      }
      if(this.selectedFile === null && imageCategory ==='thumbnail'){
         if(this.form.thumbnail != '' ){
           this.onlyOneThumbnailAllowed = true
           return
        }
        else
        {
            this.triedToUploadNullThumbnail = true
           return
        }

      }
      if(this.selectedFile === null && imageCategory ==='video'){
         this.triedToUploadNullVideo = true
        return
      }
      else {
         console.log("DATA+++: ", this.selectedFile, this.form.type, this.addImageCallBack);
          this.$uploader(this.selectedFile, this.form.type, this.addImageCallBack);
      }

    },
    addImageCallBack(res) {
      console.log("addImageCallBack Download URL in Modal:", res);
      if(this.imageCategory==='image'){
         this.form.images.push(res);
          this.selectedFile = null;
      }else if(this.imageCategory==='thumbnail'){
        this.form.thumbnail = res;
         this.selectedFile = null;
      }

      else if(this.imageCategory==='video'){
        this.form.video = res;
         this.selectedFile = null;
      }
      else {
        console.log("Where should I lace the image")
      }

    },
    PostData(form) {
      console.log(JSON.stringify("POST :", form));
      alert(JSON.stringify(" POSTINGGG", ...form));
    },
    Cancel() {
      this.resetForm();
      this.$emit("closeModal");
      this.showSuccessModal = true;
    },
    changeTypeHeaderColor() {
      this.changeformTypeText();
      if (this.form.type === "projects") {
        this.typeColor = "bg-orange-400";
        this.typeText = "text-orange-400";
      } else if (this.form.type === "blogs") {
        this.typeColor = "bg-green-500";
        this.typeText = "text-green-500";
      } else if (this.form.type === "videos") {
        this.typeColor = "bg-blue-500";
        this.typeText = "text-blue-500";
      }
    },
    changeformTypeText() {
      if (this.form.type === "projects") {
        this.formTypeText = "text-orange-600";
      } else if (this.form.type === "blogs") {
        this.formTypeText = "text-green-500";
      } else if (this.form.type === "videos") {
        this.formTypeText = "text-red-500";
      }
    },
    changeToUpload() {
      this.upload = !this.upload;
      this.triedToUploadNullImage = false
      this.triedToUploadNullVideo = false
      this.triedToUploadNullThumbnail = false
    },
    changeToUploadThumbnail() {
      this.uploadThumbnail = !this.uploadThumbnail;
    },
    onFileSelected(event) {
      console.log("TARGET", event.target);
      this.selectedFile = event.target.files[0];
      this.triedToUploadNull == false;
    },
    // onUploadThumbnail() {
    //   const DTO = this.selectedFile;
    //   let formType = JSON.stringify(this.form.type);
    //   console.log("Type of reso:", typeof formType, formType);
    //   console.log("FILE: ", this.selectedFile);

    //   if (this.form.type === "videos") {
    //     if (this.selectedFile === null) {
    //       this.triedToUploadNull = true;
    //     } else {
    //       this.uploadGood = true;
    //       var storageRef = fb.storage().ref(`${formType}/` + DTO.name);
    //       let uploadTask = storageRef.put(DTO);

    //       uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //           var progress =
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log("Upload is " + progress + "% done");
    //           switch (snapshot.state) {
    //             case fb.storage.TaskState.PAUSED: // or 'paused'
    //               console.log("Upload is paused");
    //               break;
    //             case fb.storage.TaskState.RUNNING: // or 'running'
    //               console.log("Upload is running");
    //               break;
    //           }
    //         },
    //         error => {
    //           console.log(error);
    //         },
    //         () => {
    //           uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //             this.form.thumbnail = downloadURL
    //             console.log("File available at", downloadURL);
    //           });
    //         }
    //       );
    //     }
    //   } else if
    //  (this.form.type === "blogs" || this.form.type === "projects") {
    //     if (this.selectedFile === null) {
    //       this.triedToUploadNull = true;
    //       return;
    //     } else {
    //       console.log(this.form.type);
    //       let storageRef = fb.storage().ref(`${formType}/` + DTO.name);
    //       let uploadTask = storageRef.put(DTO);

    //       uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //           var progress =
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log("Upload is " + progress + "% done");
    //           switch (snapshot.state) {
    //             case fb.storage.TaskState.PAUSED: // or 'paused'
    //               console.log("Upload is paused");
    //               break;
    //             case fb.storage.TaskState.RUNNING: // or 'running'
    //               console.log("Upload is running");
    //               break;
    //           }
    //         },
    //         error => {
    //           console.log(error);
    //         },
    //         () => {
    //           uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //             //add thumbnail here
    //             this.form.thumbnail = downloadURL
    //             console.log("Thumbnail File available at", downloadURL);
    //           });
    //         }
    //       );
    //     }
    //   }

    // },
    // onUploadFile() {
    //   const DTO = this.selectedFile;
    //   let formType = JSON.stringify(this.form.type);
    //   console.log("Type of reso:", typeof formType, formType);
    //   console.log("FILE: ", this.selectedFile);

    //   if (this.form.type === "videos") {
    //     if (this.selectedFile === null) {
    //       this.triedToUploadNull = true;
    //     } else {
    //       this.uploadGood = true;
    //       var storageRef = fb.storage().ref(`${formType}/` + DTO.name);
    //       let uploadTask = storageRef.put(DTO);

    //       uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //           var progress =
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log("Upload is " + progress + "% done");
    //           switch (snapshot.state) {
    //             case fb.storage.TaskState.PAUSED: // or 'paused'
    //               console.log("Upload is paused");
    //               break;
    //             case fb.storage.TaskState.RUNNING: // or 'running'
    //               console.log("Upload is running");
    //               break;
    //           }
    //         },
    //         error => {
    //           console.log(error);
    //         },
    //         () => {
    //           uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //             this.form.images.push(downloadURL);
    //             console.log("File available at", downloadURL);
    //           });
    //         }
    //       );
    //     }
    //   } else if (this.form.type === "blogs" || this.form.type === "projects") {
    //     if (this.selectedFile === null) {
    //       this.triedToUploadNull = true;
    //       return;
    //     } else {
    //       // debugger;
    //       console.log("blog");
    //       let storageRef = fb.storage().ref(`${formType}/` + DTO.name);
    //       let uploadTask = storageRef.put(DTO);

    //       uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //           var progress =
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log("Upload is " + progress + "% done");
    //           switch (snapshot.state) {
    //             case fb.storage.TaskState.PAUSED: // or 'paused'
    //               console.log("Upload is paused");
    //               break;
    //             case fb.storage.TaskState.RUNNING: // or 'running'
    //               console.log("Upload is running");
    //               break;
    //           }
    //         },
    //         error => {
    //           console.log(error);
    //         },
    //         () => {
    //           uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //             //add thumbnail here
    //             this.form.images.push(downloadURL);
    //             console.log("File available at", downloadURL);
    //           });
    //         }
    //       );
    //     }
    //   } else {
    //     if (this.selectedFile === null) {
    //       this.triedToUploadNull = true;
    //       let storageRef = fb.storage().ref(`${formType}/` + DTO.name);
    //       let uploadTask = storageRef.put(DTO);

    //       uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //           var progress =
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log("Upload is " + progress + "% done");
    //           switch (snapshot.state) {
    //             case fb.storage.TaskState.PAUSED: // or 'paused'
    //               console.log("Upload is paused");
    //               break;
    //             case fb.storage.TaskState.RUNNING: // or 'running'
    //               console.log("Upload is running");
    //               break;
    //           }
    //         },
    //         error => {
    //           console.log(error);
    //         },
    //         () => {
    //           uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //             this.form.images.push(downloadURL);
    //             console.log("File available at", downloadURL);
    //           });
    //         }
    //       );
    //     } else {
    //       let storageRef = fb.storage().ref(`${formType}/` + DTO.name);
    //       let uploadTask = storageRef.put(DTO);

    //       uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //           var progress =
    //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //           console.log("Upload is " + progress + "% done");
    //           switch (snapshot.state) {
    //             case fb.storage.TaskState.PAUSED: // or 'paused'
    //               console.log("Upload is paused");
    //               break;
    //             case fb.storage.TaskState.RUNNING: // or 'running'
    //               console.log("Upload is running");
    //               break;
    //           }
    //         },
    //         error => {
    //           console.log(error);
    //         },
    //         () => {
    //           uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
    //             this.form.images.push(downloadURL);
    //             console.log("File available at", downloadURL);
    //           });
    //         }
    //       );
    //     }
    //   }
    // }
  }
};
</script>

<style >
.ql-editor {
  font-weight: 400;
}
.input[type="file" i] {
  color: #65659a;
  padding: 0;
}
.quillWrapper .ql-snow.ql-toolbar {
  background-color: #2779e014;
}
.ql-container.ql-snow {
  border: 1px solid #ccc;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #fff;
  color: #313030d4;
}
.vue-input-tag-wrapper {
  /* border-radius: 5.85rem !important;
  border-color: red !important */
}
.input-tag {
  background: rgb(238, 242, 253) !important;
  color: rgb(116, 160, 247) !important;
  border-radius: 5% !important;
  font-size: 1rem !important;
  font-weight: bold !important;
  border-color: rgb(223, 243, 253) !important;
}
.remove {
  color: rgb(196, 91, 42) !important;
}
.form-error {
  color: lightcoral;
}
.container {
  /* max-width: 960px; */
}
.form-container {
  /* max-width: 960px; */
}
.classDel {
  background: #9c8888;
}
.choose {
  color: #9ba8be;
}
/* .steps {
  color: #195cd0;
} */
.classPostType {
  background-color: #515557;
}

@media (max-width: 900px) {
  .videoUpload {
    width: 510px;
  }
}
@media (max-width: 600px) {
  .videoUpload {
    width: 310px;
  }
}
@media (max-width: 675px) {
  .videoUpload {
    width: 480px;
  }
}
@media (max-width: 439px) {
  .videoUpload {
    width: 260px;
  }
}
</style>
