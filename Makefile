DEV_ARGS ?= -f docker-compose.dev.yml
PROD_ARGS ?= -f docker-compose.yml
DOCKER_COMPOSE ?= docker-compose
RUN_ARGS ?= run --rm
STACK_VERSION ?= latest

build-compose:
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} ${DEV_ARGS} build
.PHONY: build-compose

lint:
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} ${DEV_ARGS} ${RUN_ARGS} ${RUN_AS_USER} lint
.PHONY: lint

serve:
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} ${DEV_ARGS} down
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} ${DEV_ARGS} ${RUN_ARGS} ${RUN_AS_USER} --name app --service-ports app
.PHONY: serve

prod:
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} ${PROD_ARGS} down
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} ${PROD_ARGS} ${RUN_ARGS} ${RUN_AS_USER} --name app --service-ports app
.PHONY: prod

test:
	${MAKEFILE_SUDO_COMMAND} ${DOCKER_COMPOSE} ${DEV_ARGS} ${RUN_ARGS} ${RUN_AS_USER} test
.PHONY: test
