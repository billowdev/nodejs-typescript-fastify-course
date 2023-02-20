# this course base on this template https://github.com/billowdev/nodejs-ts-fastify-mvc-starter-template

## Node.js + Fastify + Sequelize + MySQL 

## mrcs = Model-Routes-Controllers-Services

## BillowDev Youtube


## [How to Install Git and using GitHub](https://youtu.be/W-jW4givkWs)
## [How to Install Node.js and VS code](https://youtu.be/R4kmFas0f38)
## [How to Install Laragon](https://youtu.be/OuJXDowtExc)


## [Node js TypeScript Fastify EP 01 Intro](https://youtu.be/mtW0EbDAZj4)

```bash
npm init -y
```

### if you want to use yarn

#### install yarn at global

```bash
npm install -g yarn
```

##### then when you want to install package by using 'yarn' package manager

###### 'npm install' === 'yarn add'

```bash
yarn add
```

###### 'npm install -D' === 'yarn add -D'

```bash
yarn add -D
```

###### 'npm run' === 'yarn'

```bash
yarn
```

### install ts-node and typescript

```bash
npm install --save-dev ts-node @types/node typescript
```
or
```bash
yarn add -D ts-node @types/node typescript
```

### create the tscofig file

```bash
npx tsc --init
```

#### tsconfig.json

```js
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */
    /* Language and Environment */
    "target": "ESNext",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

    /* Modules */
    "module": "commonjs",                                /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    "baseUrl": "./src",                                  /* Specify the base directory to resolve non-relative module names. */
    "outDir": "./dist",                                   /* Specify an output folder for all emitted files. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  },
  "include": [
    "**/*.ts"
, "src/config/db.config.ts"  ],
  "exclude": [
    "node_modules",
    "**/*.d.ts",
    "**/*.spec.ts"
  ]
}
```

### create the app

### install fastify

```bash
npm install fastify
```
or
```bash
yarn add fastify
```

### create index.ts in root folder

```bash
index.ts
```

### trying the code below for your first api

### 1. import fastify

```ts
import fastify from "fastify";
```

### 2. create the app

```ts
const app = fastify()
```

### 3. create the first endpoint or route for your api

```ts
app.get("/", async () => "SERVER");
```

### 4. add port and run app using app.listen

```ts
    const PORT = 5000
    app.listen({port:Number(PORT)}, (err) => {
        if (err) {
            console.error(err)
            process.exit(1)
        }
        console.log(`SERVE ON ${PORT}`)
    })
```

### 5. run your api type the script below in your terminal

```bash
ts-node index.ts
```

#### it should be showing the message "SERVE ON 5000"

### 6. make log it looking good by using log options 

#### 6.1 add the options for our app

```ts
const app = fastify({
	logger: true
})
```

#### 6.2 use this code below replace code from the 4.

```ts
    const PORT = 5000
	app.listen({port:Number(PORT)}, (err) => {
		if (err) {
			app.log.error(err);
			process.exit(1)
		}
		app.log.info(`SERVE ON ${PORT}`)
	})
```

##### 6.3 then your log will show like below

```bash
{"level":30,"time":1676779096246,"pid":25344,"hostname":"billo","msg":"Server listening at http://[::1]:5000"}
{"level":30,"time":1676779096248,"pid":25344,"hostname":"billo","msg":"Server listening at http://127.0.0.1:5000"}
{"level":30,"time":1676779096248,"pid":25344,"hostname":"billo","msg":"SERVE ON 5000"}
```

### 7. testing your api using thunder client

#### searching on visual studio code extensions

however you can use another solution for test your api like postman or if api you is get method you also use browser for that but i prefer using thunder client or postman or insomnia because it can use another http method such as GET POST PUT PATCH DELETE etc.

## [Node js TypeScript Fastify EP 02 Thunder client](https://youtu.be/xkUr9DC3Ny4)

### install extension

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/thunder-client.png" alt="thunder-client">

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/how-to-use-thunder-client.png" alt="how-to-use-thunder-client">


#### 8. so the first time code in index.ts file will be

