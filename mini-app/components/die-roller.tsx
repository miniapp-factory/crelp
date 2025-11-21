"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function DieRoller() {
  const [result, setResult] = useState<number | null>(null);

  const rollDie = () => {
    const r = Math.floor(Math.random() * 6) + 1;
    setResult(r);
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <Button onClick={rollDie}>Roll Die</Button>
      {result !== null && (
        <span className="text-4xl font-bold">Result: {result}</span>
      )}
    </div>
  );
}
