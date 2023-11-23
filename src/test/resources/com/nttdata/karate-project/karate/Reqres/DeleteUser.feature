Feature: Delete User API Example
  Background:
    * url urls.karateUrl

  Scenario: Delete user
    * def req = read('test-data/Delete-User.json')
    * print req.statusCode
    Given path 'users', req.id
    When method delete
    * match responseStatus == req.statusCode