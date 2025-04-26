"use client";
import React from "react";
import createEmotionCache from "./emotionCache";
import { ChildrenProp } from "@/_types/global.t";
import { CacheProvider } from "@emotion/react";
const clientSideEmotionCache = createEmotionCache();
function EmotionProvider({ children }: ChildrenProp) {
  return (
    <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>
  );
}

export default EmotionProvider;
