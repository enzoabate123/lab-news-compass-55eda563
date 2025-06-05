
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Laboratorios from "./pages/Laboratorios";
import Pesquisas from "./pages/Pesquisas";
import Noticias from "./pages/Noticias";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/laboratorios" element={<Layout><Laboratorios /></Layout>} />
          <Route path="/pesquisas" element={<Layout><Pesquisas /></Layout>} />
          <Route path="/noticias" element={<Layout><Noticias /></Layout>} />
          <Route path="/perfil" element={<Layout><Perfil /></Layout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
