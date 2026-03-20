import "./hire.css"
import { useState } from "react";

function Hire() {

    const [Name, setName]= useState("");
const [Email, setEmail]= useState("");
const [Message, setMessage]= useState("");

const handleSubmit = async (e) => {
e.preventDefault();
  try {
    const res = await fetch(`${import.meta.env.VITE_API}/enquiry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Email, Message }),
    });

    const data = await res.json(); // does something

    if (data.success) {
      alert("Enquiry sent!");
    } else {
      alert("Failed to send");
    }

  } catch (error) {
    console.error(error);
    alert("Server error");
  }
};

// const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     try{
//         const res = await fetch(`${import.meta.env.VITE_API_URL}/enquiry`, {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify({Name, Email, Message})
//         });

//         const data = await res.json();
//         console.log(data);

//         alert(`Message sent successfully`)

//         setEmail("");
//         setMessage("");
//         setName("");
//     } 
//     catch(err) {
//         console.log(err)
//         alert(`Something went wrong`)
//     }
// }
    
    return(<div className="inquiries">
        <p>Want to share an <span className="work">!dea</span>?</p>

        <form className="inquiryform" >
            <label>Name</label>
            <input type="text" value={Name} placeholder="Enter your name..." onChange={(e)=>setName(e.target.value)}/>
            <label>Email</label>
            <input type="email" value={Email} placeholder="Enter email..." onChange={(e)=>setEmail(e.target.value)}/>
            <label>Message</label>
            <textarea value={Message} placeholder="Leave a message..." onChange={(e)=>setMessage(e.target.value)} />

            <button type="submit" onClick={handleSubmit}>Let's Go!</button>
        </form>
    </div>
    )
    
}

export default Hire