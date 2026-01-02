import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "../src/NewsAggregator";
import { MockNewsSource } from "../src/MockNewsSource";

test("NewsAggregator uses mock source", async () => {
  Container.set("NewsSource", new MockNewsSource());

  const aggregator = Container.get(NewsAggregator);
  const articles = await aggregator.getLatestArticles();

  expect(articles).toEqual(["MOCK: Test Article"]);
});
