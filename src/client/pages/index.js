import React,{ useEffect} from "react";
import Template from "../components/Template";
import Gallery from "../components/Gallery";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  useEffect(() =>{
    toast(<div>React 🌀 Firebase 🔥<br /> Desarrollado con 💙 <small>by Cristian S {new Date().getFullYear()}</small></div>, {
      position: "top-right",
      autoClose: 5000, 
      hideProgressBar: false,
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true,
    });
  })
  return (
    <React.Fragment>
      <Template RenderComponent={<Gallery />} />
      <ToastContainer />
    </React.Fragment>
  );
};

export default Home;
