<template>
  <div :class="['machine-card', `card-${machine.status}`]">
    <div class="card-header">
      <!-- replaced status-dot with the same icon style used in NavigationTabs -->
      <span class="tab-icon">
        <span class="material-icons">{{ getTabIcon(machine.status) }}</span>
      </span>
    </div>

    <div class="card-icon">
      <span class="material-icons">{{ machine.icon }}</span>
    </div>

    <div class="card-label">{{ machine.name }}</div>
  </div>
</template>

<script setup>
defineProps({
  machine: {
    type: Object,
    required: true,
  },
});

function getTabIcon(status) {
  const icons = {
    running: "check_circle",
    warning: "warning",
    alarm: "error",
  };
  return icons[status] || "help";
}
</script>
