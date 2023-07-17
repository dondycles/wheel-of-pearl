"use client";
import { useEffect, useRef, useState } from "react";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { BiSolidLeftArrow } from "react-icons/bi";

export default function Home() {
  const wheel = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<HTMLDivElement | any>([]);
  const input = useRef<HTMLInputElement | null>(null);
  const pointer = useRef<HTMLDivElement | null>(null);
  const [spinMode, setSpinMode] = useState<String>("elimination");
  const [showModal, setShowModal] = useState<Boolean>(true);
  const [picked, setPicked] = useState<any>(null);
  const [spinning, setSpinning] = useState<Boolean>(false);
  const [spinStrength, setSpinStrength] = useState<Number>(0);
  const [spinRotation, setSpinRotation] = useState<Number>(0);
  const [items, setItems] = useState<any>([]);
  const isEmpty = (str: string) => {
    return !str.trim().length;
  };
  const getRandomPositiveNumber = () => {
    const random = Math.random();
    const randomNumberInRange = Math.floor(random * 5000) + 4000;
    setSpinStrength(randomNumberInRange);
    setSpinRotation((prev) => Number(prev) + randomNumberInRange);
  };
  const handleRefAssignment = (element: any, index: any) => {
    itemsRef.current[index] = element;
  };

  useEffect(() => {
    getRandomPositiveNumber();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center p-4 bg-gradient-to-b from-zinc-800 to-zinc-950 text-white gap-3 overflow-x-hidden">
      <h1 className=" text-3xl font-zinc-700">Wheel Of Pearl</h1>
      <div
        className={` fixed top-0 bottom-0 left-0 right-0 backdrop-blur-[2px]  backdrop-brightness-[75%] z-10 flex items-center justify-center duration-500  ${
          showModal ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className=" bg-white text-zinc-700 p-4 rounded-xl flex flex-col gap-2 w-full max-w-[250px] h-fit outline outline-8 outline-zinc-700">
          <h2 className=" text-2xl font-medium">
            {spinMode === "firstpick" ? (
              <p>
                What a luck! <br /> The universe chose
                {picked && picked.content}!
              </p>
            ) : (
              <p>
                {items.length < 3 ? (
                  <>
                    What a luck! <br /> The universe chose{" "}
                    {picked && picked.index === 0 ? (
                      <>{items[1]}</>
                    ) : (
                      <>{items[0]}</>
                    )}
                  </>
                ) : (
                  <>
                    The universe wants to eliminate {picked && picked.content}!
                  </>
                )}
              </p>
            )}
          </h2>
          {spinMode === "firstpick" ? (
            <div className=" flex flex-row gap-2">
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="flex-1 bg-zinc-700 text-white p-2 rounded-full active:scale-95 duration-100"
              >
                Finish
              </button>
            </div>
          ) : (
            <div className=" flex flex-row gap-2">
              <button
                onClick={() => {
                  setShowModal(true);
                }}
                className="flex-1 bg-zinc-700 text-white p-2 rounded-full active:scale-95 duration-100"
              >
                Keep
              </button>
              <AiFillDelete
                onClick={() => {
                  setItems(
                    items.filter((item: any, e: number) => e !== picked.index)
                  );
                  setTimeout(() => {
                    setShowModal(true);
                  }, 100);
                }}
                role="button"
                tabIndex={0}
                className=" aspect-square rounded-full text-white bg-zinc-700 p-2 box-content active:scale-95 duration-100 outline-transparent"
              />
            </div>
          )}
        </div>
      </div>

      <div
        className={`relativeaspect-square duration-500 w-full overflow-hidden  rounded-full drop-shadow-[0_0_50px_#ffffff44]  ease-in-out ${
          items.length > 0
            ? " max-w-[80%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[40%] bg-zinc-700"
            : " max-w-[50px] bg-white"
        }`}
      >
        <div
          ref={wheel}
          style={{
            transition: "transform 11s ease-out, opacity 0.150s ease-in-out",
          }}
          className={`w-full relative aspect-square bg-zinc-700 rounded-full  border-8 border-zinc-700 text-zinc-700 flex justify-center overflow-hidden ${
            items.length > 0 ? "opacity-100" : "opacity-0"
          }
          `}
        >
          {items &&
            items.map((data: any, i: Number) => {
              return (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    setPicked({ index: i, content: data });
                  }}
                  id={String(i)}
                  ref={(element) => handleRefAssignment(element, i)}
                  style={
                    (items.length &&
                      items.length < 2 && {
                        width: "100%",
                        height: "100%",
                      }) ||
                    (items.length === 2 && {
                      clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
                      transform:
                        "rotate(calc(360deg/" +
                        Number(items.length) +
                        "*" +
                        i +
                        ")) ",
                      width: "100%",
                      height: "50%",
                    }) ||
                    (items.length === 3 && {
                      clipPath:
                        "polygon(-" +
                        Number(31) +
                        "% 0%, 52% 100%, " +
                        Number(131) +
                        "% 0%)",
                      transform:
                        "rotate(calc(360deg/" +
                        Number(items.length) +
                        "*" +
                        i +
                        ")) ",
                      width: `calc(3.14159 * 100% / ${items.length})`,
                      height: "50%",
                    }) ||
                    (items.length === 4 && {
                      clipPath:
                        "polygon(-" +
                        Number(12) +
                        "% 0%, 52% 100%, " +
                        Number(112) +
                        "% 0%)",
                      transform:
                        "rotate(calc(360deg/" +
                        Number(items.length) +
                        "*" +
                        i +
                        ")) ",
                      width: `calc(3.14159 * 100% / ${items.length})`,
                      height: "50%",
                    }) ||
                    (items.length === 5 && {
                      clipPath:
                        "polygon(-" +
                        Number(6) +
                        "% 0%, 52% 100%, " +
                        Number(106) +
                        "% 0%)",
                      transform:
                        "rotate(calc(360deg/" +
                        Number(items.length) +
                        "*" +
                        i +
                        ")) ",
                      width: `calc(3.14159 * 100% / ${items.length})`,
                      height: "50%",
                    }) ||
                    (items.length === 6 && {
                      clipPath:
                        "polygon(-" +
                        Number(4) +
                        "% 0%, 52% 100%, " +
                        Number(104) +
                        "% 0%)",
                      transform:
                        "rotate(calc(360deg/" +
                        Number(items.length) +
                        "*" +
                        i +
                        ")) ",
                      width: `calc(3.14159 * 100% / ${items.length})`,
                      height: "50%",
                    }) ||
                    (items.length === 7 && {
                      clipPath:
                        "polygon(-" +
                        Number(2) +
                        "% 0%, 52% 100%, " +
                        Number(102) +
                        "% 0%)",
                      transform:
                        "rotate(calc(360deg/" +
                        Number(items.length) +
                        "*" +
                        i +
                        ")) ",
                      width: `calc(3.14159 * 100% / ${items.length})`,
                      height: "50%",
                    }) ||
                    (items.length > 7 && {
                      clipPath:
                        "polygon(-" +
                        Number(0) +
                        "% 0%, 52% 100%, " +
                        Number(100) +
                        "% 0%)",
                      transform:
                        "rotate(calc(360deg/" +
                        Number(items.length) +
                        "*" +
                        i +
                        ")) ",
                      width: `calc(3.14159 * 100% / ${items.length})`,
                      height: "50%",
                    })
                  }
                  className={
                    " origin-bottom bg-white absolute font-medium text-zinc-700 flex items-center justify-center hover:to-zinc-800 duration-150"
                  }
                >
                  <p
                    className={`${
                      items.length > 2 && "[writing-mode:vertical-rl]"
                    } m-auto flex items-center justify-center `}
                  >
                    {data}
                  </p>
                </div>
              );
            })}
          {items.length > 1 && (
            <>
              <ImSpinner9
                onClick={() => {
                  if (items.length < 2) return;
                  getRandomPositiveNumber();

                  setShowModal(true);

                  wheel.current!.style.transform =
                    "rotate(calc(" + Number(spinRotation) + "deg))";

                  console.log(String(Number(spinStrength)));
                  wheel.current!.style.pointerEvents = "none";
                  setSpinning(true);
                  setTimeout(() => {
                    wheel.current!.style.pointerEvents = "auto";
                    setSpinning(false);
                  }, 10500);
                  setTimeout(() => {
                    const targetElement = document.elementFromPoint(
                      Number(pointer.current?.getBoundingClientRect().x) + 20,
                      Number(pointer.current?.getBoundingClientRect().y) + 20
                    );
                    const event = new MouseEvent("click", {
                      bubbles: true,
                      cancelable: true,
                      clientX:
                        Number(pointer.current?.getBoundingClientRect().x) + 40,
                      clientY:
                        Number(pointer.current?.getBoundingClientRect().y) + 20,
                    });
                    targetElement!.dispatchEvent(event);
                    setShowModal(false);
                  }, 11500);
                }}
                className="absolute text-white rounded-full text-2xl outline-[1px] outline outline-white bg-zinc-700 p-1 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] active:scale-95 duration-100"
                role="button"
                tabIndex={0}
              />
            </>
          )}
        </div>
        {items.length > 1 && (
          <>
            <div
              className="absolute  top-[50%] left-[0%] translate-y-[-50%] "
              ref={pointer}
            >
              <BiSolidLeftArrow className="  text-zinc-700 rotate-180" />
            </div>
          </>
        )}
      </div>
      {!spinning && (
        <>
          <div className=" flex flex-row gap-[1px] rounded-full overflow-hidden z-[9] w-full max-w-[300px] mt-4">
            <button
              onClick={() => setSpinMode("elimination")}
              className={`bg-white text-black button py-2 px-3 duration-150 min-w-[100px] ${
                spinMode === "firstpick" ? "bg-zinc-500 " : "flex-1"
              }`}
            >
              Elimination
            </button>
            <button
              onClick={() => setSpinMode("firstpick")}
              className={`bg-white text-black button py-2 px-3 duration-150 min-w-[100px] ${
                spinMode === "elimination" ? "bg-zinc-500" : "flex-1"
              }`}
            >
              First Pick
            </button>
          </div>
          <div className=" flex flex-row gap-2 max-w-[300px] w-full z-[9]">
            <input
              ref={input}
              type="text"
              placeholder="Input items"
              className=" px-4 py-1 min-w-[0px] rounded-full text-zinc-700 flex-1"
            />
            <button
              onClick={() => {
                if (isEmpty(input.current!.value)) return;
                setItems([...items, input.current!.value]);
                input.current!.value = "";
              }}
              className=" bg-white rounded-full text-2xl shrink-0 aspect-square text-zinc-700 p-1 h-full active:scale-95 duration-100"
            >
              <AiOutlinePlus />
            </button>
          </div>
          {items.length != 0 && (
            <div className=" text-zinc-700 bg-white max-w-[300px] w-full p-2 rounded-xl flex flex-col gap-2 max-h-[300px] h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-700  z-[9]">
              {items.map((item: any, i: number) => {
                return (
                  <div
                    id={String(i)}
                    className="flex justify-between border-b-2 border-zinc-200 p-2"
                  >
                    <p>{item}</p>
                    <AiFillDelete
                      className="active:scale-95 duration-100 outline-transparent"
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setItems(
                          items.filter((item: any, e: number) => e !== i)
                        )
                      }
                    />
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </main>
  );
}
