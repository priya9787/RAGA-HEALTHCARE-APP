import Card from "../../components/Card";
import { usePatientStore } from "../../store/patientStore";

const Dashboard = () => {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <p className="text-gray-500">Total Patients</p>
          <h2 className="text-3xl font-bold">{patients.length}</h2>
        </Card>

        <Card>
          <p className="text-gray-500">Appointments</p>
          <h2 className="text-3xl font-bold">45</h2>
        </Card>

        <Card>
          <p className="text-gray-500">Doctors</p>
          <h2 className="text-3xl font-bold">12</h2>
        </Card>
      </div>

      <div className="mt-6">
        <Card>
          <h2 className="font-semibold mb-2">Recent Activity</h2>
          <p className="text-gray-500">
            {patients.length > 0
              ? `${patients.length} patients in system`
              : "No patient data available"}
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;