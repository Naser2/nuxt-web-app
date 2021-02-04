
 <template>
  <div class="modal-wrapper" v-if="open">
    <!-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.0.1/dist/alpine.js" defer></script> -->
    <!-- :x-data=" open " -->
    <!-- :x-show="open" -->
    <div
      class="fixed top-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
    >
      <!-- :x-show="open" -->
      <div
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
      <!-- :x-show="open" -->
      <div
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:p-6"
      >
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
          <div class="mt-3 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-gray-900">POST MODAL {{item.title}}</h3>
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
                        <label
                          for="username"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Username</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-lg flex rounded-md shadow-sm">
                            <span
                              class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm"
                            >workcation.com/</span>
                            <input
                              id="username"
                              class="flex-1 form-input block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="about"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Description</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-lg flex rounded-md shadow-sm">
                            <textarea
                              id="about"
                              rows="3"
                              class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            ></textarea>
                          </div>
                          <p class="mt-2 text-sm text-gray-500">Decribe a few sentences.</p>
                        </div>
                      </div>

                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="photo"
                          class="block text-sm leading-5 font-medium text-gray-700"
                        >Photo</label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                          <div class="flex items-center">
                            <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                              <svg
                                class="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                              </svg>
                            </span>
                            <span class="ml-5 rounded-md shadow-sm">
                              <button
                                type="button"
                                class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                              >Change</button>
                            </span>
                          </div>
                        </div>
                      </div>
                      <!-- UPLOAD IMAGES -->
                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="cover_photo"
                          class="block text-sm leading-5 font-medium text-gray-700 sm:mt-px sm:pt-2"
                        >Upload Photo</label>
                        <div class="mt-2 sm:mt-0 sm:col-span-2">
                          <div
                            class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                          >
                            <div class="text-center">
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
                            </div>
                          </div>
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
                          <span v-if="this.item.images">Upload Complete</span>
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
                            <button
                              class="btn-primary bg-blue-600 label px-2 justify-centter text-center bg-googleBgMidBlue text-white rounded-sm hover:bg-blue-800 hover:text-white font-semibold"
                              type="button"
                              @click="onUploadFile"
                            >Upload</button>
                          </div>
                        </div>
                      </div>
                      <!-- UPLOAD VIDEO END-->
                    </div>
                  </div>
                  <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                    <div>
                      <h3
                        class="text-lg leading-6 font-medium text-gray-900"
                      >{{item.title}}-Personal Information</h3>
                      <p
                        class="mt-1 max-w-2xl text-sm leading-5 text-gray-500"
                      >Use a permanent address where you can receive mail.</p>
                    </div>
                    <div class="mt-6 sm:mt-5">
                      <div
                        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="first_name"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >First name</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-xs rounded-md shadow-sm">
                            <input
                              id="first_name"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="last_name"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Last name</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-xs rounded-md shadow-sm">
                            <input
                              id="last_name"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="email"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Email address</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-lg rounded-md shadow-sm">
                            <input
                              id="email"
                              type="email"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div
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
                      </div>

                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="street_address"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >Street address</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-lg rounded-md shadow-sm">
                            <input
                              id="street_address"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="city"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >City</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-xs rounded-md shadow-sm">
                            <input
                              id="city"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="state"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >State / Province</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-xs rounded-md shadow-sm">
                            <input
                              id="state"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                      >
                        <label
                          for="zip"
                          class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                        >ZIP / Postal</label>
                        <div class="mt-1 sm:mt-0 sm:col-span-2">
                          <div class="max-w-xs rounded-md shadow-sm">
                            <input
                              id="zip"
                              class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>
                      </div>
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
              @click.prevent="updateItem"
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
export default {
  name: "Crud-Modal",

  data() {
    return { open: this.open };
  },
  methods: {},
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
    }
    // updateItem: {
    //   type: Function,
    //   required: true
    // }
  }
};
</script>

 <style>
</style>
