import styled from "styled-components";
import Head from "next/head"
import TechItem from "./Technologies";
import {
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiNeovim,
  SiReact,
  SiNextdotjs,
  SiYarn,
  SiPnpm,
  SiDocker,
  SiLua,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
  SiChakraui,
  SiElixir,
  SiRedwoodjs,
  SiPowershell,
  SiVisualstudiocode,
  SiGit,
  SiGithub,
} from "react-icons/si"

const Background = styled.div`
  background-color: hsl(0, 0%, 20%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: calc(100% - 5vw);

  @media (min-width: 1000px) {
    width: calc(100% - 25vw);
  }

  @media (min-width: 1200px) {
    width: calc(100% - 45vw);
  }

  @media (min-width: 1600px) {
    width: calc(100% - 65vw);
  }

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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  transition: all .3s ease;

  &:hover {
      border: 1px solid hsl(0, 0%, 40%);
    }
`;

const Introduction = () => {
  return (
    <>
      <Head>
        <title>Sam Sierra</title>
      </Head>
      <Background>
        <Wrapper>
          <h1>Ahoi!</h1>
          <p>
            Ich bin ein Webentwickler aus Norddeutschland! Keine Angst, nicht aus dem richtigen Norden.
          </p>
          <p>
            Ich bin selbstständig und entwickele seit ein paar Jahren sichere und performate Webapplikationen.
          </p>
          <h1>Ich mag Sicherheit!</h1>
          <p>
            Mein Kernmetier ist die Sicherheit meiner Benutzer. Diese stelle ich durch sichere Endpunkte sowohl in dem API als auch im Frontend sicher.
          </p>
          <h1>Ich mag Benutzererfahrung!</h1>
          <p>
            Ist mein Benutzer unzufrieden, so bin auch in unzufrieden. Eine meiner h;chsten Priorit'ten ist, dass der Endnutzer Spa- bei der Bedienung meines Produktes hat.
          </p>
          <Technologies>
            <TechItem icon={<SiTypescript />} name="Typescript"></TechItem>
            <TechItem icon={<SiJavascript />} name="Javascript"></TechItem>
            <TechItem icon={<SiNodedotjs />} name="Node.js"></TechItem>
            <TechItem icon={<SiNeovim />} name="Neovim"></TechItem>
            <TechItem icon={<SiReact />} name="React"></TechItem>
            <TechItem icon={<SiNextdotjs />} name="Next.js"></TechItem>
            <TechItem icon={<SiYarn />} name="Yarn"></TechItem>
            <TechItem icon={<SiPnpm />} name="Pnpm"></TechItem>
            <TechItem icon={<SiDocker />} name="Docker"></TechItem>
            <TechItem icon={<SiLua />} name="Lua"></TechItem>
            <TechItem icon={<SiTailwindcss />} name="Tailwind CSS"></TechItem>
            <TechItem icon={<SiPrisma />} name="Prisma"></TechItem>
            <TechItem icon={<SiPostgresql />} name="PostgreSQL"></TechItem>
            <TechItem icon={<SiChakraui />} name="Chakra UI"></TechItem>
            <TechItem icon={<SiElixir />} name="Elixir"></TechItem>
            <TechItem icon={<SiRedwoodjs />} name="Redwood.js"></TechItem>
            <TechItem icon={<SiPowershell />} name="Powershell"></TechItem>
            <TechItem
              icon={<SiVisualstudiocode />}
              name="Visual Studio Code"
            ></TechItem>
            <TechItem icon={<SiGit />} name="Git"></TechItem>
            <TechItem icon={<SiGithub />} name="Github"></TechItem>
          </Technologies>
        </Wrapper>
      </Background>
    </>
  );
};

export default Introduction;
