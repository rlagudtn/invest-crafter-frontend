"use client";

import { CompanyList } from "@/containers/companies/companyList";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main>
      <CompanyList />
    </main>
  );
}
