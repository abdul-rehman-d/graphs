"use client";

import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import {
  AppState,
  BinaryFiles,
  ExcalidrawInitialDataState,
  UIOptions,
} from "@excalidraw/excalidraw/types/types";

const DEFAULT_INITIAL_DATA: ExcalidrawInitialDataState = {
  elements: [
    {
      type: "rectangle",
      version: 141,
      versionNonce: 361174001,
      isDeleted: false,
      id: "oDVXy8D6rom3H1-LLH2-f",
      fillStyle: "hachure",
      strokeWidth: 1,
      strokeStyle: "solid",
      roughness: 1,
      opacity: 100,
      angle: 0,
      x: 100.50390625,
      y: 93.67578125,
      strokeColor: "#000000",
      backgroundColor: "transparent",
      width: 186.47265625,
      height: 141.9765625,
      seed: 1968410350,
      groupIds: [],
      boundElements: null,
      frameId: null,
      link: null,
      locked: false,
      roundness: null,
      updated: 0,
    },
  ],
  scrollToContent: true,
};

const DEFAULT_UI_OPTIONS: UIOptions = {
  welcomeScreen: false,
  canvasActions: {
    changeViewBackgroundColor: false,
    clearCanvas: false,
    export: false,
    loadScene: false,
    saveToActiveFile: false,
    toggleTheme: false,
    saveAsImage: false,
  },
  tools: {
    image: true,
  },
};

export default function GraphPreview({
  initialData = DEFAULT_INITIAL_DATA,
  onChange,
}: {
  initialData:
  | ExcalidrawInitialDataState
  | Promise<ExcalidrawInitialDataState | null>
  | null
  | undefined;
  onChange:
  | ((
    elements: readonly ExcalidrawElement[],
    appState: AppState,
    files: BinaryFiles
  ) => void)
  | undefined;
}) {
  return (
    <Excalidraw
      initialData={initialData}
      onChange={onChange}
      viewModeEnabled
      UIOptions={DEFAULT_UI_OPTIONS}
    />
  );
}
