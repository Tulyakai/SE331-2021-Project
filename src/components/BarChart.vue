<template>
  <div class="col-12">
    <column-chart
      loading="Loading..."
      :colors="['#b00', '#666', '#d23']"
      :data="[
        ['Astrazeneca', this.fdose.az + this.sdose.az],
        ['Sinovac', this.fdose.sv + this.sdose.sv],
        ['Sinopharm', this.fdose.sp + this.sdose.sp],
      ]"
    ></column-chart>
  </div>
</template>
<script>
export default {
  name: "bchart",
  props: ["fdose", "sdose"],
};
</script>
