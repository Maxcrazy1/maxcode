import React,{ useEffect} from "react";
import Template from "../components/Template";
import Gallery from "../components/Gallery/";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  useEffect(() =>{
    toast(<div>React ð Firebase ð¥<br /> Desarrollado con ð <small>by Cristian S {new Date().getFullYear()}</small></div>, {
      position: "top-right",
      autoClose: 8000, 
      hideProgressBar: false,
      closeOnClick: true, 
      pauseOnHover: true, 
      draggable: true,
    });
    toast(<div>Mis proyectos mÃ¡s recientes, presione sobre alguna imagen para ver mÃ¡s detalles ð±ï¸ð§</div>, {
      position: "top-right",
      autoClose: 15000, 
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
