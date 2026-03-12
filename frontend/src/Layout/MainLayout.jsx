import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    /* Removi 'min-vh-100' e 'd-flex' do container pai */
    <div>
      <Header />

      {/* O main agora ocupa o espaço que o conteúdo pedir */}
      <main className="py-4" style={{ minHeight: "100vh" }}>
        {/* Isso força o meio da página a ser 50% maior que a tela */}
        <Outlet />
      </main> 

      <Footer />
    </div>
  );
}
