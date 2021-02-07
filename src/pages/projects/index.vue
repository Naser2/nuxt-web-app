<template slot="actions" slot-scope="props" v-if="this.projects">
  <div class="">
    <div class="pt-10 lg:pt-16 px-0 md:px-8 sm:px-4 lg:px-16 pb-20">
      <propjects-list :projects="loadProjects"></propjects-list>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import PropjectsList from "~/components/Projects/ProjectsList";

export default {
  name: "ProjectsPage",
  // middleware: ["check-auth", "auth"],
  components: {
    PropjectsList
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
    ...mapGetters(['loadProjects'])
    // projects() {
    //   return this.$store.getters.loadProjects;
    // }
  }
};
</script>

<style>
/* .nuxt-link-active {
  background: rgb(138, 152, 233);
  padding: 4px;
  color: aliceblue;
} */
</style>
