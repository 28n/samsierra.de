import styled from "styled-components";
import Image from "next/image";

const Background = styled.div`
  background-color: hsl(0, 0%, 10%);
  height: 100vh;
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Greeting = styled.span`
  position: absolute;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
`;

const ScrollDown = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  z-index: 1;

  button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

const scroll = () => {
  let scrollHeight = window.innerHeight;
  window.scrollTo({ top: scrollHeight, behavior: "smooth" });
};

const Masthead = () => {
  return (
    <>
      <Background>
        <Greeting>
          <h1>Sam Sierra</h1>
          <p>Webentwickler</p>
        </Greeting>
        <ScrollDown>
          <button onClick={() => scroll()}>
            <Image
              src={"/arrow-down.png"}
              alt="scroll down"
              width={64}
              height={36}
            />
          </button>
        </ScrollDown>
      </Background>
    </>
  );
};

export default Masthead;
