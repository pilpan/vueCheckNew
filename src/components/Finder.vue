<template lang="">
    <form 
    :style="{ display: 'flex',flexDirection: 'column',width: '200px'}"
    
    @submit.prevent='subHandler'>
        <label>
            Введите Название карты
            <input :style='inputStyle' type="text" name="cardName">
        </label>
        <label>
            Получить карту
            <button :style="styleFormButton">Тык</button>
        </label>
    </form>
    <div class='flex'>
        <li class='card' v-for="el in nameCard">
            {{el.name}}
            {{el.rarity}}
            <img  v-if="el?.img?.length" :src="el?.img" alt="">
        </li>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nameCard: [],
            styleFormButton: {
                backgroundColor: 'White',
                border: '0px',
            }
        }
    },
    methods: {
        async subHandler(event) {
            // event.preventDefault();
            const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${event.target[0].value}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '488f437511msh2d3854838388c55p13692cjsn135921cfebdf',
                    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                this.nameCard = result;
            } catch (error) {
                console.error(error);
            }


        }
    },

    computed: {
        inputStyle(){
            return {
                backgroundColor: "hsla(160, 100%, 37%, 1)",
                border: 0,
                color: 'white'
            }
        }
    },
}
</script>
<style>
.card {
    width: 170px;
    border: 1px solid grey;
}

img {
    width: 150px;
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>