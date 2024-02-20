import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";

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
});

if (!barbershop){
    //TODO redirecionar para home page
    return null
}

    return (
        <BarbershopInfo barbershop={barbershop}/>
    )
};
 
export default BarbershopDatailsPage;