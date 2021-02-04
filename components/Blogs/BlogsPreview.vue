<template>
  <div class="relative max-w-7xl mx-auto lg:mb-40" >
    <div class="text-center lg:my-20">
      <h2
        class="text-3xl title leading-9 tracking-tight font-extrabold text-gray-800 sm:text-4xl sm:leading-10"
      >
        Blog Section
      </h2>
      <p v-if="blogs.length === 0"
        class="mt-3 max-w-2xl mx-1/12 text-xl leading-7 text-gray-800 sm:mt-4 lg:mx-auto"
      >
        No blogs available in store. Check back soon.
      </p>
      <div class="aspect-w-3 aspect-h-2" v-if="blogs.length === 0">
                  <img class="object-cover shadow-lg rounded-lg" src="~/assets/images/not_found.jpg" alt="">
                </div>
  


      <p v-else
        class="mt-3 max-w-2xl mx-1/12 text-xl leading-7 text-gray-800 sm:mt-4 lg:mx-auto"
      >
        Some of the blogs available. I write as much I can.
      </p>
    </div>

    <div v-if="blogs.length > 0"
      class="mt-12 text-left grid gap-5 mx-auto max-w-lg md:max-w-5xl md:grid-cols-2 md:mx-10 lg:grid-cols-3 lg:max-w-none"
    >
      <div
        class="flex flex-col rounded-lg shadow-lg overflow-hidden"
        v-for="(blog, id) in blogs"
        :key="id"
      >
        <div class="flex-shrink-0" @click.prevent="getItemBeforeNext(blog.id)">
          <nuxt-link :to="`/blogs/${blog.id}`">
            <img
              v-if="blog.thumbnail"
              class="h-48 w-full object-cover"
              :src="blog.thumbnail"
              :alt="blog.alt"
            />
            <div class="relative">
              <h1
                v-if="!blog.images"
                class="absolute top-3/12 px-10 text-3xl leading-9 tracking-tight font-extrabold text-orange-600 sm:text-4xl sm:leading-10"
              >
                Photos Comming..
              </h1>
              <img
                v-if="!blog.images"
                class="h-48 w-full object-cover bg-yellow-400"
                src="../../assets/images/upload@2x.png"
                :alt="blog.alt"
              />
            </div>
          </nuxt-link>
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <p class="mb-2 text-sm font-medium text-indigo-600">
                  <a href="#" class="hover:underline">
                    {{blog.type.charAt(0).toUpperCase() + blog.type.slice(1, -1)}}
                  </a>
                </p>

          <div class="flex-1">

            <p
              class="text-sm leading-5 font-medium text-indigo-500"
              @click.prevent="getItemBeforeNext(blog.id)"
            >
              <nuxt-link
                :to="`/blogs/${blog.id}`"
                class="hover:underline bg-blue-100 mx-1 px-1 rounded"
                v-for="(tag, index) in blog.tags"
                :key="index"
                >{{ tag }}</nuxt-link
              >
            </p>
            <a href="#" class="block">
              <h3 class="lg:my-2 text-xl font-semibold text-gray-900">
                {{ blog.title }}
              </h3>
              <!-- <p
                v-if="blog.description"
                class="h-24 mt-3 text-base leading-6 text-gray-500 mt-3 overflow-hidden md:hidden lg:hidden"
              >
                {{ blog.description.split(" ").splice(0, 40).join(" ") }}...
              </p> -->

              <!-- ONLY SMALL  -->
              <div class="description-warapper-small-d block h-24 mt-3 text-base leading-6 text-gray-500 mt-3 overflow-hidden md:hidden lg:hidden">
                <p
                  v-html="blog.description.split(' ').splice(0, 16).join(' ')"
                  v-if="blog.description"
                  class="mt-3 text-base text-gray-500"
                >
                  ...
                </p>
                <nuxt-link
                  :to="`/blogs/${blog.id}`"
                  class="inline-flex justify-center items-center text-blue-500 justify-center border border-transparent leading-6 font-medium rounded-md bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Read more
                  <svg
                    class="-mr-1 ml-3 h-5 w-5 text-gray-400"
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
              <div class="description-warapper-small-md-up sr-only md:not-sr-only md:h-24 mt-3 text-base leading-6 text-gray-500 overflow-hidden lg:h-24">
                <p
                  v-html="blog.description.split(' ').splice(0, 20).join(' ')"
                  v-if="blog.description"
                  class="blog-pagaraph-color mt-3 text-base text-gray-500"
                >
                  ...
                </p>
                <nuxt-link
                  :to="`/blogs/${blog.id}`"
                  class="inline-flex justify-center items-center text-blue-500 justify-center border border-transparent leading-6 font-medium rounded-md bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                >
                  Read more
                  <svg
                    class="-mr-1 ml-3 h-5 w-5 text-blue-400"
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

              <!-- MEDIUM & UP -->

              <div
                v-if="!blog.description"
                class="description-missing sr-only md:not-sr-only description md:h-24 mt-3 text-base leading-6 text-gray-500 overflow-hidden lg:h-24"
              >
                sm to Md Screens No Text has been added yet DevTools extension
                for debugging Vue.js applications.
              </div>

              <div
                v-if="!blog.description"
                class="description-missing h-24 mt-3 text-base leading-6 text-gray-500 mt-3 overflow-hidden md:hidden lg:hidden"
              >
                NO LG screens No Text has been added yet DevTools extension for
                debugging Vue.js applications.
              </div>
            </a>
          </div>
          <div class="col-start-1 flex pt-4 lg:">
            <svg
              v-for="i in 5"
              :key="i"
              viewBox="0 0 24 24"
              :class="i <= blog.stars ? 'text-green-300' : 'text-gray-400'"
              class="h-4 w-4 lg:h-6 lg:w-6 fill-current"
            >
              <path
                d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
              />
            </svg>
          </div>
          <div class="mt-3 flex items-center">
            <div class="flex-shrink-0">
              <a href="#">
                <img
                  class="h-10 w-10 rounded-full"
                  src="../../assets/images/nas-liwli.jpg"
                  alt
                />
              </a>
            </div>
            <div class="ml-3">
              <p class="text-sm leading-5 font-medium text-gray-900">
                <a href="#" class="hover:underline">{{ blog.author_name }}</a>
              </p>
              <!-- {{
                  blog.readTime
                }} -->
                 <div class=" flex-row text-sm leading-5 text-gray-500" v-if="blog.updated">
                     <span class="text-orange-700">Updated:</span>
                <time datetime="2020-03-16"> {{realtime(blog.updated)}}</time>

                <span class="bg-gray-200 px-2 py-0 rounded"> 7 min read</span>
              </div>
              <div class="flex-row text-sm leading-5 text-gray-500" v-else>
                 <span class="text-orange-700">posted</span>
                <time datetime="2020-03-16" >{{realtime(blog.createdAt)}}</time>

                <span class="bg-gray-200 px-2 py-0 rounded"> 7 min read</span>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogsPreview",
  state: {
    id: 1,
    type: "blogs",
  },
  props: {
    blogs: {
      type: Array,
      required: true,
    },
    getItemBeforeNext: {
      type: Function,
      required: true,
    },
  },
   methods: {
    realtime(blogDate) {
    // let date =  new Date(blogDate.seconds*1000)
    // return date.toString().split('GMT')[0]
    let date =  new Date(blogDate.seconds*1000)
      return date.toString().substring(21, date.toString().indexOf('gmt'))
    // },
    // let date = blogDate;
    //   return blogDate.toString().substring(21, date.toString().indexOf('gmt'))
    },
   }
};
</script>

<style>
.description p {
  color: #6b7280 !important;
}
.description * {
  overflow: hidden !important;
  /* background: RED !important; */
}
.blog-pagaraph-color{
    color: #6b7280 !important;
}
</style>
