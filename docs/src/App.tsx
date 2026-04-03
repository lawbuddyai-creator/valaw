import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import StartPage from "./pages/StartPage";
import PathPage from "./pages/PathPage";
import ClassesPage from "./pages/ClassesPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ResourcesPage from "./pages/ResourcesPage";
import EmailsPage from "./pages/EmailsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/path" element={<PathPage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/emails" element={<EmailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
