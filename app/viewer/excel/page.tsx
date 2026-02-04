"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { X, Download, FileSpreadsheet, Loader2 } from "lucide-react";
import * as XLSX from "xlsx";
import { useThemeStore } from "@/stores/themeStore";

interface SheetData {
  name: string;
  data: string[][];
}

function ExcelViewerContent() {
  const searchParams = useSearchParams();
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  const [sheets, setSheets] = useState<SheetData[]>([]);
  const [activeSheet, setActiveSheet] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fileUrl = searchParams.get("file");
  const title = searchParams.get("title") || "Excel Viewer";

  useEffect(() => {
    if (!fileUrl) {
      setError("No file specified");
      setLoading(false);
      return;
    }

    const loadExcel = async () => {
      try {
        setLoading(true);
        const response = await fetch(fileUrl);
        if (!response.ok) throw new Error("Failed to load file");

        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: "array" });

        const sheetsData: SheetData[] = workbook.SheetNames.map((name) => {
          const worksheet = workbook.Sheets[name];
          const jsonData = XLSX.utils.sheet_to_json<string[]>(worksheet, {
            header: 1,
            defval: "",
          });
          return { name, data: jsonData };
        });

        setSheets(sheetsData);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load Excel file");
        setLoading(false);
      }
    };

    loadExcel();
  }, [fileUrl]);

  const handleDownload = () => {
    if (fileUrl) {
      window.open(fileUrl, "_blank");
    }
  };

  const currentSheet = sheets[activeSheet];

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Header */}
      <header
        className={`sticky top-0 z-10 border-b ${
          isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.close()}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? "hover:bg-gray-700 text-gray-300" : "hover:bg-gray-100 text-gray-600"
                }`}
                title="Close tab"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3">
                <FileSpreadsheet className={`w-6 h-6 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                <h1 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {title}
                </h1>
              </div>
            </div>
            <button
              onClick={handleDownload}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                isDark
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-emerald-500 hover:bg-emerald-600 text-white"
              }`}
            >
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>

          {/* Sheet tabs */}
          {sheets.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {sheets.map((sheet, index) => (
                <button
                  key={sheet.name}
                  onClick={() => setActiveSheet(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    activeSheet === index
                      ? isDark
                        ? "bg-emerald-600 text-white"
                        : "bg-emerald-500 text-white"
                      : isDark
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {sheet.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className={`w-8 h-8 animate-spin ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
            <p className={`mt-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Loading spreadsheet...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className={`p-4 rounded-lg ${isDark ? "bg-red-900/30 text-red-400" : "bg-red-100 text-red-600"}`}>
              <p>{error}</p>
            </div>
            <button
              onClick={() => window.close()}
              className={`mt-4 px-4 py-2 rounded-lg ${
                isDark ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              Close Tab
            </button>
          </div>
        )}

        {!loading && !error && currentSheet && (
          <div className={`rounded-lg border overflow-hidden ${isDark ? "border-gray-700" : "border-gray-200"}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  {currentSheet.data.length > 0 && (
                    <tr className={isDark ? "bg-gray-800" : "bg-gray-100"}>
                      {currentSheet.data[0].map((cell, cellIndex) => (
                        <th
                          key={cellIndex}
                          className={`px-4 py-3 text-left text-sm font-semibold whitespace-nowrap border-b ${
                            isDark
                              ? "text-gray-200 border-gray-700"
                              : "text-gray-700 border-gray-200"
                          }`}
                        >
                          {cell || `Column ${cellIndex + 1}`}
                        </th>
                      ))}
                    </tr>
                  )}
                </thead>
                <tbody>
                  {currentSheet.data.slice(1).map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={`${
                        rowIndex % 2 === 0
                          ? isDark
                            ? "bg-gray-900"
                            : "bg-white"
                          : isDark
                          ? "bg-gray-800/50"
                          : "bg-gray-50"
                      } hover:${isDark ? "bg-gray-700" : "bg-gray-100"} transition-colors`}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`px-4 py-3 text-sm border-b ${
                            isDark ? "text-gray-300 border-gray-700" : "text-gray-600 border-gray-200"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Row count */}
            <div
              className={`px-4 py-3 text-sm ${
                isDark ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"
              }`}
            >
              {currentSheet.data.length - 1} rows
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default function ExcelViewerPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
        </div>
      }
    >
      <ExcelViewerContent />
    </Suspense>
  );
}
