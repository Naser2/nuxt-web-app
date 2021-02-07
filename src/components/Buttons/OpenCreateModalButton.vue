<template>
  <div class="bg-gray-900 justify-center text-center">
    <div class="relative">
     <div   class="right-1 loating-action-btns sm:items-center sm:text-sm md:text-base
    sm:flex sm:top-4 z-50 sm:right-8 loating-action-btns sm:items-center sm:text-sm md:text-base">
      <button  @click="commitCreateModal"
        type="button" class="inline-flex items-center p-2  border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        hover:text-white transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110
        ">
        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  </div>
    <!-- <create-modal :controlModal="controlModal"></create-modal> -->
  </div>

</template>

<script>
// import CreateModal from "~/components/Modals/CreateModal";

export default {
  name:'OpenCreateModalButton',
  middleware: "auth",
  components: {

    // CreateModal
  },
  data() {
    return {
      open:true,
      show: false,
    };
  },

  methods: {
    controlModal() {
      this.$store.commit("setCreate", false);
      this.open = true;
      setTimeout(() => {
        if (this.open === true) {
          this.open = false;
        } else if (this.open === false) {
          this.open = true;
        }
      }, 1000);
    },
    commitCreateModal() {
        this.$store.commit("setCreate", true);
        this.open = true;
    },
  },
};
</script>

