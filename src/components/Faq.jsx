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
    <div id="faq" className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">
          Frequently asked questions
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
          Have a different question and can’t find the answer you’re looking
          for? Reach out to our support team by{" "}
          <a
            href="#"
            className="font-semibold text-indigo-400 hover:text-indigo-300">
            sending us an email
          </a>{" "}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {data.map((faq) => (
              <div key={faq.que}>
                <dt className="text-lg font-semibold leading-7 text-white">
                  {faq.que}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-300">
                  {faq.ans}
                </dd>
              </div>
            ))}
          </dl>
        </div>
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
