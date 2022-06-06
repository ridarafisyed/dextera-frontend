/** @format */

import React, { useEffect, useState } from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useDispatch, useSelector } from "react-redux";
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

    { i: "e", x: 0, y: 2, w: 5, h: 6 },
    { i: "f", x: 5, y: 2, w: 7, h: 6 },

    { i: "g", x: 0, y: 6, w: 3, h: 6 },
    { i: "h", x: 3, y: 6, w: 3, h: 6 },
    { i: "i", x: 6, y: 6, w: 6, h: 6 },

    { i: "j", x: 0, y: 12, w: 8, h: 5 },
    { i: "k", x: 8, y: 12, w: 4, h: 5 },
  ],
  md: [
    { i: "a", x: 0, y: 0, w: 2, h: 4 },
    { i: "b", x: 2, y: 0, w: 2, h: 4 },
    { i: "c", x: 4, y: 0, w: 4, h: 4 },
    { i: "d", x: 8, y: 0, w: 4, h: 4 },

    { i: "e", x: 0, y: 2, w: 5, h: 6 },
    { i: "f", x: 5, y: 2, w: 7, h: 6 },

    { i: "g", x: 0, y: 6, w: 3, h: 6 },
    { i: "h", x: 3, y: 6, w: 3, h: 6 },
    { i: "i", x: 6, y: 6, w: 6, h: 6 },

    { i: "j", x: 0, y: 12, w: 8, h: 5 },
    { i: "k", x: 8, y: 12, w: 4, h: 5 },
  ],
  sm: [
    { i: "a", x: 0, y: 0, w: 2, h: 4 },
    { i: "b", x: 2, y: 0, w: 2, h: 4 },
    { i: "c", x: 4, y: 0, w: 4, h: 4 },
    { i: "d", x: 8, y: 0, w: 4, h: 4 },

    { i: "e", x: 0, y: 2, w: 5, h: 6 },
    { i: "f", x: 5, y: 2, w: 7, h: 6 },

    { i: "g", x: 0, y: 6, w: 3, h: 6 },
    { i: "h", x: 3, y: 6, w: 3, h: 6 },
    { i: "i", x: 6, y: 6, w: 6, h: 6 },

    { i: "j", x: 0, y: 12, w: 8, h: 5 },
    { i: "k", x: 8, y: 12, w: 4, h: 5 },
  ],
  xs: [
    { i: "a", x: 0, y: 0, w: 2, h: 3 },
    { i: "b", x: 0, y: 4, w: 2, h: 3 },
    { i: "c", x: 0, y: 8, w: 4, h: 6 },
    { i: "d", x: 0, y: 12, w: 4, h: 6 },

    { i: "e", x: 0, y: 18, w: 5, h: 6 },
    { i: "f", x: 0, y: 24, w: 7, h: 6 },

    { i: "g", x: 0, y: 30, w: 3, h: 4 },
    { i: "h", x: 0, y: 36, w: 3, h: 4 },
    { i: "i", x: 0, y: 42, w: 6, h: 6 },

    { i: "j", x: 0, y: 48, w: 8, h: 5 },
    { i: "k", x: 0, y: 53, w: 4, h: 5 },
  ],
  xxs: [
    { i: "a", x: 0, y: 0, w: 2, h: 3 },
    { i: "b", x: 0, y: 4, w: 2, h: 3 },
    { i: "c", x: 0, y: 8, w: 4, h: 6 },
    { i: "d", x: 0, y: 12, w: 4, h: 6 },

    { i: "e", x: 0, y: 18, w: 5, h: 6 },
    { i: "f", x: 0, y: 24, w: 7, h: 6 },

    { i: "g", x: 0, y: 30, w: 3, h: 4 },
    { i: "h", x: 0, y: 36, w: 3, h: 4 },
    { i: "i", x: 0, y: 42, w: 6, h: 6 },

    { i: "j", x: 0, y: 48, w: 8, h: 5 },
    { i: "k", x: 0, y: 53, w: 4, h: 4 },
  ],
};

function Content({ size: { width } }) {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const components = {
    a: sidebar.revenueIn,
    b: sidebar.revenueOut,
    c: sidebar.newCustomer,
    d: sidebar.lostCustomer,
    e: sidebar.newAccount,
    f: sidebar.map,
    g: sidebar.empOversite,
    h: sidebar.calls,
    i: sidebar.appointment,
    j: sidebar.marketing,
    k: sidebar.emails,
  };
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
    getFromLS("layouts") || initialLayouts
  );
  const onLayoutChange = (_, allLayouts) => {
    setLayouts(allLayouts);
  };
  const onLayoutSave = () => {
    saveToLS("layouts", layouts);
  };
  const onRemoveItem = (itemId) => {
    // setItems(items.filter((i) => i !== itemId));
    dispatch(fnCall[itemId]);
  };
  const onAddItem = (itemId) => {
    setItems([...items, itemId]);
    dispatch(fnCall[itemId]);
  };
  const displayItemList = () => {
    return items.map((key) => (
      <div
        key={key}
        className="widget"
        data-grid={{ w: 3, h: 2, x: 0, y: Infinity }}
        style={components[key] ? { display: "block" } : { display: "none" }}
      >
        <Widget
          id={key}
          onRemoveItem={onRemoveItem}
          backgroundColor="#867ae9"
        />
      </div>
    ));
  };
  useEffect(() => {
    displayItemList();
  }, [sidebar]);

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
        draggableHandle={".drag"}
      >
        {displayItemList()}
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
      })
    );
  }
}
