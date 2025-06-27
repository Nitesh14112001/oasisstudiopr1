'use client';

import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const dashboards = [
    {
      name: "Office Checklist",
      url: "https://docs.google.com/spreadsheets/d/1Nk1sO456K46Vdslo7d8NgLGVOGu5bIapIKRd-Ng_aAg/edit?usp=sharing",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "Factory Checklist",
      url: "https://docs.google.com/spreadsheets/d/1bvbZT1g_LX9Tj4ZiSaRrCMQ0SUepkcDrCHqqUYAS_Lg/edit?usp=sharing",
      image: "https://dummyimage.com/600x400/16a34a/ffffff&text=PMS",
    },
    {
      name: "Vaishali Checklist",
      url: "https://docs.google.com/spreadsheets/d/1YK87RFXQ_zjjvcEzkIst0s37Zq3xQNjN1JHZO-hY7vQ/edit?gid=2092959791#gid=2092959791",
      image: "https://dummyimage.com/600x400/ca8a04/ffffff&text=IMS",
    },
    {
      name: "Meenakshi Checklist",
      url: "https://docs.google.com/spreadsheets/d/1at-9VivOc0da3d5aglPuyN8goy0jBAnq4oiRc-vZvPk/edit?gid=2092959791#gid=2092959791",
      image: "https://dummyimage.com/600x400/ef4444/ffffff&text=BOM",
    },
    
  ];

  const filteredDashboards = dashboards.filter((dash) =>
    dash.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Header Section */}
      <header className="bg-white shadow p-4 sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://oasisstudio.co.in/wp-content/uploads/2025/02/Oasis-Studio-Logo-Bg-remove-2.png"
              className="w-12 h-12 object-contain"
              alt="Oasis Studio Logo"
            />
            <span className="text-xl font-semibold text-gray-900">OasisStudio</span>
          </Link>
          <nav className="flex space-x-4 text-gray-700 font-medium text-sm md:text-base">
            <Link href="/" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
            <Link href="/fms" className="hover:text-gray-900">FMS</Link>
            <Link href="/dashboard" className="hover:text-gray-900">Dashboard</Link>
            <Link href="/checklist" className="hover:text-gray-900">Checklist</Link>
      
            <Link href="/management" className="hover:text-gray-900">Management</Link>
          </nav>
        </div>
      </header>

      {/* Search Input */}
      <div className="container mx-auto px-5 pt-12 pb-0 text-center">
        <input
          type="text"
          placeholder="Search dashboard..."
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dashboard Gallery Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Checklist Gallery
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Click on any tile to open its Looker Studio dashboard.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {filteredDashboards.length > 0 ? (
              filteredDashboards.map((dash, index) => (
                <div key={index} className="lg:w-1/4 sm:w-1/2 p-4">
                  <div className="relative h-48 rounded overflow-hidden shadow-lg bg-gray-100">
                    <img
                      src={dash.image}
                      alt={`Thumbnail for ${dash.name}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <a
                      href={dash.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute z-10 w-full h-full px-6 py-8 bg-white bg-opacity-0 hover:bg-opacity-90 transition duration-300 ease-in-out flex flex-col justify-center items-center text-center"
                    >
                      <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                        DASHBOARD
                      </h2>
                      <h1 className="title-font text-base font-medium text-gray-900 mb-2">
                        {dash.name}
                      </h1>
                      <p className="text-sm text-gray-600">Opens in Looker Studio</p>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-full text-gray-500 mt-12">
                No matching dashboards found.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
