import { ref } from "vue";
import machinesData from "../assets/data/mockData.json";

export function useMachineData() {
  const machines = ref(machinesData);

  const updateMachineStatus = (machineId, newStatus) => {
    const machine = machines.value.find((m) => m.id === machineId);
    if (machine) {
      machine.status = newStatus;
    }
  };

  const getMachineById = (machineId) => {
    return machines.value.find((m) => m.id === machineId);
  };

  return {
    machines,
    updateMachineStatus,
    getMachineById,
  };
}
