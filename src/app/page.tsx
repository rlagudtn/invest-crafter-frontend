"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [companies, setCompanies] = useState();
  const fetchCompanies = async () => {
    const res: any = await fetch(`/api`);
    const data = await res.json();
    setCompanies(companies);
  };
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home
    </main>
  );
}
