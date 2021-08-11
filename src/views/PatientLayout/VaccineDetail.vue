<template>
  <div class="row mt-md-4 mt-sm-4">
    <h3>Vaccine's detail</h3>
    <div class="container p-4 mt-3" id="content">
      <div class="row justify-content-center">
        <div class="col-4">
          <!-- add vaccine's image -->
        </div>

        <!-- Show first dose infornation  -->
        <div class="col-4 mt-3">
          <h2>First dose</h2>
          <br />
          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Brand:</span>
            <!-- add Vaccine Brand Name -->
          </p>
          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Timestamp:</span>
            <!-- add timestamp  -->
          </p>

          <!-- suggestion box first dose -->
          <form>
            <input
              type="text"
              placeholder="Suggest for 1st dose"
              required
            />
            <button class="btn btn-success btn-sm ml-1">Add</button>
          </form>
          <br />
          <p class="font-weight-bold bg-info p-1 d-inline rounded">
            Suggestion from doctor:
          </p>
          <!-- Show suggestion if no suggestion show  "No suggestion yet" -->
          
        </div>
      </div>
    </div>

    <!-- Show seccond dose infornation if haven't got seccond dose show "Have not got seccond dose yet" -->
    
    <div
      class="container p-4 mt-3"
      id="content"
    >
      <div class="row justify-content-center">
        <div class="col-4">
          <!-- add vaccine's image -->
        </div>
        <div class="col-4">
          <h2>Second dose</h2>
          <br />

          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Brand:</span>
            <!-- add Vaccine Brand Name -->
          </p>
          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Timestamp:</span>
            <!-- add timestamp  -->
          </p>

          <!-- suggestion box first dose -->
          <form >
            <input
              type="text"
              placeholder="Suggest for 2nd dose"
              required
            />
            <button class="btn btn-success btn-sm ml-1">Add</button>
          </form>
          <br />
          <p class="font-weight-bold bg-info p-1 d-inline rounded">
            Suggestion from doctor:
          </p>
          <!-- suggestion box second dose if no suggestion show  "No suggestion yet"-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {

};
</script>

<style scoped>
#content {
  border: 1px solid #35393d;
  border-radius: 6px;
  background-color: #1e2124;
}
</style>
