import Area from "@/app/components/Area";
import Modals from "@/app/components/Modals";
import Image from "next/image";
import blockrio from "public/nfts/nftFisica.png";

export default function Hunter() {
    return (
        <div className="bg-gradient-to-b from-background-via-connect to-background-primary">
            <div className="mx-32 my-36">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center lg:justify-items-start items-center font-body">
                    <div className="flex items-center justify-center">
                        <Image className="rounded-3xl max-w-xs" src={blockrio} alt="logo da Blockchain Festival" />
                    </div>
                    <div className="flex flex-col items-center justify-center mt-20 lg:mt-0 lg:col-span-2">
                        <p className="font-bold text-3xl text-center text-polkadot-rose">Caça ao Tesouro Polkadot Brasil no Blockchain Rio 2024</p>
                        <div className="flex flex-col justify-center text-justify leading-loose text-2xl text-zinc-100 gap-4 mt-14">
                            <p>Participe da nossa emocionante Caça ao Tesouro durante o Blockchain Rio 2024 e descubra todas as novidades do ecossistema Polkadot!</p>
                            <p>Participe da emocionante Caça ao Tesouro durante o Blockchain Rio 2024 e descubra todas as novidades do ecossistema Polkadot! Visite os estandes do universo Polkadot, colete NFTs exclusivos e concorra a uma coleção completa de NFTs físicos. Não perca essa chance de explorar, aprender e ganhar prêmios incríveis. Junte-se a nós e vivencie a experiência completa Polkadot!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
