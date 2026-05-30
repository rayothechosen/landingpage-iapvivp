import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const LpIaDeVideos = lazy(() => import("./pages/LpIaDeVideos"));
const VideoIaDeVideos = lazy(() => import("./pages/VideoIaDeVideos"));
const LpGrupos = lazy(() => import("./pages/LpGrupos"));
const VideoGrupos = lazy(() => import("./pages/VideoGrupos"));
const LpPvi = lazy(() => import("./pages/LpPvi"));
const VideoPvi = lazy(() => import("./pages/VideoPvi"));
const LpVp = lazy(() => import("./pages/LpVp"));
const VideoVp = lazy(() => import("./pages/VideoVp"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/lp-iadevideos" element={<LpIaDeVideos />} />
            <Route path="/video-iadevideos" element={<VideoIaDeVideos />} />
            <Route path="/lp-grupos" element={<LpGrupos />} />
            <Route path="/video-grupos" element={<VideoGrupos />} />
            <Route path="/lp-pvi" element={<LpPvi />} />
            <Route path="/video-pvi" element={<VideoPvi />} />
            <Route path="/lp-vp" element={<LpVp />} />
            <Route path="/video-vp" element={<VideoVp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