```ts
import fastify from "fastify";

const app = fastify({
	logger: true
})

app.get("/", async () => "SERVER");

const PORT = 5000
app.listen({port:Number(PORT)}, (err) => {
	if (err) {
		app.log.error(err);
		process.exit(1)
	}
	app.log.info(`SERVE ON ${PORT}`)
})
```

## New directory src and controllers routes services etc following below

## [Node js TypeScript Fastify EP 03 App ](https://youtu.be/49gv58xXmGQ)

### 1.1 split logic in index.ts to src/app.ts

#### code in app.ts

```ts
import fastify, { FastifyServerOptions } from "fastify";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
	return app
}
export default App
```

##### code in index.ts

```ts
import App from "./src/app";

const app = App({
	logger: true
})
const PORT = 5000
app.listen({port:Number(PORT)}, (err) => {
	if (err) {
		app.log.error(err);
		process.exit(1)
	}
	app.log.info(`SERVE ON ${PORT}`)
})
```

## [Node js TypeScript Fastify EP 04 Routes](https://youtu.be/6TalO0VXYo8)

### 2.1 create routes in another file src/routes i will example for src/routes/article.route.ts

#### 1) new director 'routes' and create article.route.ts

```
article.route.ts
```

##### create route for articleRouter

```ts
import { FastifyInstance } from "fastify"; // import FastifyInstance

const articleRouter = async (app: FastifyInstance) => {
	// route api app.method("path", {option}, handler)
	// create .get route endpoint for article route that '/'
	// mockup data
	const article = {
		id: "1",
		name: "node.js fastify",
		desc: "going fasting with jumping course 0 to 100 ><"
	}
	app.get(
		"/",
		// function handler: RouteHandlerMethod<RawServerDefau lt, IncomingMessage, ServerResponse<IncomingMessage>, RouteGenericInterface, unknown, FastifySchema, FastifyTypeProviderDefault, FastifyBaseLogger>):
		() => {
			return {
				// mockup data
				articles: [
					article
				]
			}
		}
	);
};

export default articleRouter;
```

##### 2) create index.ts inside route for export file

```ts
import articleRouter from "./article.route";

export { articleRouter};
``` 

#### 2.2 /src/app 

##### app.ts file import article route and register the router with prefix "/api/v1/articles"

```ts
import fastify, { FastifyServerOptions } from "fastify";
import {articleRouter} from "./routes";

const App = (options: FastifyServerOptions) => {
	const app = fastify(options)
	
	app.get("/", async () => "SERVER");
	app.register(articleRouter, { prefix: "/api/v1/articles" });
	return app
}
export default App
```

#### 2.3 restart the app by cancel terminal using CTRL + C command and ts-node index.ts

#### 2.4 result api in thunder client

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/api-v1-aticles-get.png" alt="api-v1-aticles-get">


## [Node js TypeScript Fastify EP 05 Controllers](https://youtu.be/pE7Z6UaLDi0)

### 1. controllers/article.controller.ts

```ts
export const handleGetArticle = () => {
	// mockup data
	const article = {
		id: "1",
		name: "node.js fastify",
		desc: "going fasting with jumping course 0 to 100 ><"
	}
	return {
		// mockup data
		articles: [
			article
		]
	}
}
export default {
	handleGetArticle
}
```

### 2. controllers/index.ts

```ts
import articlesController from "./article.controller";
export { articlesController };

```

### 3. routes/article.route

```ts
import { FastifyInstance } from "fastify"; // import FastifyInstance
import articleController from './../controllers/article.controller';

const articleRouter = async (app: FastifyInstance) => {
	// route api app.method("path", {option}, handler)
	app.get(
		"/",
		// function handler
		articleController.handleGetArticle
	);
};

export default articleRouter;
```

## [Node js TypeScript Fastify EP 06 Services](https://youtu.be/n-4wBxZiWMQ)

### 1. services/article.service.ts

```ts
export const getArticles = () => {
	const data = {
		id: "1",
		name: "node.js fastify",
		desc: "going fasting with jumping course 0 to 100 ><"
	}

	return { response: data }
}

export default {
	getArticles
}
```

### 2. services/index.ts

```ts
import articleService from "./article.service";
export { articleService };
```

### 3. controllers/article.controller

```ts
import { articleService } from "../services";

export const handleGetArticle = () => {
	return articleService.getArticles()
}

export default {
	handleGetArticle
}
```

