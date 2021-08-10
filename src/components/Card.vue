<template>
  <div class="col-md-4 mt-2">
    <router-link
      
      style="text-decoration: none"
    >
      <div class="card">
        <!-- add patien's image -->
        <img
          class="img-fluid"
          src="https://i.pinimg.com/474x/04/f0/42/04f0421b45476cc63c3266a70a9de1b7--worlds-largest-mondo.jpg"
          alt="profile"
          style="height: 230px; object-fit: cover"
        />

        <div class="card-body">
          <h5 class="card-title"> 
            First name: <!-- add patien's First name -->
          </h5>
          <h5 class="card-title">
            Last name:<!-- add patien's Last name -->
          </h5>
          <p class="card-text">
            Age: <!-- add patien's age -->
          </p>
        </div>
        
        <span >
          <img
            src="../assets/astrazeneca.png"
            style="width: 50px"
          />
          <img
            src="../assets/sinovac.png"
            style="width: 50px"
          />
          <img src="../assets/sinopharm.png" style="width: 50px" />
          <img
            src="../assets/astrazeneca.png"
            style="width: 50px"
          />
          <img
            src="../assets/sinovac.png"
            style="width: 50px"
          />
          <img src="../assets/sinopharm.png" style="width: 50px" />
        </span>
        <span >
          <img
            src="../assets/astrazeneca.png"
            style="width: 50px"
          />
          <img
            src="../assets/sinovac.png"
            style="width: 50px"
          />
          <img src="../assets/sinopharm.png" style="width: 50px" />
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    patient: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #2d3033;
  color: rgb(192, 195, 197);
  margin-bottom: 20px;
  padding-bottom: 8px;
}
.card:hover {
  background-color: #46494d;
}
.event-card {
  padding: 20px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
