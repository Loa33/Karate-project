Feature: List Users API Example 1
  Background:
    #podemos definir que hay una url que va a ser común entre nuestra solicitud
    #parametrizaremos la URL con la url estática
    * url "https://reqres.in/api"
    #path -> url definida anteriormente

  #etiqueta y ejemplo con YML
  @JS-CASE
  Scenario: User list of page 2
    * def utils = read('classpath:karate-utils.js')()
    * def req = utils.readTestData('test-data/List-Users-Page-200.yml')
    * print req.statusCode
    # podríamos tener con variables las páginas que se evalúan
    Given path 'users'
    And param page = req.params.pageNumber
    # ejecutando el método o llamado ->
    When method GET
    # lo que me da realmente la solicitud
    * print responseStatus
    # lo que estoy esperando de la solicitud
    * match responseStatus == req.statusCode
    * match req.responseMatch == response