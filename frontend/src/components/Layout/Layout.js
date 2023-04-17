import { LayoutStyled } from "./style";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <Header />
      {children}
      <Footer />
    </LayoutStyled>
  );
}
