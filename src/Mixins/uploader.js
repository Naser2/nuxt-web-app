// export default {
//   computed: {
//     uploader: function uploder(file, type) {
//       console.log("FILE from PLUGIN:", type);
//       const DTO = file;
//       console.log("Type:", type);
//       console.log("FILE: ", DTO);
//       // if (this.selectedFile === null) {
//       //   this.triedToUploadNull = true;
//       //   return;
//       // } else {
//       //   // debugger;
//       //   console.log("blog");
//       //   let storageRef = firebase.storage().ref(`${type}/` + DTO.name);
//       //   let uploadTask = storageRef.put(DTO);

//       //   uploadTask.on(
//       //     "state_changed",
//       //     snapshot => {
//       //       var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       //       console.log("Upload is " + progress + "% done");
//       //       switch (snapshot.state) {
//       //         case firebase.storage.TaskState.PAUSED: // or 'paused'
//       //           console.log("Upload is paused");
//       //           break;
//       //         case firebase.storage.TaskState.RUNNING: // or 'running'
//       //           console.log("Upload is running");
//       //           break;
//       //       }
//       //     },
//       //     error => {
//       //       console.log(error);
//       //     },
//       //     () => {
//       //       uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
//       //         console.log("From PLUGIN file available at", downloadURL);
//       //         return downloadURL;
//       //       });
//       //     }
//       //   );
//       // }

//       // return formattedDate;
//     }
//   }
// };
