import "../styles/globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Heartivy",
  description: "A gentle space for emotional healing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1A1A1A] flex justify-center ">
        
        <div className=" w-full  rounded-3xl overflow-hidden shadow-2xl">
          
          <NavBar />

          <main className="">
            {children}
          </main>

          <Footer />
        </div>

      </body>
    </html>
  );
}
