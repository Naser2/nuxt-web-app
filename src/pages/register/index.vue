<template>
  <div class="create-wrapper">
    <Register />
  </div>
</template>

<script>
import Register from "~/components/Register";
export default {
  name: "RegisterPage",
  middleware: "check-auth",
  components: {
   Register
  },
};
</script>

<style></style>
