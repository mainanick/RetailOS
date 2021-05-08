/**
 * Color copied as is from Atlassian Design
 * https://atlassian.design/guidelines/brand/color
 */

// https://www.colorbox.io/#steps=11#hue_start=352#hue_end=345#hue_curve=easeInQuad#sat_start=4#sat_end=90#sat_curve=easeOutQuad#sat_rate=130#lum_start=100#lum_end=53#lum_curve=easeOutQuad#lock_hex=#f64850#minor_steps_map=0
const reds = {
  500: "#B60525",
  400: "#CB0924",
  300: "#DD0D23",
  200: "#EB2534",
  100: "#F64850",
  75: "#FB6B73",
  50: "#FF969E",
};
module.exports.reds = reds;

const oranges = {
  300: "#FF5630",
  200: "#FF7452",
  100: "#FF8F73",
  75: "#FFBDAD",
  50: "#FFEBE6",
};
module.exports.oranges = oranges;

const yellows = {
  500: "#FF8B00",
  400: "#FF991F",
  300: "#FFAB00",
  200: "#FFC400",
  100: "#FFE380",
  75: "#FFF0B3",
  50: "#FFFAE6",
};
module.exports.yellows = yellows;

const greens = {
  500: "#006644",
  400: "#00875A",
  300: "#36B37E",
  200: "#57D9A3",
  100: "#79F2C0",
  75: "#ABF5D1",
  50: "#E3FCEF",
};
module.exports.greens = greens;

const teals = {
  500: "#008DA6",
  400: "#00A3BF",
  300: "#00B8D9",
  200: "#00C7E6",
  100: "#79E2F2",
  75: "#B3F5FF",
  50: "#E6FCFF",
};
module.exports.teals = teals;

const blues = {
  500: "#0747A6",
  400: "#0052CC",
  300: "#0065FF",
  200: "#2684FF",
  100: "#4C9AFF",
  75: "#B3D4FF",
  50: "#DEEBFF",
};
module.exports.blues = blues;
const purples = {
  500: "#403294",
  400: "#5243AA",
  300: "#6554C0",
  200: "#8777D9",
  100: "#998DD9",
  75: "#C0B6F2",
  50: "#EAE6FF",
};
module.exports.purples = purples;
const neutrals = {
  900: "#091E42",
  800: "#1a2b49",
  700: "#253858",
  600: "#344563",
  500: "#42526E",
  400: "#505F79",
  300: "#5E6C84",
  200: "#6B778C",
  100: "#7A869A",
  90: "#8993A4",
  80: "#97A0AF",
  70: "#A5ADBA",
  60: "#B3BAC5",
  50: "#C1C7D0",
  40: "#DFE1E6",
  30: "#EBECF0",
  20: "#F4F5F7",
  10: "#FAFBFC",
  0: "#FFFFFF",
};
module.exports.neutrals = neutrals;

const colors = {
  primary: reds[100],
  secondary: neutrals[800],
  transparent: "transparent",
  black: "#000000",
  white: "#ffffff",
  red: reds,
  orange: oranges,
  yellow: yellows,
  green: greens,
  teal: teals,
  blue: blues,
  purple: purples,
  neutral: neutrals,
};
module.exports.colors = colors;
module.exports = colors;
