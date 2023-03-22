import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import "../index.css";

const Faq = () => {
  const [expand, setExpand] = useState(null);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;

  const toggle = (i) => {
    if (expand === i) {
      return setExpand(null);
    }
    setExpand(i);
  };
  return (
    <div className="my-20">
      <h1 className="font-bold text-5xl text-center text-gray-200 my-10">
        FAQ
      </h1>
      <div className="shadow rounded border border-gray-700 max-w-2xl bg-[#292C31] mx-2 md:mx-auto shadow-gray-700">
        {data.map((item, i) => (
          <div key={i}>
            <div className="p-4 text-lg relative font-medium text-gray-200">
              <div
                className="w-5/6 cursor-pointer underline underline-offset-4"
                onClick={() => toggle(i)}>
                {item.que}
              </div>
              <button
                aria-label="question-expander"
                className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
                onClick={() => toggle(i)}>
                {expand === i ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />}
              </button>
            </div>
            <div
              className={`mx-4 font-semibold ${
                expand === i ? "content show" : "content"
              }`}>
              {item.ans}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

const data = [
  {
    que: "How do you see user identity as an admin?",
    ans: "Is true that the bot has access to the user's information, but as described in the Terms of Service, the bot uses but do not store these inforations.",
  },
  {
    que: "How do I delete my anonymous bot message from the channel?",
    ans: "This bot does not has features for removing the messages, not even for the real sender.Check Slack's help page about deleting messages.",
  },
  {
    que: "How can I disable the Anonymous bot?",
    ans: "To disabled the bot in a single channel: remove the bot from the channel /kick @anonymous.To completely disable the bot, you need to remove the app. Check Slacks help page.",
  },
  {
    que: "Is it free or not?",
    ans: "Both. You and your team can use it for free. The bot also has addicional paid features (see Pricing section).",
  },
  {
    que: "Is it open source?",
    ans: "Not anymore. The first version of the bot was open source. You can still check its source here, but it has just the basic feature.",
  },
  {
    que: "I'm not in this chat yet",
    ans: "Slack says: I'm not in this chat yet. Please, invite me first. (The invite will be public)Before using Anonymous Bot you (or someone else) needs to invite the bot to the channel.Inviting bots or people is a public action: Slack automatically sends a message like Anonymous Bot was added to #general by username.",
  },
  {
    que: "You are not allowed to send anonymous messages.",
    ans: "The Team Plan has a feature to restrict access for some users.If you got this message, it means you are in the black list (or not in the white list).Only your team admin can change this.",
  },
];
