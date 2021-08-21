<template>
  <div class="cep-info">
    <Row title="Endereço:"  text="Rua Santa Rosa" />
    <Row title="Bairro:"    text="Santa Paula" />
    <Row title="Cidade:"    text="São Caetano do Sul" />
    <Row title="UF:"        text="São Paulo" />
    <Row title="Latitude:"  text="-23.6150574" />
    <Row title="Longitude:" text="-46.5687067" />
  </div>
</template>

<script>
import Row from "./Row.vue";

export default {
  name: "CepInfo",
  props: {
    info: {
      type: Object,
    },
  },
  components: {
    Row,
  },
};
</script>

<style scoped lang="scss">
.cep-info {
    width: 100%;
}
</style>
