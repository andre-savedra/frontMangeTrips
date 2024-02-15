<template>
  <div class="menu-main">
    <Menubar :model="items"
    />
   
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  menuHeight: {type: String, required: true}
});

const height = computed(()=> props.menuHeight);

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-fw pi-home',
  },
  {
    label: 'Viagens',
    icon: 'pi pi-fw pi-car',
  },
])

</script>

<style scoped lang="scss">
.menu-main{
  width: 100vw;
  height: v-bind(height);
  min-height: 2rem;
  background: rgba(173,78,182,0);  
  color:black;
}
</style>