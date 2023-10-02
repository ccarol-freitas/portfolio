import React, { useState } from "react";
import { SkillsInfoProps, SocialInfoProps } from "../../data/@types/types";
import Download from "../../ui/components/Button/Button";
import Tooltip from "../../ui/components/Tooltip";
import { mySkills, mySocialArray } from "../../utils/arrays";
import { Box, Container, Text, Title } from "./styles";

const ByographContent = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <Container>
        <Box>
          <Title>Olá! Eu sou a Carol</Title>
          <Text>
            Sou desenvolvedora por atração, amante da música, fã de Quentin
            Tarantino e Edgar Allan Poe, praticante de esportes radicais.
          </Text>
          <Text>
            Minha área de atuação é o desenvolvimento web, onde utilizo as
            tecnologias mais atuais e amplamente reconhecidas.
          </Text>
          <Text>
            Tenho um compromisso sólido com a usabilidade e a experiência do
            usuário em cada site ou aplicação que construo, sempre buscando
            oferecer a melhor qualidade possível
          </Text>
        </Box>
        <Box>
          <Title>Skills</Title>
          <ul>
            {mySkills.map((social: SkillsInfoProps, index: number) => (
              <li key={index}>
                <Tooltip text={social.title} image={social.img} />
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <Title>Minhas redes</Title>
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
    </>
  );
};

export default ByographContent;
