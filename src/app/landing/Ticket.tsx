import Area from "@/app/components/Area";
import Image from 'next/image';
import Modals from "@/app/components/Modals";
import blockrio from "public/BINR.jpeg";

export default function Ticket() {
    return (
        <div className="bg-background-via-connect" id="ticket">
            <div className="flex flex-col lg:flex-row items-center justify-center font-body text-justify text-2xl gap-8 my-52 mx-32">
                <div className="leading-loose mr-20">
                    <p><span className="font-bold">Garanta Seu Passaporte</span> para a Blockchain Rio Festival 2024 e tenha a chance de estar no coração das discussões sobre blockchain, tecnologia e inovação.</p>
                    <p>Para obter seu passaporte, clique no botão abaixo e siga as instruções na próxima tela.</p>
                    <div className="flex justify-center mt-8">
                        <Modals />
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <div style={{ width: "600px", height: "400px" }}>
                        <Image className="rounded-full" src={blockrio} alt="logo da Blockchain Festival" layout="responsive" width={600} height={400} />
                    </div>
                </div>
            </div>
        </div>
    );
}
