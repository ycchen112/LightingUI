<template>
  <div class="header-layout">
    <div class="logo">奥莱物联</div>
    <div class="right-section">
      <a href="#" class="manual-button">操作手册</a>
      <div class="profile">
        <img src="https://via.placeholder.com/32" alt="avatar" />
        <span>plc@admin</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3c8dbc;
  padding: 0 20px;
  height: 50px;
}

.logo {
  color: #fff;
  font-size: 18px;
  font-weight: bold;
}

.right-section {
  display: flex;
  align-items: center;
}

.manual-button {
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff; /* White border */
  padding: 5px 10px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin-right: 20px;
}

.manual-button:hover {
  background-color: #fff;
  color: #3c8dbc;
}

.profile {
  display: flex;
  align-items: center;
}

.profile img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
}

.profile span {
  color: #fff;
}
</style>
