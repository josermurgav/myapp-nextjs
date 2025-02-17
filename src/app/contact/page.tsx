import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
export default function Contact()
{
    return( 
    <><h1>Contact Page</h1> 
        <Link href="/about">about</Link>
        <Image src="/img/download.jpg" 
            width={400} 
            height={300} 
            alt="Just a Chill guy"
            sizes="(max-width: 384 px) 100vw, 50vw"            
            style={{objectFit:"cover"}}
            ></Image>
    </>
    
);

}