import Vue from "vue";
import { fb } from "../firebaseConfig/index";

Vue.prototype.$searchItemArt = (object, key) => {
  var value;
  Object.keys(object).some(function(k) {
    if (k === key) {
      // console.log("ARRAY Key 1 ", object[k]);
      value = object[k];
      return true;
    }
    if (object[k] && typeof object[k] === "object") {
      let obj = object[k];
      for (let prop in obj) {
        if (obj.name === key) {
          // console.log("Name Matched ", obj[prop]);
          this.item.leftSideArt = obj.val;

        //  console.log("ARRAY Url IN THE FUNC  ", obj.val);
          let value = obj.val;
          return value;
        }
      }
      // value = findVal(object[k], key);
      return value !== undefined;
    }
  });
  return value;
};
