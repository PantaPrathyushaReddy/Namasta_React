import React from "react";

const Contact = () => {
  return (
    <div className="text-center m-2 p-4">
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>
      <div className="mt-8">
        <p><strong>Name:</strong> Panta Prathyusha Reddy</p>  
        <p><strong>Email:</strong> prathyushapanta@gmail.com</p>
        <p><strong>Phone:</strong> +91 8688582536</p>
        <p><strong>Address:</strong> G.Kothapalli, Racherla(M), Prakasam(D), Andhra Pradesh</p>
      </div>
      
      {/* Social Links */}
      <div className="mt-8">
        <a href="https://www.linkedin.com/in/prathyusha-panta/" className="text-blue-600 mx-2"target="_blank" rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://prathyushapanta-portfolio.netlify.app/" className="text-pink-500 mx-2"target="_blank"rel="noopener noreferrer">
          Portfolio
        </a>
        <a href="https://github.com/PantaPrathyushaReddy" className="text-blue-600 mx-2" target="_blank" rel="noopener noreferrer">
        GitHub
        </a>

      </div>
    </div>
  );
};

export default Contact;

