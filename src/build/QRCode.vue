<template>
    <div class="qr-wrapper">
        <h2>QR-code для портфолио</h2>
        <canvas ref="canvas"></canvas>
        <p>Отсканируйте QR-код, чтобы открыть сайт </p>
        <button class="visit-btn" @click = "visitSite">Перейти по QR-коду</button>
    </div>
</template>

<script>

import QRCode from 'qrcode'

export default{
    name: 'QR КОД',
    data(){
        return{
            url:'https://github.com/MajestY999/Robot' //ссыкла на ресурс  куда переходим
        }
    },
    mounted(){
    const canvas =  this.$refs.canvas
    if(canvas){
      QRCode.toCanvas(canvas, this.url, {width: 180}, (error)=>{
        if(error) console.error(error)
      })
    }
    }, 
    methods:{
        visitSite(){
            window.open(this.url, '_blank')
        }
    }
}

</script>

<style scoped>
.qr-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
    font-family: sans-serif;
}

.qr-wrapper h2{
    font-size: 1.2rem;
   font-weight: bold;
    margin-bottom: 8px;

}
.ar-wrapper p {
    font-size: 0.9rem;
    color: rgb(98, 97, 97);
    margin-bottom: 8px;
}
.canvas{
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 4px;
    background: white;

}
.visit-btn{
    margin-bottom: 12px;
    padding: 8px 16px;
    background-color: rgb(94, 94, 209);
     border: none;
    border-radius: 4px;
    transition: background 0.3s ease;
}
</style>