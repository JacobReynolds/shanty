import React, { useEffect, useRef, useState } from "react";
import { AcademicCapIcon, BadgeCheckIcon, CakeIcon, CashIcon, ClockIcon, EmojiHappyIcon, EyeIcon, FireIcon, HandIcon, HeartIcon, LightBulbIcon, LightningBoltIcon, ReceiptRefundIcon, SparklesIcon, UsersIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { Link, animateScroll as scroll } from "react-scroll";

const actions = [
  {
    id: 1,
    title: "Take a stroll around the shanty village.",
    href: "#",
    icon: ClockIcon,
    description: "Did you know we have 18 shanties this year? All our shanty artists and performers are paid for their work, and members like you help us do that! Thanks for your support!",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    id: 2,
    title: "Grab a hot drink for the rest of your exploration.",
    href: "#",
    icon: SparklesIcon,
    description: "The Welcome Shanty has hot cocoa and tea available for you. (Feel free to use a reusable mug if you brought one. Forget yours and want one? Members get 10% off our merch, including our awesome camp mug. Don't need a new mug? We have compostable cups available.)",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    id: 3,
    title: "Visit your favorite shanty.",
    href: "#",
    icon: HeartIcon,
    description:"With 18 shanties, there's no shortage of fun or activities for you to do. What shanty is your favorite? Why? How would you describe it to an extraterrestrial from another planet?",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    id: 4,
    title: "Meet a stranger.",
    href: "#",
    icon: HandIcon,
    description:"We always say that the people are one of the best parts of the Art Shanty Projects. Introduce yourself to one of the artists, staff, members, or volunteers and meet someone awesome. What's their name? What's their favorite shanty? What's their secret talent?",
        iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    id: 5,
    title: "Warm your fingers and toes at the fire.",
    href: "#",
    icon: FireIcon,
    description: "We have a couple fire pits available to keep you warm tonight! Feel free to sit down at any time. Need extra warmth? Top up on your hot drink at the Welcome Shanty any time.",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    id: 6,
    title: "Play \"I Spy.\"",
    href: "#",
    icon: EyeIcon,
    description: "We'll start. We spy with our little eyes, something…pink. (Too dark to see? Then we spy with our little eyes something twinkling and far away…)",
    iconForeground: "text-orange-700",
    iconBackground: "bg-orange-50",
  },
  {
    id: 7,
    title: "Grab a bite to eat.",
    href: "#",
    icon: CakeIcon,
    description: "Nothing says “winter” like some hot food! One of our awesome sponsors, ChowGirls, has provided food for tonight's event. Make sure you grab some from the Welcome Shanty!",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    id: 8,
    title: "Listen to the ice.",
    href: "#",
    icon: LightningBoltIcon,
    description: "Don't worry, the cracks and pops are normal! The ice is plenty thick for all the shanties, people, and fun we have out here. We like to think the ice is talking to us. What do you think it's saying?",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-50",
  },
  {
    id: 9,
    title: "Plan your shanty or performance.",
    href: "#",
    icon: LightBulbIcon,
    description: "Now that you're inspired by all the sights, smells, sounds, and tastes of the shanty village, it's time to start dreaming. What shanty would you build if you were an artist? What performance would you put on if you were a performer?",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    id: 10,
    title: "Have a dance party!",
    href: "#",
    icon: EmojiHappyIcon,
    description: "Not to brag, but we have live music on the ice tonight, if you want some music to dance to. Otherwise, just dance it out wherever you are.",
    iconForeground: "text-red-700",
    iconBackground: "bg-red-50",
  },
];
function App() {
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

  return (
    <div className="App bg-gray-200 scroll-smooth">
      <div className="min-h-[50vh]">
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
              <Link
                to="list"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 hover:bg-red-800"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="list" className="flex justify-center cursor-pointer">
        <div className="w-full p-4 lg:w-1/2">
          <p className="text-gray-600 text-sm italic mb-1">Complete each item by tapping or clicking</p>
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
                  "relative group bg-white hover:bg-gray-100 transition-colors p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500",
                  {
                    "bg-green-200": actionState[action.id]?.completed,
                    "hover:bg-green-300": actionState[action.id]?.completed,
                  }
                )}
              >
                <div>
                  <span className={classNames(action.iconBackground, action.iconForeground, "rounded-lg inline-flex p-3 ring-4 ring-white")}>
                    <action.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">{action.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{action.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-[50vh] mt-24">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Congratulations!</p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Thanks for joining us tonight for Member Night! We appreciate your support, and we couldn't do this without you. We hope you had fun experiencing the ice in a new way, and we can't wait to see you again soon.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
