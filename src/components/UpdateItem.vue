<template>
    <h1>Update Item  </h1>
    <form class="add" @submit.prevent="updateItem">
        <input type="text" name="name" v-model="name" placeholder="Name" ><br>
        <span class="error">{{ this.nameErr }}</span><br>
        <input type="text" name="description" v-model="description" placeholder="description"><br>
        <span class="error">{{ this.descriptionErr }}</span><br>

        <br>
        <button type="submit">Update</button>
    </form>

</template>
<script>
export default {
    name: 'UpdateItem',
    data() {
        return{
            name:'',
            description:'',
            nameErr:'',
            descriptionErr:''
        }
    },
    methods: {
        async updateItem() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/update-item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: this.$route.params.id,
                        name: this.name,
                        description: this.description,

                    }),
                });
                if (!response.ok) {
                    const data = await response.json();
                    if (response.status == 400) {
                        this.nameErr = data.error.name[0];
                        this.descriptionErr = data.error.description[0];
                        console.log('Item Update Error', data);
                        
                    }
                    if (response.status == 404) {
                        console.log('data not Found', data)

                    }
                    throw new Error('Item Update failed');

                }
                if (response.ok) {
                    if (response.status == 200) {
                        this.$router.push({name:'Home'})
                    const data = await response.json();
                    console.log("data update", data);
                    


                       


                    }
                }


            } catch (error) {
                console.log(error)
            }
        },

    }
    
}
</script>