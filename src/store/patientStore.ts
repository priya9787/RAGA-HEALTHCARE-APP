import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
}

interface PatientState {
  patients: Patient[];
  addPatient: (patient: Patient) => void;
}

export const usePatientStore = create<PatientState>()(
  persist(
    (set) => ({
      patients: [],
      addPatient: (patient) =>
        set((state) => ({
          patients: [...state.patients, patient],
        })),
    }),
    {
      name: "patient-storage", // key in localStorage
    }
  )
);