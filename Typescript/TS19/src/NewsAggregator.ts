import { Service, Inject } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class NewsAggregator {
  constructor(
    @Inject("NewsSource") private source: NewsSource
  ) {}

  async getLatestArticles(): Promise<string[]> {
    const articles = await this.source.fetchArticles();
    articles.forEach(a => console.log(a));
    return articles;
  }
}
