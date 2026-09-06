export default function SignIn() {
    return <div className="text-3xl font-bold underline" 
    style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <div className="border p-2">
            <input type="text" placeholder="Username" className="border m-2" />
            <input type="password" placeholder="Password" className="border m-2" />
        </div>

    </div>
}
