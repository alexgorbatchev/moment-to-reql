import { expect } from "chai";
import * as moment from "moment-timezone";
import momentToReQL from "../src";

describe("moment-to-reql", () => {
  it("expects moment object", () => {
    expect(() => momentToReQL(<any>new Date())).to.throw(/Expecting a moment object/);
  });

  it("converts moment to ReQL", () => {
    expect(momentToReQL(moment.tz("10/10/2010 10:00", "DD/MM/YYYY hh:mm", "America/Los_Angeles"))).to.deep.equal(
      {
        $reql_type$: "TIME",
        epoch_time: 1286730000,
        timezone: "-07:00",
      }
    );
  });
});
