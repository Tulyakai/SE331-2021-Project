<template>
  <div class="row mt-md-3 mt-sm-2">
    <div class="col-md-5 col-sm-12 mt-3">
      <!-- add patient's image -->
      <img
        class="img-thumbnail"
        :src="Gstore.patient.image"
        v-if="Gstore.patient.image"
        style="height: 300px"
      />
      <img
        class="img-thumbnail"
        src="https://i.pinimg.com/474x/04/f0/42/04f0421b45476cc63c3266a70a9de1b7--worlds-largest-mondo.jpg"
        style="height: 300px"
        v-else
      />
    </div>
    <div class="col-md-5 col-sm-12 p-4 mt-3" id="content">
      <h3>Patient's detail</h3>
      <div class="container mt-5">
        <p>{{ Gstore.patient.firstname }} {{ Gstore.patient.surname }}</p>
        <p>Gender: {{ Gstore.patient.gender }}</p>
        <p>Age: {{ Gstore.patient.age }}</p>
        <p>Hometown: {{ Gstore.patient.hometown }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["Gstore"],
};
</script>

<style scoped>
#content {
  border: 1px solid #35393d;
  border-radius: 6px;
  background-color: #1e2124;
}
</style>
