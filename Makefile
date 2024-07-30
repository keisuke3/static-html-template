RED=\033[0;31m
GREEN=\033[0;32m
YELLOW=\033[1;33m
NC=\033[0m

init:
	@make check-corepack
	@make check-pnpm
	@make setup
	@make install
	@make lefthook-install
	@make dev

.PHONY: check-corepack check-pnpm setup install lefthook-install dev

check-corepack:
	@echo "Checking if corepack is installed..."
	@if ! command -v corepack &> /dev/null; then \
		echo "$(YELLOW)Corepack is not installed.$(NC)"; \
		read -p "Would you like to install corepack now using volta? (y/n): " choice; \
		case $$choice in \
			[yY][eE][sS]|[yY]) \
				echo "Installing corepack..."; \
				volta install corepack; \
				if [ $$? -eq 0 ]; then \
					echo "$(GREEN)Corepack has been successfully installed.$(NC)"; \
				else \
					echo "$(RED)Failed to install corepack. Please try again.$(NC)"; \
				fi; \
				;; \
			[nN][oO]|[nN]) \
				echo "$(YELLOW)Corepack installation was skipped.$(NC)"; \
				;; \
			*) \
				echo "$(RED)Invalid choice. Corepack installation was skipped.$(NC)"; \
				;; \
		esac; \
	else \
		COREPACK_VERSION=$$(corepack --version); \
		echo "$(GREEN)Corepack is already installed. Version: $$COREPACK_VERSION$(NC)"; \
	fi

check-pnpm:
	@echo "Checking if pnpm is installed..."
	@if ! command -v pnpm &> /dev/null; then \
		echo "$(YELLOW)pnpm is not installed.$(NC)"; \
		read -p "Would you like to install pnpm now? (y/n): " choice; \
		case $$choice in \
			[yY][eE][sS]|[yY]) \
				echo "Installing pnpm..."; \
				npm install -g pnpm; \
				if [ $$? -eq 0 ]; then \
					echo "$(GREEN)pnpm has been successfully installed.$(NC)"; \
				else \
					echo "$(RED)Failed to install pnpm. Please try again.$(NC)"; \
				fi; \
				;; \
			[nN][oO]|[nN]) \
				echo "$(YELLOW)pnpm installation was skipped.$(NC)"; \
				;; \
			*) \
				echo "$(RED)Invalid choice. pnpm installation was skipped.$(NC)"; \
				;; \
		esac; \
	else \
		PNPM_VERSION=$$(pnpm --version); \
		echo "$(GREEN)pnpm is already installed. Version: $$PNPM_VERSION$(NC)"; \
	fi

setup:
	$(shell ./scripts/setup.sh)

install:
	pnpm install

lefthook-install:
	pnpm run lefthook

dev:
	pnpm run dev