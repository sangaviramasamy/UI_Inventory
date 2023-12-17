<template>
  <div>
    <sample :title="'test'" @enlarge-text="alertfun"></sample>

    <div>
      <div>
      <filtercomponent ></filtercomponent>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script src="./js/app"></script>

<style lang="scss" scoped>
@import "@blibli/blue-design-tokens/dist/tokens-default.scss";
 
</style>
