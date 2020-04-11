<template>
  <div id="app" name="app">
    <div style="position: fixed;width:100%;top: 0;left: 0;z-index: 3;">
      <Nav></Nav>
    </div>
    <router-view>
      <!--展示页面的路由-->
    </router-view>
    <div v-show="show" @click="BC" class="UP"><i class="el-icon-caret-top" style="color: #4b9fff"></i></div>
  </div>
</template>

<script>
  import Nav from "./components/Nav/Nav.vue"

  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      BC() {
        let i = 5;
        let time = setInterval(() => {
          if (document.getElementsByTagName("html")[0].scrollTop > 0) {
            i += 10;
            document.getElementsByTagName("html")[0].scrollTop -= i;
            if (document.getElementsByTagName("html")[0].scrollTop < 0) {
              document.getElementsByTagName("html")[0].scrollTop = 0;
              clearInterval(time);
            }
          } else {
            clearInterval(time);
          }
        }, 20);

      }
    },
    mounted() {
      document.onscroll = () => {
        if (document.getElementsByTagName("html")[0].scrollTop > 400) {
          this.show = true
        } else {
          this.show = false
        }
      }

    },
    components: {Nav}
  }
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f7f7f7;
  }

  html {
    height: 100%;
    width: 100%;
  }

  i {
    vertical-align: top;
  }

  @font-face {
    font-family: "iconfont";
    src: url('assets/fonts/iconfont.eot'); /* IE9 */
    src: url('assets/fonts/iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */ url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMoAAsAAAAAB2QAAALaAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqCSIIpATYCJAMMCwgABCAFhG0HPBt1BsgOJSHB2IDhEUhAPHztx/7c3UU9qUUyPp0kiSSJIWRLJChJNFRC9e/TRUN7g3ZV5iDmaCQLZ3KsQD/dQaz2Owg+cT/1r8Tz2Wxu1XkeCTjBgXbgmmwDLqKxbBi74AXuJ9BogCdmLTmzEKgp7GGB2Odx6oBaQa90lIZ6obZhbhHnlNWn03QDcBY9P37xDzWSmsweu76X1Ahiv+9/cV6xozpUGRAEy1nBFpExByjEdqN9i2ISn6OoUZcrdefWKkJaKvS/IuIbytqD/vESUcsubgZTMJH4vt/jEHw/v0ACGdQmyV3ACVJ3T718DDvYsY8dPj4qHnrg60HsriuBY8fuWKXN9yTtyx8DNtcfhV9o4O37rTYKZ3Ybaw73pK/NrHDlQWDzjhtG8ehW0+XyY5/XkvXj03/0RM/NDiY1YsOrYhXCYsPUFLsrpyrkcF2WpBrNxMUxq/93U4SF7/+5FN517gYKTw+Nu21HfIw/fG0gKSaNhe9/JvqeWcmVmy5oG2jn6hW7P/Xp4816gwVH1gKo3vN69oi+wSD49kt+XKMb+bVes4AvB6/NA1/1XsBwo/p7dQT/XjCwqRgi25CLxvf4ljNbm2hNwJJGVGx3pyfTlT2Diwn1ejIkdfqR1RsjFdocajSZR616i2g0K2Vxky6EoigNmNELENodRNLqEVm7m6RCk6NGr7eo1R6KaLQRhms2mQieRgJBdRQ1wvo2yGuQiLFrohpxaT7iNAnrSF4U0YsRYXkh6OftW06lIDEiS0xgmzn+lGKIiUQEk8FhSCiUQCmR8FED9eZSKg338cFNd/JukIiAhlUEUodCGkH12kA8DSTEcNCZ0qg8Ph/C0USoDukoq3MXQwgWr3vIjzffAaQUuXhQ2aMcw2rG4Y+iMAgjJESgZGBFhE5cApI29+JDGlDeuBOiUuF8UDs8VO69vVL0A3msCntMjhQ5irodXp243VWqRTY/AAAAAA==') format('woff2'),
    url('assets/fonts/iconfont.woff') format('woff'),
    url('assets/fonts/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */ url('assets/fonts/iconfont.svg') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-dianzan:before {
    content: "\e8ad";
  }

  .icon-dianzan1:before {
    content: "\e8c3";
  }

  .UP {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    z-index: 4;
    position: fixed;
    right: 10%;
    bottom: 10%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    transition: background-color 0.3s;
    background-color: #ffffff;
  }

  .UP:hover {
    background-color: #f0f0f0;
  }
</style>
