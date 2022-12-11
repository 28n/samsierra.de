import styled from "styled-components";
import { useEffect } from "react";

const Background = styled.div`
  background-color: hsl(0, 0%, 20%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: calc(100% - 25rem);
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100vw;
  overflow: hidden;
  word-wrap: break-word;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    font-weight: 400;
  }
  p {
    font-size: 1.25rem;
    font-weight: 300;
  }
`;

const Technologies = styled.div`
  border: 1px solid hsl(0, 0%, 30%);
  border-radius: 2px;
  padding: 1rem;
`;

const Introduction = () => {
  return (
    <>
      <Background>
        <Wrapper>
          <h1>Moin!</h1>
          <p>
            Ich bin ein selbstständiger Web-Entwickler aus Niedersachsen.
            Derzeitig erstelle ich Full-Stack Lösungen, die sowohl eine
            makellose Benutzererfahrung als auch eine sichere Kommunikation mit
            dem Server gewährleistet.
          </p>
          <h1>Meine Leidenschaft für Technik</h1>
          <p>
            Schon seit meiner Kindheit liebe ich Technik. Egal ob am Computer,
            an Flugzeugen oder irgendwo anders. Ich will immer verstehen, was
            hinter den Geräten steckt, die ich benutze. Seit ein paar Jahren
            fasziniert mich die Softwareentwicklung speziell. Ich sag also dem
            Computer, was er zu tun hat.
          </p>
          <h1>Technologien & Tools</h1>
          <p>
            Um mir mein Leben etwas einfacher zu machen, spezialisiere ich mich
            auf relativ wenige Programmiersprachen. Das kommt mit einem großen
            Vorteil daher: Ich bin in den paar Sprachen echt gut. Damit ich noch
            besser werd, verwende ich viele Tools, die meinen Workflow
            vereinfachen.
          </p>
          <Technologies>Technologies</Technologies>
        </Wrapper>
      </Background>
    </>
  );
};

export default Introduction;
