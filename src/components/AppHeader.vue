<template>
  <header class="app-header">
    <div class="logo">
      <img :src="logoSrc" alt="buhler" class="logo-image" />
    </div>
    <div class="header-info">
      <div class="info-item">
        <span class="material-icons">access_time</span>
        <span>{{ currentTime }}</span>
      </div>
      <div class="info-item">
        <span class="material-icons">person_outline</span>
        <span>Operator</span>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import logoSrc from "../assets/Logo_buhler.png";

export default {
  name: "AppHeader",
  setup() {
    const currentTime = ref("");
    let interval;

    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const day = now.getDate().toString().padStart(2, "0");
      const month = (now.getMonth() + 1).toString().padStart(2, "0");
      const year = now.getFullYear();

      currentTime.value = `${day}.${month}.${year} ${hours}:${minutes}`;
    };
    onMounted(() => {
      updateDateTime();
      interval = setInterval(updateDateTime, 1000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      currentTime,
      logoSrc,
    };
  },
};
</script>
