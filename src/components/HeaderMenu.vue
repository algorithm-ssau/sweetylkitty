<script setup>
import logo from '../assets/cake_icon_2.png'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style=" max-height: 70px; min-height: 60px; height: 10%; background-color:rgba(255, 90.0999216735363, 90.0999216735363);">
  <div class="container-fluid" style="padding: 0;">
    <a class="navbar-brand" href="#"><img class="logo" :src=logo></a>
    <button class="navbar-toggler"style="height:10%; align-content: center; padding-right: 20px" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 top-menu">
        
        <li class="nav-item">
          <a class="nav-link" href="#">Главное</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Контакты</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Отзывы</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Каталог</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Конфигуратор</a>
        </li>
      </ul>

      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"><i class="far fa-user"></i></a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          </ul>
        </li>

        
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fas fa-search"></i></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style scoped>
  #navbarSupportedContent{
    background-color:rgba(255, 90.0999216735363, 90.0999216735363);
    
  }

  .navbar-dark .navbar-nav .nav-link {
    color: #ffffff;
    font-weight: 500;
    text-transform: uppercase;
  }

  .navbar-nav .dropdown-menu {
    right: 0;
    left: auto;
  }

  .nav-item{
    font-family:Poiret One;
    text-align:center;
    font-size:19px;
    padding-left: 38px;
    
  }
  .top-menu li a::after {
    content: '';
    display: block;
    width: 100%;
    background-color: #ffffff;
    height: 1px;
    transition: all .3s;
    transform: scale(0);

  }

  .top-menu li a:hover::after {
    transform: scale(1);
  }

  .modal-body img {
    max-width: 100px;
    height:20dvi;
  }

  .logo { 
	width:50px;
	height:50px;
	position:relative;
  left: 20px;
	background-image:url(/sweetykitty/src/assets/cake_icon_2.png); 
	background-repeat:no-repeat;
	background-size:cover;
  }
</style>
