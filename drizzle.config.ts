import { Config } from 'drizzle-kit';

export default {
	out: './src/lib/db/migrations/',
	schema: './src/lib/db/schema.ts',
	dialect: 'turso',
	dbCredentials: {
		url: "http://127.0.0.1:8080"
	},
} satisfies Config;

