<template >
<div class="lg:h-screen sm:h-full flex overflow-hidden bg-white text-2xl">
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->

  <div class=" sm:grid sm:grid-cols-3  sm:items-start ">
    <div class="hidden lg:flex col-span-1  shadow-sm  h-screen bg-gray-100"></div>


    <div class=" h-full flex flex-col min-w-0 flex-1 overflow-hidden">
    <div class="flex-1 relative z-0 flex overflow-hidden">
      <main class="flex-1 relative z-0  focus:outline-none xl:order-last" tabindex="0">
        <!-- Breadcrumb -->

        <article>
          <!-- Profile header -->
          <div>
            <div>
              <img class="h-32 w-full object-cover lg:h-48" src="~/assets/images/code_background.jpeg" alt="">
            </div>
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div class="flex">
                  <img class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"    src="~/assets/images/nas_website_profile.jpeg" alt="">
                </div>
                <div class="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div class="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                    <h1 class="text-2xl font-bold text-gray-900 truncate">
                      Ricardo Cooper
                    </h1>
                  </div>
                  <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                      <!-- Heroicon name: solid/mail -->
                      <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>Message</span>
                    </button>
                    <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
                      <!-- Heroicon name: solid/phone -->
                      <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>Call</span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                <h1 class="text-2xl font-bold text-gray-900 truncate">
                  Sanou Nasser
                </h1>
              </div>
            </div>
          </div>

          <!-- Tabs -->
          <div class="mt-6 sm:mt-2 2xl:mt-5">
            <div class="border-b border-gray-200">
              <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                  <!-- Current: "border-pink-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                  <a href="#" class="border-pink-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                    Profile
                  </a>
                  <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Calendar
                  </a>
                  <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                    Recognition
                  </a>
                </nav>
              </div>
            </div>
          </div>

          <!-- Description list -->
          <div class="mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Linkein
                </dt>
                <dd class="mt-1 text-sm text-blue-800">
                   <a class="linkedin_cta" :href="'https://www.linkedin.com/in/nasser-sanou/'">linkedin/nassersanou</a>
                </dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Phone
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  (646)433-3555
                </dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Email
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                 nassersanou23@gmail.com
                </dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Title
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                 Full Stack Developer
                </dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                Github
                </dt>

                 <dd class="mt-1 text-sm text-blue-800">
                   <a class="linkedin_cta" :href="'https://github.com/Naser2/'">https://github.com/Naser2/</a>
                </dd>

              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Location
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  New York
                </dd>
              </div>

              <!-- <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                 NY
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  Oasis, 4th floor
                </dd>
              </div>

              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Salary
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  $145,000
                </dd>
              </div> -->

              <!-- <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  Birthday
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  June 8, 1990
                </dd>
              </div> -->

              <div class="sm:col-span-2">
                <dt class="text-xl font-medium text-gray-500">
                  About
                </dt>
                <dd class="mt-1 max-w-prose text-sm text-gray-900">
                  <p>
               Enthusiastic Full Stack Developer with a passion for art.  Solid foundation in JavaScript, React, React-Native, NodeJS, Ruby on Rails, Sass, Flutter. With a fine arts and music background.
                  </p>
                  <p class="mt-5">
                    Creative, and enjoys the creation process. Gained extensive and value-added skills in the field of software development.  Brings strong skills in team-building and project management. Built a range of projects from SPAs to web apps. Comfortable with Git, Scrum, and Agile methodologies.
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <!-- Team member list -->
          <div class="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8" v-if="loadProjects">
            <h2 class="text-sm font-medium text-gray-500">Projects</h2>
            <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2" v-for="(project, index) in loadProjects.slice(0,3)" :key="index" >
              <div  loadProjectsclass="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" :src="project.thumbnail" alt="">
                </div>
                <div class="flex-1 min-w-0">
                  <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      {{project.title}}
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      {{project.tagline}}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8" v-if="loadBlogs">
            <h2 class="text-sm font-medium text-gray-500">Projects</h2>
            <div class="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2" v-for="(blog, index) in loadBlogs.slice(0,3)" :key="index" >
              <div class="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" :src="blog.thumbnail" alt="">
                </div>
                <div class="flex-1 min-w-0">
                  <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      {{blog.title}}
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      {{blog.tagline}}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

    </div>
  </div>
    <div class="hidden lg:flex  col-span-1 h-screen bg-gray-100"></div>

  </div>
  <!-- Static sidebar for desktop -->


</div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "ProfileComponent",
  // middleware: ["check-auth", "auth"],

  computed: {
    ...mapGetters(['loadProjects', 'loadBlogs'])
  }
};
</script>

<style>

</style>
