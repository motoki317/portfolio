<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
      crossorigin="anonymous"
    />

    <img alt="icon" src="../assets/icon.png" class="icon" />
    <h1>motoki1</h1>
    <h2>制作物とかをまとめるところ</h2>
    <div class="introduction">
      <h3>自己紹介をちょっと</h3>
      <p>
        <b>名前</b>
        <br />motoki1 または toki
        <br />
        <b>所属</b>
        <br />titech - デジタル創作同好会traP（2019~）
      </p>
      <p>
        <b>趣味</b>
        <br />プログラミング,アニメ（鑑賞）, けものフレンズ etc.
        <br />
        <b>プログラミング</b>
        <br />Java, Go, Vue.js, HTML, CSS etc. <br />メインはJava
      </p>
    </div>
    <div class="footer">
      <b>その他</b>
      <br />
      <span class="fab fa-twitter twitter"></span>
      <a href="https://twitter.com/motoki1_">motoki1_</a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style>
.icon {
  width: 100px;
  border-radius: 100%;
}

.introduction {
  margin-top: 50px;
}

.footer {
  margin-top: 20px;
}

.twitter {
  color: #55acee;
}
</style>
