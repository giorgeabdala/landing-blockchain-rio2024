import Area from "@/app/components/Area";
import Image from 'next/image';
import Modals from "@/app/components/Modals";
import blockrio from "public/BINR.jpeg";

export default function Ticket() {
    return (
        <div className="bg-gradient-to-b  from-black   to-background-via-connect">

            <div
                className="flex font-background text-polkadot-rose justify-center font-bold text-xl lg:text-5xl md:text-4xl my-28">
                <p>POLKADOT TE LEVA AO BLOCKCHAIN RIO</p>
            </div>
            <div
                className="flex flex-col lg:flex-row items-center justify-center font-body text-justify text-2xl gap-8 my-36 mx-32">


                <div className="leading-loose mr-20">
                    <p><span className="font-bold">Garanta Seu Passaporte Gratuíto</span> para a Blockchain Rio Festival 2024.</p>
                    <p><span className="font-bold">Clique no botão abaixo</span> e siga as instruções na próxima tela.</p>
                    <div className="flex justify-center mt-16">
                        <Modals/>
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <div style={{width: "600px", height: "400px"}}>
                        <Image className="rounded-full" src={blockrio} alt="logo da Blockchain Festival"
                               layout="responsive" width={600} height={400}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
