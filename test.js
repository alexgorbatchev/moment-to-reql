import { expect } from 'chai';
import moment from 'moment-timezone';
import momentToReQL from './index-es6';

describe('moment-to-reql', () => {
  it('expects moment object', () => {
    expect(() => momentToReQL(new Date())).to.throw(/Expecting a moment object/);
  });

  it('converts moment to ReQL', () => {
    expect(momentToReQL(moment.tz('10/10/2010 10:00', 'DD/MM/YYYY hh:mm', 'America/Los_Angeles'))).to.deep.eql(
      {
        $reql_type$: 'TIME',
        epoch_time: 1286730000,
        timezone: '-07:00',
      }
    );
  });
});
