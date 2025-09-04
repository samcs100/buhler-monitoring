<template>
  <div id="app">
    <AppHeader />
    <NavigationBar
      :machines="machines"
      :active-tab="activeTab"
      @tab-change="handleTabChange"
    />
    <main class="main-content">
      <MachineStatusFlow :machines="machines" />
    </main>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import AppHeader from "./components/AppHeader.vue";
import NavigationBar from "./components/NavigationBar.vue";
import MachineStatusFlow from "./components/productionLineDetails/MachineStatusFlow.vue";
import { useMachineData } from "./composables/useMachineData";

export default {
  name: "App",
  components: {
    AppHeader,
    NavigationBar,
    MachineStatusFlow,
  },
  setup() {
    const { machines, updateMachineStatus } = useMachineData();
    const activeTab = ref("attacher");

    const handleTabChange = (tabId) => {
      activeTab.value = tabId;
    };
    let interval;
    onMounted(() => {
      interval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * machines.value.length);
        const statuses = ["running", "warning", "alarm"];
        const randomStatus =
          statuses[Math.floor(Math.random() * statuses.length)];
        updateMachineStatus(machines.value[randomIndex].id, randomStatus);
      }, 15000);
    });

    onUnmounted(() => {
      clearInterval(interval);
    });

    return {
      machines,
      activeTab,
      handleTabChange,
    };
  },
};
</script>
