import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

interface BarbershopDetailsProps {
    params:{
        id?: string;
};
}

const BarbershopDatailsPage = async ({params}: BarbershopDetailsProps) => {
    if(!params.id){
        //TODO redirecionar para home page
        return null
    }
const barbershop = await db.barbershop.findUnique({
    where: {
        id: params.id,
    },
    include: {
        Service: true
    }
})

if (!barbershop){
    //TODO redirecionar para home page
    return null
}


    return (
        <div className="">
            <BarbershopInfo barbershop={barbershop} />

            <div className="px-5 flex flex-col gap-4 py-6">
            {barbershop.Service.map((service) => (
                <ServiceItem key={service.id} service={service} />
            ))}
            </div>

        </div>
        
    );
};
 
export default BarbershopDatailsPage;