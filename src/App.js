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

  return (
    <Head>
      <div className="header">
        {array.map((content, id) => (
          <HeaderTitle key={content.id} content={content} />
        ))}
      </div>
    </Head>
  );
}

function HeaderTitle({ content }) {
  const [isHover, setIsHover] = useState(false);
  return (
    <StyledHeaderTitle
      isHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {content.title}
      {content.id === "1" && isHover === true && (
        <div className="header__box01--hover">drop1</div>
      )}
      {content.id === "2" && isHover === true && (
        <div className="header__box02--hover">drop2</div>
      )}
    </StyledHeaderTitle>
  );
}

const StyledHeaderTitle = styled.div`
  font-weight: ${(props) => (props.isHover ? "700" : "400")};
  border: 1px solid red;

  .header__box01--hover {
    animation-name: dropdown;
    animation-duration: 1s;
  }

  .header__box02--hover {
    animation-name: dropdown;
    animation-duration: 1s;
  }

  @keyframes dropdown {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(5px);
    }
  }
`;

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
`;
