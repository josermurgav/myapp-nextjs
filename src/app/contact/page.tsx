import Link from "next/link";
import Image from "next/image";
export default function Contact()
{
    return( 
    <><h1>Contact Page</h1> 
        <Link href="/about">about</Link>
        <Image src="/img/download.jpg" width={400} height={300} alt="Just a Chill guy"></Image>
    </>
    
);

}