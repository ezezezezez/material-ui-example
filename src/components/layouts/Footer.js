import React, { useContext } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";
import AppContext from "../../context";

const Footer = ({ width }) => {
  const value = useContext(AppContext);

  const { category, handleCategorySelected } = value;

  const getMuscles = () => {
    return ["", ...value.muscles];
  };

  const muscles = getMuscles();

  const getIndex = () => {
    return muscles.indexOf(category);
  };

  const onIndexSelect = (e, index) => {
    handleCategorySelected(muscles[index]);
  };

  return (
    <AppBar position="static">
      <Tabs
        value={getIndex()}
        onChange={onIndexSelect}
        indicatorColor="secondary"
        textColor="secondary"
        centered={width !== "xs"}
        variant={width === "xs" ? "scrollable" : "standard"}
        scrollButtons="on"
      >
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle || "All"} />
        ))}
      </Tabs>
    </AppBar>
  );
};

export default withWidth()(Footer);
