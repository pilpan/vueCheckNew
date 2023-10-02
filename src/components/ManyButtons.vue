<template>
    <div class="redBox">
    </div>
    <p>hello world</p>
</template>
<script>
export default {
    data() {
        return {
            redBox: {
                width: "40px",
                height: "40px",
                backgroundColor: "red",
            },
            active:false,
            greenBox: {
                width: "40px",
                height: "40px",
                backgroundColor: "green",
            }
        }
    },
}
</script>
<style>
.redBox {
    width: 40px;
    height: 40px;
    background-color: red;
}
</style>