<script setup>
import cake1 from '../assets/cake1.jpeg';
import cake2 from '../assets/cake2.jpg';
import cake3 from '../assets/cake3.jpg'
</script>

<template>
  
   <!-- верхняя запись -->
   <div  class="cakes"><pre style="font-family:Poiret One;padding-top: 17dvi;padding-left: 10dvi;">ТОРТЫ 
НА ЗАКАЗ</pre>
  </div>
  
  
   <!-- Карусель -->
   <div id="demo" class="carousel slide" data-bs-ride="carousel" >
  
    <!-- Индикаторы внизу карусели -->
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    </div>
    
    <!-- Содержимое слайдов -->
    <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="cake3":src=cake3>
        </div>
        <div class="carousel-item">
          <img class="cake1" :src=cake1>
        </div>
        <div class="carousel-item">
            <img class="cake2" :src=cake2>
        </div>
    </div>
    
    <!-- стрелочки-контроллеры -->
    <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
  </div>
</template>

<style scoped>
  .cakes { 
    color:rgba(0, 165.00000536441803, 165.00000536441803, 1);
    width:100%;
    height:fit-content;
    font-family:Poiret One;
    text-align:left;
    font-size:12dvi;
    font-weight: bolder;
    letter-spacing:0;
  }

  .carousel-inner{
    background-color: rgb(231, 221, 218);
    width:100%;
    height:1;
  }

  .cake1 {
    height:45dvi;
    width: 100dvi;
    background-repeat:no-repeat;
    background-size:cover;
    background-image:url(images/cake1.jpeg); 
  }
  .cake2 {
    height:45dvi;
    width: 100dvi;
    background-repeat:no-repeat;
    background-size:cover;
    background-image:url(images/cake2.jpg); 
    
  }
  .cake3 {
    height:45dvi;
    width: 100dvi;
    background-repeat:no-repeat;
    background-size:cover;
    background-image:url(images/cake3.jpg); 
    
  }
</style>
