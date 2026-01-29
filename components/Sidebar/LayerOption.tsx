"use client";

import * as Icons from "lucide-react";
import type { LayerType } from "@/types";

interface LayerOptionProps {
  id: LayerType;
  label: string;
  icon: string;
  checked: boolean;
  onChange: (id: LayerType) => void;
}

export function LayerOption({
  id,
  label,
  icon,
  checked,
  onChange,
}: LayerOptionProps) {
  // Get the icon component dynamically
  const IconComponent = (Icons as any)[icon] || Icons.Circle;

  return (
    <label
      className="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-navy-700 touch-target select-none"
      htmlFor={id}
    >
      {/* Custom Radio Button */}
      <input
        type="radio"
        id={id}
        name="layer"
        value={id}
        checked={checked}
        onChange={() => onChange(id)}
        className="sr-only"
      />

      {/* Custom Radio Visual */}
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
          checked
            ? "border-gold-500 bg-gold-500"
            : "border-gray-500 bg-transparent"
        }`}
      >
        {checked && <div className="w-2 h-2 rounded-full bg-navy-900" />}
      </div>

      {/* Icon */}
      <IconComponent
        className={`w-5 h-5 ${checked ? "text-gold-400" : "text-gray-400"}`}
      />

      {/* Label */}
      <span
        className={`flex-1 text-sm lg:text-base ${
          checked ? "text-white font-medium" : "text-gray-300"
        }`}
      >
        {label}
      </span>
    </label>
  );
}
