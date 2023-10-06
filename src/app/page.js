"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Result from "@/components/Result";

import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  return (
    <>
      <Header />
      <Section data={data} setData={setData} />
      <Result data={data} setData={setData}/>
    </>
  );
}
