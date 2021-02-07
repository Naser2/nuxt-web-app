<template>
    <div  class="top-bar flexjustify-center text-center">
     <div>
      <div   v-if="actionDropDown" class="origin-top-right absolute right-0 -mt-4 w-71 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50" >
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div  @keydown.escape="actionDropDown = false"
              class="relative inline-block text-left mx-10">
              <success-modal :title="title" v-on:closeModal="closeModal()"></success-modal>
              <div
                v-if="actionDropDown"
                x-transition:enter="transition ease-out duration-100"
                x-transition:enter-start="transform opacity-0 scale-95"
                x-transition:enter-end="transform opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75"
                x-transition:leave-start="transform opacity-100 scale-100"
                x-transition:leave-end="transform opacity-0 scale-95"
                class="origin-top-right z-50  absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"

              >
                <div class="rounded-md bg-white shadow-xs">
                  <div class="py-1">
                    <a
                      @click="actionDropDown =false"
                      href="#"
                      class="inline-block justify-center text-center h-2 w-2 rounded-full overflow-hidden bg-red-400 flex-shrink-0 px-2 py-2 text-gray-300 bg-red-300hover:text-white hover:bg-red-600 absolute top-2 right-2"
                    >
                      <h6 class="hover:text-gray-800 h-1">x</h6>
                    </a>
                    <div class="actions mt-6">
                      <div class="px-4 py-3 hover:bg-gray-100" @click="performChange('save')">
                        <p class="text-sm leading-5 inline-flex">
                          <span
                            class="flex text-sm leading-5 text-gray-700 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
                          >
                            <img
                              :src="saved ?  require('/assets/images/icons/saved.png') : require('/assets/images/icons/save.png')"
                              class="justify-center bg-center cursor-pointer h-6 w-6"
                            />
                            <div v-if="saved" class="edit-text px-2 text-green-500">Saved</div>
                            <div v-else class="edit-text px-2">Save</div>
                          </span>
                        </p>
                        <p
                          v-if="saved"
                          class="text-sm leading-5 font-medium text-green-700"
                        >Added to saved items</p>
                        <p
                          v-else
                          class="text-sm leading-5 font-medium text-gray-900"
                        >Add to saved items</p>
                        <div class="border-t border-gray-400"></div>
                      </div>
                      <span
                        @click="performChange('edit')"
                        class="flex px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
                      >
                        <img
                          src="~/assets/images/icons/edit_pen_w.png"
                          class="justify-center bg-center cursor-pointer h-4 w-4"
                        />
                        <div class="edit-text px-2">Edit</div>
                      </span>
                      <a
                        href="#"
                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      >
                        <svg
                          class="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                          />
                        </svg>
                        Share
                      </a>
                      <a
                        @click="performChange('addedToFavorites')"
                        class="group flex items-center px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      >
                        <svg
                          :class="['mr-3 h-5 w-5 ', addedToFavorites ? 'text-red-500' : 'text-red-300']"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div
                          v-if="addedToFavorites"
                          class="text-state text-green-500"
                        >Added to favorites</div>
                        <div v-else class="text-state">Add to favorites</div>
                      </a>
                    </div>
                    <div class="border-t border-gray-100"></div>
                    <div class="py-1">
                      <a
                        @click="Warn"
                        class="flex px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
                      >
                        <img
                          src="~/assets/images/icons/trash_w.png"
                          class="justify-center bg-center cursor-pointer h-4 w-4"
                        />
                        <div class="edit-text px-2">Delete</div>
                      </a>
                      <a
                        href="!#"
                        class="flex px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
                      >
                        <img
                          src="~/assets/images/icons/edit_audience.png"
                          class="justify-center bg-center cursor-pointer h-4 w-4"
                        />
                        <div class="edit-text px-2">Edit audience</div>
                      </a>
                      <a
                        @click="performChange('hideFromTimeline')"
                        class="flex px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 cursor-pointer"
                      >
                        <img
                          src="~/assets/images/icons/hide_from_timeline.png"
                          class="justify-center bg-center cursor-pointer h-4 w-4"
                        />
                        <div v-if="!hideFromTimeline" class="ml-3 text-state">Hidden from timeline</div>
                        <div v-else class="ml-3 text-state text-orange-400">Hidden from timeline</div>
                      </a>
                      <div class="border-t border-gray-400"></div>
                      <nuxt-link
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        :to="`/${itemType}`"
                      >Blogs</nuxt-link>

                      <a
                        href="!#"
                        class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      >Settings</a>
                      <form method="POST" action="#">
                        <button
                          type="submit"
                          class="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                        >Sign out</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>

    </div>

    <div class="relative"> <div  v-if="!actionDropDown && this.open===false"  class=" flex absolute top-60  right-1 loating-action-btns sm:items-center sm:text-sm md:text-base
    sm:flex absolute sm:top-4 z-50 sm:right-8 loating-action-btns sm:items-center sm:text-sm md:text-base">
          <button  @click="performChange('create')"
            type="button" class="inline-flex items-center p-2  border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
          </svg>
        </button>

        <div class="pl-2 pr-2 self-stretch">
            <div class="h-full border-l border-gray-200"></div>
        </div>

        <button class="ml-0">
          <div>
              <button
                v-show="!actionDropDown"
                @click.prevent="actionDropDown = !actionDropDown"
                class="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              >
                <span
                  class="inline-block h-9 w-9 rounded-full overflow-hidden bg-gray-300 flex-shrink-0 px-2 py-2 text-gray-300 hover:text-white hover:bg-green-400 transition duration-500 ease-in-out bg-blue-500 transform hover:-translate-y-1 hover:scale-110"
                >
                  <img class="hover:text-white" src="~/assets/images/icons/3_dots.png" />
                </span>
              </button>
            </div>
        </button>
        <textarea readonly="" class="sr-only whitespace-pre-wrap" aria-hidden="" x-ref="htmlClipboard" tabindex="-1">&lt;
    </textarea>
    </div>
      </div>
    </div>

</template>

<script>

export default {
  name: "ActionDropdown",

 props: {
    title: {
      type: String,
      required: true
    },
    itemType: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    },
    actionDropDown: {
      type: Boolean,
      required: true
    },
    controlModal: {
      type: Function,
      required: true
    },
    performChange: {
      type: Function,
      required: true
    },
    addedToFavorites: {
      type: Boolean,
      required: true
    },
    addedToFavorites: {
      type: Boolean,
      required: true
    },
    Warn: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>

</style>