## [Node js TypeScript Fastify EP 07 MySQL Database](https://youtube.com/@billowdev)

### 1. install laragon following this -> [Youtube](https://youtu.be/OuJXDowtExc)

### 2. start server laragon

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep7/laragon-start.png" alt="laragon-start">

### 2. open mysql 

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep7/mysql-open.png" alt="mysql-open">

### 3. click on database

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep7/click-database.png" alt="click-database">

### 4. create database

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep7/create-database.png" alt="create-database">

### 5. node_fastify_db

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep7/node_fastify_db.png" alt="node_fastify_db">

## [Node js TypeScript Fastify EP 08 Sequelize](https://youtube.com/@billowdev)

### 1. install sequelize dotenv and mysql2
- for sequelize is orm using to interact with database that base on model that our declare
- for dotenv is package for using environment or .env file that our put variable to keep the secret thing like a username password of database
- for mysql2 is require when our use MySQL if using postgres will be pg and pg-hstore etc. for another database should back to document of that software

```bash
npm install sequelize dotenv mysql2
```
or
```
yarn add sequelize dotenv mysql2
```

### 2. env file
the username of mysql laragon by default that is root and password=""
i seperate that env for config database in difference env -> dev, prod, test

```.env
NODE_ENV=development

DB_USERNAME_DEV=root
DB_PASSWORD_DEV=""
DB_DATABASE_DEV=node_fastify_db
DB_HOST_DEV=localhost

DB_USERNAME_PROD=root
DB_PASSWORD_PROD=""
DB_DATABASE_PROD=node_fastify_db_production
DB_HOST_PROD=localhost

DB_USERNAME_TEST=root
DB_PASSWORD_TEST=""
DB_DATABASE_TEST=node_fastify_db_test
DB_HOST_TEST=localhost

DB_DIALECT=mysql

```

### 2. config file and db config file
the first of all we will import dotenv for using .env file
then we create config for create config variable that get value from .env file

```ts
import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 5000,
  database: {
    dev: {
      username: process.env.DB_USERNAME_DEV,
      password: process.env.DB_PASSWORD_DEV,
      name: process.env.DB_DATABASE_DEV,
      host: process.env.DB_HOST_DEV,
    },
    production:{
      username: process.env.DB_USERNAME_PROD,
      password: process.env.DB_PASSWORD_PROD,
      name: process.env.DB_DATABASE_PROD,
      host: process.env.DB_HOST_PROD,
    },
    test: {
      username: process.env.DB_USERNAME_TEST,
      password: process.env.DB_PASSWORD_TEST,
      name: process.env.DB_DATABASE_TEST,
      host: process.env.DB_HOST_TEST,
    },
    dialect: process.env.DB_DIALECT,
  },
};

export default config;

```

### 3. config/db.config

```ts
import config from "./config"; // this is important!

module.exports = {
  development: {
    username: config.database.dev.username,
    password: config.database.dev.password,
    database: config.database.dev.name,
    host: config.database.dev.host,
    dialect: config.database.dialect,
  },
  test: {
    username: config.database.test.username,
    password: config.database.test.password,
    database: config.database.test.name,
    host: config.database.test.host,
    dialect: config.database.dialect,
  },
  production: {
    username: config.database.production.username,
    password: config.database.production.password,
    database: config.database.production.name,
    host: config.database.production.host,
    dialect: config.database.dialect,
  },
};
```

### 4. models

#### 4.1 create the types folders

#### 4.2 types/articles/article.model.types.ts

```ts
export interface ArticleAttributes {
  id?: string;
  title?: string;
  text?: string;
  type?: string;
  UserId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
```

#### 4.3 create "models" folder

#### 4.4 models/index.ts
code below in commonly that generate by sequelize-cli as models/index.js

but for typescript i modify that get config from  "/../config/db.config.ts"

```ts
"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/db.config.ts")[env];
const db: any = {};

let sequelize: any;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".ts"
    );
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
```


#### 4.4 /models/article.model.ts
create the article.model.ts file and then models/index.ts will read this file for instance the model following that our declare
such as 

