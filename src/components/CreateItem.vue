<template>
    <HeaderPage/>
    <h1>Add New Item {{ this.dada }} </h1>
    <form class="add" @submit.prevent="createItem">
        <input type="text" name="name" v-model="name" placeholder="Name" ><br>
        <span class="error">{{ this.nameErr }}</span><br>
        <input type="text" name="description" v-model="description" placeholder="description"><br>
        <span class="error">{{ this.descriptionErr }}</span><br>

        <br>

        <button type="submit">Add</button>
    </form>
</template>
<script>
import HeaderPage from './HeaderPage.vue';
export default {
    components: {
        HeaderPage

    },
    data() {
        return {
            name:'',
            description:'',
            nameErr:'',
            descriptionErr:''
        }
    },
    methods:{
        async createItem(){
            try {
                const response = await fetch('http://127.0.0.1:8000/api/create-item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: this.name,
                        description: this.description,

                    }),
                });
                if (!response.ok) {
                    const data = await response.json();
                    if (response.status == 400) {
                        console.log('Item Create Error', data);
                        this.nameErr = data.error.name[0];
                        this.descriptionErr = data.error.description[0];
                       
                        
                    }
                   
                    throw new Error('Item Create failed');

                }
                if (response.ok) {
                    if (response.status == 201) {
                        this.$router.push({name:'Home'})
                    const data = await response.json();
                    console.log("data create", data);
                    

                    }
                }
                console.log("all is right");


            } catch (error) {
                console.log(error)
            }
        }
    }
    
        

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top:0px;
}
body{
  padding: 0;
  margin: 0;
}

/* for form type components  */


.Register input,.login input,.add input {
    width: 300px;
    height: 30px;
    border: 1px solid skyblue;
    border-radius: 5px;
}

.Register button,.login button, .add button {
    width: 300px;
    height: 40px;
    background: #09e5ec;
    border: 3px solid rgb(22, 224, 140);
    cursor: pointer;
    border-radius: 5px;

}

input:focus {
    outline: none !important;
    border-color: #719ECE;
    box-shadow: 0 0 10px #719ECE;
}
.error{
    color: rgb(255, 123, 0);
}
</style>