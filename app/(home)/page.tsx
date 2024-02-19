import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";

export default function Home(){
  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Ola, Pedro!</h2>
        <p className="captalize text-sm">{format(new Date(), "EEEE',' d 'de' LLLL  y ",{
          locale: ptBR,
        })}</p>
      </div>
    </div>
  )
}