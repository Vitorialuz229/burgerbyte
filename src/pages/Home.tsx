import logo from "../assets/logo.png";
import hamb1 from "../assets/hamb1.png";
import hamb2 from "../assets/hamb2.png";
import hamb3 from "../assets/hamb3.png";
import hamb4 from "../assets/hamb4.png";
import hamb5 from "../assets/hamb5.png";
import hamb6 from "../assets/hamb6.png";
import hamb7 from "../assets/hamb7.png";
import hamb8 from "../assets/hamb8.png";

import { ShoppingCart } from "lucide-react";

export function Home() {
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
        <div className="bg-green-600 items-center flex justify-center mt-4 px-4 p-2 rounded shadow-lg">
          <span className="text-sm sm:text-base font-medium text-white">
            Seg á Dom - 18:00 as 22:00
          </span>
        </div>
      </header>

      {/* Menu */}
      <h2 className="text-2xl md:text-5xl font-bold text-center mt-9 mb-6">
        Conheça nosso menu
      </h2>

      <main className="grid lg:grid-cols-2 gap-4 px-2 mb-8">
        {/* Cards */}

        {/* Card 1 */}
        <div className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full">
          <img
            src={hamb1}
            alt="Hamburguer Smash"
            className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="text-lg md:text-xl xl:text-2xl font-bold">
              Hamburguer Smash
            </p>
            <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
              Smash suculento com carne 100% angus, queijo derretido, salada,
              cebola caramelizada e molho especial. Simples e irresistível! 🍔🔥
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                R$ 15,00
              </span>
              <button className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                data-name="Hamburguer Smash"
                data-price="15.00"
              >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full">
          <img
            src={hamb2}
            alt="Hamburguer Duplo"
            className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="text-lg md:text-xl xl:text-2xl font-bold">
              Hamburguer Duplo
            </p>
            <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
              Duas suculentas carnes 100% Bolvina, queijo cheddar derretido,
              bacon crocante, cebola caramelizada e molho especial. O hambúrguer
              perfeito para quem ama um sabor intenso e irresistível! 🍔🥓🧀
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                R$ 44,00
              </span>
              <button className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                data-name="Hamburguer Duplo"
                data-price="44.00"
                >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full">
          <img
            src={hamb3}
            alt="Hamburguer BBQ"
            className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="text-lg md:text-xl xl:text-2xl font-bold">
              Hamburguer BBQ
            </p>
            <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
              Carne 100% bovina com queijo cheddar, bacon crocante e molho
              barbecue. Para os amantes do sabor defumado e picante! 🍔🥓🔥
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                R$ 28,00
              </span>
              <button className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                data-name="Hamburguer BBQ"
                data-price="28.00"
                >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full">
          <img
            src={hamb4}
            alt="Hamburguer Frango Crocante"
            className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="text-lg md:text-xl xl:text-2xl font-bold">
              Hamburguer Frango Crocante
            </p>
            <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
              Peito de frango empanado e crocante, alface, tomate, maionese e
              molho barbecue. Sabor de frango frito que vai te surpreender! 🍔🍗
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                R$ 22,00
              </span>
              <button className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                data-name="Hamburguer Frango Crocante"
                data-price="22.00"
                >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full">
          <img
            src={hamb5}
            alt="Hamburguer Bacon e Cheddar"
            className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="text-lg md:text-xl xl:text-2xl font-bold">
              Hamburguer Bacon e Cheddar
            </p>
            <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
              Carne 100% bovina com queijo cheddar cremoso, bacon crocante,
              alface e molho especial. O hambúrguer que combina crocância e
              cremosidade! 🍔🧀🥓
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                R$ 26,00
              </span>
              <button className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                data-name="Hamburguer Bacon e Cheddar"
                data-price="26.00"
                >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full">
          <img
            src={hamb6}
            alt="Hamburguer Clássico"
            className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="text-lg md:text-xl xl:text-2xl font-bold">
              Hamburguer Clássico
            </p>
            <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
              Hambúrguer clássico com carne 100% bovina, queijo prato, alface,
              tomate e maionese. O sabor tradicional que nunca sai de moda!
              🍔🧀🍅
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                R$ 20,00
              </span>
              <button className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                data-name="Hamburguer Clássico"
                data-price="20.00"
                >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full">
          <img
            src={hamb7}
            alt="Hamburguer Caramelizado"
            className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="text-lg md:text-xl xl:text-2xl font-bold">
              Hamburguer Caramelizado
            </p>
            <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
              Carne suculenta com cebola caramelizada, queijo cheddar, alface e
              maionese. Uma explosão de sabor em cada mordida! 🍔🧀🧅
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                R$ 25,00
              </span>
              <button className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                data-name="Hamburguer Caramelizado"
                data-price="25.00"
                >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="flex p-4 md:p-6 shadow-md rounded-lg bg-white w-full">
          <img
            src={hamb8}
            alt="Hamburguer Vegano"
            className="w-28 h-28 md:w-36 md:h-36 rounded-md hover:-rotate-2 duration-300"
          />
          <div className="ml-4 flex flex-col justify-between">
            <p className="text-lg md:text-xl xl:text-2xl font-bold">
              Hamburguer Vegano
            </p>
            <p className="text-sm md:text-lg xl:text-x1 font-light text-gray-600">
              Hambúrguer à base de proteína vegetal, com alface fresca, tomate,
              cebola roxa, maionese vegana e picles crocante. Sabor e frescor em
              cada mordida! 🍔🌱
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm md:text-lg xl:text-x1 font-medium text-gray-900">
                R$ 18,00
              </span>
              <button className="bg-black px-4 py-2 md:px-6 md:py-3 rounded shadow-lg flex items-center"
                data-name="Hamburguer Vegano"
                data-price="18.00"
                >
                <ShoppingCart size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
