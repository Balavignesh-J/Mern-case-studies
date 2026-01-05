import React from "react";
import type { Asset } from "./PortfolioSummary";

interface AssetEditorProps {
  onUpdate: (asset: Asset) => void;
}

interface AssetEditorState {
  name: string;
  symbol: string;
  value: string;
  change: string;
}

class AssetEditor extends React.Component<AssetEditorProps, AssetEditorState> {
  state: AssetEditorState = { name: "", symbol: "", value: "", change: "" };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ [name]: value } as Pick<AssetEditorState, keyof AssetEditorState>);
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, symbol, value, change } = this.state;
    if (!name || !symbol || !value || !change) return;

    this.props.onUpdate({
      name,
      symbol,
      value: parseFloat(value),
      change: parseFloat(change),
    });

    this.setState({ name: "", symbol: "", value: "", change: "" });
  };

  render() {
    const { name, symbol, value, change } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="name" value={name} onChange={this.handleChange} placeholder="Name" />
        <input name="symbol" value={symbol} onChange={this.handleChange} placeholder="Symbol" />
        <input name="value" value={value} onChange={this.handleChange} type="number" placeholder="Value" />
        <input name="change" value={change} onChange={this.handleChange} type="number" placeholder="Change %" />
        <button type="submit">Update Asset</button>
      </form>
    );
  }
}

export default AssetEditor;