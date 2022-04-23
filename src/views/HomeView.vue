<template>
  <div class="home">
    <Datagrid />
  </div>
</template>

<script>
import Datagrid from '@/components/Datagrid.vue';

export default {
  name: 'HomeView',
  components: {
    Datagrid,
  },
};
</script>

<style lang="scss">
.home {
  height: 100%;
}
</style>
