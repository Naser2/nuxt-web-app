export default function(context) {
  // if (!context.store.getters["auth/isAuthenticated"]) {
  //   console.log("Auth.JS Middelware says 'NOT AUTHENTICATED'");
  //   context.redirect("/login");
  // }
  // console.log(
  //   "AUTH isAuthenticated =",
  //   !!context.store.state.auth.getters.isAuthenticated ///dispatch('auth/verifyAuth')
  // );
  console.log(
    "AUTH MIDDELWARE Is AUTHENTICATED ="
    // context.store.getters["auth/isAuthenticated"]
  );
  // console.log(context.store.getters["auth/isAuthenticated"]);
  // console.log("AUTH isAuthenticated =", context.store.commit('auth/'));
}
