<template>
    <div class="header">
        <router-link to="/">Home</router-link>
        <!-- <router-link to="/create-item">Create</router-link> -->
       

    </div>
    
</template>
<script>
export default{
    name:'HeaderPage',
   
}
</script>
<style>
.header{
    background: rgb(99, 193, 247);
    overflow: hidden;
    
}
.header a{
    float: left;
    color: aliceblue;
    text-align: center;
    padding: 10px 14px;
    text-decoration: none;
    margin: 10px 10px;
    font-size: 20px;
}
.header a:hover{
    background: rgb(51, 124, 153);
    border-radius: 10px;
    transition: 0.3s;

}
</style>