import React, { useState, useEffect } from "react";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Card1 />
      </ErrorBoundary>

      <Card2 />
    </div>
  );
};

function Card1() {
  throw new Error("Error while rendering");

  return (
    <div
      style={{
        background: "red",
        borderRadius: 20,
        padding: 20,
      }}
    >
      hi there
    </div>
  );
}

function Card2() {
  return (
    <div
      style={{
        background: "red",
        borderRadius: 20,
        padding: 20,
        margin: 20,
      }}
    >
      hello
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default App;
