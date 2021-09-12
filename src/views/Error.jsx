import React from "react";

export default function Error() {
  return (
    <div>
      <h1>
        Oops! The page you're looking for doesn't exist. Try one of these:
      </h1>
      <ul>
        <li>
          <a href="/homes">Homes</a>
        </li>
        <li>
          <a href="/lots">Lots</a>
        </li>
      </ul>
    </div>
  );
}
