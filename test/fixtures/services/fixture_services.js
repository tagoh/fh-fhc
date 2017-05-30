
var nock = require('nock');

var serviceFixtures = require('./fixture_service');
var dataSourceFixtures = require('../appforms/fixture_data_source');
var mockService = serviceFixtures.get();
var mockDataSource = dataSourceFixtures.get();


module.exports = nock('https://apps.feedhenry.com')
  .put('/box/api/connectors/2a')
  .reply(200, mockService)
  .get('/box/api/connectors/2a')
  .reply(200, mockService)
  .get('/box/api/connectors/1a')
  .reply(200, mockService)
  .get('/box/api/connectors/' + mockService.guid)
  .reply(200, mockService)
  .get('/api/v2/services/' + mockService.apps[0].guid + '/data_sources')
  .reply(200, [mockDataSource])
  .delete('/box/api/connectors/' + mockService.guid)
  .reply(200, mockService);

