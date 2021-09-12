import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import NavButton from "./NavButton";

import Routes from "../../constants/routes";

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      ModalProps={{
        keepMounted: true,
      }}
    >
      <List className="sidebar">
        {Routes.map((route) => {
          const { id, path, title } = route;
          return (
            path !== "*" && (
              <NavButton
                id={id}
                title={title}
                path={path}
                selected={window.location.pathname === path}
              />
            )
          );
        })}
      </List>
    </Drawer>
  );
}
