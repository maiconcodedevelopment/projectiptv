<template>
   <div>
     <router-view :outro="name" />
   </div>
</template>

<script>
export default {
  name:'View',
  props:['name'],
  mounted(){
     console.log(this.name)
   }
  }
</script>

<style lang="scss">

</style>
