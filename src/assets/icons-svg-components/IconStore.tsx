import { FC } from "react";
import { PropsIcon } from "./props.interface";

const IconStore: FC<PropsIcon> = ({ color }) => {
  return (
    <>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 13.5864V20C4.5 20.1989 4.57902 20.3897 4.71967 20.5304C4.86032 20.671 5.05109 20.75 5.25 20.75H18.75C18.9489 20.75 19.1397 20.671 19.2803 20.5304C19.421 20.3897 19.5 20.1989 19.5 20V13.5866"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.06573 4.25H18.9343C19.0973 4.25 19.2558 4.30309 19.3859 4.40124C19.516 4.49939 19.6106 4.63725 19.6554 4.79396L21 9.5H3L4.34458 4.79396C4.38936 4.63725 4.48396 4.49939 4.61408 4.40124C4.7442 4.30309 4.90274 4.25 5.06573 4.25Z"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9.5V11C9 11.7956 8.68393 12.5587 8.12132 13.1213C7.55871 13.6839 6.79565 14 6 14C5.20435 14 4.44129 13.6839 3.87868 13.1213C3.31607 12.5587 3 11.7956 3 11V9.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 9.5V11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11V9.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 9.5V11C21 11.7956 20.6839 12.5587 20.1213 13.1213C19.5587 13.6839 18.7956 14 18 14C17.2044 14 16.4413 13.6839 15.8787 13.1213C15.3161 12.5587 15 11.7956 15 11V9.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default IconStore;
