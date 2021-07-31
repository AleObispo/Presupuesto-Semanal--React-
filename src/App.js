import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //definir el state
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ crearGasto, guardarCrearGasto ] = useState(false);

  //useEfectt que actualiza el restante

  useEffect(() => {
   if(crearGasto){
        
        //agrega el nuevo presupuesto
        guardarGastos([
          ...gastos, 
          gasto
        ]);

        //resta el presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad;
        guardarRestante(presupuestoRestante);

        //resetaer a false
        guardarCrearGasto(false)
      }
  }, [gasto, crearGasto, gastos, restante]); 

  //funcion para agregar un nuevo gasto
 


  return (
    <div className='container'>
        <header>

            <h1>Gasto Semanal</h1>
            <div className='contenido-principal contenido'>
              {mostrarpregunta ?
                 (
                   <Pregunta 
                    guardarPresupuesto={guardarPresupuesto}
                    guardarRestante={guardarRestante}
                    actualizarPregunta={actualizarPregunta}
                    />
                 ) :
                 (
                    <div className='row'>
                    <div className='one-half column'>
                        <Formulario 
                          guardarGasto={guardarGasto}
                          guardarCrearGasto={guardarCrearGasto}
                        />                               
                    </div>
                
                    <div className='one-half column'>
                      <Listado 
                        gastos={gastos}
                      /> 
                      <ControlPresupuesto 
                        presupuesto={presupuesto}
                        restante={restante}
                      />                              
                    </div>  
                    </div> 
                 ) 
              }
                
                  

            </div>


       </header>

       <footer className='one-half column'>
         <div>

         <ul className="icons">
           
            <a href="https://www.linkedin.com/in/alejandro-obispo-a222931b7/" rel="noreferrer" target="_blank" className="bi bi-linkedin"><span className="label"> LinkedIn</span></a>
            
        </ul>
         </div>
         
         </footer>
    </div>
    
  );
}

export default App;
