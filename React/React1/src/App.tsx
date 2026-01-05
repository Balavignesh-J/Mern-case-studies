import React, { useState } from "react";
import PortfolioSummary from "./Components/PortfolioSummary";
import type { Asset } from "./Components/PortfolioSummary";
import AssetEditor from "./Components/AssetEditor";

const App: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleUpdate = (asset: Asset) => {
    setAssets(prev => {
      const exists = prev.find(a => a.symbol === asset.symbol);
      if (exists) {
        return prev.map(a => (a.symbol === asset.symbol ? asset : a));
      } else {
        return [...prev, asset];
      }
    });
  };

  return (
    <div>
      <h2>My Portfolio</h2>
      <AssetEditor onUpdate={handleUpdate} />
      <PortfolioSummary assets={assets} />
      <ul>
        {assets.map(a => (
          <li key={a.symbol}>
            {a.name} ({a.symbol}): ${a.value} ({a.change > 0 ? "+" : ""}{a.change}%)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
