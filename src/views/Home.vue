<template>
  <div class="home">
    <form class="search-box" @submit.prevent="onSubmit">
      <input
        class="input"
        v-mask="'#####-###'"
        type="tel"
        placeholder="Informe um CEP válido"
        v-model="cep"
      />
      <button type="submit">
        <Loader v-if="loading" />
        <img v-else src="@/assets/search.png" alt="search icon" />
      </button>
    </form>
    <CepInfo :info="info" />
  </div>
</template>

<script>
import Swal from "sweetalert2";
import CepInfo from "@/components/CepInfo.vue";
import Loader from "@/components/Loader.vue";
import getCep from "@/services/axios.js";

export default {
  name: "Home",
  components: { CepInfo, Loader },
  data: () => ({
    cep: "",
    info: {},
    loading: false,
  }),
  methods: {
    async onSubmit() {
      const cep = this.cep;
      if (!cep) {
        this.info = {};
        return;
      }
      if (cep.length !== 9) {
        this.cepErrorAlert("error", "Oops...", "O CEP informado não é válido");
        return;
      }

      try {
        this.loading = true;
        const res = await getCep(cep);
        this.info = res;
      } catch (err) {
        this.cepErrorAlert("error", "Oops...", err.message || err);
      } finally {
        this.loading = false;
      }
    },

    cepErrorAlert(icon, title, text) {
      Swal.fire({
        icon,
        title,
        text,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #3cb44b;

.home,
.search-box {
  display: flex;
}
.home {
  max-width: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  box-shadow: 1px 1px 1px #000;
}
.search-box {
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;

  .input,
  button {
    border-radius: 5px;
    border: none;
  }

  .input {
    height: 60px;
    width: 80%;
    margin-right: 10px;
    border: 1px solid $primary;
    padding: 0 10px;
  }

  button {
    height: 56px;
    box-shadow: 0 4px 0 #000;
    width: 18%;
    background: $primary;
    cursor: pointer;
  }

  button:active {
    box-shadow: none;
    opacity: 0.8;
    height: 60px;
  }
}
</style>
