import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import "./RSSFeedSource"; // registers RSSFeedSource

async function run() {
  const aggregator = Container.get(NewsAggregator);
  await aggregator.getLatestArticles();
}

run();
