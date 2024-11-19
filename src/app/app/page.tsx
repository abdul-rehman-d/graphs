"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import { Excalidraw } from "@excalidraw/excalidraw";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

type Coordinate = {
  x: number | string;
  y: number | string;
};

type Graph = {
  type: "bar" | "line" | "pie";
  title: string;
  xAxis: string;
  yAxis: string;
  data: Coordinate[];
};

export default function PublicAppPage() {
  const [graphData, setGraphData] = useState<Graph>({
    type: "bar",
    title: "",
    xAxis: "",
    yAxis: "",
    data: [],
  });
  const [dataPoint, setDataPoint] = useState<Coordinate>({ x: "", y: "" });
  const [copied, setCopied] = useState(false);
  const [excalidrawElements] = useState([]);

  const addDataPoint = () => {
    if (dataPoint.x && dataPoint.y) {
      setGraphData((prev) => ({
        ...prev,
        data: [
          ...prev.data,
          {
            x: dataPoint.x,
            y:
              typeof dataPoint.y === "string"
                ? parseFloat(dataPoint.y)
                : dataPoint.y,
          },
        ],
      }));
      setDataPoint({ x: "", y: "" });
    }
  };

  //const generateExcalidrawElements = () => {
  //  // This is a simplified example. In a real application, you'd generate
  //  // more complex Excalidraw elements based on the graph type and data.
  //  const elements = [
  //    {
  //      type: "rectangle",
  //      x: 10,
  //      y: 10,
  //      width: 100,
  //      height: 100,
  //      backgroundColor: "lightblue",
  //    },
  //    {
  //      type: "text",
  //      x: 20,
  //      y: 20,
  //      text: graphData.title,
  //    },
  //  ];
  //  return elements;
  //};

  const copyToClipboard = async () => {
    try {
      const elements = excalidrawElements;
      const serializedElements = JSON.stringify(elements);
      await navigator.clipboard.writeText(serializedElements);
      setCopied(true);
      toast.success("Copied!", {
        description:
          "Graph data copied to clipboard. You can now paste it into Excalidraw.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Error", {
        description: "Failed to copy graph data to clipboard: " + err,
      });
    }
  };

  return (
    <main className="max-w-screen-xl mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Try GraphMaster</h2>
        <p className="mb-4">
          Create and copy your graph without signing in. To save your work,
          please sign up for an account.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Graph Settings</h2>
          <div className="space-y-4">
            <div>
              <Label htmlFor="graph-type">Graph Type</Label>
              <Select
                value={graphData.type}
                onValueChange={() => {
                  // setGraphData((prev) => ({ ...prev, type: value }))
                }}
              >
                <SelectTrigger id="graph-type">
                  <SelectValue placeholder="Select graph type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bar">Bar Chart</SelectItem>
                  <SelectItem value="line">Line Chart</SelectItem>
                  <SelectItem value="pie">Pie Chart</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="graph-title">Graph Title</Label>
              <Input
                id="graph-title"
                value={graphData.title}
                onChange={(e) =>
                  setGraphData((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Enter graph title"
              />
            </div>
            <div>
              <Label htmlFor="x-axis">X-Axis Label</Label>
              <Input
                id="x-axis"
                value={graphData.xAxis}
                onChange={(e) =>
                  setGraphData((prev) => ({ ...prev, xAxis: e.target.value }))
                }
                placeholder="Enter X-axis label"
              />
            </div>
            <div>
              <Label htmlFor="y-axis">Y-Axis Label</Label>
              <Input
                id="y-axis"
                value={graphData.yAxis}
                onChange={(e) =>
                  setGraphData((prev) => ({ ...prev, yAxis: e.target.value }))
                }
                placeholder="Enter Y-axis label"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Add Data Points</h3>
              <div className="flex space-x-2">
                <Input
                  value={dataPoint.x}
                  onChange={(e) =>
                    setDataPoint((prev) => ({ ...prev, x: e.target.value }))
                  }
                  placeholder="X value"
                />
                <Input
                  value={dataPoint.y}
                  onChange={(e) =>
                    setDataPoint((prev) => ({ ...prev, y: e.target.value }))
                  }
                  placeholder="Y value"
                  type="number"
                />
                <Button onClick={addDataPoint}>Add</Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Data Points</h3>
              <ul className="list-disc pl-5">
                {graphData.data.map((point, index) => (
                  <li key={index}>
                    X: {point.x}, Y: {point.y}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Graph Preview</h2>
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className="flex items-center gap-2"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copied ? "Copied!" : "Copy to Clipboard"}
            </Button>
          </div>
          <div
            className="border border-gray-300 rounded-lg overflow-hidden"
            style={{ height: "500px" }}
          >
            {/* <Excalidraw
              initialData={{ elements: generateExcalidrawElements() }}
              onChange={(elements) => setExcalidrawElements(elements)}
              /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
