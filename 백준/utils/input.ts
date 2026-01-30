const IS_LINUX = process.platform === "linux";
const BACK_JUN_INPUT_PATH = "/dev/stdin";
const LOCAL_INPUT_PATH = "./input.txt";

const readRawInput = (inputPath = LOCAL_INPUT_PATH) =>
  require("fs")
    .readFileSync(IS_LINUX ? BACK_JUN_INPUT_PATH : inputPath)
    .toString()
    .trim();

const readLines = (inputPath = LOCAL_INPUT_PATH) => {
  const rawInput = readRawInput(inputPath);
  return rawInput.length === 0 ? [] : rawInput.split("\n");
};

/**
 * @example
 *  const input = require("fs")
 *    .readFileSync("/dev/stdin")
 *    .toString()
 *    .trim()
 *    .split("\n")
 *    .map((el) => el.split(" ").map(Number));
 */
export const oneLineStringInput = (inputPath = LOCAL_INPUT_PATH): string =>
  readRawInput(inputPath);

/**
 * @example
 *  const input = require("fs")
 *    .readFileSync("/dev/stdin")
 *    .toString()
 *    .trim();
 */
export const oneLineNumberInput = (inputPath = LOCAL_INPUT_PATH): number =>
  Number(readRawInput(inputPath));

/**
 * @example
 *  const input = require("fs")
 *    .readFileSync("/dev/stdin")
 *    .toString()
 *    .trim()
 *    .split(" ");
 */
export const oneLineStringArrayInput = (
  inputPath = LOCAL_INPUT_PATH
): string[] => readRawInput(inputPath).split(" ");

/**
 * @example
 *  const input = require("fs")
 *    .readFileSync("/dev/stdin")
 *    .toString()
 *    .trim()
 *    .split(" ")
 *    .map(Number);
 */
export const oneLineNumberArrayInput = (
  inputPath = LOCAL_INPUT_PATH
): number[] => readRawInput(inputPath).split(" ").map(Number);

/**
 * @example
 *  const input = require("fs")
 *    .readFileSync("/dev/stdin")
 *    .toString()
 *    .trim()
 *    .split("\n");
 */
export const multiLineStringInput = (inputPath = LOCAL_INPUT_PATH): string[] =>
  readLines(inputPath);

/**
 * @example
 *  const input = require("fs")
 *    .readFileSync("/dev/stdin")
 *    .toString()
 *    .trim()
 *    .split("\n")
 *    .map(Number);
 */
export const multiLineNumberInput = (inputPath = LOCAL_INPUT_PATH): number[] =>
  readLines(inputPath).map(Number);

/**
 * @example
 *  const input = require("fs")
 *    .readFileSync("/dev/stdin")
 *    .toString()
 *    .trim()
 *    .split("\n")
 *    .map((el) => el.split(" "));
 */
export const multiLineStringArrayInput = (
  inputPath = LOCAL_INPUT_PATH
): string[][] => readLines(inputPath).map((line: string) => line.split(" "));

/**
 * @example
 *  const input = require("fs")
 *    .readFileSync("/dev/stdin")
 *    .toString()
 *    .trim()
 *    .split("\n")
 *    .map((el) => el.split(" ").map(Number));
 */
export const multiLineNumberArrayInput = (
  inputPath = LOCAL_INPUT_PATH
): number[][] =>
  readLines(inputPath).map((line: string) => line.split(" ").map(Number));
