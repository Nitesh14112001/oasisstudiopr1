'use client';

import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const dashboards = [
    {
      name: "Execution Dashboard",
      url: "https://lookerstudio.google.com/reporting/d238e0f3-5918-4d29-9b83-6598a744b9a9",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "PMS Dashboard",
      url: "https://lookerstudio.google.com/reporting/0b4753da-5f68-46b3-90ec-374af83a7c93/page/PohCF",
      image: "https://dummyimage.com/600x400/16a34a/ffffff&text=PMS",
    },
    {
      name: "IMS Dashboard",
      url: "https://lookerstudio.google.com/reporting/b49bddfb-bc7c-41f5-9bd7-b8199820c387/page/nW09E",
      image: "https://dummyimage.com/600x400/ca8a04/ffffff&text=IMS",
    },
    {
      name: "BOM Dashboard",
      url: "https://lookerstudio.google.com/reporting/0499f2ba-a6df-4933-85a0-700d51e7ad0a/page/ECiCF",
      image: "https://dummyimage.com/600x400/ef4444/ffffff&text=BOM",
    },
    {
      name: "Purchase Dashboard",
      url: "https://lookerstudio.google.com/reporting/0d993913-2ae0-4359-aa74-31f05fb1c54e/page/Q4LGF",
      image: "https://dummyimage.com/600x400/f59e0b/ffffff&text=Purchase",
    },
    {
      name: "Customer Care Dashboard",
      url: "https://lookerstudio.google.com/reporting/0037da6c-348b-4d15-8642-6debc7880499/page/p_dp19dihwgd",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Sales Dashboard",
      url: "https://lookerstudio.google.com/reporting/9d0fd1d8-17ba-4c08-b773-5ff52961a519",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Sales Report Dashboard",
      url: "https://lookerstudio.google.com/reporting/1c1537d4-5063-4875-bb83-fd7d1ab66a93",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Lead Gen Dashboard",
      url: "https://lookerstudio.google.com/reporting/aa632a77-10fd-4c1b-abdd-642889631801",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Account Dashboard",
      url: "https://lookerstudio.google.com/reporting/dbe77e3c-b671-4028-8f8a-69a76fa6afdb",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Collection Dashboard",
      url: "https://lookerstudio.google.com/reporting/8e29a25a-94f0-429b-8a2e-b60de4013cda",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Design Dashboard",
      url: "https://lookerstudio.google.com/reporting/626734c0-fcd6-4cf7-9155-339a9081cd14/page/MsUzD",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Supervisor Dashboard",
      url: "https://lookerstudio.google.com/reporting/5e87ccb7-01ef-42e8-993a-b7befdeb2168/page/P6Q5D",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Visit Form (Pravesh) Dashboard",
      url: "https://lookerstudio.google.com/reporting/4cec6815-79c3-4452-bbc5-d6cb61dc2796",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Factory Form Dashboard",
      url: "https://lookerstudio.google.com/reporting/4cf0c20c-0932-4a89-9221-a35d1cef92ec",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Help Sheet Dashboard",
      url: "https://lookerstudio.google.com/reporting/541fcc67-9466-4dfc-b04d-e8b3917dc593",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Execution Dashboard",
      url: "https://lookerstudio.google.com/reporting/d238e0f3-5918-4d29-9b83-6598a744b9a9",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Amit Dashboard",
      url: "https://lookerstudio.google.com/reporting/7e817057-b908-496b-8f16-d03a822a11e1",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Ravi Factory Dashboard",
      url: "https://lookerstudio.google.com/reporting/fc492e85-81a1-48ec-9b8a-4cda19341e3c",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Vinay Factory Dashboard",
      url: "https://lookerstudio.google.com/reporting/c8f77340-0322-4247-807a-0682fcbf1491",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    
    {
      name: "Doer Checklist Dashboard",
      url: "https://lookerstudio.google.com/reporting/c0fdbb54-1223-4517-a3c1-f21af9d5e92a/page/uf5iE",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Em Weekly Dashboard",
      url: "https://lookerstudio.google.com/reporting/35334349-e26e-440e-9c96-fa3e9a132f9b/page/p_4g6o5ff9ld",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "HR Dashboard",
      url: "https://lookerstudio.google.com/reporting/dd1b633e-aa3d-483f-a2e4-10850ef7affe",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: " Reimbursement Dashboard",
      url: "https://lookerstudio.google.com/reporting/69abffef-b8f6-46ca-a24e-d49d99417b64",
      image: "https://dummyimage.com/600x400/10b981/ffffff&text=Customer+Care",
    },
    {
      name: "Dispatch Dashboard",
      url: "https://lookerstudio.google.com/reporting/b7b09966-9f24-452b-be8a-3e9585055bb6",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "Online Leads Dashboard",
      url: "https://lookerstudio.google.com/reporting/41e9b33a-73e1-43d7-bf58-7c35b1e69c53/page/p_4fp8oclasd/edit",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "Delegation Dashboard",
      url: "https://lookerstudio.google.com/reporting/a23bc008-a7c1-454b-9b7a-ad32e22a973d",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "MIS Dashboard",
      url: "https://lookerstudio.google.com/reporting/4260666b-d2ed-4ebb-b38b-be3a0b6a42aa",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "Petty Dashboard",
      url: "https://lookerstudio.google.com/reporting/d860d455-d9df-4ab0-8e15-27c393e2be51",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "BDM MASTER  DASHBOARD",
      url: "https://lookerstudio.google.com/reporting/ce57cdd8-bf0a-4f7f-bfa5-9b790a1d2c08",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "BDM AZEEMA Dashboard",
      url: "https://lookerstudio.google.com/reporting/b3ac2098-adff-49be-84ac-c25a0a7f5db4",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
    {
      name: "BDM AMIT Dashboard",
      url: "https://lookerstudio.google.com/reporting/0adf580f-7e25-4d48-8a3b-417ef78a2b10",
      image: "https://dummyimage.com/600x400/4f46e5/ffffff&text=Closure",
    },
     
  ];

  const filteredDashboards = dashboards.filter((dash) =>
    dash.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #b6b9c4, #ceb4b4, #b9bed1)" }}
    >
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="https://oasisstudio.co.in/wp-content/uploads/2025/02/Oasis-Studio-Logo-Bg-remove-2.png"
              className="w-12 h-12 object-contain"
              alt="Oasis Studio Logo"
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

      {/* Search Input */}
      <div className="container mx-auto px-5 pt-12 text-center">
        <input
          type="text"
          placeholder="Search dashboard..."
          className="border border-gray-300 rounded px-4 py-2 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Dashboard Gallery */}
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Dashboard Gallery
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Click on any tile to open its Looker Studio dashboard.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {filteredDashboards.length > 0 ? (
              filteredDashboards.map((dash, index) => (
                <div key={index} className="lg:w-1/4 sm:w-1/2 p-4">
                  <div className="relative h-48 rounded overflow-hidden shadow-lg bg-white/80 backdrop-blur-sm">
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
    </div>
  );
}
