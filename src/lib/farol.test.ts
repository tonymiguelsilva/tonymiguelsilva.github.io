import { describe, expect, test } from "vitest";
import { farol } from "./farol";

describe("Farol simulation constraints", () => {
  test("uses the supplied deterministic seed", () => expect(farol.simulation.seed).toBe(42));
  test("uses the supplied reference date", () => expect(farol.simulation.referenceDate).toBe("16/10/2026"));
  test("defines Falso verde below SPI 0.90", () => expect(farol.falseGreenSpiThreshold).toBe(0.90));
});
