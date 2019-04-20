import { generateAuralUpdate, restartGame, makeGuess } from "./actions";
import reducer from "./reducer";

describe("reducer", () => {
  it("Should restart the game", () => {
    let state = {
      guesses: [1, 5, 38, 78],
      feedback: "test",
      auralStatus: "auralTest",
      correctAnswer: 32
    };
    state = reducer(state, restartGame(30));
    expect(state).toEqual({
      guesses: [],
      feedback: "Make your guess!",
      auralStatus: "",
      correctAnswer: 30
    });
  });

  it("Should make a guess", () => {
    let state = {
      guesses: [1, 5, 38, 78],
      feedback: "test",
      correctAnswer: 32
    };
    state = reducer(state, makeGuess(25));
    expect(state).toEqual({
      guesses: [1, 5, 38, 78, 25],
      feedback: "You're Hot!",
      correctAnswer: 32
    });
  });

  it("Should generate a new aural status", () => {
    let state = {
      guesses: [1, 5, 38, 78],
      feedback: "test",
      correctAnswer: 32
    };
    state = reducer(state, generateAuralUpdate());
    expect(state).toEqual({
      guesses: [78, 38, 5, 1],
      feedback: "test",
      auralStatus:
        "Here's the status of the game right now: test You've made 4 guesses. In order of most- to least-recent, they are: 78, 38, 5, 1",
      correctAnswer: 32
    });
  });
});
