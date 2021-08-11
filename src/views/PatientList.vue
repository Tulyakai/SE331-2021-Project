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
        <p>All patients: {{ totalPatients }}</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <Card
            v-for="patient in patients"
            :patient="patient"
            :key="patient.id"
          ></Card>
        </div>
        <nav class="navbar mt-10 justify-content-center">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <router-link
                class="page-link"
                :to="{ name: 'PatientList', query: { page: page - 1 } }"
                >Previous</router-link
              >
            </li>
            <li class="page-link">{{ page }}</li>
            <li class="page-item">
              <router-link
                class="page-link"
                :to="{ name: 'PatientList', query: { page: page + 1 } }"
                v-if="hasNextPage"
                >Next</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card";
import { watchEffect } from "@vue/runtime-core";
import PatientService from "@/service/PatientService.js";

export default {
  name: "PatientList",
  components: {
    Card,
  },
  data() {
    return {
      patients: null,
      totalPatients: null,
    };
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
    limit: {
      type: Number,
      required: true,
    },
  },
  created() {
    watchEffect(() => {
      PatientService.getPatients(this.page, this.limit)
        .then((res) => {
          this.patients = res.data;
          this.totalPatients = res.headers["x-total-count"];
        })
        .catch((e) => {
          console.log(e);
        });
    });
  },
  computed: {
    hasNextPage() {
      let totalPage = Math.ceil(this.totalPatients / this.limit);
      return this.page < totalPage;
    },
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
