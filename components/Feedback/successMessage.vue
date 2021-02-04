<template>
  <transition appear>
    <div class="feedback-message flex sm:px-2" v-if="this.$store.getters.getSuccess">
      <div class="success-message flex bg-green-300 px-3 py-1 rounded-lg" v-show="message==='Success'">
        <span
          class="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
        >
          <svg
            class="h-6 w-6 text-green-600"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span
          class="mx-2 text-lg inline-flex leading-4 tracking-wide font-semibold justify-between items-center leading-5 text-green-600"
        >
          <h1 class>{{message}}</h1>
        </span>
      </div>
      <div class="failure-message flex bg-red-200 px-3 py-1 rounded-lg" v-show="message==='Error.. try again'">
        <span
          class="mx-auto inline-flex items-center justify-center h-12 w-12 rounded-full "
        >
          <svg
            version="1.1"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke-linecap="round" stroke-width="2" fill="none" stroke-linejoin="round">
              <polyline points="23,4 23,10 17,10" />
              <path
                d="M20.49 15l8.16053e-09-2.30983e-08c-1.65578 4.68667-6.79735 7.1437-11.484 5.48792 -4.68667-1.65578-7.1437-6.79735-5.48792-11.484 1.65578-4.68667 6.79735-7.1437 11.484-5.48792 1.26714.447675 2.41794 1.17344 3.36792 2.12402l4.63 4.36"
              />
            </g>
          </svg>
        </span>
        <span
          class="mx-2 text-lg inline-flex leading-4 tracking-wide font-semibold justify-between items-center leading-5 text-red-400"
        >
          <h1 class>{{message}}</h1>
        </span>
      </div>
    </div>
  </transition>
</template>

 <script>
export default {
  name: "feedback-message",
  watch: {
    message() {
      // console.log("Calling HIDE");
      // Close after 5 seconds
      setTimeout(this.hideAlert, 8000);
    }
  },
  methods: {
    hideAlert() {
      // console.log("Fireing HID");
      return this.$store.commit("setSuccess");
    }
  },
  mounted() {
    // console.log("MOUNTED    ");
  },
  computed: {
    showSuccessMessage() {
      return this.$store.getters.getSuccess;
    },
    options: () => ({
      position: "bottom-right",
      backgroundColor: "#2E495E",
      color: "#00C48D"
    }),
    indicatorStyle() {
      const [d1, d2] = this.options.position.split("-");
      return {
        [d1]: "20px",
        [d2]: "20px",
        "background-color": this.options.backgroundColor,
        color: this.options.color
      };
    }
  },
  props: {
    message: {
      type: String,
      required: false
    }
  }
};
</script>
<style scoped>
.nuxt__build_indicator {
  box-sizing: border-box;
  position: fixed;
  font-family: monospace;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.2);
  width: 88px;
  z-index: 2147483647;
  font-size: 16px;
  line-height: 1.2rem;
}
.v-enter-active,
.v-leave-active {
  transition-delay: 0.2s;
  transition-property: all;
  transition-duration: 0.3s;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
svg {
  display: inline-block;
  vertical-align: baseline;
  width: 1.1em;
  position: relative;
  top: 1px;
}

.minimize-enter-active,
.minimize-leave-active {
  transition: all 1.5s ease;
}

.minimize-enter,
.minimize-leave-active {
  transform: translateY(2rem);
  opacity: 0.75;
}
</style>
