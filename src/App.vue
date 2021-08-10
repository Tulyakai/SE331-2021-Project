<template>
  <nav
    class="
      navbar navbar-dark
      bg-dark
      justify-content-between
      flex-nowrap flex-row
    "
  >
    <div class="container">
      <router-link
        :to="{ name: 'PatientList' }"
        class="navbar-brand float-left"
      >
        <img src="../src/assets/logo.png" style="width: 100px" />
      </router-link>
      <ul class="nav navbar-nav flexed-top float-right">
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link pr-3"
            >Available Vaccines</router-link
          >
        </li>
      </ul>
    </div>
  </nav>

  <div class="container mt-3">
    <router-view />
  </div>
  <nav
    class="
      navbar navbar-dark
      bg-dark
      mt-4
      justify-content-center
      flex-nowrap flex-row
    "
    style="background-color: rgba(0, 0, 0, 0.2)"
  >
    <div class="text-center p-3">© 2021 Copyright: Krittaporn and Tulyawat</div>
  </nav>
</template>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #171a18;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
