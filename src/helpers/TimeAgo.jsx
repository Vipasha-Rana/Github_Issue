import React from "react";
import { calcTimeAgo } from "../utils/TimeConversion";

export function TimeAgo({ time }) {
  return <p>{calcTimeAgo(time)}</p>;
}
