
import './App.css';
import Carro from './components/Carro';

const details = [
  {
    id: "1",
    nome: "250 GTO",
    marca: "Ferrari",
    cor: "Vermelho",
    ano: 2023,
    km: 35109,
    quant: 1
  },
  {
    id: "2",
    nome: "Toyota Corolla",
    marca: "Toyota",
    cor: "Prata",
    ano: 2023,
    km: 6,
    quant: 2
  },
  {
    id: "3",
    nome: "Tesla Roadster",
    marca: "Tesla",
    cor: "Branco",
    ano: 2023,
    km: 25000,
    quant: 3
  },
  {
    id: "4",
    nome: "911",
    marca: "Porscher",
    cor: "Branco",
    ano: 2023,
    km: 15000,
    quant: 4
  },
];


function App() {
  return (
    <div className="App">
      <h1>Lista dos melhores carros de 2023!</h1>
      {details.map((car) => (
        <Carro 
          key={car.id}
          nome={car.nome}
          marca={car.marca}
          cor={car.cor}
          ano={car.ano}
          km={car.km}
          quant={car.quant}
        />  
      ))} 
       
    </div>
  );
}

export default App;
