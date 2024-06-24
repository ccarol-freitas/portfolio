import { Card } from "./styles";
import BacgroundIcon from "../../images/bg-articles.jpg";

const ArticlesContent = () => {
  const articleArray = [
    {
      title: "Card responsivo com 3 linhas de CSS",
      link: "https://medium.com/@carolfreitas101996/card-responsivo-com-3-linhas-de-css-5d14d5d301ee",
    },
    {
      title: "Princípios básicos sobre Data em Js (JavaScript)",
      link: "https://medium.com/@carolfreitas101996/princípios-básicos-sobre-data-em-js-javascript-9a875580c738",
    },
  ];

  return (
    <>
      {articleArray.map((article, index) => (
        <Card key={index}>
          <img src={BacgroundIcon} alt="" />
          <a href={article.link} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </Card>
      ))}
    </>
  );
};

export default ArticlesContent;
