import { useState } from "react";
import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay.jsx";
import Header from "../Header.jsx";
import { CartContext } from "../contexts.jsx";

export const Route = createRootRoute({
  component: () => {
    return <></>
  }
})