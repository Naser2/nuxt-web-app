import Vue from "vue";
import {fb} from "../firebaseConfig/index";

Vue.prototype.$removePhoto = (img, index, deletImageCallBack) => {
  console.log("FILE from PLUGIN:", img, index);
  let image = fb.storage().refFromURL(img);

  image
    .delete()
    .then(() => {
      console.log("Image Successfully Deleted:");
      deletImageCallBack(index);
    })
    .catch(e => {
      console.log("Error in deleting:", e);
      deletImageCallBack(e)
    });
};
