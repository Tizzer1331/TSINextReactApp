import { CardLogic } from '../src/Functions/ApiManager'
test("Checking card logic", ()=>expect (CardLogic("KING")).toBe(13))
test("Checking card logic", ()=>expect (CardLogic("QUEEN")).toBe(12))
test("Checking card logic", ()=>expect (CardLogic("JACK")).toBe(11))
test("Checking card logic", ()=>expect (CardLogic("ACE")).toBe(1))
test("Checking card logic", ()=>expect (CardLogic("7")).toBe(7))
