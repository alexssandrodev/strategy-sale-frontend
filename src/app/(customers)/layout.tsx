import { Header } from "@/components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="login_layout">
      <Header />
      {children}
    </div>
  );

}
