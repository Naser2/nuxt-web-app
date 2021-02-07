import { TimeStamp, db } from "~/fireBaseConfig";

import { firestoreAction } from "vuexfire";

// const projects = [
//   {
//     id: "/projects/chef-app",
//     title: "Chef App",
//     tech: "Javascript",
//     type: "Web app",
//     description:
//       "This was an app build for a chef Item One tdesc teaser  that cannot grow or shrink - this was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.",
//     mainImg: require("assets/images/chef-gallery.jpg"),
//     thumbnail:
//       "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6875F5&sat=-100&blend-mode=multiply",
//     // thumbnail: "require('assets/images/chef-gallery.jpg')",
//     alt: "Project Image",
//     smallCardInnerImg: require("assets/images/chef-small-card-inner-img.png"),
//     rating: "5",
//     votes: 17,
//     slideImages: [
//       require("assets/images/undraw_empty_cart_co35.svg"),
//       require("assets/images/beati_soup.jpeg"),
//       require("assets/images/chef-gallery.jpg"),
//       require("assets/images/bonnappetit.jpg")
//     ]
//   },

//   {
//     id: "/projects/ruby-app",
//     descriptionTeaser:
//       "Item 2 tdesc teaser  that cannot grow or shrink - this was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.",
//     title: "Ruby App ",
//     tech: "Ruby",
//     type: "web",
//     description:
//       "This was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam,voluptatum cupiditate veritatis in, accusamus quisquam.",
//     thumbnail: require("assets/images/chef-gallery.jpg"),
//     showImg: true,
//     smallCardInnerImg: require("assets/images/chef-small-card-inner-img.png"),
//     rating: "4",
//     votes: 23,
//     slideImages: [
//       require("assets/images/chef-small-card-inner-img.png"),
//       require("assets/images/chef-small-card-inner-img.png")
//     ]
//   },

//   {
//     id: "/projects/third-app/",
//     descriptionTeaser:
//       "Item 3  that cannot grow or shrink - this was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.",
//     title: "Third  App",
//     tech: "Ruby",
//     type: "web",
//     description:
//       "Description - Item that cannot grow or shrink - this was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.",
//     //  mainImg: "assets/images/background-home.svg",
//     thumbnail: require("assets/images/undraw_Hamburger_8ge6.svg"),
//     smallCardInnerImg: require("assets/images/undraw_Hamburger_8ge6.svg"),
//     rating: "4",
//     votes: 8,
//     slideImages: [
//       require("assets/images/undraw_Hamburger_8ge6.svg"),
//       require("assets/images/chef-small-card-inner-img.png")
//     ]
//   },
//   {
//     id: "/projects/4th-app/",
//     descriptionTeaser:
//       "Item  4 that cannot grow or shrink - this was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.",
//     title: "Fourth app ",
//     tech: "Node",
//     type: "web",
//     description:
//       "Description - Item that cannot grow or shrink - this was builtLorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in, accusamus quisquam.",
//     //  mainImg: "assets/images/background-home.svg",
//     thumbnail: require("assets/images/chef-search-page.png"),
//     smallCardInnerImg: require("assets/images/chef-small-card-inner-img.png"),
//     rating: "4",
//     votes: 43,
//     slideImages: [
//       require("assets/images/chef-small-card-inner-img.png"),
//       require("assets/images/chef-small-card-inner-img.png")
//     ]
//   }
// ];

export default {
  namespaced: true,

  state() {
    return {
      projectsItems: [],
      project: {},
      TimeStamp
    };
  },
  getters: {
    filtredItems: state => searchedTerm => {
      let { projectsItems } = state;
      console.log("Title frm Getters: ", searchedTerm, "STATE", state);

      if (!searchedTerm) {
        return projectsItems;
      }
      const filetered = projectsItems.filter(i => {
        return (
          i.title && i.title.toLowerCase().includes(searchedTerm.toLowerCase())
        );
      });

      return filetered;
    }
  },
  actions: {
    getProjects({ commit }) {
      db.collection("projects")
        .get()
        .then(querySnapshot => {
          const projects = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
          }));
          // debugger;
          commit("setProjects", projects);
          return projects;
          // check if when created older thant 2 hours set to old
        });
    },
    bindProjects: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("projects", db.collection("projects"));
    }),
    create({ rootState, commit }, project) {
      const userRef = db.collection("profiles").doc(rootState.auth.user.uid);
      project.user = userRef;
      project.status = "new";
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();
      var day = mm + "/" + dd + "/" + yyyy;
      var date = new Date(day);
      project.Timestamp = date;
      return db
        .collection("projects")
        .add(project)
        .then(docRef => {
          project.id = docRef.id;
          // commit("/auth/addprojectToUser", project, { root: true });
          return true;
        });
    },
    getById({ commit }, itemId) {
      console.log("project getById ++++++");
      return db
        .collection("projects")
        .doc(itemId)
        .get()
        .then(snapshot => {
          const project = snapshot.data();
          // debugger;
          commit("setProject", project);
          return project;
        });
    },
    updateProject({ commit }, project) {
      const projectToUpdate = project.project;
      debugger;
      return db
        .collection("projects")
        .doc(project.id)
        .update(projectToUpdate)
        .then(() => {
          debugger;
          commit("setProject", projectToUpdate);
          return true;
        });
    },
    deleteProject(itemId) {
      debugger;
      return db
        .collection("projects")
        .doc(itemId)
        .delete();
    }
  },
  mutations: {
    setProjects(state) {
      state.projectsItems = projects;
    },
    setProject(state) {
      state.project = project;
    }
  }
};
