import { useEffect, useRef, useState } from "react";
import { ShoppingCart } from "lucide-react";
import logo from "./../../public/assets/logo.png";
import { Hamburguer } from "../model/Hamburguer";
import { Bebidas } from "../model/Bebidas";
import Swal from "sweetalert2";

export function Home() {
  const [hamburgueres, setHamburgueres] = useState<Hamburguer[]>([]);
  const [bebidas, setBebidas] = useState<Bebidas[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAddressInvalid, setIsAddressInvalid] = useState(false);

  const cartButtonRef = useRef<HTMLButtonElement | null>(null);
  const cartModelRef = useRef<HTMLDivElement | null>(null);

  const [cartItens, setCartItens] = useState<
    { id: number; name: string; price: number; quantity: number }[]
  >([]);

  //Usando o json-server
  // useEffect(() => {
  //   fetch("http://localhost:5000/hamburgueres")
  //     .then((response) => response.json())
  //     .then((data) => setHamburgueres(data || []))
  //     .catch((error) => console.error("Erro ao buscar os hambúrgueres", error));
  // }, []);

  // useEffect(() => {
  //   fetch("http://localhost:5000/bebidas")
  //     .then((response) => response.json())
  //     .then((data) => setBebidas(data || []))
  //     .catch((error) => console.error("Erro ao buscar os bebidas", error));
  // }, []);

  useEffect(() => {
    const fetchHamburgueres = async () => {
      try {
        const response = await fetch('https://burgerbyte-api.vercel.app/api/hamburgueres');
        const data = await response.json();
        setHamburgueres(data);
      } catch (error) {
        console.error('Erro ao buscar hambúrgueres:', error);
      }
    };

    const fetchBebidas = async () => {
      try {
        const response = await fetch('https://burgerbyte-api.vercel.app/api/bebidas');
        const data = await response.json();
        setBebidas(data);
      } catch (error) {
        console.error('Erro ao buscar bebidas:', error);
      }
    };

    fetchHamburgueres();
    fetchBebidas();
  }, []);

  const toggleCartModal = () => setIsModalOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cartModelRef.current &&
        !cartModelRef.current.contains(event.target as Node) &&
        cartButtonRef.current !== event.target
      ) {
        setIsModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const addToCart = (item: { id: number; name: string; price: number }) => {
    setCartItens((prevItens) => {
      const itemIndex = prevItens.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (itemIndex >= 0) {
        prevItens[itemIndex].quantity++;
        return [...prevItens];
      }
      return [...prevItens, { ...item, quantity: 1 }];
    });
  };

  useEffect(() => {
    setTotalPrice(
      cartItens.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItens]);

  const removeFromCart = (id: number) => {
    setCartItens((prevItens) => {
      return prevItens
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  const isRestaurantOpen = () => {
    const now = new Date();
    const hours = now.getHours();
    return hours >= 18 && hours < 22;
  };

  const handleCheckout = () => {
    if (!isRestaurantOpen()) {
      Swal.fire({
        icon: "error",
        title: "Restaurante fechado!",
        text: "Tente novamente mais tarde.",
      });
      return;
    }

    if (cartItens.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Carrinho vazio!",
        text: "Adicione itens antes de finalizar o pedido.",
      });
      return;
    }

    if (address.trim() === "") {
      setIsAddressInvalid(true);
      Swal.fire({
        icon: "error",
        title: "Endereço inválido!",
        text: "Preencha seu endereço de entrega.",
      });
      return;
    }

    const cartMessage = cartItens
      .map(
        (item) =>
          `${item.name} - Quantidade: (${item.quantity}) - R$ ${item.price}`
      )
      .join(" | ");

    const encodedMessage = encodeURIComponent(
      `Olá! Meu pedido é: ${cartMessage}. Endereço de entrega: ${address}`
    );

    const phone = "62994334028";
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

    setCartItens([]);

    Swal.fire({
      icon: "success",
      title: "Pedido enviado!",
      text: "Aguarde a confirmação do restaurante pelo WhatsApp.",
    });
  };

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
        <div
          className={`${
            isRestaurantOpen() ? "bg-custom-green" : "bg-red-500"
          } items-center flex justify-center mt-4 px-4 p-2 rounded shadow-lg`}
        >
          <span className="text-sm sm:text-base font-medium text-white">
            {isRestaurantOpen()
              ? "Aberto agora - Seg à Dom 18:00 às 22:00"
              : "Fechado no momento"}
          </span>
        </div>
      </header>

      <h2 className="text-2xl font-bold text-center mt-9 mb-6">
        Conheça nosso menu
      </h2>

      {/* Card de Hamburguer */}
      <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 mb-8 max-w-7xl">
        {hamburgueres.map((hamburguer) => (
          <div
            key={hamburguer.id}
            className="flex p-4 shadow-md bg-white rounded-lg"
          >
            <img
              src={hamburguer.image}
              alt={hamburguer.name}
              className="w-28 h-28 rounded-md"
            />
            <div className="ml-4">
              <p className="text-lg font-bold">{hamburguer.name}</p>
              <p className="text-lg text-gray-600">{hamburguer.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-base font-semibold">
                  R$ {hamburguer.price.toFixed(2)}
                </span>
                <button
                  className="bg-black px-4 py-2 rounded shadow-lg"
                  onClick={() => addToCart(hamburguer)}
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

      {/* Card de Bebidas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 max-w-7xl">
        {bebidas.map((bebida) => (
          <div
            key={bebida.id}
            className="flex p-4 shadow-md bg-white rounded-lg"
          >
            <img
              src={bebida.image}
              alt={bebida.name}
              className="w-28 h-28 rounded-md"
            />
            <div className="ml-4">
              <p className="text-lg font-bold">{bebida.name}</p>
              <p className="text-lg text-gray-600">{bebida.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-base font-semibold">
                  R$ {bebida.price.toFixed(2)}
                </span>
                <button
                  className="bg-black px-4 py-2 rounded shadow-lg"
                  onClick={() => addToCart(bebida)}
                >
                  <ShoppingCart size={18} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Card de Modal */}
      {isModalOpen && (
        <div
          className="bg-black/60 w-full h-full fixed top-0 left-0 flex items-center justify-center"
          ref={cartModelRef}
        >
          <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[700px] max-w-[500px] flex flex-col">
            <h2 className="text-center font-bold text-2xl mb-4">
              Meu carrinho
            </h2>
            <div className="max-h-[300px] overflow-y-auto scrollbar-hide px-2">
              {cartItens.length > 0 ? (
                cartItens.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-3"
                  >
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">{item.name}</span>
                      <span className="text-lg font-light">
                        Quantidade: {item.quantity}
                      </span>
                      <span className="text-lg font-light">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <button
                      className="px-4 py-2 text-black text-lg font-light"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remover
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-center text-xl text-gray-600">
                  Seu carrinho está vazio.
                </p>
              )}
            </div>
            <div className="mt-1">
              <p className="font-bold text-lg">
                Total: <span>R$ {totalPrice.toFixed(2)}</span>
              </p>

              <p className="font-bold text-lg mt-4 mb-0">
                Endereço de Entrega:
              </p>
              <input
                type="text"
                className={`w-full p-1 border-2 rounded my-2 text-lg ${
                  isAddressInvalid ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Endereço de entrega"
                id="address"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  if (e.target.value.trim() !== "") {
                    setIsAddressInvalid(false);
                  }
                }}
                onBlur={() => {
                  if (address.trim() === "") {
                    setIsAddressInvalid(true);
                  }
                }}
              />
              <p
                className={`text-red-500 text-base ${
                  isAddressInvalid ? "block" : "hidden"
                }`}
              >
                Digite seu endereço completo!
              </p>

              <div className="flex justify-between mt-6">
                <button
                  className="text-black text-xl"
                  onClick={toggleCartModal}
                >
                  Fechar
                </button>
                <button
                  className={`px-4 py-2 rounded-md ml-2 text-xl ${
                    cartItens.length > 0 && address.trim() !== ""
                      ? "bg-custom-green text-white"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  }`}
                  disabled={cartItens.length === 0 || address.trim() === ""}
                  onClick={handleCheckout}
                >
                  Finalizar Pedido
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full text-xl bg-red-500 py-3 sticky bottom-0 flex justify-center">
        <button
          className="px-4 py-2 flex items-center gap-2"
          onClick={toggleCartModal}
        >
          <ShoppingCart size={18} className="text-white" />
          <span className="text-white">Ver Carrinho ({cartItens.length})</span>
        </button>
      </footer>
    </div>
  );
}
