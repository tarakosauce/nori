import timezoneRow from 'timezones.json';

export const zone = timezoneRow.flatMap((el) => {
    return el.utc.map((u) => {
      return {
        name: u,
        offset: el.offset,
        isdst: el.isdst
      }
    })
  })
  