// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <div>
      <Header />

      <h2 className="tex-xl font-bold">Olá, Miguel!</h2>
      <p className="capitalize text-sm">
        {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
        })}</p>
    </div>
  );
}
