/** @format */

import React, { useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useDispatch } from "react-redux";
import { withSize } from "react-sizeme";

import {
  revenueInActive,
  revenueOutActive,
  newCustomerActive,
  lostCustomerActive,
  newAccountActive,
  appointmentActive,
  marketingActive,
  empOversiteActive,
  emailsActive,
  callsActive,
  mapActive,
} from "../../../../redux/features/sidebarSlice";

import Widget from "./Widget";

const originalItems = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

const initialLayouts = {
  lg: [
    { i: "a", x: 0, y: 0, w: 2, h: 4 },
    { i: "b", x: 2, y: 0, w: 2, h: 4 },
    { i: "c", x: 4, y: 0, w: 4, h: 4 },
    { i: "d", x: 8, y: 0, w: 4, h: 4 },

    { i: "e", x: 0, y: 2, w: 5, h: 5 },
    { i: "f", x: 5, y: 2, w: 7, h: 5 },

    { i: "g", x: 0, y: 5, w: 3, h: 4 },
    { i: "h", x: 3, y: 5, w: 3, h: 4 },
    { i: "i", x: 6, y: 5, w: 6, h: 4 },

    { i: "j", x: 0, y: 8, w: 8, h: 4 },
    { i: "k", x: 8, y: 8, w: 4, h: 4 },
  ],
};

function Content({ size: { width } }) {
  const dispatch = useDispatch();
  const fnCall = {
    a: revenueInActive(),
    b: revenueOutActive(),
    c: newCustomerActive(),
    d: lostCustomerActive(),
    e: newAccountActive(),
    f: mapActive(),
    g: empOversiteActive(),
    h: callsActive(),
    i: appointmentActive(),
    j: marketingActive(),
    k: emailsActive(),
  };
  const [items, setItems] = useState(originalItems);
  const [layouts, setLayouts] = useState(
    getFromLS("layouts") || initialLayouts,
  );
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };
  const onLayoutSave = () => {
    saveToLS("layouts", layouts);
  };
  const onRemoveItem = (itemId) => {
    setItems(items.filter((i) => i !== itemId));
    dispatch(fnCall[itemId]);
  };
  const onAddItem = (itemId) => {
    setItems([...items, itemId]);
    dispatch(fnCall[itemId]);
  };

  return (
    <>
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={60}
        width={width}
        onLayoutChange={onLayoutChange}
      >
        {items.map((key) => (
          <div
            key={key}
            className="widget"
            data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
          >
            <Widget
              id={key}
              onRemoveItem={onRemoveItem}
              backgroundColor="#867ae9"
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
}

export default withSize({ refreshMode: "debounce", refreshRate: 60 })(Content);

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {}
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value,
      }),
    );
  }
}
