<template>
  <div class="App">
    <Shift  @prev="prevArticle" @next="nextArticle"/>
    <Links
        :links="links"
        @activateTab="activateTab"
        @prev="prevArticle"
        @next="nextArticle"/>
    <Article
        :title="activeArticle.title"
        :text="activeArticle.text"
        :src="activeArticle.src"/>
  </div>
</template>
<script>
import Links from './Links';
import Article from './Article'
import {defineComponent} from "vue";
import {articles} from "@/data/data";
import {links} from "@/data/data";
import Shift  from './Shift';
 export default defineComponent({
   name: "App",
   components: { Links, Article, Shift },
   data() {
     return {
       articles: articles,
       links: links,
       activeArticle: articles[0]
     };
   },
   methods: {
     activateTab(link) {
       const article = this.articles.find(article => article.id === link.id);
       this.activeArticle = article;
       this.links.forEach(item => item.active = false);
       link.active = true;
     },
     prevArticle() {
       const currentIndex = this.articles.findIndex(article => article.id === this.activeArticle.id);
       if (currentIndex > 0) {
         this.activeArticle = this.articles[currentIndex - 1];
       }
     },
     nextArticle() {
       const currentIndex = this.articles.findIndex(article => article.id === this.activeArticle.id);
       if (currentIndex < this.articles.length - 1) {
         this.activeArticle = this.articles[currentIndex + 1];
       }
     },
   }
 })
</script>

<style lang="scss">
@import '../scss/fonts.scss';
 * {
   padding: 0;
   margin: 0;
 }
 a {
   text-decoration: none;
   color: #000000;
 }
 body {
   background: #F0F0F0;
   font-family: "Suisse Intl", sans-serif;
   -webkit-text-stroke: 2.5px black;
   @media screen and (max-width: 1366px) {
     -webkit-text-stroke: 1.5px black;
   }
 }
 .App {
   padding: 32px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   position: relative;
   gap: 16px;
   @media screen and (max-width: 1336px) {
     padding: 8px;
     flex-direction: column;
   }
 }
</style>