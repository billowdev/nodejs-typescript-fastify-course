import { FastifyInstance } from "fastify"; // import FastifyInstance
import articleController from './../controllers/article.controller';

const articleRouter = async (app: FastifyInstance) => {
	// route api app.method("path", {option}, handler)
	app.get(
		"/",
		articleController.handleGetArticle
	);

	app.get(
		"/get/:id",
		articleController.handleGetArticleById
	);

	app.post(
		"/create",
		articleController.handleCreateArticle
	);

	app.put(
		"/update/:id",
		articleController.handleUpdateArticle
	);
	
	app.delete(
		"/delete/:id",
		articleController.handleDeleteArticle
	);
};

export default articleRouter;