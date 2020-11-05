## Claudia common commands
`export AWS_PROFILE=claudia`
`claudia --help`
`claudia update`
`claudia destroy`

```
claudia create \
    --region eu-central-1 \
    --api-module api
```

## Npm common commands

## Curl comman commands
```
curl -i \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"pizzaId":1,"address":"221B Baker Street"}' \
  https://n0p0lj7khe.execute-api.eu-central-1.amazonaws.com/latest/orders

curl -i \
  -H "Content-Type: application/json" \
  -X PUT \
  -d '{"pizzaId":2,"address":"221 Baker Street"}' \
  https://n0p0lj7khe.execute-api.eu-central-1.amazonaws.com/latest/orders/1

curl -i \
  -H "Content-Type: application/json" \
  -X DELETE \
  https://n0p0lj7khe.execute-api.eu-central-1.amazonaws.com/latest/orders/1
```

## Aws commands
```
aws dynamodb create-table --table-name pizza-orders \
  --attribute-definitions AttributeName=orderId,AttributeType=S \
  --key-schema AttributeName=orderId,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
  --region eu-central-1 \
  --query TableDescription.TableArn --output text

=> arn:aws:dynamodb:eu-central-1:827726978788:table/pizza-orders
```
