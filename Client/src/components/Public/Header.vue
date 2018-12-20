<template>
  <div class="container-global">
    <header>
      <div class="top-header-nav">
        <h1><a href="index.html"><img src="../../assets/logo.png" alt="Home Page"></a></h1>
        <nav class="menu-block">
          <ul class="nav-menu">
            <li :class="item.clazz" v-for="item in navMenuArr">
              <a :href="item.hrefUrl">{{item.itemText}}</a>
              <div class="down-menu" v-show="item.dropDown">
                <ul>
                  <li>选项</li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "header",
    data() {
      return {
        navMenuArr: [
          {clazz: 'menu-home', itemText: '首页', dropDown: false, hrefUrl: '#'},
          {clazz: 'menu-about', itemText: '关于', dropDown: false, downMenu: [], hrefUrl: '#'},
          {clazz: 'menu-strategy', itemText: '攻略', dropDown: false, downMenu: [], hrefUrl: '#'},
          {clazz: 'menu-scenic', itemText: '景点', dropDown: false, downMenu: [], hrefUrl: '#'},
          {clazz: 'menu-login', itemText: '登录', dropDown: false, hrefUrl: ''},
          {clazz: 'menu-register', itemText: '注册', dropDown: false, hrefUrl: '#'}
        ]
      }
    }
  }
</script>

<style scoped>
  header {
    height: 125px;
    display: block;
    position: relative;
    z-index: 999;
    padding-bottom: 105px;
  }

  header a:hover {
    color: #000;
  }

  header h1 {
    position: absolute;
    float: none;
    width: 168px;
    top: 31px;
    left: 50%;
    margin-left: -84px;
    height: 168px;
    z-index: 1000;
  }

  header h1 a {
    display: block;
    overflow: hidden;
    text-indent: -999px;
    transition: 0s ease;
    -o-transition: 0s ease;
    -webkit-transition: 0s ease;
  }

  header h1 a img {
    display: block;
  }

  .menu-block {
    position: relative;
    padding-left: 144px;
    padding-top: 97px;
  }

  .menu-block .nav-menu {
    text-align: center;
    background: transparent;
    font-size: 100%;
    border: 0;
    outline: 0;
    vertical-align: top;
  }

  .nav-menu li {
    float: left;
    display: list-item;
    margin-right: 60px;
    position: relative;
    zoom:1
  }
  .nav-menu li.menu-strategy {
    margin-right: 273px;
  }
  .nav-menu li::after {
    content: "";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both
  }

  .nav-menu li a {
    text-transform: uppercase;
    font-size: 28px;
    font-family: 'Pathway Gothic One', sans-serif;
    color: #fff;
    position: relative;
    font-weight: 300;
    line-height: 28px;
    z-index: 999;
    position: relative;
  }

  .nav-menu .menu-home a {
    color: #263555;
    border-color: #a92c11;
  }
</style>
