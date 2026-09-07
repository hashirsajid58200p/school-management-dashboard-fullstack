"use client";
import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface PerformanceProps {
  score?: number | null;
  label?: string;
  semester?: string;
}

const Performance = ({
  score = null,
  label = "Performance",
  semester = "1st Semester - 2nd Semester",
}: PerformanceProps) => {
  const hasScore = score !== null && score !== undefined && !isNaN(score);
  const normalizedScore = hasScore ? Math.min(100, Math.max(0, Math.round(score))) : 0;
  const gpa = hasScore ? (normalizedScore / 10).toFixed(1) : "N/A";

  const data = hasScore
    ? [
        { name: "Achieved", value: normalizedScore, fill: "#C3EBFA" },
        { name: "Remaining", value: Math.max(0, 100 - normalizedScore), fill: "#FAE27C" },
      ]
    : [{ name: "No Data", value: 100, fill: "#F1F5F9" }];

  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">{label}</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            fill="#8884d8"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">{gpa}</h1>
        <p className="text-xs text-gray-400">
          {hasScore ? "of 10 max LTS" : "No exam scores"}
        </p>
      </div>
      <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center text-xs text-gray-500">
        {semester}
      </h2>
    </div>
  );
};

export default Performance;
