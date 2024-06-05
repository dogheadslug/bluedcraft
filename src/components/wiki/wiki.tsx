import { Article } from "./article";
import { useContext } from "react";
import { IndexOfArticles } from "./indexOfArticles";
import { ListOfArticles } from "./articleList";
import { WikiContext } from "./context";

export interface IWikiContext {
  selectedArticleId: number;
}

export const Wiki = () => {
  const { selectedArticleId } = useContext(WikiContext);
  
  if (selectedArticleId === "")
    return (
      <div className="wiki-container">
        <h2>Wiki 百科</h2>
        <IndexOfArticles listOfArticles={ListOfArticles} />
      </div>
    );
  else {
    return (
      <div className="wiki-container wiki-list">
        <Article />
      </div>
    );
  }
};
