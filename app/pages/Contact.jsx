import { TextField } from "@material-ui/core";
export default function Contact(){
    return(
        <>
        <section className="text-white">
            <img src="https://res.cloudinary.com/dk2qjcmha/image/upload/w_auto,c_scale/uploads/1/2019-03/ganga_aarti_eve_min.jpg" alt="img not found" className="w-full h-1/2  object-cover absolute mix-blend-overlay"/>
            <h1 className=" py-60 text-center text-5xl font-bold font-sans">CONTACT-US</h1>
        </section>

        <section className="px-24 py-10">

          <div className="flex justify-evenly">
            <div className="w-96 text-center">
                <h1 className=" text-xl font-bold py-4">Email-us</h1>
                <p className="text-justify py-2 text-lg">You can write to us on below given email</p>
                <p className="py-2 text-lg text-red-700">kedaryatra@gmail.com</p>
                <p className="py-2 text-lg text-red-700">ashischandra961@gmail.com</p>
            </div>
            
            
            <div className="w-96 text-center">
                <h1 className=" text-xl font-bold py-4">Phone</h1>
                <p className="text-justify py-2 text-lg"> You can contact us on below given numbers</p>
                <p className="py-2 text-lg text-red-700">+91 9520200839</p>
                <p className="py-2 text-lg text-red-700">+91 9639196884</p>
            </div>
        </div>
    </section>   

    <section className="flex justify-center items-center flex-col py-10 ">
    <h1 className="text-center text-4xl font-bold">GIVE US YOUR INFO.</h1>
        <div className="h-auto w-96 text-center gap-10">
            <TextField id="standard-basic" label="Your Name" variant="standard" margin="dense" />
            <TextField id="standard-basic" label="Your Contact" variant="standard"  margin="dense"/><br />
            <div className="mt-10"/>
            <TextField
            id="outlined-multiline-static"
            label="Comment"
            multiline
            rows={8}
            defaultValue="Please Enter Comment"
        />
        
        </div>    
    </section> 
    </>
    );
}