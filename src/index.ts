import * as moment from "moment";

export interface IRethinkDBRawTime {
  $reql_type$: string;
  epoch_time: number;
  timezone: string;
};

export default function momentToReQL(value: moment.Moment): IRethinkDBRawTime {
  if (!value || !(<any>value)._isAMomentObject) {
    throw new Error("Expecting a moment object");
  }

  return {
    $reql_type$: "TIME",
    epoch_time: value.valueOf() / 1000.0,
    timezone: value.format("Z"),
  };
}
