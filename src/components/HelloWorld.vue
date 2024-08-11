<!-- <template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template> -->

<!-- <script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script> -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style> -->

<!-- this is for only popup model start temp-->
<!-- <template>
  <div>
    <button @click="openModal">Open Modal</button>

    <div class="modal" v-show="isModalOpen">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Form</h2>
        <form @submit.prevent="submitForm">
          <div>
            <label for="id">ID:</label>
            <input type="text" id="id" v-model="form.id">
          </div>
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name">
          </div>
          <div>
            <label for="description">Description:</label>
            <textarea id="description" v-model="form.description"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template> -->

<!-- this is for only popup model end temp -->


<!-- <script>
export default {
  data() {
    return {
      isModalOpen: false,
      form: {
        id: '',
        name: '',
        description: ''
      }
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    submitForm() {
      console.log('Form submitted with:', this.form);
      this.closeModal();
    }
  }
};
</script> -->

<!-- <style scoped>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style> -->

<!-- this is for only popup model start end-->


<!-- <template>
  <h1> this is for test</h1>

  <button @click="openDeleteModal()">Delete Item</button>

<div v-show="isDeleteModalOpen" class="modal">
  <div class="modal-content">
    <p>Want to delete?</p>
    <button onclick="confirmDelete()">Yes</button>
    <button onclick="closeConfirmDialog()">No</button>
  </div>
</div>
  
</template> -->
<!-- <script>
export default {
  data() {
    return {
      isDeleteModalOpen: false,
      
    };
  },
  methods: {
    openDeleteModal() {
            this.isDeleteModalOpen = true;
            console.log("datassssss");
        },
    
  }
};

// function showConfirmDialog() {
//   document.getElementById('confirmDialog').style.display = 'flex';
// }

// function closeConfirmDialog() {
//   document.getElementById('confirmDialog').style.display = 'none';
// }

// function confirmDelete() {
//   // Your delete logic here
//   alert('Item deleted');
//   closeConfirmDialog();
// }
</script> -->

<!-- <style scoped>
button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
}

.modal-content button {
  margin: 10px;
}
</style> -->




<!-- <template>
  <button @click="showAlert">Click me</button>
</template> -->

<!-- <script>
export default {
  methods: {
    showAlert() {
      // this.$swal({
      //   title: 'Hello!',
      //   text: 'This is a SweetAlert2 alert',
      //   icon: 'success',
      //   confirmButtonText: 'Cool'
      // });





      this.$swal({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
    }
  }
}
</script> -->



<template>
  <button @click="confirmDelete">Delete File</button>
</template>

<script>
export default {
  methods: {
    confirmDelete() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }
  }
}
</script>
