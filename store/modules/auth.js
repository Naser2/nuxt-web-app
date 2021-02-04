import Cookie from "js-cookie";

export default {
  namespaced: true,
  state: {
    user: null,
  },

  actions: {
    getToken(vuexContext, authData) {
      const { registered, email, idToken, refToken, expiresIn } = authData;
      localStorage.setItem("registered", registered);
      localStorage.setItem("email", email);
      localStorage.setItem("user_id", idToken);
      localStorage.setItem("user_refresh_token", refToken);
      localStorage.setItem("token_expiration", expiresIn);
      //Set token in state
      vuexContext.commit("setToken", expiresIn);

      Cookie.set("jwt", idToken);
      Cookie.set("expiration", expiresIn);
    },

    // setLogoutoutTimer(vuexContext, duration) {
    //   setTimeout(() => {
    //     vuexContext.commit("clearToken");
    //   }, duration);
    // },
    verifyAuth(vuexContext, req) {
      let jwtCookie;
      let token;

      console.log("Go Here in Verify");

      if (req) {
        if (!req.headers.cookie) {
          console.log(" No Request Headers--");
          return;
        }
        console.log(" Is there A Request ? --");
        jwtCookie = req.headers.cookie
          .split(";")
          .find((c) => c.trim().startsWith("jwt="));

        console.log(" --- Splitted jwtCookie if there is --", jwtCookie);
        if (!jwtCookie) {
          console.log(" ---No jwtCookie  --");
          return;
        }
        console.log(" ---If There is jwtCookie Split --");

        token = jwtCookie.split("=")[1];
        const expirationDate = req.headers.cookie
          .split(";")
          .find((c) => c.trim().startsWith("expiration="))
          .split("=")[1];
        vuexContext.commit("setToken", { token, expirationDate });
        console.log(
          " ---If There is Token & Expiration --",
          token,
          expirationDate
        );
      } else {
        console.log("NO SERVER - CHECKING CLIENT");
        console.log("LOCAL STORAGE : ", localStorage);
        const expirationDate = localStorage.getItem("token_expiration");
        const token = localStorage.getItem("user_id");
        console.log("NO SERVER - CHECKING CLIENT");
        if (new Date().getTime() > expirationDate || !token) {
          console.log(
            " iS There TOKEN on Client",
            new Date().getTime() > expirationDate
          );
          return;
        }
      }
      // const user_id = localStorage.getItem(user_id);
      // const registered = localStorage.getItem("registered");
      // const email = localStorage.getItem("email");
      // const refToken = localStorage.getItem("user_refresh_token");
      vuexContext.commit(
        "setToken",
        token
        // registered,
        // email,
        // refToken,
        // expirationDate
      );
    },
  },
  mutations: {
    setToken(state, authData) {
      this.state.user = authData;
    },
  },
  // GETTERS
  getters: {
    isAuthenticated(state) {
      console.log("isAuthenticated in Getters");
      return 'x';
    },
  },
};
