import Area from "@/app/components/Area";
import Modals from "@/app/components/Modals";
import Image from "next/image";
import blockrio from "public/nfts/nftFisica.png";



export default function Ticket() {
    return (
        <div className="bg-background-via-connect">
            <div className="mx-32 mr-56 mt-36 mb-20">
                <div id="ticket"
                     className="grid grid-cols-1 lg:grid-cols-3  justify-items-center lg:justify-items-start">
                    <Image className="w-auto h-auto rounded-2xl max-w-xs lg: items-start" src={blockrio}
                           alt={"logo da Blockchain Festival"}/>
                    <div className="flex justify-center mt-20 lg:mt-0 lg:col-span-2">
                        <div
                            className="flex flex-col  justify-center font-body text-justify leading-loose text-2xl text-zinc-100 gap-4">

                            <p>
                                <span className="font-bold">Garanta Seu Passaporte</span> para a Blockchain Rio Festival 2024 e tenha a chance de
                                estar no coração das discussões sobre blockchain tecnologia e inovação.
                            </p>
                            <p>Para obter seu passaporte clique no botão abaixo e siga as instruções na próxima
                                tela. </p>
                            <div className="flex justify-center mt-8">
                                <Modals/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}