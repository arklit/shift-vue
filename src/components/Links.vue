<template>
  <div class="links-wrapper">
    <div class="links">
      <div
      v-for="link in links"
      :key="link.id"
      :class="{link, active: link.active }"
      @click="$emit('activateTab', link)"
      >{{link.text}}</div>
    </div>
  </div>
</template>
<script>
 export default {
   name: 'Links',
   props: ['links']
 }
</script>
<style lang="scss">
.links-wrapper {
  position: relative;
  width: 40%;
  @media screen and (max-width: 1336px) {
    width: 100%;
  }
}
.links {
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
  .link {
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-transform: lowercase;
    transition: all .4s ease-out;
    color: #DADADA;
    cursor: pointer;
    -webkit-text-stroke: 1.5px #d9d9d9;
    &:hover {
      -webkit-text-stroke: 1.5px black;
      color: black;
    }
  }
  .link.active {
    padding-left: 113px;
    -webkit-text-stroke: 1.5px black;
    color: black;
  }
  @media screen and (max-width: 1336px) {
    display: none;
  }
}
</style>