<template>
    <div class="bg">
        <span class="span" @click="showModal=true"> <img class="modal-dolphin" srcset="../assets/dolphin.svg" /></span>
        <transition name="fade" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal= false"></div>
        </transition>
        <transition name="slide" appear>
            <div class="modal" v-if="showModal"><h2>{{ subtitle }}</h2><p>{{message}}</p>
            <span class="span" @click="showModal= false"><img  class="closePop" src="../assets/closepopup.svg" alt=""></span></div>
        </transition>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            message : 'coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, coucou, ',
            subtitle : 'Lorem Ipsum',
            showModal: false
        }
    }
}
</script>

<style lang="scss" scoped>
.bg{
    background: url('../assets/bg.png');
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 800vh;
overflow-x: hidden;

.span{
    appearance: none;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
}
 .closePop{
     position: absolute;
     top: 20px;
    right: 20px;
 }
.modal{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 99;
    width: 100%;
    max-width: 80vw;
    min-height: 80vh;
    background-color:#3594AE;
    border-radius: 10px;
    padding: 25px;
    border: 2px solid #fefcd0;
   
}
 h2{
        color: white;
        margin-bottom: 15px;
        font-size: 32px;
        font-weight: 900;
    }
     p{
        color: white;
         font-size: 18px;
        font-weight: 400;
        margin-bottom: 15px;
    }
    .slide-enter-active, .slide-leave-active{
transition: transform 1s;
}
.slide-enter, .slide-leave-to{
transform: translateY(-50%) translateX(100vw);
}
}
</style>