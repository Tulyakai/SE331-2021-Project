<template>
  <div class="home">
    <img class="img-fluid mb-3" src="../assets/logo.png" />
    <div class="row">
      <div class="col-md-3 col-sm-12 p-4 mt-md-3" id="sidebar">
        <div class="container mb-3 bg-dark p-3 rounded">
          <h5>Vaccine brands</h5>
          <div class="row mt-3">
            <img src="../assets/astrazeneca.png" style="width: 50px" />
            <label class="text mt-3">Astrazeneca</label>
          </div>

          <div class="row mt-3">
            <img src="../assets/sinovac.png" style="width: 50px" />
            <label class="text mt-3">Sinovac</label>
          </div>
          <div class="row mt-3">
            <img src="../assets/sinopharm.png" style="width: 50px" />
            <label class="text mt-3">Sinopharm</label>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-sm-12 p-3 mt-3 ml-md-4" id="content">
        <Card>
          <!-- add Patient's data -->
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "PatientList",
  components: {
    Card,
  },
};
</script>

<style>
#content {
  border: 1px solid #35393d;
  border-radius: 6px;
  background-color: #1e2124;
}

#sidebar {
  border: 1px solid #35393d;
  border-radius: 6px;
  background-color: #1e2124;
  height: fit-content;
}
</style>
