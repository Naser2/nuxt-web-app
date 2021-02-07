<template slot="actions" slot-scope="props">

      <profile-component :projects="loadProjects" :blogs="loadBlogs"></profile-component>

</template>

<script>
import {mapGetters} from 'vuex';

import ProfileComponent from "~/components/Profile/ProfileComponent";

export default {
  name: "ProfilePage",
  // middleware: ["check-auth", "auth"],
  components: {
   ProfileComponent
  },
  // props: {
  //   projects: {
  //     type: Array,
  //     required: true
  //   },
  //   getItemBeforeNext: {
  //     type: Function,
  //     required: true
  //   }
  // },
  computed: {
    ...mapGetters(['loadProfile','loadProjects', 'loadBlogs'])
  }
};
</script>

<style>

</style>
