import "./hire.css"
import { useState } from "react";

function Hire() {


    
    return(<div className="inquiries">
        <p>Want to share an <span className="work">!dea</span>?</p>

        <form className="inquiryform" >
            <label>Name</label>
            <input type="text" placeholder="Enter your name..." />
            <label>Email</label>
            <input type="email" placeholder="Enter email..." />
            <label>Message</label>
            <textarea placeholder="Leave a message..."></textarea>

            <button type="submit" >Let's Go!</button>
        </form>
    </div>
    )
    
}

export default Hire