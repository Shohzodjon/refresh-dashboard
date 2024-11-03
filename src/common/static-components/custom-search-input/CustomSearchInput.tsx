import { FC, useState, useEffect, useRef } from "react";
import SearchIcon from "../../../assets/icons/SearchIcon.svg";
import styles from "./custom_search_input.module.scss";


export interface CustomSearchInputType {
    plaseholder: string;
  }

const CustomSearchInput: FC<CustomSearchInputType> = ({plaseholder}) => {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  const handleFocus = () => {
    // setIsFocused(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef}>
      <div className={styles.div}>
        <img src={SearchIcon} />
        <input
          value={search}
          onChange={handleChange}
          placeholder={plaseholder}
          type="search"
          onFocus={handleFocus}
        />
      </div>
    </div>
  );
};

export default CustomSearchInput;
