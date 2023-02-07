import React from "react";
import { Counter } from "./Counter";
import { rest } from 'msw'
import { fetchCount } from "./counterAPI";


export default {
  title: "Counter",
  component: Counter,
};

export const BasicUsage = () => <Counter />;

// BasicUsage.parameters = {
//   msw: {
//     handlers: [
//       rest.get('counter/fetchCount', (req, res, ctx) => {
//         async (amount: number) => {
//           const response = await fetchCount(amount);
//           // The value we return becomes the `fulfilled` action payload
//           return response.data;
//         }
//       }),
//     ]
//   },
// }