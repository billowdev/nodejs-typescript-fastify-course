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
