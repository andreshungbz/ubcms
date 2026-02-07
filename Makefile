COMPOSE = docker compose
DB_SERVICE = database
DB_NAME = directus
DB_USER = directus
BACKUP_DIR = backend/database
BACKUP_FILE = $(BACKUP_DIR)/ubcms.sql
PREFIX = [MAKE]

.PHONY: up db down backup reset-db status

up:
	$(COMPOSE) up

down:
	$(COMPOSE) down

status:
	$(COMPOSE) ps

db:
	$(COMPOSE) up directus

backup:
	@mkdir -p $(BACKUP_DIR)
	@echo "$(PREFIX) Starting database service only..."
	@$(COMPOSE) up -d $(DB_SERVICE)
	@echo "$(PREFIX) Waiting for database to be ready..."
	@until $(COMPOSE) exec -T $(DB_SERVICE) pg_isready -U $(DB_USER) > /dev/null 2>&1; do \
		sleep 1; \
	done
	@echo "$(PREFIX) Backing up database to $(BACKUP_FILE)..."
	@$(COMPOSE) exec -T $(DB_SERVICE) \
		pg_dump -U $(DB_USER) -d $(DB_NAME) \
		> $(BACKUP_FILE)
	@echo "$(PREFIX) Backup written to $(BACKUP_FILE)"

reset-db:
	@echo "$(PREFIX) Resetting database volume..."
	@$(COMPOSE) down
	@docker volume rm ubcms-directus-data || true

	@echo "$(PREFIX) Starting database service only..."
	@$(COMPOSE) up -d $(DB_SERVICE) --build

	@echo "$(PREFIX) Waiting for database to be ready..."
	@until $(COMPOSE) exec -T $(DB_SERVICE) pg_isready -U $(DB_USER) > /dev/null 2>&1; do \
		sleep 1; \
	done

	@echo "$(PREFIX) Restoring database from $(BACKUP_FILE)..."
	@cat $(BACKUP_FILE) | $(COMPOSE) exec -T $(DB_SERVICE) \
		psql -U $(DB_USER) -d $(DB_NAME)

	@echo "$(PREFIX) Shutting down database service..."
	@$(COMPOSE) down

	@echo "$(PREFIX) Database reset and restored successfully."
