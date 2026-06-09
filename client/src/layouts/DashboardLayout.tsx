import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}
function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-blue-50">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
export default DashboardLayout;