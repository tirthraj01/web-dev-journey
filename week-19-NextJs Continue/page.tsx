import  Link  from "next/link";

export default function Home(){
    return(
        <div className="text-3xl font-bold underline" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div>
                Todo application 
                <br />
                <br />
                <Link className="text-md border m-2" href="/signin">Sign In </Link>
                <br />
                <br />
                <Link className="text-md border m-2" href="/signup">Sign Up </Link>
            </div>
        </div>
    )
}
