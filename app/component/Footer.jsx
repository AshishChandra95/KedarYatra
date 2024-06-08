export default function Footer(){
    return(
        <footer>
            <div className="flex justify-around h-20 py-5 text-lg font-bold ">
                <div>
                <h1 className="pt-10 text-2xl font-bold">Kedar<span className="text-rose-700">Yatra</span></h1>
                </div>

                <div>
                    <h1 className="text-xl text-rose-700">Resources</h1>
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Service</h2>
                </div>

                <div>
                    <h1 className="text-xl text-rose-700">Follow</h1>
                    <h2>Github</h2>
                    <h2>Linkdin</h2>
                    <h2>Instagram</h2>
                </div>

                <div>
                    <h1 className="text-xl text-rose-700">Legal</h1>
                    <h2>Privacy & Policy</h2>
                    <h2>Terms & Condition</h2>
                </div>
            </div>
            <p className="text-center pt-20 pb-5 text-2xl font-bold">@KedarYatra Copywrite 2024</p>
        </footer>
    )
}