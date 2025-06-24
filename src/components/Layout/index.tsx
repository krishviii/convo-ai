"use client";
import React, { useState, type ReactNode } from "react";
import {
  IconArrowLeft,
  IconBell,
  IconBrandTabler,
  IconMessage,
  IconSettings,
  IconTimeDuration15,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "../../components/Navbar";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";
import { BarChart, Bar } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
// import { DoughnutChart, Doughnut } from "recharts";

export const Layout: React.FC<{title:string, children: ReactNode }> = ({title, children })=> {
  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Chat",
      href: "/chat",
      icon: (
        <IconMessage className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "/",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        " flex w-full  flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen", // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <ThemeToggle isOpen={open} />
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src="https://assets.aceternity.com/manu.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      {/* <Dashboard /> */}
        <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex items-center justify-between mb-6">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{title}</div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <svg
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
                <button className="relative p-2 rounded-full bg-transparent ">
                     <IconBell className="text-black dark:text-white"/>
                    <span className="absolute top-1 right-1 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              
            </div>
        </div>
        <div className="h-[95vh] overflow-y-auto hide-scrollbar">
              {children}
              </div>
       
        </div>
        </div>
    </div>
  );
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        Convo AI
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
    </a>
  );
};

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

  const failedResponsesData = [
    { name: "Success", value: 90 },
    { name: "Failure", value: 10 },
  ];

  const radarData = [
    { subject: 'Accuracy', A: 120, fullMark: 150 },
    { subject: 'Speed', A: 98, fullMark: 150 },
    { subject: 'Engagement', A: 110, fullMark: 150 },
    { subject: 'Satisfaction', A: 130, fullMark: 150 },
    { subject: 'Response', A: 95, fullMark: 150 },
  ];
  return (
    <div className="flex flex-1">
      <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex flex-row gap-2">
          <div
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center"
          >
            <div className="px-4">
              <IconMessage className="h-8 w-8 text-gray-500 dark:text-neutral-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 pt-2">Total Chats</h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-neutral-200 mt-2">1,245</p>
            </div>
          </div>

          <div
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center"
          >
            <div className="px-4">
              <IconUserBolt className="h-8 w-8 text-gray-500 dark:text-neutral-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 pt-2">Active Users</h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-neutral-200 mt-2">1,245</p>
            </div>
          </div>

          <div
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center"
          >
            <div className="px-4">
              <IconTimeDuration15 className="h-8 w-8 text-gray-500 dark:text-neutral-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 pt-2">Avg. Response Time</h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-neutral-200 mt-2">2.4s</p>
            </div>
          </div>

          <div
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center"
          >
            <div className="px-4">
              <IconSettings className="h-8 w-8 text-gray-500 dark:text-neutral-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 pt-2">Response Accuracy</h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-neutral-200 mt-2">96%</p>
            </div>
          </div>

          <div
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-neutral-800 flex items-center"
          >
            <div className="px-4">
              <IconArrowLeft className="h-8 w-8 text-gray-500 dark:text-neutral-300" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-200 pt-2">Failed Responses</h3>
              <p className="text-3xl font-bold text-gray-800 dark:text-neutral-200 mt-2">12</p>
            </div>
          </div>
        </div>


        <div className="flex flex-row  gap-2">

          <div
            key={"second-array-demo-1"}
            className="h-full w-full   rounded-lg bg-gray-100 dark:bg-neutral-800 "
          >
            {/* Total Messages Sent Over Time (Line Chart) */}
            <div className="   p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Messages Sent Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={messageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="messages" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div
            key={"second-array-demo-1"}
            className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
          >
            {/* Active Users Over Time (Bar Chart) */}
            <div className=" p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white  mb-4">Active Users Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={activeUserData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="users" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div
            key={"second-array-demo-1"}
            className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
          >
            {/* Response Accuracy (Pie Chart) */}
            <div className=" p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Response Accuracy</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={responseAccuracyData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#82ca9d"
                    label
                  >
                    <Cell fill="#82ca9d" />
                    <Cell fill="#ff7300" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            key={"second-array-demo-1"}
            className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
          >
            <div className="p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Chatbot Performance</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart outerRadius="80%" data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 150]} />
                  <Radar name="Performance" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
