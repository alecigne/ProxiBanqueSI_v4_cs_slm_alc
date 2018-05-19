<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link href="${pageContext.request.contextPath}/resources/css/bootstrap.css" rel="stylesheet" />
<link href="${pageContext.request.contextPath}/resources/css/starter-template.css" rel="stylesheet"/>
<script src="${pageContext.request.contextPath}/resources/js/jquery-2.1.4.min.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/resources/js/bootstrap.min.js"></script>

</head>
<body>
 <div class="container">
	<table   class="table table-striped">

		<c:forEach var="client" items="${clients}">
			<tr scope="row">
				<td scope="col">login</td>
				<td><c:out value="${client.login}" /></td>
			</tr>
			<tr scope="row">
				<td>pass</td>
				<td><c:out value="${client.motDePasse}" /></td>
			</tr>
			<tr scope="row">
				<td>name</td>
				<td><div >
						<c:out value="${client.nom}" />
					</div></td>
			</tr>
			<tr scope="row">
				<td>firstname</td>
				<td><c:out value="${client.prenom}" /></td>
			</tr>
		</c:forEach>
	</table>
	</div>
</body>
</html>