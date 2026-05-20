import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Sobre from "./pages/Sobre.tsx";
import Curriculo from "./pages/Curriculo.tsx";
import Storymaker from "./pages/Storymaker.tsx";
import Copywriting from "./pages/Copywriting.tsx";
import Design from "./pages/Design.tsx";
import Video from "./pages/Video.tsx";
import SocialMedia from "./pages/SocialMedia.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/curriculo" element={<Curriculo />} />
          <Route path="/storymaker" element={<Storymaker />} />
          <Route path="/copywriting" element={<Copywriting />} />
          <Route path="/design" element={<Design />} />
          <Route path="/video" element={<Video />} />
          <Route path="/social" element={<SocialMedia />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
