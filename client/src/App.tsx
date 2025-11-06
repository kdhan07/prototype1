import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppHeader } from "@/components/AppHeader";
import { BottomNav } from "@/components/BottomNav";
import { DesktopNav } from "@/components/DesktopNav";
import LoginPage from "@/pages/LoginPage";
import HomePage from "@/pages/HomePage";
import StudyHubPage from "@/pages/StudyHubPage";
import TeachersPage from "@/pages/TeachersPage";
import SkillSwapPage from "@/pages/SkillSwapPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/">
        <AppLayout>
          <HomePage />
        </AppLayout>
      </Route>
      <Route path="/study-hub">
        <AppLayout>
          <StudyHubPage />
        </AppLayout>
      </Route>
      <Route path="/teachers">
        <AppLayout>
          <TeachersPage />
        </AppLayout>
      </Route>
      <Route path="/skillswap">
        <AppLayout>
          <SkillSwapPage />
        </AppLayout>
      </Route>
      <Route path="/profile">
        <AppLayout>
          <ProfilePage />
        </AppLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-1 flex">
        <DesktopNav />
        <main className="flex-1 overflow-auto p-6 pb-20 md:pb-6">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
