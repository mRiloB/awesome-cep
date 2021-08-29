<template>
  <div class="cep-info">
    <Row title="Endereço:"    :text="info.address || '---'" />
    <Row title="Bairro:"      :text="info.district || '---'" />
    <Row title="Cidade:"      :text="info.city || '---'" />
    <Row title="UF:"          :text="info.state || '---'" />
    <Row title="Latitude:"    :text="info.lat || '---'" />
    <Row title="Longitude:"   :text="info.lng || '---'" />
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
