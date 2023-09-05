<script>
import {NewsApiService} from "@/news/service/new-api.service";

export default {
  name:"side-menu",
  props:{
    visible: Boolean
  },
  data(){
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },
  created(){
    this.newsApi.getSource()
        .then(response => {
          this.sources = response.data.sources;
          this.sources.map(source => source.urlToLogo = this.newsApi.getUrlToLogo(source));
          console.log('data: ');
          console.log(response.data.sources);
        })
        .catch(e => this.errors.push(e));
  },
  methods: {
    onSourceSelected(source){
      this.$emit('source-selected',source)
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>