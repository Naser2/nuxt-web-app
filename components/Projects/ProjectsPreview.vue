<template slot="actions" slot-scope="props" v-if="this.projects">

  <div class="relative max-w-7xl mx-auto lg:mb-40 bg-white" >
    <div class="text-center lg:my-20">


      <div class="space-y-8 space-x-0">
        <h2
          class="text-5xl font-extrabold text-black tracking-tight sm:text-4xl"
        >
          Projects
        </h2>

           <p v-if="projects.length === 0"
        class="mt-3 max-w-2xl mx-1/12 text-xl leading-7 text-gray-800 sm:mt-4 lg:mx-auto"
      >
        No projects fetched from server in store. Check back soon.
      </p>
         <div class="aspect-w-3 aspect-h-2" v-if="projects.length === 0">
                  <img class="object-cover shadow-lg rounded-lg" src="~/assets/images/not_found.jpg" alt="">
                </div>


      <p v-else
        class="mt-3 max-w-2xl mx-1/12 text-xl leading-7 text-gray-800 sm:mt-4 lg:mx-auto"
      >
           Take a look a some of projects I recently completed
      </p>
        <ul
          class="space-y-12 space-x-4  lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0"
        >
          <li v-for="(project, id) in projects" :key="id">
            <div
              class="space-y-4 space-x-2 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-4"
            >
              <div class="aspect-w-4 aspect-h-2 lg:w-64">

                <img v-if="project.thumbnail"
                  class="object-cover project_photo shadow-lg rounded-lg w-full h-full lg:w-64 lg:h-64"
                  :src="project.thumbnail"/>

                <!-- <img v-else
                  class="object-cover project_photo shadow-lg rounded-lg w-full h-full lg:w-64 lg:h-64"
                  :src="project.images[0]"
                /> -->
              </div>
              <div class="sm:col-span-2">
                <div class="relative space-y-2 md:space-x-20 ">
                  <div
                    class="text-lg flex-row leading-6 font-medium text-black space-y-1 space-x-10 truncate"
                  >
                    <!-- <h3>{{ project.title }}</h3> -->
                    <div class="space-x-2 text-left inline-flex lg:mx-6 lg:hidden">
                      <ul
                        class="text-left "
                        v-for="(tech, index) in project.tech"
                        :key="index"
                      >
                        <li class="text-left sm:px-1 ">
                          <span
                            class=" inline-flex px-1 py-.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
                          >
                            {{ tech }}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="relative text-left text-lg w-30">
                     <h3 class="project_title text-lg">{{ project.title }}</h3>
                      <div class="sr-only lg:not-sr-only inline-flex">
                      <ul
                        class="text-left "
                        v-for="(tech, index) in project.tech"
                        :key="index"
                      >
                        <li class="text-left sm:px-1 ">
                          <span
                            class=" inline-flex px-1 py-.5 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
                          >
                            {{ tech }}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p v-if="project.description"
                      class="text-gray-500 "
                      v-html="project.description.slice(0, 120)"
                    ></p>
                    <nuxt-link
                      @click.prevent
                      :to="'/projects/' + project.id"
                      class="inline-flex items-center justify-center px-5 py-3 -mt-10 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-transparent hover:text-blue-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Read more
                      <svg
                        class="-mr-1 ml-3 h-5 w-5 text-blue-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "ProjectsPreview",
  props: {
    projects: {
      type: Array,
      required: true
    },
    getItemBeforeNext: {
      type: Function,
      required: true
    }
  }
};
</script>

<style>
.project_title {
  font-weight: 800;
  font-size: 30px;
  color: #212931;
  letter-spacing: 0.1px;
}
</style>
