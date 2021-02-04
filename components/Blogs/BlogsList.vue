<template>
  <div class="post-list-vue relative justify-center text-center py-4">
    <blogs-preview
      :blogs="blogs"
      :getItemBeforeNext="getItemBeforeNext"
    ></blogs-preview>
     <create-modal :controlModal="controlModal" :item="blog"></create-modal>
  </div>
</template>

<script>
import BlogsPreview from "./BlogsPreview";
import CreateModal from "~/components/Modals/CreateModal";
export default {
  name: "BlogsList",
  components: {
    BlogsPreview,
    CreateModal
  },
  methods: {
    getItemBeforeNext(id) {
      console.log("FROM BLOG LIST GET By ID", id);
      this.$store.dispatch("getById", id);
      // this.$store.getters.loadItem;
    },
     controlModal() {
      this.$store.commit("setCreate", false);
      this.$store.commit("setEdit", false);
      this.open = true;
      setTimeout(() => {
        if (this.open === true) {
          this.open = false;
        } else if (this.open === false) {
          this.open = true;
        }
      }, 1000);
    },
  },
  computed: {
    blogs() {
      return this.$store.getters.loadBlogs;
    }
  }
};
</script>

<style></style>
