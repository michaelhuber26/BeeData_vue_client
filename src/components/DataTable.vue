<template>
  <div>
    <h2>Data from MongoDB:</h2>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <table class="styled-table">
      <thead>
        <tr>
          <th>ID (in DB)</th>
          <th>Node</th>
          <th>Temp[°C]</th>
          <th>Messzeitpunkt</th>
          <th>Messdatum</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in data" v-bind:item="data" v-bind:key="data._id">
          <td>{{ data._id }}</td>
          <td>{{ data.device_id }}</td>
          <td>{{ data.temp }}</td>
          <td>
            <!-- Damit zb 16:05 richtig dargestellt wird (sonst 16:5) -->
            {{
              ("0" + new Date(data.time).getHours()).slice(-2) +
                ":" +
                ("0" + new Date(data.time).getMinutes()).slice(-2)
            }}
          </td>

          <td>
            <!-- Damit zb 01.01.2020 so dargestellt (sonst 1.1.2020) -->
            {{
              ("0" + new Date(data.time).getDate()).slice(-2) +
                "." +
                ("0" + new Date(data.time).getMonth()).slice(-2) +
                "." +
                new Date(data.time).getFullYear()
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DataService from "../DataService.js";

export default {
  name: "DataTable",
  data() {
    return {
      data: [],
      error: "",
      text: "",
    };
  },
  async created() {
    try {
      this.data = await DataService.getData();
    } catch (err) {
      this.error = err.message;
    }
  },
};
</script>

<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 1em;
  font-family: sans-serif;
  min-width: 45%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #dbcb35;
  color: #ffffff;
  text-align: center;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: thin solid #dddddd;
}
.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #f3e34c;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #f3e34c;
}
</style>
