import Image from "next/image";
import Ingridents from "./components/Ingridents";

export default function Home() {
  return (
    <main className="banner relative">
      <div className="container">
        <div class="row">
          <div id="containt"><Ingridents /></div>
        </div>
      </div>
    </main>
  );
}