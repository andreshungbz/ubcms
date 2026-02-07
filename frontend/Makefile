TOKEN ?= example

.PHONY: schema

schema:
	@echo "$(PREFIX) Generating TypeScript schema from Directus..." 
	npx directus-sdk-typegen -u http://localhost:8055 -t $(TOKEN) -o ./lib/schema.ts