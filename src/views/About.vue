<template>
  <div class="row justify-content-center">
    <img class="img-fluid" src="../assets/banner.png" />
    <div class="container mt-2">
      <div class="row bg-dark mb-4 p-5 rounded">
        <!-- vaccine pic -->
        <div class="col-md-4">
          <img
            class="img-fluid mt-3"
            src="../assets/astrazeneca.png"
            style="width: 300px"
          />
          <img
            class="img-fluid mt-3"
            src="../assets/sinovac.png"
            style="width: 300px"
          />
          <img
            class="img-fluid mt-3"
            src="../assets/sinopharm.png"
            style="width: 300px"
          />
        </div>

        <!-- vaccine details -->
        <div class="col-md-7">
          <!-- <h1>  add vaccine brand </h1> -->
          <p>
            <span class="font-weight-bold bg-info p-1 rounded">Country:</span>
            <!-- add vaccine country  -->
          </p>
          <p>
            <span class="font-weight-bold bg-info p-1 rounded">
              Age recommend:
            </span>
            <!-- add vaccine age range -->
          </p>
          <p>
            <span class="font-weight-bold bg-info p-1 rounded"> Dose: </span>
            <!-- add vaccine dose   -->
            doses
          </p>
          <p>
            <a class="btn btn-outline-success p-1 rounded" target="_blank">
              Website
            </a>
          </p>
          <h3 class="font-weight-bold bg-info p-1 rounded d-inline px-1">
            Side effects:
          </h3>
          <!-- add side effect -->
        </div>
      </div>
    </div>
  </div>
</template>
