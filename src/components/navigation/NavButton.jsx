import React from "react";
import ListItem from "@material-ui/core/ListItem";

export default function NavButton({ id, title, path, selected }) {
  return (
    <a href={path}>
      <ListItem button key={id} selected={selected}>
        {title}
      </ListItem>
    </a>
  );
}
