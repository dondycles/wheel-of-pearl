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
  const [spinning, setSpinning] = useState<Boolean>(false);
  const [spinStrength, setSpinStrength] = useState<Number>(0);
  const [spinRotation, setSpinRotation] = useState<Number>(0);
  const [items, setItems] = useState<any>([]);
  const isEmpty = (str: string) => {
    return !str.trim().length;
  };
  const getRandomPositiveNumber = () => {
    const random = Math.random();
    const randomNumberInRange = Math.floor(random * 15000) + 10000;
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
      <h1 className=" text-3xl font-black">Wheel Of Pearl</h1>
      <div className="relative max-w-[80%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[40%] w-full aspect-square">
        <div
          ref={wheel}
          style={{
            transition: "transform 15s ease-out ",
            // 107.18621063232422 83.81121063232422
            // 107.18621063232422 325.89935302734375
          }}
          className={`w-full relative aspect-square bg-zinc-700 rounded-full  border-8 border-zinc-700 text-black flex justify-center overflow-hidden
          `}
        >
          {items &&
            items.map((data: any, i: Number) => {
              return (
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setItems(items.filter((item: any, e: number) => e !== i))
                  }
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
                    " origin-bottom bg-gradient-to-r from-white to-zinc-400 absolute font-medium text-black flex items-center justify-center hover:to-zinc-800 duration-150"
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

                  wheel.current!.style.transform =
                    "rotate(calc(" + Number(spinRotation) + "deg))";

                  console.log(String(Number(spinStrength)));
                  wheel.current!.style.pointerEvents = "none";
                  setSpinning(true);
                  setTimeout(() => {
                    wheel.current!.style.pointerEvents = "auto";
                    setSpinning(false);
                  }, 15000);
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
                  }, 16000);
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
          <div className=" flex flex-row gap-2 max-w-[300px] w-full">
            <input
              ref={input}
              type="text"
              placeholder="Input items"
              className=" px-4 py-1 min-w-[0px] rounded-full text-black flex-1"
            />
            <button
              onClick={() => {
                if (isEmpty(input.current!.value)) return;
                setItems([...items, input.current!.value]);
                input.current!.value = "";
              }}
              className=" bg-white rounded-full text-2xl shrink-0 aspect-square text-black p-1 h-full active:scale-95 duration-100"
            >
              <AiOutlinePlus />
            </button>
          </div>
          {items.length != 0 && (
            <div className=" text-black bg-white max-w-[300px] w-full p-2 rounded-xl flex flex-col gap-2 max-h-[300px] h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-zinc-700 ">
              {items.map((item: any, i: number) => {
                return (
                  <div
                    id={String(i)}
                    className="flex justify-between border-b-2 border-zinc-200 p-2"
                  >
                    <p>{item}</p>
                    <AiFillDelete
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
