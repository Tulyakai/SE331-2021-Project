<template>
  <div class="row justify-content-center">
    <img class="img-fluid" src="../assets/banner.png" />
    <div class="container mt-2">
      <div
        class="row bg-dark mb-4 p-5 rounded"
        v-for="vaccine in Gstore.vaccines"
        :key="vaccine.id"
      >
        <!-- vaccine pic -->
        <div class="col-md-4">
          <img
            class="img-fluid mt-3"
            src="../assets/astrazeneca.png"
            style="width: 300px"
            v-if="vaccine.brand == 'Astrazeneca'"
          />
          <img
            class="img-fluid mt-3"
            src="../assets/sinovac.png"
            style="width: 300px"
            v-else-if="vaccine.brand == 'Sinovac'"
          />
          <img
            class="img-fluid mt-3"
            src="../assets/sinopharm.png"
            style="width: 300px"
            v-else
          />
        </div>

        <!-- vaccine details -->
        <div class="col-md-7">
          <!-- <h1>  add vaccine brand </h1> -->
          <h1>{{ vaccine.brand }}</h1>
          <p>
            <span class="font-weight-bold bg-info p-1 mr-2 rounded"
              >Country</span
            >
            <!-- add vaccine country  -->
            {{ vaccine.country }}
          </p>
          <p>
            <span class="font-weight-bold bg-info p-1 mr-2 rounded"
              >Age recommend</span
            >
            <!-- add vaccine age range -->
            {{ vaccine.ageRange }}
          </p>
          <p>
            <span class="font-weight-bold bg-info p-1 mr-2 rounded">Dose</span>
            <!-- add vaccine dose   -->
            {{ vaccine.dose }} dose(s)
          </p>
          <p>
            <a
              :href="vaccine.website"
              class="btn btn-outline-success p-1 rounded"
              target="_blank"
            >
              Website
            </a>
          </p>
          <h3 class="font-weight-bold bg-info px -1 rounded d-inline px-1">
            Side effects
          </h3>
          <!-- add side effect -->
          <ul>
            <li v-for="(effect, key) in vaccine.sideEffect" :key="key">
              {{ effect }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "available-vaccine",
  inject: ["Gstore"],
};
</script>
