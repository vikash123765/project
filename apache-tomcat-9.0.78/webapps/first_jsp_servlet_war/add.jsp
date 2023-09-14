<%--
  Created by IntelliJ IDEA.
  User: vikas
  Date: 2023-07-22
  Time: 08:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>

<body bgcolor="#bc8f8f">
<%--we write java code inside html  --%>

<%
int i = Integer.parseInt(request.getParameter("num1"));
int j = Integer.parseInt(request.getParameter("num2"));
int k = i + j;

 out.println("output : " + k );

        %>
</body>
</html>
