import { NewsSource } from "./NewsSource";

export class MockNewsSource implements NewsSource {
  async fetchArticles(): Promise<string[]> {
    return ["MOCK: Test Article"];
  }
}
