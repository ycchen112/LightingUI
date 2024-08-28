<template>
  <div class="indicator-card">
    <div class="details">
      <div class="title">{{ title }}</div>
      <div class="icon-and-value">
        <div class="icon"><i :class="icon"></i></div>
        <div class="value">{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    icon: String
  }
};
</script>

<style scoped>
.indicator-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: #0f2036;
  padding: 10px;
  border-radius: 4px;
  width: 100px;
  height: 70px;
  text-align: left;
  border: 1px dashed #9ef703;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.title {
  font-size: 0.8rem;
  color: #ffffff;
  margin-bottom: 5px;
}

.icon-and-value {
  display: flex;
  align-items: center;
}

.icon {
  font-size: 16px;
  color: #9ef703;
  margin-right: 5px;
}

.value {
  font-size: 15px;
  color: #ffffff;
  font-weight: bold;
}
</style>
