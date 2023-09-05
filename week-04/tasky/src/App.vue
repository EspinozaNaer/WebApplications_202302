<script>
import {NewsApiService} from "@/news/service/new-api.service";
import SideMenu from "@/news/components/side-menu.component.vue";
import MainContent from "@/news/components/main-content.component.vue";
import UnavailableContent from "@/news/components/unavailable-content.component.vue";
import FooterContent from "@/news/components/footer-content.component.vue";

export default {
  name: 'App',
  components: {FooterContent, UnavailableContent, MainContent, SideMenu},
  data() {
    return {
      sidebarVisible: false,
      articles: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created() {
    this.getArticlesForSource('bbc-news');
  },
  methods: {

  }
}
</script>

<template>

</template>

<style scoped>

</style>
