"use client";
import {
  IconArrowLeft,
  IconMessage,
  IconSettings,
  IconTimeDuration15,
  IconUserBolt,
} from "@tabler/icons-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { BarChart, Bar } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import { Layout } from "../../components/Layout";
import { useEffect, useState } from "react";

// Dummy dashboard component with content
const Dashboard = () => {
  // Sample Data for charts
  const messageData = [
    { name: "January", messages: 150 },
    { name: "February", messages: 200 },
    { name: "March", messages: 180 },
    { name: "April", messages: 220 },
    { name: "May", messages: 300 },
    { name: "June", messages: 350 },
  ];

  const activeUserData = [
    { name: "Week 1", users: 50 },
    { name: "Week 2", users: 75 },
    { name: "Week 3", users: 100 },
    { name: "Week 4", users: 125 },
  ];

  const responseAccuracyData = [
    { name: "Correct", value: 85 },
    { name: "Incorrect", value: 15 },
  ];

   

  const radarData = [
    { subject: "Accuracy", A: 120, fullMark: 150 },
    { subject: "Speed", A: 98, fullMark: 150 },
    { subject: "Engagement", A: 110, fullMark: 150 },
    { subject: "Satisfaction", A: 130, fullMark: 150 },
    { subject: "Response", A: 95, fullMark: 150 },
  ];
  return (
    <Layout title="Dashboard">
      {/* Responsive summary cards */}
      <div className="flex flex-col gap-4 md:flex-row">
        {[
          {
        icon: <IconMessage className="h-8 w-8 text-blue-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />,
        label: "Total Chats",
        value: "1,245",
        bg: "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800",
          },
          {
        icon: <IconUserBolt className="h-8 w-8 text-green-500 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125" />,
        label: "Active Users",
        value: "1,245",
        bg: "bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800",
          },
          {
        icon: <IconTimeDuration15 className="h-8 w-8 text-yellow-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125" />,
        label: "Avg. Response Time",
        value: "2.4s",
        bg: "bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800",
          },
          {
        icon: <IconSettings className="h-8 w-8 text-purple-500 transition-transform duration-300 group-hover:rotate-180 group-hover:scale-125" />,
        label: "Response Accuracy",
        value: "96%",
        bg: "bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800",
          },
          {
        icon: <IconArrowLeft className="h-8 w-8 text-red-500 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125" />,
        label: "Failed Responses",
        value: "12",
        bg: "bg-gradient-to-r from-red-100 to-red-200 dark:from-red-900 dark:to-red-800",
          },
        ].map((card, idx) => (
          <div
        key={card.label}
        style={{
          animation: `fadeInUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards`,
          animationDelay: `${idx * 0.12 + 0.1}s`,
          opacity: 0,
          transform: "translateY(30px)",
        }}
        className={`group h-24 w-full rounded-xl ${card.bg} flex items-center shadow transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer relative overflow-hidden`}
          >
        {/* Hover effect: animated gradient overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/40 to-transparent" />
        <div className="px-5 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          {card.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-200 pt-2 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 group-hover:tracking-wide">
            {card.label}
          </h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-neutral-100 mt-2 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 group-hover:tracking-wider">
            {card.value}
          </p>
        </div>
          </div>
        ))}
        <style>
          {`
        @keyframes fadeInUp {
          to {
        opacity: 1;
        transform: translateY(0);
          }
        }
          `}
        </style>
      </div>

      {/* Responsive charts grid */}
      <div className="grid grid-cols-1 gap-2 mt-4 md:grid-cols-2 xl:grid-cols-4">
        {/* Chart Card with Loading Animation */}
        {[
          {
        title: "Messages Sent Over Time",
        chart: (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={messageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="messages" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        ),
          },
          {
        title: "Active Users Over Time",
        chart: (
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={activeUserData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="users" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ),
          },
          {
        title: "Response Accuracy",
        chart: (
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
          <Pie
            data={responseAccuracyData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#82ca9d"
            label
          >
            <Cell fill="#82ca9d" />
            <Cell fill="#ff7300" />
          </Pie>
            </PieChart>
          </ResponsiveContainer>
        ),
          },
          {
        title: "Chatbot Performance",
        chart: (
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart outerRadius="80%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Performance"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
            </RadarChart>
          </ResponsiveContainer>
        ),
          },
        ].map((item, idx) => {
          // Simulate loading state for demo
          const [loading, setLoading] = useState(true);
          useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1200 + idx * 300);
        return () => clearTimeout(t);
          }, []);
          return (
        <div
          key={item.title}
          className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
        >
          <div className="p-6 rounded-lg shadow-md mb-8 min-h-[320px] flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          {item.title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center w-full h-[250px]">
              <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-3" />
              <span className="text-gray-500 dark:text-gray-400 text-sm">Loading...</span>
            </div>
          ) : (
            item.chart
          )}
            </div>
          </div>
        </div>
          );
        })}
      </div>
    </Layout>
  );
};
export default Dashboard;
