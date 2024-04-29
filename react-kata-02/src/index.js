import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FetchProvider } from "./context/FetchContext";
/* 
// import { makeServer } from "./localDevServer";

// miragejs mock system
if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <FetchProvider basePath={"https://dummyjson.com"} interceptors={[1, 2, 3]}>
      <App />
    </FetchProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log(`
                                                                               
                                                                                
                                                                                
                                                                                
                                                                                
                                                                                
                       _╓╓╖╓_ ,╓╔╔╔╔╔╔╔╔╔╔╔╖╖╔╔╔╖╔╔╔╖╓╖╔╔╔╔╖╓_                  
                     ,╠╬▒▒▄░╬╬╬╬▄▄▄▄▄▄▄░▄▄▄╬╬▄▄▄╬▄▄▄╬░▄▄▄▄▄▄░╬K_                
                    _╠╬╟████▒╬╬╬███████╣███╬╬███╬███╬████████╬╬╬                
                    ▐╬╬███╟█▌╬╬╬╬╬███▒╬╟███╬╬███╬███╬███▒╚▀▀▀╬╬▒                
                  ,╔╬╬╬║█████▄▄░╬╬███▒╬╟████████╬███╬╟████▄░╬╬╬▒                
                 ╠╬░▄████████████▒███▒╬╟███▀▀███╬███╬╬░╚█████╬╬▒                
                |░░██████████████▌███▒░▐███░░███░███░▄▄▄░║███░░╠                
                ╚░░██████████████▌███▒░▐███░░███░███░████████░░╠_______         
                [░░███████████████░░░Ü░░░░│░░░░░░░░░░░╙░░░░░░░░░░░░░░░░╠╦       
              ,▒░░█████████████╙███░████████░░░███████╣███░╠███░██████░░░H      
          _╔@▒░░███████████████Ñ███░███Ñ╠███░░░││███Ü│╟███░╠███░███│││░░░H      
        ╔▒░│▄██████████████████░███░█████░░░░░░░░███░░╟███▄▄███░███▄▄▄░░░H      
       [░░█████████████████████▌███░░╙▀████▄░░░░░███░░╟████████░█████Ñ░░░H      
       ╙░░╙▀███████████████████▌███░░░░»║███░░░░░███░░╟███░╠███░███░░░░░░H      
        '╚▒░░╙░╙╙╙████████Ñ████████░████████░░░░░███░░▐███░╠███░██████░░░H      
           ╙╚╠▒Ü░░░╙▌╟███Ñ░╙█████▀▀░╙▀▀▀▀▀▀Ü░░░░░▀▀▀░░╙▀▀▀░ñ▀▀▀░▀▀▀▀▀▀░░░H      
                 'Ü░»████░░░███████▌░░████▒░▐███░█████▌$██▌░███N░░░░░░░▒╠'      
                  ╚░░████░░░░║██████░▐████▌░╫██▌░██████░██████▌░░▒Ü'        
                   ░░║██▌░░░░╙██████░╟█████░███▒▐██████░░█████░░▒Ü              
                 ╔@░░╠██▌░░░░░██████▒██████░███░╫██▌███▒░╙███░░░╩               
                [░░░░▄██▌░░░░░╟██╟██▌█████████▌░███▒╟██▌░░███░░░⌐               
                 ▄▄▄█████▒▄▄▄▄███╩█████▌╟█████Ñ░███░╬███░░███░░░⌐               
                 ██████████████████████▌║█████▒╟██▌]████▒▒███▄▄▄⌐               
                 ╙█████████████████████████████████████████████Ñ                
                  '╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙╙'                
`);
