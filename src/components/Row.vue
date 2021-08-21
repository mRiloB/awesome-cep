<template>
  <div class="row">
    <p id="title">{{ title }}</p>
    <p id="text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Row",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.row {
  border-bottom: 1px solid #dedede;
  margin-bottom: 15px;
  height: 50px;

  p {
    width: 100%;
    font-size: 18px;
  }

  p#title {
    text-align: left;
    font-weight: bold;
  }

  p#text {
    text-align: right;
  }
}
.row:last-child {
    margin-bottom: 0;
}
</style>
