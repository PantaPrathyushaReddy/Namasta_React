// import React from 'react'
// import User from './User.js'
// import UserClass from "./UserClass.js"
// const About=()=>{
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web series</h2>
//       <UserClass name={"Prathyusha"} location={"Giddalur"}/>
//     </div>
//   )
// }

// export default About;

// class About  extends React.Component{
//   constructor(props)
//   {
//     super(props);
//     console.log("parent constructor")
//   }
//   render()
//   {
//     console.log("parent render")
//     return(
//       <div>
      
//       <h1>About</h1>
//       <h2>This is Namaste React Web series</h2>
//       <UserClass name={"Prathyusha"} location={"Giddalur"}/>
//     </div>
//     )
//   }
// }
// export default About;

// import React from "react";
// import Prathyusha from "../../src/Prathyusha.jpg";

// const About = () => {
//   return (
//     <div className="text-center m-2 p-2">
//       <p className="text-xl font-bold">About Myself</p>
//       <img className="w-32 h-32 rounded-full mx-auto m-3" src={Prathyusha} alt="Prathyusha" />
//       <p>Name:Prathyusha Reddy</p>

//     </div>
//   );
// };

// export default About;

// import React from "react";
// import Prathyusha from "../../src/Prathyusha.jpg";

// const About = () => {
//   return (
//     <div className="text-center m-2 p-4">
//       <h1 className="text-2xl font-bold">About Myself</h1>
//       <img className="w-32 h-32 rounded-full mx-auto" src={Prathyusha} alt="Prathyusha" />
//       <p className="mt-4">
//         Hi, I'm Prathyusha, a passionate Frontend Developer with expertise in building responsive
//         and user-friendly applications using React. I created this Swiggy-inspired app to
//         enhance food ordering experiences, ensuring seamless navigation and intuitive design.
//         I enjoy turning ideas into reality through clean code and innovative solutions. 
//         Let's build something amazing together!
//       </p>
//     </div>
//   );
// };

// export default About;


import React from "react";
import Prathyusha from "../Prathyusha.jpg";

const About = () => {
  return (
    <div className="text-center m-2 p-4">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <img className="w-40 h-40 rounded-full mx-auto shadow-lg" src={Prathyusha} alt="Prathyusha" />
      <p className="mt-6 text-lg leading-relaxed max-w-2xl mx-auto">
        Hi, I'm <strong>Prathyusha</strong>, a dedicated Frontend Developer with a passion for crafting intuitive and dynamic user experiences. With expertise in <strong>React.js, JavaScript, HTML, and CSS</strong>, I enjoy transforming ideas into interactive, functional web applications. 
      </p>
      <p className="mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
        This Swiggy-inspired app is a testament to my problem-solving abilities and my commitment to delivering seamless digital experiences. Beyond coding, I love exploring the latest web technologies and finding innovative ways to enhance user interfaces. My goal is to build products that not only meet user needs but also provide joy in every interaction.
      </p>
      <p className="mt-4 text-lg leading-relaxed max-w-2xl mx-auto">
        Let's connect and create something amazing together!
      </p>
    </div>
  );
};

export default About;
