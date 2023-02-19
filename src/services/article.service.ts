import { ArticleAttributes } from "types/articles/article.model.types";
import db from "../models";
const ArticleModel = db.Article

export const getArticles = async (): Promise<ArticleAttributes[]> => {
	const response = await ArticleModel.findAll();
	return response
}

export const getOneArticle = async (id: string): Promise<ArticleAttributes> => {
	const response: ArticleAttributes = await ArticleModel.findByPk(id)
	return response
}

export const createArticle = async (body: ArticleAttributes): Promise<ArticleAttributes> => {
	const response: ArticleAttributes = await ArticleModel.create(body)
	return response
}

export const updateArticle = async (id: string, body: ArticleAttributes) => {
	const response = await ArticleModel.update({ ...body }, { where: { id } })
	return response
}

export const deleteArticle = async (id: string) => {
	const response = await ArticleModel.destroy({ where: { id } });
	return response
}

export default {
	getArticles,
	getOneArticle,
	createArticle,
	updateArticle,
	deleteArticle
}