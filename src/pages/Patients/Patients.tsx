import { useState } from "react";
import { showNotification } from "../../utils/notification";
import { usePatientStore } from "../../store/patientStore";

const Patients = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");

  const patients = usePatientStore((state) => state.patients);
  const addPatient = usePatientStore((state) => state.addPatient);

  const handleAddPatient = () => {
    if (!name || !age || !condition) return;

    const newPatient = {
      id: Date.now(),
      name,
      age: Number(age),
      condition,
    };

    addPatient(newPatient); // ✅ GLOBAL STATE

    setName("");
    setAge("");
    setCondition("");

    showNotification();
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-3">
        
        {/* Form */}
        <div className="flex gap-2 flex-wrap">
          <input
            placeholder="Name"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Age"
            className="border p-2 rounded"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            placeholder="Condition"
            className="border p-2 rounded"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />

          <button
            onClick={handleAddPatient}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>

        <h1 className="text-2xl font-semibold">Patients</h1>

        {/* Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`px-4 py-2 rounded ${
              view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Grid
          </button>

          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 rounded ${
              view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Empty */}
      {patients.length === 0 && (
        <div className="text-center text-gray-400 mt-10">
          No patients available
        </div>
      )}

      {/* GRID */}
      {view === "grid" && patients.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {patients.map((p) => (
            <div
              key={p.id}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="font-bold text-lg mb-2">{p.name}</h2>
              <p className="text-gray-600">Age: {p.age}</p>
              <p className="text-gray-600">Condition: {p.condition}</p>
            </div>
          ))}
        </div>
      )}

      {/* LIST */}
      {view === "list" && patients.length > 0 && (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <div className="grid grid-cols-3 p-4 font-semibold bg-gray-100">
            <span>Name</span>
            <span>Age</span>
            <span>Condition</span>
          </div>

          {patients.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-3 p-4 border-t hover:bg-gray-50 transition"
            >
              <span className="font-medium">{p.name}</span>
              <span className="text-gray-500">{p.age}</span>
              <span className="text-blue-500">{p.condition}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Patients;