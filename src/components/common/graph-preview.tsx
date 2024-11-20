"use client";

import { Excalidraw } from "@excalidraw/excalidraw";

export default function GraphPreview({
  initialData,
  onChange,
}: {
  //initialData: ExcalidrawInitialDataState | Promise<ExcalidrawInitialDataState | null> | null | undefined;
  //onChange: ((elements: readonly ExcalidrawElement[], appState: AppState, files: BinaryFiles) => void) | undefined;
  initialData: undefined;
  onChange: undefined;
}) {
  return (
    <Excalidraw
      initialData={initialData}
      onChange={onChange}
    />
  );
}

