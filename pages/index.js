'use client';

import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Check authentication on mount
    if (typeof window !== "undefined") {
      const isAuthenticated = localStorage.getItem("authenticated");
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }
  }, [router]);

  return (
    <div
      className="text-gray-600 body-font min-h-screen"
      style={{
        background: "linear-gradient(135deg, #b6b9c4, #ceb4b4, #b9bed1)",
      }}
    >
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://oasisstudio.co.in/wp-content/uploads/2025/02/Oasis-Studio-Logo-Bg-remove-2.png"
              alt="Oasis Studio Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="ml-3 text-xl">OasisStudio</span>
          </Link>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
         
            <Link href="/fms" className="hover:text-gray-900">FMS</Link>
            <Link href="/dashboard" className="hover:text-gray-900">Dashboard</Link>
            <Link href="/checklist" className="hover:text-gray-900">Checklist</Link>
           
            <Link href="/management" className="hover:text-gray-900">Management</Link>
          </nav>
        </div>
      </header>

      {/* Stats Section */}
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            {[
              { value: "1200", label: "Happy Clients" },
              { value: "9", label: "Year Of Expertise" },
              { value: "24", label: "Cities Served" },
              { value: "100000", label: "Sq.Unit Experience Center" },
              { value: "2500", label: "Delivered Unit" },
              { value: "100000", label: "Lakh Sq.ft Installation" },
              { value: "78", label: "Accumulate Exprerience" },
              { value: "8000", label: "Sq.ft Manfacturing Unit" },

            ].map((stat, i) => (
              <div key={i} className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">{stat.value}</h2>
                <p className="leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Featured Content</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-600">
              Explore our latest tutorials and product showcases
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[1, 2, 3, 4].map((id) => (
              <div key={id} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-md">
                  <video className="h-40 w-full object-cover rounded mb-6" controls>
                    <source src={`/videos/video${id}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    TUTORIAL {id}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    Feature {['Introduction', 'Dashboard', 'Settings', 'Analytics'][id - 1]}
                  </h2>
                  <p className="leading-relaxed text-base">
                    Learn how to use our {['FMS', 'Dashboard', 'Checklist', 'Management'][id - 1]} features
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
