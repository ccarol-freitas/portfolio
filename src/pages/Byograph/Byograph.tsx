import React, { useState } from "react";
import { SkillsInfoProps, SocialInfoProps } from "../../data/@types/types";
import Download from "../../ui/components/Button/Button";
import Tooltip from "../../ui/components/Tooltip";
import { mySkills, mySocialArray } from "../../utils/arrays";
import { Box, Container, Text, Title } from "./styles";

const ByographContent = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Container>
      <Box>
        <Title className="line-1 anim-typewriter">
          Olá! Eu sou a Carol. Desenvolvedora frontend.
        </Title>
        <Text>
          Desde 2018, tenho me aprofundado no mundo do desenvolvimento frontend,
          trabalhando em projetos significativos para fintechs, startups e consultorias.
        </Text>
        <Text>
          Minhas principais tecnologias incluem ReactJs, JavaScript, TypeScript, Styled-Components,SQL, CSS3, HTML5 e Figma.
          Foco em criar aplicações que facilitem a experiência de usuário.
        </Text>

      </Box>
      <Box>
        <Title>Habilidades</Title>
        <ul>
          {mySkills.map((social: SkillsInfoProps, index: number) => (
            <li key={index}>
              <Tooltip text={social.title} image={social.img} />
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Title>Contato</Title>
        <ul>
          {mySocialArray.map((social: SocialInfoProps, index: number) => (
            <li key={index}>
              <a href={social.link}>
                <Tooltip text={social.title} image={social.img} />
              </a>
            </li>
          ))}
        </ul>
      </Box>
      <Download />
    </Container>
  );
};

export default ByographContent;
