const index = require('./index');

const testdata = require('./testdata.json')

describe('Settings test', () => {
  test('Verify default values', () => {
    expect(index.GetSettings()).toEqual(testdata.default_settings);
  });
  test('Update settings', () => {
    index.Initialize(testdata.updates);
    expect(index.GetSettings()).toEqual(testdata.updated_settings);

    index.Initialize(testdata.invalid_data);
    expect(index.GetSettings()).toEqual(testdata.updated_settings);

    index.Initialize(testdata.invalid_data_2);
    expect(index.GetSettings()).toEqual(testdata.updated_settings);

    index.Initialize(testdata.invalid_data_3);
    expect(index.GetSettings()).toEqual(testdata.updated_settings);
  });
});

// test("Tracking test", () => {
//   expect(index.GetSettings()).toEqual(testdata.default_settings);
// });