```ts
"use strict";
import * as Sequelize from "sequelize";
import { Model, UUIDV4 } from "sequelize";
import { ArticleAttributes } from "types/articles/article.model.types";

module.exports = (sequelize: any, DataTypes: any) => {
  class Article
    extends Model<ArticleAttributes>
    implements ArticleAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    title!: string;
    text!: string;
    type!: string;
    static associate(models: any) {
      // define association here

    }
  }
  Article.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING(500),
      },
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
```

#### 4.5 change index.ts of application
change of file : 
- import database and config file
- get PORT From config file
- sync database or using sequelize


```ts
import App from "./src/app";
import db from "./src/models"
import config from "./src/config/config"

const app = App({
	logger: true
})
const PORT: string | number = config.port

db.sequelize.sync().then(() => {
app.listen({port:Number(PORT)}, (err) => {
	if (err) {
		app.log.error(err);
		process.exit(1)
	}
	app.log.info(`SERVE ON ${PORT}`)
})
})
```

### 4.6 using nodemon and create the script

#### install nodemon 
#### nodemon must use in development only because it will restart the app every time when you update the code

```ts
npm install -D nodemon
```

or
```bash
yarn add -D nodemon
```

#### add this line below inside paclage.json at "scripts"

```
"dev": "nodemon index.ts"
```

#### run the applicaion using script

```bash
npm run dev
```
or
```
yarn dev
```

## [Node js TypeScript Fastify EP 09 Example Articles API](https://youtube.com/@billowdev)
in this ep will show example article api in get post put patch delete
routes -> controllers -> services (calling the model sequelize)  -> mysql database 
### content
- routes
- request types
- controllers
- services
- api result of get post put delete
  
### 1. routes
inside routes of article 
i will create for the 4 routes that calling handler function from the article controller 
```ts
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
``` 

### 2. types/article.controller.ts

```ts
import { FastifyRequest } from "fastify";
export type RequestWithIdArticle = FastifyRequest<{
	Params: { id: string };
}>;


export type UpdateArticleRequest = FastifyRequest<{
	Params: { id: string };
	Body: {
		title?: string | undefined;
		text?: string | undefined;
		type?: string | undefined;
	};
}>;

export type ArticleCreateRequest = FastifyRequest<{
	Body: {
		title?: string | undefined;
		text?: string | undefined;
		type?: string | undefined;
	};
}>;
```

### 3. controllers
in article controller i will create handle function for call service

```ts
import { ArticleCreateRequest, RequestWithIdArticle, UpdateArticleRequest } from "types/articles/article.controller.types";
import { ArticleAttributes } from "types/articles/article.model.types";
import { articleService } from "../services";


export const handleGetArticle = async () => {
	return articleService.getArticles()
}

export const handleGetArticleById = async (req: RequestWithIdArticle) => {
	const id = req.params.id;
	return articleService.getOneArticle(id)
}

export const handleCreateArticle = async (req: ArticleCreateRequest) => {
	const { title, text, type } = req.body
	return articleService.createArticle({ title, text, type })
}

export const handleUpdateArticle = async (req: UpdateArticleRequest) => {
	const { title, text, type } = req.body
	return articleService.updateArticle(req.params.id, { title, text, type })
}

export const handleDeleteArticle = async (req: RequestWithIdArticle) => {
	return articleService.deleteArticle(req.params.id)
}

export default {
	handleGetArticle,
	handleGetArticleById,
	handleCreateArticle,
	handleUpdateArticle,
	handleDeleteArticle
}
```

### 4. services
in article service i create service that call the sequelize for interact with the database

```ts
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
```

### 4. api result

#### GET Articles

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep9/get-all-article.png" alt="get-all-article">

#### GET ONE Articles

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep9/get-one-article.png" alt="get-one-article">


#### CREATE Articles

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep9/create-article.png" alt="create-article">

#### UPDATE Articles

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep9/update-article.png" alt="update-article">

#### DELETE Articles

<img src="https://raw.githubusercontent.com/billowdev/nodejs-typescript-fastify-course/main/README/images/ep9/delete-article.png" alt="delete-article">


<!-- ## [Node js TypeScript Fastify EP 010 auth middleware](https://youtube.com/@billowdev) -->


