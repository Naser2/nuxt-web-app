// import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from "vuexfire";
import Cookie from "js-cookie";
// import auth from "./modules/auth";
// import blogs from "./modules/blogs";
// import projects from "./modules/projects";
import axios from "axios";
import {  db } from "../firebaseConfig/index";
import projects from "./modules/projects";

// import { TimeStamp, db } from "~/fireBaseConfig";

// Vue.config.devtools = true;

const createStore = () => {
  return new Vuex.Store({
    // modules: {
    //   auth,
    //   blogsModule: blogs,
    //   projectssModule: projects
    // },
    // state: {
    //   count: 7,
    //   AList: []
    // },
    // MUTATIONS
    // mutations: {
    //   ...vuexfireMutations
    // },
    state: {
      showSuccessModal: false,
      showWarnModal: false,
      showFailureModal: false,
      idToredirect: null,
      blogs: [],
      projects: [],
      videos: [],
      item: {},
      creating: false,
      editing: false
    },
    mutations: {
      setItem(state, item) {
        console.log("FOUND ITEM to Set in store -->", item);
        state.item = item[0];
      },
      setIdToredirect(state, id) {
        // console.log("FOUND ITEM to Set in store -->", item);
       state.idToredirect = id
      },
      updateItemLocally(state, item) {
        //check item Id and search in merged Items
        console.log("SET ITEM to Set in store -->", item);
        state.item = item;
      },
      resetProjects(state, id) {
          console.log(" ITEM to remove-->", id, "Number of Projects: ", state.projects.length);
        //check item Id and search in merged Items
            debugger;
       let  projectsCurrentState = []
       projectsCurrentState =  state.projects.filter(project => project.id !== id)
        console.log(" ITEM to remove-->", id, "Number of Projects: ", projectsCurrentState.length);
        state.projects = projectsCurrentState

      },
      resetBlogs(state, id) {

            debugger;
       let  blogsCurrentState = []
       blogsCurrentState =  state.blogs.filter(blog=> blog.id !== id)
        console.log(" ITEM to remove-->", id, "Number of Blogs: ", blogsCurrentState.length);
        state.blogs = blogsCurrentState

      },
      setProjects(state, projects) {
        // debugger;
        console.log("--SET PROJECTS on Get", projects);
        state.projects = projects
      },
      // setProject(state, project) {
      //   console.log("--SET A SINGLE PROJECTS +++++++");
      //       debugger;
      //   state.projects.push(project)
      //       debugger;
      // },
      setBlogs(state, posts) {
        // console.log("SATE:", state, "--SET BLOGS:", posts);
        state.blogs = posts;
      },
      addPost(state, post) {
        state.blogs.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.blogs.findIndex(
          post => post.id === editedPost.id
        );
        state.blogs[postIndex] = editedPost;
      },

      setCreate(state, payload) {
        state.creating = payload;
        console.log(" set Create", state.creating);
      },
      setEdit(state, payload) {
        state.editing = payload;
        console.log(" set EDIT", state.editing);
      },
      //update Each collection in state with new
      updateBlogs(state, newItem) {
        console.log("SATE:", state, "--Add the New BLOG:", newItem);
        state.blogs.push(newItem);
      },
      updateProjects(state, newItem) {
        // debugger
        console.log("SATE PROJECTS:", state.projects, "--Add the New BLOG:", newItem);
        debugger
         state.projects.push(newItem);

      },
      //Modal Mutation
      toggleCreateModal(state) {
        state.creating = !state.creating;
      },
      toggleSuccessModal(state) {
        state.showSuccessModal = !state.showSuccessModal;
      },
     toggleEditModal(state) {
        state.editing = !state.editing;
      },
      toggleWarnModal(state) {
        state.showWarnModal = !state.showWarnModal;
      },
      toggleFailureModal(state) {
        state.showFailureModal = !state.showFailureModal;
      }
    },

    actions: {
      nuxtServerInit(vuexContext, context) {
        // console.log("NUXT SERV BLOGS");
        return (
          db
            .collection("blogs")
            .get()
            .then(querySnapshot => {
              const blogs = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
              }));
              // vuexContext.commit("toggleSuccessModal")
              vuexContext.commit("setBlogs", blogs);
            })
            .catch(err => {
              console.log("Error getting documents", err);
            }) &&
          db
            .collection("projects")
            .get()
            .then(querySnapshot => {
              const projects = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
              }));
            // console.log('projects', projects)
              vuexContext.commit("setProjects", projects);
            })
            .catch(err => {
              console.log("Error getting projects documents", err);
            })
        );
      },

      createItem({ commit }, data) {
        console.log("Item ", data);
        const nameCap = data.type.charAt(0).toUpperCase() + data.type.slice(1);
        const targetCollection = "update" + nameCap;

        console.log("Commit Colllection ", targetCollection);
        // debugger;
        db.collection(data.type)
          .add(data)
          .then(docRef => {
            console.log("Call Success Modal Doc Ref is---", docRef.id);
            let newItem = { ...data, id: docRef.id };
              debugger;
          //  commit("setIdToredirect", docRef.id);
              // debugger;
            commit(targetCollection, newItem);
            commit( "toggleSuccessModal");
            commit( "toggleCreateModal");
            // this.controlModal(),
            // setTimeout(()=> this.$router.push(`/${data.type}/${docRef.id}`), 2000)
            this.$router.push(`/${data.type}/${docRef.id}`)
          })
          .catch(e => console.log(e));
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      getById({ commit }, info) {
        this.state.blogs;
        let {id, type}=  info;
        let modulePath
        if(type ==='blogs'){  modulePath= this.state.blogs }
        else if(type ==='projects'){  modulePath= this.state.projects}
        else {  modulePath= this.state.videos }
        // debugger;
        let foundItem = modulePath.filter(item => {
            // debugger;
          return item.id === id;
        });
        commit("setItem", foundItem);
        // console.log("STORE STATE DOT ITEM", info, "FOUND ITEM-->", foundItem);
      },

      // getProjectById({ commit }, info) {
      //   console.log("project getProjectById ++++++");
      //   return db
      //     .collection("projects")
      //     .doc(info)
      //     .get()
      //     .then(snapshot => {
      //       const project = snapshot.data();
      //       // debugger;
      //       commit("setProject", project);
      //       debugger
      //       return project;
      //     });
      // },
      updateItem({ commit }, data) {
        const itemToUpdate = data;

        let collection = data.type;
        // console.log("Item", data, "Collection", collection);
        // debugger;
        return db
          .collection(collection)
          .doc(data.id)
          .update(data)
          .then(() => {
            console.log("Success Updating From Store ");
            commit("updateItemLocally", itemToUpdate);
            commit("toggleEditModal");
            commit( "toggleSuccessModal");

            // return true;
          });
      },
      deleteItem({ commit }, data) {
        console.log("IDtATT", data);
        let { id, type } = data;
          const resetModule =(moduleName, id )=>{ // programatically reset states localy
            console.log("moduleName, id", moduleName, id)
              if(type ==='blogs'){
               return  commit("resetBlogs", id)
           }
             else if (type ==="projects"){
               return  commit("resetProjects", id)
           }
            else if(type === "videos"){
             return  commit("resetVideos", id)
           }
            else {
             return new Error("No Type to Delete was passed in")
           }

        }
          console.log("ID ", id, "Type:", type);
           debugger;
          //  if(type ==='blogs'){
          //   resetModule(`"resetBlogs"`, id)
          //  }

          //  else if(type === "videos"){
          //    resetModule(`"videos"`, id)
          //  }


        return db
          .collection(type)
          .doc(id)
          .delete()
          .then(() => {
            commit("toggleSuccessModal");
            resetModule(type, id)
               debugger;
            // commit("resetProject", id);
            //remove from current state
            //redirect to blogs
            this.$router.replace(`/${type}`);
          })
          .catch(commit("toggleFailureModal"));
      }
    },
    getters: {
      loadBlogs(state) {
        return state.blogs;
      },
         loadProjects(state) {
        console.log('LOAD PROJECTS +++++++++');
        return state.projects;
      },
      loadItem(state) {
        return state.item;
      },


      getCreate(state) {
        console.log("VALUE CREATING:", state.creating);
        return state.creating;
      },
      getEdit(state) {
        console.log("VALUE EDITING:", state.editing);
        return state.editing;
      },
      //Modal Mutation Actions
      getSuccessModal(state) {
        return state.showSuccessModal;
      },
      getWarnModal(state) {
        return state.showWarnModal;
      },
      getFailureModal(state) {
        return state.showFailureModal;
      },
       loadNewIdToredirect(state) {
        return state.idToredirect

      },
    }
  });
};

export default createStore;
