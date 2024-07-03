import Area from "@/app/components/Area";
import Image from 'next/image'


export default function Discover() {
    return (
        <div className="bg-background-primary">
            <div
                className="flex flex-col lg:flex-row items-center justify-center font-body text-justify text-2xl gap-8 my-24 mx-32">
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <Image src="/asset6.png" alt="logotipo da comunidade Polkadot Brasil" width={571} height={606} />

                <div className="leading-loose mx-32">
                    <p>O evento contará com líderes, especialistas e educadores focados na economia tokenizada, oferecendo oportunidades de networking, geração de negócios e aprendizagem colaborativa.
                        O festival reunirá empresas, desenvolvedores, acadêmicos e autoridades para acelerar o desenvolvimento do ecossistema.</p>
                </div>

            </div>

        </div>


    )
}