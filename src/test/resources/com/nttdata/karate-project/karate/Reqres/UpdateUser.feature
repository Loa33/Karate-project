Feature: Update User API Example 1
  Background:
    * url urls.karateUrl

  Scenario: Update user
    * def req = read('test-data/Update-User.json')
    * def responseData = read('classpath:karate-response.js')()
    * print req.statusCode
    Given path 'users', req.id
    And request req.body
    And headers req.headers
    When method put
    * match responseStatus == req.statusCode
    * def responseMatch = responseData.updateResponse(req.responseMatch)
    * match response == responseMatch