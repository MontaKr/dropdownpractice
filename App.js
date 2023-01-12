import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

export default function App() {
  const array = [
    { id: "1", title: "ABC" },
    { id: "2", title: "DEF" },
    { id: "3", title: "GHI" },
    { id: "4", title: "JKL" },
    { id: "5", title: "MNO" }
  ];

  const [isHover, setIsHover] = useState(false);

  return (
    <Head isHover={isHover}>
      <div className="header">
        {array.map((content, id) => {
          return (
            <div
              className="header__title"
              onMouseEnter={() => {
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setIsHover(false);
              }}
            >
              {content.title}
            </div>
          );
        })}
      </div>
    </Head>
  );
}

const Head = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  .header {
    display: inline-flex;
    border: 1px solid black;
    box-sizing: border-box;
  }

  .header__title {
    border: 1px solid red;
    padding: 5px 10px;
    font-weight: ${(props) => (props.isHover ? "700" : "400")};
  }
`;
