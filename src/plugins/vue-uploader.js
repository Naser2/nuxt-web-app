import Vue from "vue";
import {fb} from "../firebaseConfig/index";

Vue.prototype.$uploader = (file, type, cb) => {
  let res = "";
  console.log("FILE from PLUGIN:", type);
  const DTO = file;
  // let bkPath = JSON.parse(type)
  console.log("Type:", type);
  console.log("FILE: ", DTO);

  // debugger;

  let storageRef = fb.storage().ref(`${type}/` + DTO.name);
   console.log("`${type}/` + DTO.name:",`${type}/` + DTO.name);
  let uploadTask = storageRef.put(DTO);

  uploadTask.on(
    "state_changed",
    snapshot => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case fb.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;
        case fb.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
      }
    },
    error => {
      console.log("ERROR  STORING FILE:", error);
    },
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then(returnedUrl => {
        // let downloadURL = returnedUrl;
        console.log("From PLUGIN file available at", returnedUrl);
        res =  returnedUrl;
        cb(res)
        console.log("From PLUGIN RES",res);
        // return res;
      });
      // console.log("From PLUGIN DONWLOAD 1", downloadURL);
      // return downloadURL;
    }
  );
  // console.log("From PLUGIN DONWLOAD 2", res);
  // // return downloadURL;
  return res;
};
