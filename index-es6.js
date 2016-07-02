export default function momentToReQL(value) {
  if (!value || !value._isAMomentObject) {
    throw new Error('Expecting a moment object');
  }

  return {
    $reql_type$: 'TIME',
    epoch_time: value.valueOf() / 1000.0,
    timezone: value.format('Z'),
  };
}
