<template>
  <div class="nav mt-4">
    <div class="link container justify-content-center">
      <router-link :to="{ name: 'PatientDetail' }"
        >Patient's detail</router-link
      >
      |
      <router-link :to="{ name: 'VaccineDetail' }"
        >Vaccine's detail</router-link
      >
    </div>
    <div class="pcontent container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.pcontent {
  min-height: 74vh;
}
.link a {
  color: #59ebe6;
}
.link a:hover {
  color: white;
}
</style>
