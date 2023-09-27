<template lang="">
    <div class='center'>
        <h1 @click="say('Нажми на тык',$event)">Приветствие на разных языках</h1>
        <div class="Manybutton">
            <div v-for="(el, index) in list">
                <button @click="sayHi" :id="index">Тык</button>
            </div>
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
    data() {
        return {
            section: useRoute(),
            list: [
                { text: '안녕하세요' },
                { text: 'Hola' },
                { text: 'Ciao' },
                { text: 'Hallo' },
                { text: 'Привет' },
            ]
        }
    },
    methods: {
        sayHi(event) {
            console.log(event.target.id)
            alert(this.list[event.target.id].text)

        },
        say(data,event){
            console.log(event)
            alert(data)
        }
    },
    mounted() {
    console.log(this.section.name)
  },
}
</script>
<style>
.Manybutton {
    display: inline-Flex;
    width: 100%;
}
.center{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>