.PHONY : startdb clear stopdb db

# stopdb : kill $$(lsof -i :8000 | grep java | gawk '{print $$2}')

# startdb: 
# 	sls dynamodb start --migrate


db: stopdb startdbmig clear

clear:
	clear
startdbmig:
	sls dynamodb start --migrate
startdb:
	sls dynamodb start
stopdb:
	kill $$(lsof -i :8000 | grep java | gawk '{print $$2}')