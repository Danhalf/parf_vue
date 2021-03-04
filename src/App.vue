<template>
  <div id="app">
    <div class="cd-hero">
      <div class="cd-slider-nav">
        <nav class="navbar">
          <div class="tm-navbar-bg">
            <a class="navbar-brand text-uppercase" href="#"><i class="fa fa-instagram tm-brand-icon"></i>Галерея ароматов</a>

            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#tmNavbar">&#9776;</button>
            <div class="collapse navbar-toggleable-md text-xs-center text-uppercase tm-navbar" id="tmNavbar">
              <ul class="nav navbar-nav">
                <li class="nav-item active selected">
                  <a class="nav-link" href="#0" data-no="1"> Новинки <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0" data-no="2"> Популярные</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0" data-no="3"> Элитные </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0" data-no="4"> Как выбрать? </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#0" data-no="5"> Контакты </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <ul class="cd-hero-slider">
        <li class="selected">
          <div class="cd-full-width">
            <div class="container-fluid js-tm-page-content" data-page-no="1" data-page-type="gallery">
              <div class="tm-img-gallery-container">
                <div class="tm-img-gallery gallery-one">
                  <Parfume></Parfume>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="cd-full-width">
            <div class="container-fluid js-tm-page-content" data-page-no="2" data-page-type="gallery">
              <div class="tm-img-gallery-container">
                <div class="tm-img-gallery gallery-two"></div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="cd-full-width">
            <div class="container-fluid js-tm-page-content" data-page-no="3" data-page-type="gallery">
              <div class="tm-img-gallery-container">
                <div class="tm-img-gallery gallery-three"></div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="cd-full-width">
            <div class="container-fluid js-tm-page-content tm-page-width tm-pad-b" data-page-no="4">
              <div class="tm-about-page">
                <div class="row tm-white-box-margin-b">
                  <div class="col-xs-12">
                    <div class="tm-flex">
                      <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                        <h2 class="tm-text-title">Текст с рекомендациями</h2>
                        <p class="tm-text">
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At magnam itaque, optio nihil iusto facere repellat praesentium
                          velit sequi accusantium. Odio explicabo perspiciatis voluptatibus, reiciendis distinctio eos atque cum ex alias ullam natus
                          quis, earum sequi porro saepe, autem sed.
                        </p>
                      </div>
                      <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                        <h2 class="tm-text-title">Текст с рекомендациями</h2>
                        <p class="tm-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptates, recusandae ducimus vel sint ab quibusdam.
                          Officiis unde deleniti hic tempora molestias, fugiat, repellat quis corporis magnam sequi dolorem architecto ut, impedit
                          perspiciatis atque! Ut voluptate officia eligendi atque accusamus earum tempore voluptatibus hic omnis, quidem laborum
                          quaerat adipisci quisquam.
                        </p>
                      </div>
                      <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                        <h2 class="tm-text-title">Текст с рекомендациями</h2>
                        <p class="tm-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum ratione, inventore voluptatem libero dolores et ab
                          dolorem unde rem sunt est sint quibusdam tempora corrupti neque. Adipisci, sunt provident.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row tm-white-box-margin-b">
                  <div class="col-xs-12">
                    <div class="tm-flex">
                      <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                        <h2 class="tm-text-title">Текст с рекомендациями</h2>
                        <p class="tm-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eum atque sunt nisi expedita, vel repudiandae assumenda
                          corporis tenetur. Unde corrupti in vero exercitationem reprehenderit?
                        </p>
                      </div>
                      <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                        <h2 class="tm-text-title">Текст с рекомендациями</h2>
                        <p class="tm-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo vel adipisci totam debitis minima magni esse veritatis
                          voluptatem odit voluptates ea quibusdam alias possimus eum officia nihil voluptatibus quis, ullam illum cum dolore
                          assumenda. Nihil, repellendus error. Facilis, eius repellat!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row tm-white-box-margin-b">
                  <div class="col-xs-12">
                    <div class="tm-flex">
                      <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-textbox-padding">
                        <h2 class="tm-text-title">Текст с рекомендациями</h2>
                        <p class="tm-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, eius at. Possimus, blanditiis amet dicta doloribus illo sit
                          et architecto id doloremque, exercitationem distinctio quae, incidunt facilis qui quibusdam repellat placeat. Sit excepturi
                          optio dolorem minus illum omnis explicabo vero necessitatibus velit aspernatur odit consectetur aperiam, laborum soluta ad
                          fugiat a beatae aut at sed nam dolores porro? Cum alias deleniti, hic reprehenderit animi omnis magnam quo assumenda dolore
                          repudiandae mollitia asperiores dolores officiis modi necessitatibus esse laudantium. Odio repellat, asperiores maxime
                          incidunt suscipit sed dolorem? Esse obcaecati assumenda doloribus!
                        </p>
                        <p class="tm-text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatibus asperiores dolore molestias ut animi labore
                          temporibus doloribus harum facilis!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="cd-full-width">
            <div class="container-fluid js-tm-page-content tm-page-pad" data-page-no="5">
              <div class="tm-contact-page">
                <div class="row">
                  <div class="col-xs-12">
                    <div class="tm-flex tm-contact-container">
                      <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                        <h2 class="tm-contact-info">А если я хочу задать вопрос?</h2>
                        <p class="tm-text">
                          Никаких проблем! Просто оставьте свое сообщение здесь, и как только у меня появиться минутка - я обязательно вам отвечу.
                        </p>

                        <!-- contact form -->
                        <form action="index.html" method="post" class="tm-contact-form">
                          <div class="form-group">
                            <input type="text" id="contact_name" name="contact_name" class="form-control" placeholder="Ваше имя" required />
                          </div>

                          <div class="form-group">
                            <input type="email" id="contact_email" name="contact_email" class="form-control" placeholder="Email" required />
                          </div>

                          <div class="form-group">
                            <textarea
                              id="contact_message"
                              name="contact_message"
                              class="form-control"
                              rows="5"
                              placeholder="Сообщение"
                              required
                            ></textarea>
                          </div>

                          <button type="submit" class="pull-xs-right tm-submit-btn">Отправить!</button>
                        </form>
                      </div>

                      <div class="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                        <h2 class="tm-contact-info">У вас возникло желание позвонить или написать мне?</h2>
                        <h2 class="tm-contact-info">Галина</h2>
                        <div class="tm-about-page">Мой номер телефона: +23123123123</div>
                        <div class="tm-social-icons-container text-xs-center">
                          <a href="#" class="tm-social-link"><i class="fa fa-facebook"></i></a>
                          <a href="#" class="tm-social-link"><i class="fa fa-vk"></i></a>
                          <a href="#" class="tm-social-link"><i class="fa fa-instagram"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <footer class="tm-footer">
        <div class="tm-social-icons-container text-xs-center">
          <a href="#" class="tm-social-link"><i class="fa fa-facebook"></i></a>
          <a href="#" class="tm-social-link"><i class="fa fa-vk"></i></a>
          <a href="#" class="tm-social-link"><i class="fa fa-instagram"></i></a>
        </div>

        <p class="tm-copyright-text">Copyright &copy; <span class="tm-copyright-year">2021</span> bySuvorov</p>
      </footer>
    </div>

    <!-- <div id="loader-wrapper">
      <div id="loader"></div>
      <div class="loader-section section-left"></div>
      <div class="loader-section section-right"></div>
    </div> -->
  </div>
</template>

<script>
import Parfume from './components/parfume-item.vue';
export default {
  components: { Parfume },
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
