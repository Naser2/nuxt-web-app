<template>
  <div class="blog-list-wrapper bg-gray-100 text-gray-100">
    <div class>
      <blogs-list></blogs-list>
    </div>
  </div>
</template>

<script>

import BlogsList from "~/components/Blogs/BlogsList";


export default {
  name: "BLOGS-PAGE",
  // middleware: [ "auth"],
  components: {
    BlogsList
  },

};
</script>
