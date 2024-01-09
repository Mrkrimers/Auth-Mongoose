import Link from "next/link";

export default function Header() {
    return (
        <div>
            <p> <Link href={'/'}>Go to Home Page</Link> </p>
            <p> <Link href={'/auth'}>Go to Auth Page</Link> </p>
            <p> <Link href={'/reg'}>Go to Reg Page</Link> </p>
        </div>
    )
}