Feature: List Users API Example 1
  # Ejemplo realizado con datos en JSON.
  Background:
    # Se traerá un parámetro de configuración
    * url urls.karateUrl

  #JIRA X RAY -> SE ENLAZA LA ETIQUETA CON TU TEST
  #scenario, para poder tener una estructura más definida por casos y enlazar a nuestros TAGS CON JIRAXRAY
  @CORRECT-CASE @NUMBER-JIRA-TASK
  Scenario: User list of page 2, correct scenario
    * def req = read('test-data/List-Users-Page-200.json')
    * print req.statusCode
    # * def numero = 2
    Given path '/users'
    And param page = req.params.numberPage
    # luego de agregar el parámetro y llamar el path parametrizado
    # https://reqres.in/api/users?page=2
    When method GET
    * match responseStatus == req.statusCode
    * match req.responseMatch == response