
 <template>
  <div class="modal-wrapper" v-if="open">
    <div
      class="absolute top-0 inset-x-0 px-4 pb-6 sm:p-0 sm:flex sm:items-center sm:justify-center"
    >
      <template>
        <div class="crud-operation-forms z-50">
          <template>
            <div class="form-top-mode inline-flex z-50">
              <div
                @click="setCreateFunc"
                class="create flex text-gray-700 bg-blue-300 py-4 px-2 w-full"
              >Create</div>
              <div
                @click="setEditFunc"
                class="edit flex text-gray-700 bg-indigo-300 py-4 px-2 w-full"
              >Edit</div>
            </div>
          </template>
          <div class="create text-gray-700 bg-red-300" v-if="this.$store.getters.getCreate">
            <create-form></create-form>
          </div>
          <div class="create text-gray-700 bg-green-300" v-if="this.$store.getters.getEdit">
            <edit-form
              :item="itemCopy"
              :open="open"
              :controlModal="controlModal"
              :updateItem="updateItem"
            ></edit-form>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

 <script>
import CreateForm from "../Forms/CreateForm/index";
import EditForm from "../Forms/EditForm/index";

export default {
  name: "Crud-Modal",
  components: {
    EditForm,
    CreateForm
  },
  data() {
    return {
      // open: this.open,
      selectedFile: null,
      warnDelete: false,
      itemCopy: {
        id: this.item.id,
        title: this.item.title,
        description: this.item.description,
        tags: this.item.tags,
        images: this.item.images
      },
      changesMade: false,
      formTypeText: "",
      uploadSuccess: false,
      triedToUploadNull: false,
      upload: false,
      uploadType: "text",
      selectedFile: null,
      typeColor: "bg-yellow-600",
      opreationCreate: false,
      opreationEdit: false
    };
  },

  methods: {
    setCreateFunc() {
      this.opreationCreate = this.$store.commit("setCreate", true);
      this.opreationEdit = this.$store.commit("setEdit", false);
      // return (this.opreationCreate = response);
      // console.log("CReate Response  From STORE ", response);
    },
    setEditFunc() {
      this.opreationEdit = this.$store.commit("setEdit", true);
      this.opreationCreate = this.$store.commit("setCreate", false);
      // return (this.opreationEdit = response);
      // console.log("EDIT Response From STORE ", response);
    },
    onFileSelected(event) {
      console.log("TARGET", event.target);
      this.selectedFile = event.target.files[0];
      // this.triedToUploadNull == false;
    },
    onuploadFile() {
      console.log("Upload");
      this.$uploader(this.selectedFile, "blogs", this.addImageCallBack);
    },
    addImageCallBack(res) {
      console.log("addImageCallBack Download URL in Modal:", res);
      this.itemCopy.images.push(res);
      this.selectedFile = null;
    },
    deletImageCallBack(idx) {
      console.log("addImageCallBack Download URL in Modal:", idx);
      this.itemCopy.images.splice(idx, 1);
    },
    removePh(img, index) {
      console.log("TARGET", event.target);
      this.$removePhoto(img, index, this.deletImageCallBack);
      // this.triedToUploadNull == false;
    }
  },
  props: {
    open: {
      type: Boolean,
      required: true
    },
    item: {
      type: Object,
      required: false
    },
    controlModal: {
      type: Function,
      required: true
    },
    updateItem: {
      type: Function,
      required: true
    }
  }
};
</script>

 <style scoped>
/* .input[type="file" i] {
  padding: 0 !important;
  border-color: #fff !important;
} */
label {
  cursor: pointer;
  /* Style as you please, it will become the visible UI component. */
}

#upload-photo {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
