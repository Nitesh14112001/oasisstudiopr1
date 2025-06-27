'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Management() {
  const [searchTerm, setSearchTerm] = useState('');

  const links = [
    { name: 'EM Weekly report', url: 'https://docs.google.com/spreadsheets/d/1AJo7c8F8BkTrfHN-PoiSu55H5PfyUlvFeA4s9zWEjCA/edit?gid=1587091814' },
    { name: 'OASIS NBD AND CRR FMS', url: 'https://docs.google.com/spreadsheets/d/1OKMcC1uYcO5Ows6ao4NT7ujTPgIvGv0EKcSNoOr4HvA/edit?gid=1434155705#gid=1434155705' },
    { name: 'Client Database', url: 'https://docs.google.com/spreadsheets/d/1vbp0e_Gx3AxpO5lGJXwbGQZgRAc1dRi9gv_1Y8Q16N8/edit?gid=1969426823#gid=1969426823' },
    { name: 'Account Book', url: 'https://docs.google.com/spreadsheets/d/1zY6lK1Idn55N962TF6mAGyQInEKv6eV4IIzk2qLR3QU/edit#gid=453153551' },
    { name: 'Factory Joining', url: 'https://docs.google.com/spreadsheets/d/12eLFxt8EtuLAdJiio9erwkyvmyq8G7rR0ItJ2NAu_ck/edit?resourcekey=&gid=1276839117#gid=1276839117' },
    { name: 'Whatsapp Post', url: 'https://docs.google.com/spreadsheets/d/1q2_dfTWY9I6tXaDqL_Vjo54-81QA5jQ90VjuIzb792k/edit#gid=1105056372' },
    { name: 'Vendor Reg Form', url: 'https://docs.google.com/spreadsheets/d/1p0mmVbLSXK-ooZv2QLWDquo8LQsifyjk2l5XzY3RHF0/edit?resourcekey=&gid=636486624#gid=636486624' },
    { name: 'Document Form (Responses)', url: 'https://docs.google.com/spreadsheets/d/10bfSrec150NC0DOKWytRdXeWcqWVYJlFWLOa6mw7fZ0/edit?resourcekey=&gid=1259401269#gid=1259401269' },
    { name: 'Meeting Excel', url: 'https://docs.google.com/spreadsheets/d/13xNXO7wpZB8C2irryPRUqHvlPA1V7u2T31CQ_p4Io3c/edit?gid=0#gid=0' },
    { name: 'Growth sheet', url: 'https://docs.google.com/spreadsheets/d/1ggawReaef7anSjnGngAWYv-hFrRgSWN3LMReJ4YCEUo/edit#gid=0' },
    { name: 'Client Response', url: 'https://docs.google.com/spreadsheets/d/1LOujcuO8eMELJf8zfRz6pwyPIXe-UjXfOfbDqraM5aE/edit?resourcekey=&gid=2112146412#gid=2112146412' },
    { name: 'DM Sheet', url: 'https://docs.google.com/spreadsheets/d/1oTTjnbNRc1A8n_5zu0pyxhBq1V1XqkPyul9l8V7960k/edit?gid=1705863954#gid=1705863954' },
    { name: 'Copy of 5 for 5', url: 'https://docs.google.com/spreadsheets/d/1HvsLmvUfErn6_bd_e-GxnbBCEAy3TaDcYI3cdFiGNwA/edit?gid=1259023516#gid=1259023516' },
    { name: 'EM Weekly Report', url: 'https://docs.google.com/spreadsheets/d/1AJo7c8F8BkTrfHN-PoiSu55H5PfyUlvFeA4s9zWEjCA/edit#gid=1587091814' },
    { name: 'Lead Gen Sheet', url: 'https://docs.google.com/spreadsheets/d/1OKMcC1uYcO5Ows6ao4NT7ujTPgIvGv0EKcSNoOr4HvA/edit#gid=1434155705' },
    { name: 'Client Database', url: 'https://docs.google.com/spreadsheets/d/1vbp0e_Gx3AxpO5lGJXwbGQZgRAc1dRi9gv_1Y8Q16N8/edit#gid=1969426823' },
    { name: 'Account Book', url: 'https://docs.google.com/spreadsheets/d/1zY6lK1Idn55N962TF6mAGyQInEKv6eV4IIzk2qLR3QU/edit#gid=453153551' },
    { name: 'Factory Joining', url: 'https://docs.google.com/spreadsheets/d/12eLFxt8EtuLAdJiio9erwkyvmyq8G7rR0ItJ2NAu_ck/edit?resourcekey=&gid=1276839117#gid=1276839117' },
    { name: 'Sales Library', url: 'https://drive.google.com/open?id=1n3P1RDrGgtZSf70FaHWnB_hWNTHo_0LU' },
    { name: 'Salary Sheet', url: 'https://docs.google.com/spreadsheets/d/1JJdbEKLla8tmZ-wGm_ch8OKQU3-gkIHMJuvxe2LU6es/edit' },
    { name: 'Whatsapp post', url: 'https://docs.google.com/spreadsheets/d/1q2_dfTWY9I6tXaDqL_Vjo54-81QA5jQ90VjuIzb792k/edit#gid=1105056372' },
    { name: 'Vendor Reg Sheet', url: 'https://docs.google.com/spreadsheets/d/1p0mmVbLSXK-ooZv2QLWDquo8LQsifyjk2l5XzY3RHF0/edit?resourcekey#gid=636486624' },
    { name: 'Documnet', url: 'https://docs.google.com/spreadsheets/d/10bfSrec150NC0DOKWytRdXeWcqWVYJlFWLOa6mw7fZ0/edit?resourcekey#gid=1259401269' },
    { name: 'Meeting Sheet', url: 'https://docs.google.com/spreadsheets/d/13xNXO7wpZB8C2irryPRUqHvlPA1V7u2T31CQ_p4Io3c/edit#gid=0' },
    { name: 'Growth Sheet', url: 'https://docs.google.com/spreadsheets/d/1ggawReaef7anSjnGngAWYv-hFrRgSWN3LMReJ4YCEUo/edit#gid=0' },
    { name: 'Client Site Handover Sheet', url: 'https://docs.google.com/spreadsheets/d/1LOujcuO8eMELJf8zfRz6pwyPIXe-UjXfOfbDqraM5aE/edit?resourcekey=&gid=2112146412#gid=2112146412' },
    { name: 'Client Growth Sheet', url: 'https://docs.google.com/spreadsheets/d/1LOujcuO8eMELJf8zfRz6pwyPIXe-UjXfOfbDqraM5aE/edit?resourcekey=&gid=2112146412#gid=2112146412' },
    { name: 'Leave Response', url: 'https://docs.google.com/spreadsheets/d/1ngDO4DS_gxWmO_p4JnFW4Xy6vgpD9JkUZcZLhwrnu1Q/edit?resourcekey#gid=805080172' },
    { name: 'Photograph', url: 'https://drive.google.com/drive/folders/1VuEUTBKO1qtx9piY542sXAl0YLD-Ny9i?usp=drive_link' },
    { name: 'SP Personal Document sheet  and folder', url: 'https://docs.google.com/spreadsheets/d/1Y_R8iu4HCWNp_-VSVd2gLpMCFXFFrVuxB2I2Nd0y44o/edit?gid=0#gid=0' },
    { name: 'Minutes of Meeting', url: 'https://docs.google.com/spreadsheets/d/1K4lMKBYiMpLSFxUmo0_6g7ilSBr0ip9X7NnpJFFJIS0/edit?gid=0#gid=0' },
    { name: 'Vendor MIS', url: 'https://docs.google.com/spreadsheets/d/1YkPcm18gjX5eOaTUAGDzYof8y7TtDeH74qY7GazaW6U/edit?gid=1789631816#gid=1789631816' },
    { name: 'Error FMS', url: 'https://docs.google.com/spreadsheets/d/1VNarZSRYmXglvMBvFpmqP7fjg5Do4KKDvdgHmateh_E/edit?resourcekey=&gid=1608988057#gid=1608988057' },
    { name: 'Lead Count Data ', url: 'https://docs.google.com/spreadsheets/d/1iU1WR6a82bAfmbgE9ypbfbrTa99g5rPW7JZZ0TopCjI/edit?gid=1879771346#gid=1879771346' },
    { name: 'Kitchen Site Visit Form ( Supervisors) ', url: 'https://docs.google.com/spreadsheets/d/198PiLixwo39MhEe-ZoGhdFk6ZMSqNgGqFNjkW1dpktU/edit?usp=sharing' },
    { name: 'Material Seggregation Form ( For Supervisors )', url: 'https://docs.google.com/spreadsheets/d/1YEAxAu2YCzyyaDqlHKssZ5qQ8ynaZPT7_D3oShAM1S4/edit?usp=sharing' },
    { name: 'Wardrobe Site Visit Form ( for supervisors) ', url: 'https://docs.google.com/spreadsheets/d/1Ofc3vhyArdikvd6w5ceU8Ztxs3mutz4SZai5Yr3zoy0/edit?usp=sharing' },
    { name: 'DM sheet ', url: 'https://docs.google.com/spreadsheets/d/1oTTjnbNRc1A8n_5zu0pyxhBq1V1XqkPyul9l8V7960k/edit?gid=1705863954#gid=1705863954' },
    { name: 'Passwrds', url: 'https://docs.google.com/spreadsheets/d/1syubCLhgRrgBKGy_2z0xG21fVZEKiCpVRnJ1VR5SVP0/edit?gid=1095589400#gid=1095589400' },
    { name: 'Critical Reports', url: 'https://docs.google.com/spreadsheets/d/1ql_ZN8gFayo7gXfVUJNf7kW37D6sTSfWNZ3SZs3YVzE/edit?gid=0#gid=0' },
    
  ];

  const filteredLinks = links.filter(link =>
    link.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          placeholder="Search management links..."
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
