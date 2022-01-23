import React, { useEffect, useRef, useState } from "react";
import { AcademicCapIcon, BadgeCheckIcon, CashIcon, ClockIcon, ReceiptRefundIcon, UsersIcon } from "@heroicons/react/outline";
import classNames from "classnames";
const actions = [
  {
    id: 1,
    title: "Find the first location of the shanty",
    href: "#",
    icon: ClockIcon,
    description: "Description",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    id: 2,
    title: "Go to the coolest booth",
    href: "#",
    icon: BadgeCheckIcon,
    description: "Description",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    id: 3,
    title: "Meet a stranger",
    href: "#",
    icon: UsersIcon,
    description: "Description",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    id: 4,
    title: "Shake someone's hand",
    href: "#",
    icon: CashIcon,
    description: "Description",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    id: 5,
    title: "Have a dance party",
    href: "#",
    icon: ReceiptRefundIcon,
    description: "Description",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    id: 6,
    title: "Come back to the booth",
    href: "#",
    icon: AcademicCapIcon,
    description: "Description",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];
function App() {
  const myRef = useRef<HTMLDivElement>(null);
  const [actionState, setActionState] = useState<any>(localStorage.getItem("actionState") ? JSON.parse(localStorage.getItem("actionState")!) : {});

  function completeItem(index: number) {
    const newActionState = { ...actionState };
    newActionState[index] = { completed: !newActionState[index]?.completed };
    setActionState(newActionState);
  }

  useEffect(() => {
    localStorage.setItem("actionState", JSON.stringify(actionState));
  }, [actionState]);

  useEffect(() => {
    let storedActions = localStorage.getItem("actionState");
    if (storedActions) {
      let items = JSON.parse(storedActions);
      console.log(items);
      setActionState(items);
    }
  }, []);

  const executeScroll = () => myRef.current?.scrollIntoView();
  return (
    <div className="App bg-gray-200 scroll-smooth">
      <div className="min-h-screen">
        <div className="flex w-full text-3xl font-extrabold tracking-tight  items-center text-center p-4 justify-center">
          <img className="h-[64px]  w-[64px] mr-2" src="./logo.png" />
          <h1 className="text-red-500 text-xl uppercase font-bold">Art Shanty Projects</h1>
        </div>
        <div className="max-w-7xl mx-auto text-center py-8 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block">Begin the scavenger hunt below.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={executeScroll}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-800"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={myRef} className="flex justify-center cursor-pointer">
        <div className="w-full p-4 lg:w-1/2">
          <div className="rounded-lg bg-white overflow-hidden shadow divide-y divide-white sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
            {actions.map((action, actionIdx) => (
              <div
                key={action.title}
                onClick={() => completeItem(action.id)}
                className={classNames(
                  actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
                  actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                  actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                  actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
                  "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
                  { "bg-green-200": actionState[action.id]?.completed }
                )}
              >
                <div>
                  <span className={classNames(action.iconBackground, action.iconForeground, "rounded-lg inline-flex p-3 ring-4 ring-white")}>
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    {action.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
