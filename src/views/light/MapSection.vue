<template>
    <div class="map-section">
      <img src="/assets/map-placeholder.png" alt="地图" class="map-image" />
      <div class="axis">
        <div class="axis-line x-axis"></div>
        <div class="axis-line y-axis"></div>
        <div class="axis-line z-axis"></div>
      </div>
    </div>
  </template>
  
  <style>
  .map-section {
    position: relative;
    width: 250px;
    height: 150px;
    margin-bottom: 15px;
  }
  
  .map-image {
    width: 100%;
    height: 100%;
  }
  
  .axis {
    position: absolute;
    top: 45%;
    left: 45%;
  }
  
  .axis-line {
    position: absolute;
    width: 2px;
    height: 100px;
    background: #ffd700;
  }
  
  .x-axis {
    top: 20%;
    left: 0;
    transform: rotate(90deg);
  }
  
  .y-axis {
    left: 50%;
    top: 0;
  }
  
  .z-axis {
    top: 50%;
    right: 0;
    transform: rotate(90deg);
  }
  </style>