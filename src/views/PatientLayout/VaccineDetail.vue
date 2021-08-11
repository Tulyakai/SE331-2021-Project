<template>
  <div class="row mt-md-4 mt-sm-4">
    <h3>Vaccine's detail</h3>
    <div class="container p-4 mt-3" id="content">
      <div class="row justify-content-center">
        <div class="col-4">
          <!-- add vaccine's image -->
          <img
            class="img-fluid"
            src="../../assets/astrazeneca.png"
            v-if="Gstore.patient.vaccination.firstdose.brand == 'Astrazeneca'"
            style="height: 300px"
          />
          <img
            class="img-fluid"
            src="../../assets/sinopharm.png"
            v-else-if="
              Gstore.patient.vaccination.firstdose.brand == 'Sinopharm'
            "
          />
          <img class="img-fluid" src="../../assets//sinovac.png" v-else />
        </div>

        <!-- Show first dose infornation  -->
        <div class="col-4 mt-3">
          <h2>First dose</h2>
          <br />
          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Brand:</span>
            <!-- add Vaccine Brand Name -->
            {{ Gstore.patient.vaccination.firstdose.brand }}
          </p>
          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Timestamp:</span>
            <!-- add timestamp  -->
            {{ Gstore.patient.vaccination.firstdose.timestamp }}
          </p>
          <!-- suggestion box first dose -->
          <form @submit.prevent="addSuggest(1)">
            <input type="text" placeholder="Suggest for 1st dose" v-model="suggest1" required />
            <button class="btn btn-success btn-sm ml-1">Add</button>
          </form>
          <br />
          <p class="font-weight-bold bg-info p-1 d-inline rounded">
            Suggestion from doctor:
          </p>
          <!-- Show suggestion if no suggestion show  "No suggestion yet" -->
          <ul
            v-if="Gstore.patient.vaccination.firstdose.suggestion.length != 0"
          >
            <li
              v-for="(val, key) in Gstore.patient.vaccination.firstdose
                .suggestion"
              :key="key"
            >
              {{ val }}
            </li>
          </ul>
          <p class="font-weight-bold text-danger mt-3" v-else>
            No suggestion yet
          </p>
        </div>
      </div>
    </div>

    <!-- Show seccond dose infornation if haven't got seccond dose show "Have not got seccond dose yet" -->
    <div
      class="container p-4 mt-3"
      id="content"
      v-if="!Gstore.patient.vaccination.seconddose"
    >
      <h2 class="text-danger">Have not got seccond dose yet</h2>
    </div>
    <div
      class="container p-4 mt-3"
      id="content"
      v-if="Gstore.patient.vaccination.seconddose"
    >
      <div class="row justify-content-center">
        <div class="col-4">
          <!-- add vaccine's image -->
          <img
            class="img-fluid"
            src="../../assets/astrazeneca.png"
            v-if="Gstore.patient.vaccination.seconddose.brand == 'Astrazeneca'"
          />
          <img
            class="img-fluid"
            src="../../assets/sinopharm.png"
            v-else-if="
              Gstore.patient.vaccination.seconddose.brand == 'Sinopharm'
            "
          />
          <img class="img-fluid" src="../../assets//sinovac.png" v-else />
        </div>
        <div class="col-4">
          <h2>Second dose</h2>
          <br />

          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Brand:</span>
            {{ Gstore.patient.vaccination.seconddose.brand }}
          </p>
          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Timestamp:</span>
            {{ Gstore.patient.vaccination.seconddose.timestamp }}
          </p>

          <!-- suggestion box first dose -->
          <form @submit.prevent="addSuggest(2)">
            <input
              type="text"
              placeholder="Suggest for 2nd dose"
              v-model="suggest2"
              required
            />
            <button class="btn btn-success btn-sm ml-1">Add</button>
          </form>
          <br />
          <p class="font-weight-bold bg-info p-1 d-inline rounded">
            Suggestion from doctor:
          </p>
          <!-- suggestion box second dose if no suggestion show  "No suggestion yet"-->
          <ul
            v-if="Gstore.patient.vaccination.seconddose.suggestion.length != 0"
          >
            <li
              v-for="(val, key) in Gstore.patient.vaccination.seconddose
                .suggestion"
              :key="key"
            >
              {{ val }}
            </li>
          </ul>
          <p class="font-weight-bold text-danger mt-3" v-else>
            No suggestion yet
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PatientService from "@/service/PatientService.js";

export default {
  inject: ["Gstore"],
  data() {
    return {
      suggest1: "",
      suggest2: "",
      newData: null,
    };
  },
  methods: {
    addSuggest(dose) {
      let myTarget = JSON.parse(JSON.stringify(this.Gstore.patient));
      if (dose == 1) {
        myTarget.vaccination.firstdose.suggestion = [
          ...myTarget.vaccination.firstdose.suggestion,
          this.suggest1,
        ];
      } else {
        myTarget.vaccination.seconddose.suggestion = [
          ...myTarget.vaccination.seconddose.suggestion,
          this.suggest2,
        ];
      }
      this.newData = myTarget;
      PatientService.postSuggestion(this.Gstore.patient.id, this.newData).catch(
        (err) => {
          console.log(err);
        }
      );
    },
  },
};
</script>

<style scoped>
#content {
  border: 1px solid #35393d;
  border-radius: 6px;
  background-color: #1e2124;
}
</style>
