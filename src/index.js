const express = require("express");

const app = express();

app.get("/courses", (request, response) => {
	return response.json({
		cursos: ["CC", "EE"],
	});
});

app.post("/courses", (request, response) => {
	return response.json({
		cursos: ["CC", "EE", "AeM"],
	});
});

app.put("/courses/:id", (request, response) => {
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
