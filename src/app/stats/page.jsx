"use client";
import React, { useContext, useMemo } from "react";
import { PieChart, Pie, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { TimelineContext } from "@/context/TimelineContext";

const COLORS = {
  Text: "#9333EA",
  Call: "#166534",
  Video: "#22C55E",
};

export default function AnalyticsCard() {
  const { timeline } = useContext(TimelineContext);

  const chartData = useMemo(() => {
    const counts = timeline.reduce(
      (acc, entry) => {
        if (entry.type === "Text") acc.Text++;
        if (entry.type === "Call") acc.Call++;
        if (entry.type === "Video") acc.Video++;
        return acc;
      },
      { Text: 0, Call: 0, Video: 0 },
    );

    return [
      { name: "Text", value: counts.Text, fill: COLORS.Text },
      { name: "Call", value: counts.Call, fill: COLORS.Call },
      { name: "Video", value: counts.Video, fill: COLORS.Video },
    ];
  }, [timeline]);

  const customDesign = (props) => {
    const { payload } = props;
    return (
      <ul className="flex justify-center items-center gap-4 mt-6">
        {payload.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: entry.payload.fill || entry.color }}
            />
            <span className="text-xs text-gray-700 font-medium">
              {entry.value}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className=" p-6 md:p-10 rounded-xl container  m-w-5xl w-full mx-auto">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Friendship Analytics
      </h2>

      <div className="border shadow border-gray-100 rounded-lg p-6 min-h-[400px]">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          By Interaction Type
        </h3>

        <div className="flex-grow flex items-center justify-center -mt-6">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Tooltip />
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={95}
                dataKey="value"
                nameKey="name"
                paddingAngle={5}
                startAngle={90}
                endAngle={450}
                stroke="none"
              />
              <Legend content={customDesign} verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
