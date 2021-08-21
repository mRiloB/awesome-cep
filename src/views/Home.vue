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
        <img src="@/assets/search.png" alt="search icon" />
      </button>
    </form>
    <CepInfo />
  </div>
</template>

<script>
import Swal from "sweetalert2";
import CepInfo from "@/components/CepInfo.vue";

export default {
  name: "Home",
  components: {CepInfo},
  data: () => ({
    cep: "",
  }),
  methods: {
    onSubmit() {
      const cep = this.cep;
      if (!cep) return;
      if (cep.length !== 9) {
        this.cepErrorAlert();
        return;
      }

      // chamar api com os dados
    },

    cepErrorAlert() {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "O CEP informado não é válido",
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
