
<template>
    <footer style="padding-top: 30px;">
    <section class="footer">
        <div class="container">
        <div class="row">
            <div class="col-md-3 col-6">
            <h4>Информация</h4>
            <ul class="list-unstyled">
                <li><a href="#">О нас</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Конфигуратор</a></li>
                <li><a href="#">Оплата и доставка</a></li>

            </ul>
            </div>

            <div class="col-md-3 col-6">
            <h4>Время работы</h4>
            <ul class="list-unstyled">
                <li>Самара, ул.Масленникова 40</li>
                <li>пн-вс: 8:00 - 20:00</li>
                <li>перерыв: 13:00 - 14:00</li>
            </ul>
            </div>

            <div class="col-md-3 col-6">
            <h4>Контакты</h4>
            <ul class="list-unstyled">
                <li><a href="tel:8 (917) 158-38-90">8 (917) 158-38-90</a></li>
            </ul>
            </div>

            <div class="col-md-3 col-6">
            <h4>Мы в сети</h4>
            <div class="footer-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
            </div>
        </div>
        </div>
    </section>
    </footer>
</template>

<style>

    footer {
        background-color:rgb(137.00000703334808, 145.00000655651093, 163.00000548362732, 1);
        position: relative;

    }
    .footer h4 {
        color: #ffffff;
        text-transform: uppercase;
        font-size: 16px;
        border-bottom: 1px solid #ffffff;
        padding-bottom: 3px;
        font-family:Poiret One;
        font-size: larger;
        font-weight: bold;
    }

    .footer a {
        text-decoration: none;
        transition: all .3s;
    }

    .footer a:hover {
        color: #fff;
        text-decoration: underline;
    }

    .footer a, .footer li {
        color: #ffffff;
        font-family:Poiret One;
        font-size: larger;
    }

    .footer li a {
        display: block;
    }
    .footer-icons a {
        display: inline-block;
        margin-right: 15px;
        font-size: 20px;
    }
</style>
