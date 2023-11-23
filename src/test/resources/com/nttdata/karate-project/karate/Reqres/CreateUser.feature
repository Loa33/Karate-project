Feature: Create User API Example 1
  Background:
    * url urls.karateUrl

  Scenario: Create user
    * def req = read('test-data/Create-User.json')
    * def responseData = read('classpath:karate-response.js')()
    * print req.statusCode
    Given path 'users'
    And request req.body
    And headers req.headers
    When method post
    * match responseStatus == req.statusCode
    * def responseMatch = responseData.createResponse(req.responseMatch)
    * match response == responseMatch