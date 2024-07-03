import Area from "@/app/components/Area";
import Menu from "@/app/components/Menu";
import Image from "next/image";


export default function Networking() {
    return (

        <Area className="bg-background-primary">
            <div
                className="flex flex-col items-center justify-center font-body text-justify text-2xl gap-12 my-24">

                <div
                    className="flex font-background text-polkadot-rose   opacity-80 font-bold text-xl lg:text-5xl md:text-4xl">
                    <p>O QUE É O BLOCKCHAIN RIO?</p>
                </div>


                <div className="flex">
                    <p> O Blockchain.RIO é a representação do maior e principal hub de inovação em tecnologia blockchain
                        e finanças digitais da América Latina.
                        Blockchain Rio Festival 2024 será um encontro incrível de mentes brilhantes do universo cripto
                        brasileiro. </p>
                </div>

                <div className="grid grid-cols-3 gap-4 w-auto h-auto">
                    <Image className="rounded" src="/photos/foto1.jpeg" alt="foto" width={680} height={673}/>
                    <Image className="rounded" src="/photos/foto2.jpeg" alt="foto" width={680} height={673}/>
                    <Image className="rounded" src="/photos/foto3.jpeg" alt="foto" width={680} height={673}/>
                    <Image className="rounded" src="/photos/foto5.jpeg" alt="foto" width={680} height={383}/>
                    <Image className="rounded" src="/photos/foto6.png" alt="foto" width={680} height={383}/>
                    <Image className="rounded" src="/photos/foto7.jpeg" alt="foto" width={680} height={383}/>
                    <Image className="rounded" src="/photos/foto8.png" alt="foto" width={1280} height={720}/>
                    <Image className="rounded" src="/photos/foto9.jpeg" alt="foto" width={1280} height={720}/>
                    <Image className="rounded" src="/photos/foto10.jpeg" alt="foto" width={1280} height={720}/>
                </div>
            </div>

        </Area>
    )
}