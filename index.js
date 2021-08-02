const axios = require('axios');

// Settings with default values
const g_settings = {
  dhl: {
    api_key: null,
    rate_limit: { per_second: 1, per_day: 2500 }
  },
  usps: {
    api_key: null,
    rate_limit: { per_second: 2, per_day: 5000 }
  },
  jp: {
    api_key: null,
    rate_limit: { per_second: 0.5, per_day: 10000 }
  }
};

// Change settings
function Initialize(settings) {
  if (settings) {
    const perfix = [ 'dhl', 'usps', 'jp' ];
    perfix.forEach(p => {
      if (settings[p]) {
        if (settings[p].api_key && typeof settings[p].api_key == 'string') g_settings[p].api_key = settings[p].api_key;
        if (settings[p].rate_limit) {
          if (settings[p].rate_limit.per_second && typeof settings[p].rate_limit.per_second == 'number') g_settings[p].rate_limit.per_second = settings[p].rate_limit.per_second;
          if (settings[p].rate_limit.per_day && typeof settings[p].rate_limit.per_day == 'number') g_settings[p].rate_limit.per_day = settings[p].rate_limit.per_day;
        }
      }
    });
  }
}
function GetSettings() {
  return g_settings;
}

// Track asyncrously (return promise)
async function Track(tracking_numbers) {
  const results = [];
  /*
  tracking_numbers = {
    dhl: [ 'tracking1', 'tracking2', ... ],
    usps: [ 'tracking3', 'tracking4', ... ],
    jp: [ 'tracking5', 'tracking6', ... ]
  }
  */
}

/* Tracking return format
*One list for all (dhl/usps/jp) tracking
*tracking_data sorted with earliest first
*Updates missing timestamp will get average of before and after entry
*fetch_success_flag is indication if data was aquired, or if the request failed
*If there was an error "error" will have an error message, otherwise null
[
  {
    tracking: 'tracking1',
    fetch_success_flag: true,
    tracking_data: [
      {
        status: '...',
        timestamp: 1000000000,
        location: '...'
      },
      .
      .
      .
      {
        status: '...',
        timestamp: 1000050000,
        location: '...'
      }
    ],
    error: null
  }
]

*/

module.exports = {
  Initialize,
  GetSettings,
  Track
};