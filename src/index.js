const express = require("express");

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
	const query = request.query;
	console.log(query);
	return response.json({
		cursos: ["CC", "EE"],
	});
});

app.post("/courses", (request, response) => {
	const body = request.body;
	console.log(body);
	return response.json({
		cursos: ["CC", "EE", "AeM"],
	});
});

app.put("/courses/:id", (request, response) => {
	const { id } = request.params;
	console.log(id);
	return response.json({
		cursos: ["Ciência da Computação", "EE", "AeM"],
	});
});

app.patch("/courses/:id", (request, response) => {
	return response.json({
		cursos: ["Ciência da Computação", "Engenharia Elétrica", "AeM"],
	});
});

app.delete("/courses/:id", (request, response) => {
	return response.json({
		cursos: ["Ciência da Computação", "Engenharia Elétrica"],
	});
});

app.listen(3333);
