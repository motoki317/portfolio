<template>
  <div class="works">
    <h1>My Works</h1>
    <h3>作ったもの</h3>

    <div class="work-list">
      <div>
        <h2>2018</h2>
        <b>moto-bot （Discord bot）</b>
        <p>
          <a
            href="https://forums.wynncraft.com/threads/discord-bot-for-wynn-utility-commands-moto-bot.223425/"
            >Botについて</a
          >
          -
          <a
            href="https://discordapp.com/oauth2/authorize?client_id=418413540857085972&scope=bot&permissions=93248"
            >Invite Link</a
          >
          <br />
          <img src="../assets/images/moto-bot.png" alt="moto-bot" />
          <br />DiscordのBotを書いた - 初めてのプログラミングをした。
          <br />言語はJava, ライブラリはJDA（Java Discord
          API）を使用。主にWynncraft（Minecraftのサーバー）のAPIを使って便利そうな機能を
          追加しまくったらいつの間にか肥大化していた。 <br />音楽とか聞けるよ！
        </p>
      </div>
      <h2>2019</h2>
      <b>簡単なフロントエンド</b>
      <p>
        traPの講習会で教えてもらったVue.jsを使い簡単なサイトを作ってみる。
        <br />（Vue.jsのRouter初期機能を使っているだけ） <br />作ったもの
        <br />
        <a href="https://wynn-ingreds-searcher.netlify.com/"
          >Wynn Ingredients Searcher</a
        >
        - 実用的（にはほど遠い）
        <br />
        <img
          src="../assets/images/wynn-ingreds-searcher.png"
          alt="wynn-ingreds-searcher"
          class="wynn-ingreds-searcher"
        />
        <br />
        <br />
        <b>このサイト</b>
        <br />Self-explanatory - 生やした。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Works"
};
</script>

<style>
.work-list {
  width: 720px;
  margin: auto;
}

.wynn-ingreds-searcher {
  margin: 5px;
  border: 1px solid #eee;
}
</style>
