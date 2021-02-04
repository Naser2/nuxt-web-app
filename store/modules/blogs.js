// import {fb} from "~/fireBaseConfig";
// import { TimeStamp, db } from "~/fireBaseConfig";
// import { firestoreAction } from "vuexfire";

// // import Vuex from "vuex";
// // const blogs = [
// //   {
// //     id: "/blogs/entrepreneurship-1",
// //     tags: ["Entrepreneurship"],
// //     title: "30 Ways to Become a Successful Entrepreneur ",
// //     description:
// //       "30 Ways to Become a More Successful Entrepreneur Home » Blog » Entrepreneurship » 30 Ways to Become a More Successful Entrepreneur Whether you’re just starting out or are an old pro, who doesn’t want to be a more successful entrepreneur? Owning your own business gives you a sense of freedom and empowerment. You can build things and watch them grow. Entrepreneurs make decisions for themselves, realize their creative visions, and develop lasting relationships with other entrepreneurs, customers, and vendors. It’s a great way to live. That’s why I’ve founded so many companies — I can’t get enough. That’s why I’ve put together these tips to help you to become more successful. 1. Get gritty Grit is perseverance. Grit is the go-get-’em attitude that we expect of entrepreneurs. Grit is the ability to  If you want to be a successful entrepreneur, you have to be gritty. Honestly, without hard work and perseverance, you’re not going anywhere in the entrepreneurial world.",

// //     thumbnail: require("assets/images/blogs/entrepeneurship.jpeg"),
// //     // thumbnail: "require('assets/images/chef-gallery.jpg')",
// //     alt: "entrepreneur image",
// //     rating: "5",
// //     votes: 17,
// //     blogImages: [
// //       require("assets/images/undraw_empty_cart_co35.svg"),
// //       require("assets/images/beati_soup.jpeg"),
// //       require("assets/images/chef-gallery.jpg"),
// //       require("assets/images/bonnappetit.jpg")
// //     ],
// //     author_name: "Nasser Sanou",
// //     author_image: require("assets/images/nas-liwli.jpg"),
// //     refLink: "https://neilpatel.com/blog/become-successful-entrepreneur/",
// //     date: "Mar 16, 2020",
// //     readTime: "6 min read",
// //     stars: "2"
// //   },
// //   {
// //     id: "/blogs/learn-a-mobile-skill",
// //     tags: ["mobile", "2000 skill"],
// //     title: "Learn A Mobile Skill ",
// //     description:
// //       "Learn a mobile and skill needed in the Entrepreneur Home Blog  Entrepreneurship 30 Ways to Become a More Successful Entrepreneur Whether you’re just starting out or are an old pro, who doesn’t want to be a more successful entrepreneur? Owning your own business gives you a sense of freedom and empowerment. You can build things and watch them grow. Entrepreneurs make decisions for themselves, realize their creative visions, and develop lasting relationships with other entrepreneurs, customers, and vendors. It’s a great way to live. That’s why I’ve founded so many companies — I can’t get enough. That’s why I’ve put together these tips to help you to become more successful. 1. Get gritty Grit is perseverance. Grit is the go-get-’em attitude that we expect of entrepreneurs. Grit is the ability to  If you want to be a successful entrepreneur, you have to be gritty. Honestly, without hard work and perseverance, you’re not going anywhere in the entrepreneurial world.",

// //     thumbnail: require("assets/images/blogs/learn_a_mobile_skill.jpeg"),
// //     // thumbnail: "require('assets/images/chef-gallery.jpg')",
// //     alt: "creative image",
// //     rating: "5",
// //     votes: 17,
// //     blogImages: [
// //       require("assets/images/undraw_empty_cart_co35.svg"),
// //       require("assets/images/beati_soup.jpeg"),
// //       require("assets/images/chef-gallery.jpg"),
// //       require("assets/images/bonnappetit.jpg")
// //     ],
// //     author_name: "Nasser Sanou",
// //     author_image: require("assets/images/nas-liwli.jpg"),
// //     refLink: "https://neilpatel.com/blog/become-successful-entrepreneur/",
// //     date: "Mar 19, 2020",
// //     readTime: "9 min read",
// //     stars: "5"
// //   },
// //   {
// //     id: "/blogs/be-creative",
// //     tags: ["creativity"],
// //     title: "Be Creative ",
// //     description:
// //       "30 Ways to Become a More Successful Entrepreneur Home » Blog » Entrepreneurship » 30 Ways to Become a More Successful Entrepreneur Whether you’re just starting out or are an old pro, who doesn’t want to be a more successful entrepreneur? Owning your own business gives you a sense of freedom and empowerment. You can build things and watch them grow. Entrepreneurs make decisions for themselves, realize their creative visions, and develop lasting relationships with other entrepreneurs, customers, and vendors. It’s a great way to live. That’s why I’ve founded so many companies — I can’t get enough. That’s why I’ve put together these tips to help you to become more successful. 1. Get gritty Grit is perseverance. Grit is the go-get-’em attitude that we expect of entrepreneurs. Grit is the ability to  If you want to be a successful entrepreneur, you have to be gritty. Honestly, without hard work and perseverance, you’re not going anywhere in the entrepreneurial world.",

