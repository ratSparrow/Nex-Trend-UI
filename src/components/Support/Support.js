import {
  faBell,
  faChevronRight,
  faClosedCaptioning,
  faFileInvoice,
  faHouse,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const backButton = <FontAwesomeIcon icon={faChevronRight} />;

const ao = (
  <FontAwesomeIcon className="text-blue-600" icon={faHouse} size="sm" />
);
const sp = (
  <FontAwesomeIcon
    className="text-[#059669]"
    icon={faClosedCaptioning}
    size="sm"
  />
);
const po = (
  <FontAwesomeIcon className="text-[#DB2777]" icon={faFileInvoice} size="sm" />
);
const ns = (
  <FontAwesomeIcon className="text-[#D97706]" icon={faBell} size="sm" />
);
const pp = (
  <FontAwesomeIcon className="text-[#DB2A2A]" icon={faUser} size="sm" />
);
const pc = (
  <FontAwesomeIcon className="text-[#7C3AED] " icon={faLock} size="sm" />
);

const supportInfo = [
  {
    id: 1,
    svg: ao,
    title: "Account Overview",
    title1: "First time, what do I do next?",
    title2: "Changing you profile picture and other information",
    title3: "I didnt get a confirmation email, what should I do next",
    title4: "What is the refund policy if I have to cancel during the month",
  },
  {
    id: 2,
    svg: sp,
    title: "Subscription Plans",
    title1: "First time, what do I do next?",
    title2: "Changing you profile picture and other information",
    title3: "I didnt get a confirmation email, what should I do next",
    title4: "What is the refund policy if I have to cancel during the month",
  },
  {
    id: 3,
    svg: po,
    title: "Payment Options",
    title1: "First time, what do I do next?",
    title2: "Changing you profile picture and other information",
    title3: "I didnt get a confirmation email, what should I do next",
    title4: "What is the refund policy if I have to cancel during the month",
  },
  {
    id: 4,
    svg: ns,
    title: "Notification Settings",
    title1: "First time, what do I do next?",
    title2: "Changing you profile picture and other information",
    title3: "I didnt get a confirmation email, what should I do next",
    title4: "What is the refund policy if I have to cancel during the month",
  },
  {
    id: 2,
    svg: pp,
    title: "Profile Preferences",
    title1: "First time, what do I do next?",
    title2: "Changing you profile picture and other information",
    title3: "I didnt get a confirmation email, what should I do next",
    title4: "What is the refund policy if I have to cancel during the month",
  },
  {
    id: 2,
    svg: pc,
    title: "Privacy and Cookies",
    title1: "First time, what do I do next?",
    title2: "Changing you profile picture and other information",
    title3: "I didnt get a confirmation email, what should I do next",
    title4: "What is the refund policy if I have to cancel during the month",
  },
];

const Support = () => {
  return (
    <section className="mx-8 ">
      <div className="flex justify-between items-center my-6 ">
        {" "}
        <h2 className="text-2xl font-bold">Choose Your Support Tag</h2>
        <Link to="/ticket">
          <button className="btn  btn-sm text-white font-semibold bg-orange-500 border-0 hover:bg-orange-600 rounded">
            Rise A Ticket
          </button>
        </Link>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {supportInfo.map((info) => (
          <div className="card rounded shadow-lg ">
            <div key={info.id} className="card-body mx-2">
              <div>
                <span
                  className=" rounded-full bg-gray-200 p-3
                 "
                >
                  {info.svg}
                </span>
              </div>
              <h2 className="text-xl font-semibold my-5">{info.title}</h2>
              <div className="text-sm flex justify-start">
                <div className="mr-3 "> {backButton}</div>{" "}
                <div>{info.title1}</div>
              </div>
              <div className="text-sm flex justify-start">
                <div className="mr-3 "> {backButton}</div>{" "}
                <div>{info.title2}</div>
              </div>
              <div className="text-sm flex justify-start">
                <div className="mr-3 "> {backButton}</div>{" "}
                <div>{info.title3}</div>
              </div>
              <div className="text-sm flex justify-start mb-3">
                <div className="mr-3 "> {backButton}</div>{" "}
                <div>{info.title4}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Support;
