import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Paragraph from "@/components/ui/LargeHeading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
      <Paragraph size="sm" />
    </main>
  );
}
