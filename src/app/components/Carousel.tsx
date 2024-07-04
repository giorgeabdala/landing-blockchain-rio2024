import { Carousel } from 'flowbite-react';
import Image from "next/image";

export default function CarouselFlowBite() {
    return (
        <div className="h-[506px]">
            <Carousel indicators={false}>
                <Image className="rounded-2xl" src="/photos/foto1.jpeg" alt="foto" width={340} height={337}/>
                <Image className="rounded-2xl" src="/photos/foto2.jpeg" alt="foto" width={340} height={337}/>
                <Image className="rounded-2xl" src="/photos/foto3.jpeg" alt="foto" width={340} height={337}/>

            </Carousel>

            <img className="rounded-2xl w-[510px]"
                 src=""/>
        </div>
    );
}
