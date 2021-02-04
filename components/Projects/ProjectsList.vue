<template slot="actions" slot-scope="props" v-if="this.projects">
  <div class="post-list-vue relative justify-center text-center">
    <projects-preview :projects="projects"></projects-preview>
  </div>
</template>

<script>
import ProjectsPreview from "./ProjectsPreview";

export default {
  name: "ProjectsList",
  components: {
    ProjectsPreview
  },
  props: {
    projects: {
      type: Array,
      required: true
    },
  //   // getItemBeforeNext: {
  //   //   type: Function,
  //   //   required: true
  //   // }
  },
  // data() {
  //   return {
  //     projects: this.loadedProjects ? { ...this.loadedProjects } : []
  //   };
  // },
  // computed: {
  //   loadedProjects() {
  //     return this.$store.getters.loadProjects;
  //   }
  // }
};
</script>

<style></style>
