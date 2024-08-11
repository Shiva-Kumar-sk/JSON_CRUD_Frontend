<template>
    <HeaderPage />
    <button class="create-button" @click="openModalCreate()">Add Items</button>

    <h1>Home Page </h1>
    <table border="1px">
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>ACTION</th>

        </tr>
        <tr v-for="item in items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.description }}</td>
            <td><button @click="openModal(item)" class="button update">Update</button><button
                    v-on:click="deleteItem(item.id)" class="button delete">Delete</button>
            </td>


        </tr>


    </table>

    <!-- this for Update Items -->
    <div>
        <div class="modal" v-show="isModalOpen">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <h2>Update Item</h2>
                <form class="add" @submit.prevent="updateItem">
                    <input type="text" name="name" v-model="update.name" placeholder="Name"
                        v-on:keyup="validateName"><br>
                    <span class="error">{{ this.formErr.nameErr }}</span><br>
                    <input type="text" name="description" v-model="update.description" placeholder="description"
                        v-on:keyup="validateDescription"><br>
                    <span class="error">{{ this.formErr.descriptionErr }}</span><br>

                    <br>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    </div>
    <!-- this for Update Items end -->

    <!-- this is for Create New Item -->

    <div>
        <div class="modal" v-show="isModalOpenCreate">
            <div class="modal-content">
                <span class="close" @click="closeModalCreate">&times;</span>
                <h2>Create New Item</h2>
                <form class="add" @submit.prevent="createItem">
                    <input type="text" name="name" v-model="create.name" placeholder="Name"
                        v-on:keyup="validateNameCreate"><br>
                    <span class="error">{{ this.CreateFormErr.nameErr }}</span><br>
                    <input type="text" name="description" v-model="create.description" placeholder="description"
                        v-on:keyup="validateDescriptionCreate"><br>
                    <span class="error">{{ this.CreateFormErr.descriptionErr }}</span><br>

                    <br>
                    <button type="submit">SAVE</button>
                </form>
            </div>
        </div>
    </div>



</template>
<script>

import HeaderPage from './HeaderPage.vue';
export default {
    name: 'HomePage',
    components: {
        HeaderPage

    },
    data() {
        return {
            items: [],
            update: {
                id: '',
                name: '',
                description: ''
            },
            create: {
                name: '',
                description: ''
            },
            isModalOpen: false,
            isModalOpenCreate: false,

            formErr: {
                nameErr: '',
                descriptionErr: ''
            },
            CreateFormErr: {
                nameErr: '',
                descriptionErr: ''
            }
        }
    },
    methods: {

        async getData() {
            const url = "http://127.0.0.1:8000/api/item";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const json = await response.json();
                console.log("all data gets", json);
                this.items = json.data;
            } catch (error) {
                console.error(error.message);
            }
        },


        async deleteItem(id) {
            this.$swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const response = await fetch('http://127.0.0.1:8000/api/delete-item', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                id: id,
                            }),
                        });

                        if (!response.ok) {
                            const data = await response.json();
                            if (response.status == 400) {
                                console.log('Item Delete Error', data);
                            }
                            if (response.status == 404) {
                                console.log('Data not found', data);
                            }
                            throw new Error('Item delete failed');
                        }

                        if (response.ok && response.status == 200) {
                            this.getData();
                            this.$swal({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        },
        // this for update Items

        openModal(item) {
            this.isModalOpen = true;
            this.update.id = item.id
            this.update.name = item.name;
            this.update.description = item.description;

            console.log("datassssss", item.name);
        },
        closeModal() {
            this.isModalOpen = false;
        },

        validateName() {
            if (this.update.name == '')
                this.formErr.nameErr = 'The name field is required.'
            else
                this.formErr.nameErr = ''
        },

        validateDescription() {
            if (this.update.description == '')
                this.formErr.descriptionErr = 'The description field is required.'
            else
                this.formErr.descriptionErr = ''
        },


        async updateItem() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/update-item', {
                    method: 'POST',
                    headers: {

                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: this.update.id,
                        name: this.update.name,
                        description: this.update.description,

                    }),
                });
                if (!response.ok) {
                    const data = await response.json();
                    if (response.status == 400) {
                        this.formErr.nameErr = data.error.name[0];
                        this.formErr.descriptionErr = data.error.description[0];
                        console.log('Item Update Error', data);


                    }
                    if (response.status == 404) {

                        console.log('data not Found', data)

                    }
                    throw new Error('Item Update failed');

                }
                if (response.ok) {
                    if (response.status == 200) {
                        this.$swal({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.getData();
                        this.closeModal();

                        const data = await response.json();
                        console.log("data update", data);

                    }
                }


            } catch (error) {
                console.log(error)
            }
        },

        openModalCreate() {
            this.isModalOpenCreate = true;
        },
        closeModalCreate() {
            this.isModalOpenCreate = false;
        },

        validateNameCreate() {
            if (this.create.name == '')
                this.CreateFormErr.nameErr = 'The name field is required.'
            else
                this.CreateFormErr.nameErr = ''
        },

        validateDescriptionCreate() {
            if (this.create.description == '')
                this.CreateFormErr.descriptionErr = 'The description field is required.'
            else
                this.CreateFormErr.descriptionErr = ''
        },

        async createItem() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/create-item', {
                    method: 'POST',
                    headers: {

                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.create.name,
                        description: this.create.description,

                    }),
                });
                if (!response.ok) {
                    const data = await response.json();
                    if (response.status == 400) {
                        console.log('Item Create Error', data);
                        this.CreateFormErr.nameErr = data.error.name[0];
                        this.CreateFormErr.descriptionErr = data.error.description[0];


                    }

                    throw new Error('Item Create failed');

                }
                if (response.ok) {
                    if (response.status == 201) {
                        this.getData();
                        this.$swal({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.create.name = '';
                        this.create.description = '';
                        // location.reload();
                        this.closeModalCreate();
                        const data = await response.json();
                        console.log("data create", data);


                    }
                }
                console.log("all is right");


            } catch (error) {
                console.log(error)
            }
        }



    },


    mounted() {

        this.getData()


    }


}
</script>
<style scoped>
table {
    margin: auto;
}

th {
    background: #00ffe5;
    padding: 10px;
}

td {
    width: 160px;
}





.modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
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

.create-button {
    background: #1100ff;
    color:white;
    padding: 12px;
    margin-top: 9px;
    margin-left: -499px;
    border-radius: 7px;
    border: none;
    cursor: pointer;
}
.create-button:hover{
    background: #00ffca;
    color: #000;
    /* color:white; */
    /* padding: 14px; */
    transition: 0.5s;
}
/* action buttons */

button.button {
    margin: 5px;
    padding: 5px;
    width: 60px;
    border-radius: 5px;
    border: none;
    color: white;
    cursor: pointer;
}

button.delete {
    background: #f34f40e8;

}
button.delete:hover{
    background: #f70606e8;
    height: 26px;
    transition: .5s;


}

button.update {
    background: #0a77f5e8;

}
button.update:hover{
    background: #6206f7e8;
    height: 26px;
    transition: .5s;

}
</style>
