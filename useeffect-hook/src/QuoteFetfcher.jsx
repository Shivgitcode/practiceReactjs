import { useEffect, useState } from "react";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const Random_Quote_URL = "https://api.quotable.io/random";
  async function Quote() {
    const response = await fetch(Random_Quote_URL);
    const data = await response.json();
    console.log(data);
    setQuote(data);
  }
  useEffect(() => {
    Quote();
  }, []);

  return (
    <div>
      <button onClick={Quote}>Get Quote Using handler</button>
      <h1>{quote.content}</h1>
      <h2>{quote.author}</h2>
    </div>
  );
}
