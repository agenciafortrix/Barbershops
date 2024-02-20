import { format } from "date-fns";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import Search from "./components/search";
import BookingItem from "../_components/booking-item";
import { db } from "../_lib/prisma"; 
import BarbershopItem from "./components/barbershop-item";



export default async function Home(){

  const barbershops = await db.barbershop.findMany({})

  return (
    <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Ola, Pedro!</h2>
        <p className="captalize text-sm">{format(new Date(), "EEEE',' d 'de' LLLL  y ",{
          locale: ptBR,
        })}</p>
      </div>

      <div className="px-5 mt-6">
        <Search />

      </div>
      
      <div className="px-5 mt-6">
        <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">AGENDAMENTOS</h2>
        <BookingItem />

      </div>

      <div className="mt-6">
        <h2 className="px-6 text-xs mb-3 uppercase text-gray-400">RECOMENDADOS</h2>

        <div className="flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <div className="mt-6 mb-[4.5rem ]">
        <h2 className="px-6 text-xs mb-3 uppercase text-gray-400">POPULARES</h2>

        <div className="flex px-5 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </div>
  )
}