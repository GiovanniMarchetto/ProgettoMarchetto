<!DOCTYPE html>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <link href='//fonts.googleapis.com/css?family=Marmelad' rel='stylesheet' type='text/css'>
  <title>Hello App Engine Standard Java 8</title>
</head>
<body>
    <h1>Hello App Engine -- Java 8!</h1>
  <table>
    <tr>
      <td colspan="2" style="font-weight:bold;">Available Servlets:</td>
    </tr>
    <tr>
      <td><a href='${pageContext.request.contextPath}/index.html'>Applicazione</a></td>
    </tr>
    <tr>
      <td><a href='${pageContext.request.contextPath}/_ah/admin'>Datastore per l'admin</a></td>
    </tr>
  </table>


</body>
</html>
