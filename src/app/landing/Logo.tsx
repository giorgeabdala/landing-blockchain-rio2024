import Area from "@/app/components/Area";
import Image from 'next/image';
import Link from "next/link";
import ButtonDefault from "@/app/components/Button";

export default function Logo() {
    return (
        <div className="bg-background-via-connect ">
            <div className="flex flex-row items-center justify-center my-24 mx-10">
                <div className="flex justify-center flex-1">
                    <Image className="rounded-full" src="/logo_transparent.png" alt="logotipo da comunidade Polkadot Brasil" width={600} height={500} />
                </div>
                <div className="flex flex-col items-center flex-1 font-body">
                    <h1 className="text-2xl sm:text-7xl font-bold text-polkadot-rose">BLOCKCHAIN RIO</h1>
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4">24 a 25 de Julho</h1>
                        <h1 className="text-2xl sm:text-3xl font-bold text-white mt-4">EXPOMAG - Rio de Janeiro</h1>
                        <p className="text-xl text-white mt-4">Garanta seu Passaporte</p>
                        <p className="text-xl text-white mt-2">Venha para o Blockchain Rio Festival! 🚀</p>
                        <Link href="#ticket">
                            <ButtonDefault className="mt-6 mb-10" text={"Garanta seu passaporte"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
}
