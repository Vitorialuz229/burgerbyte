import logo from "../assets/logo.png";

import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Hamburguer } from "../model/Hamburguer";
import { Bebidas } from "../model/Bebidas";

export function Home() {
  const [hamburgueres, setHamburgueres] = useState<Hamburguer[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/hamburgueres")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setHamburgueres(data || []);
      })
      .catch((error) => console.error("Erro ao buscar os hambúrgueres", error));
  }, []);

  const [bebidas, setBebidas] = useState<Bebidas[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/bebidas")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBebidas(data || []);
      })
      .catch((error) => console.error("Erro ao buscar os bebidas", error));
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-zinc-900 bg-home bg-cover bg-center flex flex-col items-center justify-center py-6">
        <img
          src={logo}
          alt="BurgerByte logo"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg hover:scale-110"
        />
        <h1 className="text-4xl md:text-5xl mt-4 font-bold text-white">
          Burger Byte
        </h1>
        <span className="text-white text-sm md:text-lg mt-2 font-light">
          Av. Fernando Costa, 42, Vila Jaiara, Anápolis - GO
        </span>
        <div className="bg-custom-green items-center flex justify-center mt-4 px-4 p-2 rounded shadow-lg">
          <span className="text-sm sm:text-base font-medium text-white">
            Seg á Dom - 18:00 as 22:00
          </span>
        </div>
      </header>

      {/* Menu */}
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6">
        Conheça nosso menu
      </h2>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 mb-8 mx-auto max-w-7xl">
        {/* Cards de Hambúrgueres */}
        {hamburgueres.map((hamburguer) => (
          <div
            key={hamburguer.id}
            className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full"
          >
            <img
              src={hamburguer.image}
              alt={hamburguer.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
            />
            <div className="ml-4 flex flex-col justify-between">
              <p className="text-lg md:text-xl xl:text-2xl font-bold">
                {hamburguer.name}
              </p>
              <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
                {hamburguer.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                  R$ {hamburguer.price.toFixed(2)}
                </span>
                <button
                  className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                  data-name={hamburguer.name}
                  data-price={hamburguer.price}
                >
                  <ShoppingCart size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <div className="mx-auto max-w-7xl px-2 my-2 flex justify-start w-full">
        <h2 className="font-bold text-3xl">Bebidas</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-2 mb-8 mx-auto max-w-7xl">
        {/* Cards de Bebidas */}
        {bebidas.map((bebida) => (
          <div
            key={bebida.id}
            className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full"
          >
            <img
              src={bebida.image}
              alt={bebida.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
            />
            <div className="ml-4 flex flex-col justify-between w-full">
              <p className="text-lg md:text-xl xl:text-2xl font-bold">
                {bebida.name}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm md:text-lg xl:text-xl font-medium text-gray-900">
                  R$ {bebida.price.toFixed(2)}
                </span>
                <button
                  className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                  data-name={bebida.name}
                  data-price={bebida.price}
                >
                  <ShoppingCart size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
