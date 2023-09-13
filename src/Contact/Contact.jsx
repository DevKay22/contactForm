import React from 'react';
import "./Contact.css";
import { useState } from 'react';

export const Contact = () => {
    const [data, setData] = useState(
        {fName:"", lName:"", cName:"", inquiry:"", message:"", link:"" }
    )

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setData({...data, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(data);
    }

  return (
    <>
    <main>


        <div>

            {/* This is the form section */}
            <form action='#' method='post' onSubmit={handleSubmit}>
                <div className='names'>

                    <div>
                    <label>First name</label> 
                    <input type="text" name="fName" placeholder="John" onChange={handleChange} value={data.name} required /> <br />

                    </div>

                    <div>
                    <label>Last name</label>
                    <input type="text" name="lName" placeholder="Doe" onChange={handleChange} value={data.name} required /> <br />

                    </div>
                

               


                </div>

                
                <label>Company name</label>
                <input type="text" name="cName" cols={15} rows={1}  onChange={handleChange} value={data.name} required /> <br />

                <label>Inquiry type</label>
                <textarea name="inquiry" placeholder='please select' cols={15} rows={1} onChange={handleChange} value={data.name} required></textarea> <br />


                {/* <label>Smart Contract Security</label>
                <input type="checkbox" name="enquiry"  value="Smart Contract Security" placeholder='please select' required /> <br />
                
                <label>Smart Contract Testing</label>
                <input type="checkbox" name="enquiry"  value="Smart Contract Testing" placeholder='please select' required /> <br />

                <label>Smart Contract Auditing</label>
                <input type="checkbox" name="enquiry"  value="Smart Contract Auditing" placeholder='please select' required /> <br />

                <label>Web3 Development</label>
                <input type="checkbox" name="enquiry"  value="SWeb3 Developmen" placeholder='please select' required /> <br />

                <label>Web3 Security</label>
                <input type="checkbox" name="enquiry"  value="eb3 Security" placeholder='please select' required /> <br /> */}



                <label>What can Algorinth labs do for you?</label>
                <textarea name="message" cols={15} rows={10} onChange={handleChange} value={data.name} required></textarea> <br />

                <label>Link to project on Github</label>
                <input type="url" name="link" onChange={handleChange} value={data.name} required /> <br />

                {/* <input type="submit" name="submit" value="submit" /> */}

                <button type="submit">Submit</button>


                {/* <p>
                    {data.fName} {data.lName} {data.cName}, {data.inquiry} {data.message} {data.link}
                </p> */}




            </form>
        </div>

        <div className='info'>
            {/* This section is for information */}

            <h4>
                Contact us to help you secure your smart contract.
            </h4>

            <p>
                For secure communications, please use <span>SendSafely</span> .
            </p>

        </div>
    </main>
    </>
  )
}


export default Contact;