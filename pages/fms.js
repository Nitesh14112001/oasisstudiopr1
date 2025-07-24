'use client';

import { useState } from "react";
import Link from "next/link";

export default function FMS() {
  const [searchTerm, setSearchTerm] = useState("");

  const fmsLinks = [
    {
      name: "Customer Care",
      url: "https://docs.google.com/spreadsheets/d/1Leo4TIJqcfkv0Lcnp9qxLpATZyeq74234M7Aq66godY/edit#gid=1563012117",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Customer+Care"
    },
    {
      name: "Sales FMS",
      url: "https://docs.google.com/spreadsheets/d/1S1x1dk7jOGgbXY8fPCBqVt3uTYMHEf1PE4mUPrNoSnI/edit#gid=1028047822",
      image: "https://dummyimage.com/600x400/16a34a/ffffff&text=Sales+FMS"
    },
    {
      name: "Design Old FMS",
      url: "https://docs.google.com/spreadsheets/d/1mDPp3GHRvWufkIOxK__tFyZoEnC15D3PV7Dn0ALQFA0/edit#gid=83496886",
      image: "https://dummyimage.com/600x400/ca8a04/ffffff&text=Design+Old"
    },
    {
      name: "Design NEW FMS",
      url: "https://docs.google.com/spreadsheets/d/1WccGt04JwwtRJn2x8wpE_FpUOS_IrKz7Jr5IBaPqHTQ/edit#gid=0",
      image: "https://dummyimage.com/600x400/ef4444/ffffff&text=Design+NEW"
    },
    {
      name: "Purchase Order to Procurement",
      url: "https://docs.google.com/spreadsheets/d/1Li8-6WWXCBfZQrs5hjaREEXwPFuj-9MnKTvttdwcfAw/edit#gid=107480305",
      image: "https://dummyimage.com/600x400/f59e0b/ffffff&text=Purchase+Procurement"
    },
    {
      name: "PO SHEET FOR Factory",
      url: "https://docs.google.com/spreadsheets/d/1QOWLgQy00ilk4d92cE2Cv2qSPp9krvZaclzQEZIEt9o/edit#gid=0",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=PO+Factory"
    },
    {
      name: "PU Paint FMS",
      url: "https://docs.google.com/spreadsheets/d/1OTGdppNGonGzq6ZRaeG91ZTM8Y4R470NJ7tM-CqHD6Q/edit?gid=0#gid=0",
      image: "https://dummyimage.com/600x400/3b82f6/ffffff&text=PU+Paint"
    },
    {
      name: "Measurement FMS",
      url: "https://docs.google.com/spreadsheets/d/1NRTm5QldVlKQSArePax5BidkXPJvJzzE2IB8bdO7MyA/edit?gid=0#gid=0",
      image: "https://dummyimage.com/600x400/f97316/ffffff&text=Measurement"
    },
    {
      name: "Help Ticket FMS",
      url: "https://docs.google.com/spreadsheets/d/1l8p8mI6FuV8h4zNo1EgOYL-fvBAxNtTkGcdWG8Gu2Hk/edit#gid=1781389644",
      image: "https://dummyimage.com/600x400/6366f1/ffffff&text=Help+Ticket"
    },
    {
      name: "CRM ALL Sheet",
      url: "https://docs.google.com/spreadsheets/d/1jmDMMxrxnupyBOYRSg276PI6C-PH7YDCvSUIE35mKlk/edit?resourcekey#gid=81838560",
      image: "https://dummyimage.com/600x400/0ea5e9/ffffff&text=CRM+All"
    },
    {
      name: "Closure To Inst 2023",
      url: "https://docs.google.com/spreadsheets/d/1L3dbq7YX36lWtEKwz3fZQGiAqprnZOR-QE6GpNCCS3Q/edit#gid=0&fvid=1328549464",
      image: "https://dummyimage.com/600x400/14b8a6/ffffff&text=Closure+2023"
    },
    {
      name: "Closure To Inst 2024",
      url: "https://docs.google.com/spreadsheets/d/1HnWdVZbF98dGjEy2Yd6HSoqpnnmHx5cDgokZgXeUwuk/edit#gid=0",
      image: "https://dummyimage.com/600x400/8b5cf6/ffffff&text=Closure+2024"
    }
  ];

  const filteredLinks = fmsLinks.filter((fms) =>
    fms.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #b6b9c4, #ceb4b4, #b9bed1)" }}
    >
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://oasisstudio.co.in/wp-content/uploads/2025/02/Oasis-Studio-Logo-Bg-remove-2.png"
              className="w-12 h-12 object-contain"
              alt="Oasis Logo"
            />
            <span className="text-xl font-semibold text-gray-900">OasisStudio</span>
          </Link>
          <nav className="flex space-x-4 text-gray-700 font-medium text-sm md:text-base">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/fms" className="hover:text-gray-900">FMS</Link>
            <Link href="/dashboard" className="hover:text-gray-900">Dashboard</Link>
            <Link href="/checklist" className="hover:text-gray-900">Checklist</Link>
        
            <Link href="/management" className="hover:text-gray-900">Management</Link>
          </nav>
        </div>
      </header>

      {/* Search Box */}
      <div className="container mx-auto px-5 pt-12 pb-0 text-center">
        <input
          type="text"
          placeholder="Search FMS links..."
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Link Grid */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            {filteredLinks.length > 0 ? (
              filteredLinks.map((link, index) => (
                <div key={index} className="lg:w-1/4 sm:w-1/2 p-4">
                  <div className="h-48 bg-white/90 p-6 rounded-lg flex flex-col justify-center items-center shadow hover:shadow-lg transition">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-medium text-center hover:underline"
                    >
                      {link.name}
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-full text-gray-500 mt-12">
                No matching links found.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