// //     thumbnail: require("assets/images/blogs/be_creative.jpeg"),
// //     // thumbnail: "require('assets/images/chef-gallery.jpg')",
// //     alt: "creative image",
// //     rating: "5",
// //     votes: 17,
// //     blogImages: [
// //       require("assets/images/undraw_empty_cart_co35.svg"),
// //       require("assets/images/beati_soup.jpeg"),
// //       require("assets/images/chef-gallery.jpg"),
// //       require("assets/images/bonnappetit.jpg")
// //     ],
// //     author_name: "Nasser Sanou",
// //     author_image: require("assets/images/nas-liwli.jpg"),
// //     refLink: "https://neilpatel.com/blog/become-successful-entrepreneur/",
// //     date: "Mar 12, 2020",
// //     readTime: "14 min read",
// //     stars: "3"
// //   }
// // ];

// export default {
//   namespaced: true,

//   state() {
//     return {
//       blogsItems: [],
//       blog: {},
//       TimeStamp
//     };
//   },
//   getters: {
//     filtredItems: state => searchedTerm => {
//       let { blogsItems } = state;
//       console.log("Title frm Getters: ", searchedTerm, "STATE", state);

//       if (!searchedTerm) {
//         return blogsItems;
//       }
//       const filetered = blogsItems.filter(i => {
//         return (
//           i.title && i.title.toLowerCase().includes(searchedTerm.toLowerCase())
//         );
//       });

//       return filetered;
//     }
//   },
//   actions: {
//     //
//     getBlogs(vuexContext) {
//       // console.log(
//       //   "BLOGS Going to get Blogs!",
//       //   `${databaseURL}/blogs.json?auth=${apiKey}`
//       // );
//       // db.collection("blogs")
//       //   .get()
//       //   .then(snapshot => {
//       //     snapshot.forEach(doc => {
//       //       console.log("DOCCCC", doc.id, "=>", doc.data());
//       //       vuexContext.commit("setBlogs", doc.data());
//       //     });
//       //   })
//       //   .catch(err => {
//       //     console.log("Error getting documents", err);
//       //   });
//       // return axios
//       //   .get(`${databaseURL}/blogs.json?auth=${apiKey}`)
//       //   .then(res => {
//       //     const postsArray = [];
//       //     for (const key in res.data) {
//       //       postsArray.push({ ...res.data[key], id: key });
//       //     }
//       //     vuexContext.commit("setBlogs", postsArray);
//       //   })
//       //   .catch(e => console.log("ERROR=---", e));
//       // db.collection("blogs")
//       //   .get()
//       //   .then(function(querySnapshot) {
//       //     let blogs = [];
//       //     // return (blogs =
//       //     blogs = querySnapshot.forEach(function(doc) {
//       //       blogs.push({
//       //         ...doc.data(),
//       //         id: doc.id
//       //       });
//       //       console.log("BLOGS 2 !", blogs);
//       //       vuexContext.commit("setBlogs", blogs);
//       //     });
//       //   })
//       //   .catch(function(error) {
//       //     console.log("Error getting documents: ", error);
//       //   });
//       // console.log("BLOGS 2 !", blogs);
//       // vuexContext.commit("setBlogs", blogs);
//       // // vuexContext.commit("setBlogs", blogs);
//     },
//     bindBlogs: firestoreAction(({ bindFirestoreRef }) => {
//       return bindFirestoreRef("blogsItems", db.collection("blogs"));
//     }),
//     create(vuexContext, blog) {
//       console.log("FIRE : ", db);
//       // const userRef = db.collection("profiles").doc(rootState.auth.user.uid);
//       // blog.user = userRef;
//       // const firestore = firebase.firestore();
//       // const db = firestore.collection("blogs");
//       blog.status = "new";
//       var today = new Date();
//       var dd = String(today.getDate()).padStart(2, "0");
//       var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
//       var yyyy = today.getFullYear();
//       var day = mm + "/" + dd + "/" + yyyy;
//       var date = new Date(day);
//       blog.Timestamp = date;
//       return db
//         .collection("blogs")
//         .add({
//           blog
//         })
//         .then(docRef => {
//           console.log("Document REFF!", docRef);
//           const id = docRef.id;
//           const addedBlog = { ...blog, id };
//           vuexContext.commit("setBlogs", addedBlog);
//           console.log("Document successfully written!");
//         })
//         .catch(function(error) {
//           console.error("Error writing document: ", error);
//         });

//       // .add(blog)
//       // .then(docRef => {
//       //   blog.id = docRef.id;
//       //   // commit("/auth/addBlogToUser", blog, { root: true });
//       //   return true;
//       // });
//     },
//     getById({ commit }, itemId) {
//       return fb.firestore
//         .collection("blogs")
//         .doc(itemId)
//         .get()
//         .then(snapshot => {
//           const blog = snapshot.data();
//           // debugger;
//           commit("setBlog", blog);
//           return blog;
//         });
//     },
//     updateBlog({ commit }, blog) {
//       const blogToUpdate = blog.blog;
//       debugger;
//       return fb.firestore
//         .collection("blogs")
//         .doc(blog.id)
//         .update(blogToUpdate)
//         .then(() => {
//           debugger;
//           commit("setBlog", blogToUpdate);
//           return true;
//         });
//     },
//     deleteBlog(itemId) {
//       debugger;
//       return fb.firestore
//         .collection("blogs")
//         .doc(itemId)
//         .delete();
//     }
//   },
//   mutations: {
//     setBlogs(state, blogs) {
//       console.log("MUTTATION in Blogs Called", blogs);
//       // console.log("STATE", state);
//       // console.log("BLOG STPRE", state.blogsItems.push(blogs));
//       state.blogsItems = blogs;
//       console.log("BLOGS STATE NOW", state.blogsItems);
//     },
//     setBlog(state, blog) {
//       state.blog = blog;
//     }
//   }
// };
