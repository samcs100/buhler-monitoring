<template>
  <nav class="navigation-tabs">
    <div class="tabs-container">
      <button
        v-for="machine in machines"
        :key="machine.id"
        :class="[
          'machine-tab',
          { active: activeTab === machine.id },
          `tab-${machine.status}`,
        ]"
        @click="emit('tab-change', machine.id)"
      >
        <span class="tab-icon">
          <span class="material-icons">{{ getTabIcon(machine.status) }}</span>
        </span>
        {{ machine.name }}
      </button>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  machines: { type: Array, required: true },
  activeTab: { type: [String, Number], required: true },
});

const emit = defineEmits(["tab-change"]);

function getTabIcon(status) {
  const icons = {
    running: "check_circle",
    warning: "warning",
    alarm: "error",
  };
  return icons[status] || "help";
}
</script>
