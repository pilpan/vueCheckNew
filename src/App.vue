<template>

  <!-- <form @submit.prevent="say">
    <input type="text">
    <button>Отправить</button>
  </form> -->
  <div class="containerLink">
    <router-link :to="{name: 'MainPage'}" >Home</router-link>
    <router-link :to="{name: 'Finder'}" >Finder</router-link>
    <router-link :to="{name: 'counter'}" >counter</router-link>
  </div>
  <div>
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  data() {
    return {
     
    }
  },
}
</script>

<style>
  .containerLink{
    display: inline-flex;
    gap: 10px;
    width: 200px;
    height: 30px;
  }
</style>
