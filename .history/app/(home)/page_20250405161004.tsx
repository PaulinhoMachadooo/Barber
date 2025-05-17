// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import Header from "../_components/header";
import { format } from "date-fns";

export default function Home() {
  return (
    <div>
      <Header />

      <h2>Olá, Miguel!</h2>
      <p>{format(new Date(), "EEEE")}</p>
    </div>
  );
}
