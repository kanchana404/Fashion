"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProductCard from "@/components/ProductCard";

const Page: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="sm:flex flex-row">
        <Sidebar />
        <div className="sm:p-4 mt-10 md:mt-6 ml-3">
  <div>
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Catalogue</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 mr-3">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            {/* Add more ProductCard components as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
