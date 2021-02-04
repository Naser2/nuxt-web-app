<template>
  <div class="loging-page-wrapper"><Login /></div>
</template>

<script>
import Login from "~/components/Login";
export default {
  name: "LoginPage",
  // middleware: "check-auth",
  components: {
    Login
  }
};
</script>

<style></style>
