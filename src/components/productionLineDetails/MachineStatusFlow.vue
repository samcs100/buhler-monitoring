<template>
  <div class="machine-flow">
    <div class="flow-container">
      <div class="flow-row">
        <template v-for="(machine, index) in machines" :key="machine.id">
          <transition name="flip" mode="out-in">
            <MachineCard
              :key="`${machine.id}-${machine.status}`"
              :machine="machine"
            />
          </transition>

          <div v-if="index < machines.length - 1" class="flow-connector">
            <div class="connector-line"></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import MachineCard from "./MachineCard.vue";

defineProps({
  machines: { type: Array, required: true },
});
</script>
