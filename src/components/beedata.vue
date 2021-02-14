<template>
  <div>
    <h1>BEEDATA</h1>
    <DataTable />
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";

export default {
  name: "beedata",
  components: {
    DataTable,
  },
};
</script>

<style scoped></style>
