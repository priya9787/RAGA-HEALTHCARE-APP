import { useEffect, useState } from "react";
import Card from "../../components/Card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", patients: 30 },
  { name: "Feb", patients: 45 },
  { name: "Mar", patients: 60 },
  { name: "Apr", patients: 50 },
  { name: "May", patients: 80 },
];

const Analytics = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) return <p className="p-5">Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Analytics</h1>

      <Card>
        <h2 className="mb-4 font-semibold">Patient Growth</h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="patients" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Analytics;