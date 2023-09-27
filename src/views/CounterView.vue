<template lang="">
<div>
    <button v-on:click="change(-1, $event)">+1</button>
    <button v-on:click="change(1, $event)">-1</button>
    <button 
    :class="{active:isShow, disabled: !isShow}"
    @click="isShow = !isShow">{{ isShow? 'Скрыть':'Показать' }}</button>
    <p v-if="isShow">Вы нажали на кпонку {{ count }} раз</p>
  </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
            isShow: false,
        }
    },
    methods: {
        change(number, event) {
            this.count = this.count + -number;
        },

        say(event) {
            alert(event.target[0].value)
        }
    },
}
</script>
<style>
    .active{
        border: 0px;
        background-color: white;
        color:  red;
    }

    .disabled{
        border: 0px;
        background-color: white;
        color: hsla(160, 100%, 37%, 1);;
    }
</style>
