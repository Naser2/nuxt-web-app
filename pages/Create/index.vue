<template>
  <div class="create-wrapper">
    <CreateForm />
  </div>
</template>

<script>
import CreateForm from "~/components/Create/index";
export default {
  name: "createPage",
  // middleware: ["check-auth", "auth"],
  components: {
    CreateForm
  },

  data() {
    return {
      hello: "Create Page"
    };
  }
};
</script>

<style></style>
